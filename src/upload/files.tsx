import { useState } from "react";
import { UploadFileQueue } from "./helpFunc";

const files = () => {
  const [file, setFile] = useState([] as any);

  const uploadFile = (e: any) => {
    setFile((prev: any) => [...prev, e.target.files]);
  };

  const Udata = file[0] && Object.keys(file[0]);

  // console.log(file);

  // console.log(file[0] && Object.keys(file[0]), "file");
  return (
    <>
      <div className="flex flex-col items-center justify-center h-96 ">
        <p>UPLOAD VIDEOS</p>
        <div className="w-full  h-20 flex items-center justify-center">
          <input
            type="file"
            multiple
            onChange={(e) => uploadFile(e)}
            className="border-b-orange-600"
          />
        </div>
        <button
          onClick={() => {
            UploadFileQueue(file[0]);
          }}
          className="bg-cyan-500 p-2 rounded-md"
        >
          upload
        </button>

        <div className=" w-full flex-col h-20 border border-red-700 flex items-center justify-between">
          {Udata &&
            Udata.map((item: any) => {
              return (
                <>
                  <p>{item}</p>
                  <p>{file[0][item].name}</p>
                </>
              );
            })}
        </div>
        <p>{file && file.length}</p>
      </div>
    </>
  );
};

export default files;
