import { useFormik } from "formik";
import Textfield from "../../form/components/textfield/index";
import Button from "../../form/components/button/Button";
import google from "../../assets/Google.png";
import logo from "../../assets/7642543-removebg-preview.png";
import bgImg from "../../assets/background-g59455cae5_1280 (1).jpg";
import axios from "axios";
// import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { redirect } from "react-router";
import { useNavigate } from "react-router";

// import Label from "../../form/components/label/index";

interface SignupProps {
  access_token: string;
  authuser: string;
  expires_in: 3599;
  prompt: string;
  scope: string;
  token_type: string;
}

const signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(
          "http://192.168.29.151:6001/auth/google-login",
          {
            googleAccessToken: tokenResponse.access_token,
          }
        );

        console.log({ res: res.data });
        if (res.status === 200) {
          localStorage.setItem("token", res.data);
          console.log(res.status);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900"
      style={{
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col w-full">
            <a
              href="#"
              className="flex justify-center  mb-6  text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2 bg-green-300 rounded-lg"
                src={logo}
              />
              Skillio
            </a>
            <div className="w-full p-8  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:bg-gray-800  dark:border-gray-700">
              {/* <div className="p-6 w-full space-y-4 border border-green-600 md:space-y-6 sm:p-8"> */}

              <div className=" w-full p-6 space-y-4 md:space-y-4 sm:p-8">
                <h1 className="text-xl font-bold mb-4 leading-tight  tracking-tight text-gray-900 md:text-xl dark:text-white">
                  Enroll to Skillio and start skilling up.
                </h1>
                <form
                  onSubmit={formik.handleSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1  w-full">
                      {/* <Label name={"first name"} /> */}
                      <Textfield
                        placeholder="enter your  full name"
                        type="text"
                        id="full name"
                        name="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      {/* <Label name={"email"} /> */}
                      <Textfield
                        placeholder="enter your  email"
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      {/* <Label name={"password"} /> */}
                      <Textfield
                        placeholder="enter your password"
                        type="password"
                        id="first name"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      {/* <Label name={"confirm password"} /> */}
                      <Textfield
                        placeholder="re-enter  password"
                        type="password"
                        id="first name"
                        name="confirm password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                      />
                    </div>
                    {/* <GoogleLogin onSuccess={handleLogin} onError={onFailure} /> */}
                    <Button name={"signup"} />
                  </div>
                </form>
                <div className="flex justify-center items-center p-4 ">
                  <div className="h-0.5 w-40 bg-gray-600 "></div>
                  <span className="p-2 text-cyan-50">or</span>
                  <div className="h-0.5 w-40 bg-gray-600 "></div>
                </div>
                <div
                  className="pl-2 pr-2 pt-4  flex w-full rounded-md border border-gray-400 align-middle justify-around"
                  onClick={() => {
                    login();
                  }}
                >
                  <div className=" border-cyan-100 border-spacing-0 flex items-center mb-3.5 text-sm font-semibold text-gray-900 dark:text-white">
                    <img className=" w-7 h-6 mr-2 rounded-lg" src={google} />{" "}
                    Continue with Google
                  </div>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
