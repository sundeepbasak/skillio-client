import Textfield from "../../form/components/textfield/index";
import Button from "../../form/components/button/Button";
import logo from "../../assets/7642543-removebg-preview.png";
import google from "../../assets/Google.png";
import { useFormik } from "formik";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";

const index = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2 bg-green-300 rounded-lg" src={logo} />
          Skillio
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight  tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="flex flex-col gap-3">
                <Textfield
                  placeholder="enter your  email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <Textfield
                  placeholder="enter your password"
                  type="password"
                  id="first name"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required={true}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-cyan-50 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <Button name={"sign in"} />{" "}
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
              Don’t have an account yet?{" "}
              <a
                href="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
