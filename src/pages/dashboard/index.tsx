import { getCourseData } from "../../apis";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

import { Carousel } from "flowbite-react";

import Img1 from "../../assets/c1.jpg";
import Img2 from "../../assets/c2.jpg";
import Img3 from "../../assets/c3.jpg";
import Img4 from "../../assets/c4.jpg";

const CarouselImg = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
  {
    id: 4,
    img: Img4,
  },
];

const marqueeData = [
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
  "sale",
];

const mycourse = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "snowflake",
  },
  {
    id: 3,
    title: "docker",
  },
];

const newCourse = [
  {
    id: 1,
    title: "Ukulele",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Angular ",
    img: "https://picsum.photos/200/160",
  },
  {
    id: 3,
    title: "Vue",
    img: "https://picsum.photos/100/130",
  },
  {
    id: 4,
    title: "fastapi",
    img: "https://picsum.photos/150/380",
  },
  {
    id: 5,
    title: "flask",
    img: "https://picsum.photos/200/290",
  },
  {
    id: 6,
    title: "Python",
    img: "https://picsum.photos/200/180",
  },
  {
    id: 7,
    title: "javascript",
    img: "https://picsum.photos/200/400",
  },
  {
    id: 8,
    title: "typescript",
    img: "https://picsum.photos/200/399",
  },
];

const index = () => {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await getCourseData();

    console.log(data, "sss");
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-2 h-screen ">
        <div className=" h-2/6 border border-cyan-600 w-full">
          {/* <Carousel />
           */}

          <Carousel slideInterval={3000}>
            <img src={Img1} className="h-full " />
            <img src={Img2} className="h-full " />
            <img src={Img3} className="h-full " />
            <img src={Img4} className="h-full " />

            {/* {CarouselImg.map((item) => {
              return <img src={item.img} className="h-full " />;
            })} */}
          </Carousel>
        </div>
        <div className="flex self-center h-2/8 w-4/5  ">
          <div className="flex justify-center  items-center flex-col gap-2 w-1/5 ">
            <p className="text-2xl  font-bold">Your courses</p>
          </div>
          <div className="flex h-48 gap-2 w-4/5">
            {mycourse.map((item) => (
              <div className="flex w-1/3 flex-col justify-around items-center border border-red-600 ">
                <p className="text-xl font-bold">{item.title}</p>
                <button className="">go to course</button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-20 flex justify-between">
          {marqueeData.map((item) => (
            <Marquee>
              <span className="text-xl text-cyan-500">{item}</span>
            </Marquee>
          ))}
        </div>

        <div className="flex flex-col  h-4/8 p-2 w-full">
          <div className="flex justify-center items-center h-1/2 mb-2">
            <p className="text-2xl font-bold">Courses</p>
          </div>
          <div className="flex justify-center items-center h-full ">
            <div className="flex justify-evenly flex-wrap gap-2 w-3/4 ">
              {newCourse.map((item) => (
                <div className="flex h-40 flex-col w-1/5">
                  <div
                    className="flex h-40  flex-col justify-around items-center p-2 "
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="flex justify-around border border-b-4">
                    <p className="text-l font-poppins">
                      {item.title.toUpperCase()}
                    </p>
                    <button className="text-bla-100">Go to course</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
