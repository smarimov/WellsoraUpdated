import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { Icon } from "@/components/Icon";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-Purple-main lg:bg-white">
      <div className="relative flex items-center justify-center flex-1 p-5">
        <div className="max-w-[400px] w-full max-h-[186px] h-full absolute top-12 lg:hidden ">
          <img src="../assets/wellsora-bg.png" style={{ objectFit: "cover" }} />
        </div>
        <Login />
      </div>
      <div className="items-center justify-center flex-1 hidden p-5 lg:flex bg-Purple-main ">
        <div className="max-w-[600px] w-full max-h-[186px] h-full flex justify-center items-center">
          {/* <img src="../assets/wellsora-bg.png" style={{ objectFit: "cover" }} /> */}
          <h1 className="font-extrabold text-[72px] text-white text-center">
            Wellsora Health
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

const Register = () => {
  return (
    <div className="max-w-[460px] mx-auto text-center">
      <p className="mb-4 text-5xl font-bold text-white lg:text-black">
        Sign Up
      </p>
      <p className="text-xl font-medium  mb-4 text-white lg:text-[#5A5365]">
        Join Welsora Health to manage care
      </p>
      <div className="flex flex-col gap-3 ">
        <Input placeholder="Full Name" className="w-full" />
        <Input placeholder="Email" className="w-full" />
        <Input placeholder="Password" className="w-full" />
        <Input placeholder="Re-enter Password" className="w-full" />
        <Button variant="outline" className="lg:text-white lg:bg-Purple-main">
          Get Started
        </Button>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white lg:text-[#5A5365]">
            Already have an account? Login
          </span>
          <span className="text-sm text-white lg:text-[#5A5365]">
            By continuing, you agree to our{" "}
            <span className="text-white underline lg:text-Purple-main">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-white underline lg:text-Purple-main">
              Privacy Policy
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("wellsora_token")) {
      navigate("/");
    }
  }, []);

  // const handleLogin = async (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   e.preventDefault();

  //   try {
  //     // Make POST request to the login API
  //     const response = await axios.post(
  //       "https://auth-service-dot-wellsora-app.uc.r.appspot.com/auth/login",
  //       {
  //         email: "john.doe@example.com",
  //         password: "StrongPassword123",
  //       }
  //     );

  //     console.log("Protected Data:", response.data);
  //     const { token, expiresIn } = response.data;
  //     console.log(typeof expiresIn, expiresIn);

  //     // Calculate cookie expiry in milliseconds
  //     const cookieExpiry = expiresIn / (24 * 60 * 60);

  //     // Set the token in the cookie
  //     Cookies.set("wellsora_token", token, {
  //       secure: false,
  //       expires: cookieExpiry, // Token expiration time in milliseconds
  //     });

  //     console.log("Cookie set successfully, Logged in successfully:");

  //     // Redirect to Dashboard after successful login
  //     navigate("/");
  //   } catch (error) {
  //     // Handle network or other errors
  //     // setError("An error occurred. Please try again later.");
  //   }
  // };
  
  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Reset field errors
    setFieldErrors({ email: "", password: "" });
    let errors: { email?: string; password?: string } = {};

    if (!email) errors.email = "Required field, please fill it in";
    if (!password) errors.password = "Required field, please fill it in";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors as { email: string; password: string });
      return;
    }

    try {
      // Make POST request to the login API
      const response = await axios.post("https://auth-service-dot-wellsora-app.uc.r.appspot.com/auth/login", {
        email: email,
        password: password,
      });

      // console.log("Protected Data:", response.data);
      const { token, expiresIn } = response.data;
      console.log(typeof expiresIn, expiresIn);

      // Calculate cookie expiry in milliseconds
      const cookieExpiry = expiresIn / (24 * 60 * 60);

      // Set the token in the cookie
      Cookies.set("wellsora_token", token, {
        // secure: false,
        expires: cookieExpiry, // Token expiration time in milliseconds
      });

      console.log("Cookie set successfully, Logged in successfully:");

      // Redirect to Dashboard after successful login
      navigate("/");
    } catch (error) {
      // Handle network or other errors
      setError("Invalid email or password");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="max-w-[460px] mx-auto text-center">
      {error && (
        <p className="text-xl font-medium  mb-4 text-red-600 lg:text-red-600">
          {error}
        </p>
      )}
      <p className="mb-4 text-5xl font-bold text-white lg:text-black">
        Welcome
      </p>
      <p className="text-xl font-medium  mb-4 text-white lg:text-[#5A5365]">
        Login to your account
      </p>
      <div className="flex flex-col gap-3 ">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-2 border ${
            fieldErrors.email ? "border-red-500" : "border-gray-200"
          } rounded mt-1`}
        />
        {fieldErrors.email && (
          <p className="text-red-500 text-sm">{fieldErrors.email}</p>
        )}
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full p-2 border ${
            fieldErrors.password ? "border-red-500" : "border-gray-200"
          } rounded mt-1`}
        />
        {fieldErrors.password && (
          <p className="text-red-500 text-sm">{fieldErrors.password}</p>
        )}
        <Button
          variant="outline"
          className="lg:text-white lg:bg-Purple-main"
          onClick={handleLogin}
        >
          Login
        </Button>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white lg:text-Purple-main">
            Not have an account? Signup
          </span>
          <div className="flex items-center justify-center gap-3 my-4">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#1778F2"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                // style="color: rgb(23, 120, 242);"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="45"
                width="45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"></path>
                <path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"></path>
              </svg>
            </div>
          </div>
          <span className="text-sm text-white lg:text-[#5A5365]">
            By continuing, you agree to our{" "}
            <a
              href="https://storage.googleapis.com/wellsora-cdn/assets/terms-conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline lg:text-Purple-main"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="https://storage.googleapis.com/wellsora-cdn/assets/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline lg:text-Purple-main"
            >
              Privacy Policy
            </a>{" "}
          </span>
          <span className="text-sm text-white lg:text-[#5A5365]">
            Your data is secure with us. We're HIPAA complaint and use
            industry-leading encryption
          </span>
        </div>
      </div>
    </div>
  );
};
