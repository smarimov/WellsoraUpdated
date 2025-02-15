import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import { FormWrapper } from "@/components/Form/FormWrapper";
import { Icon } from "@/components/Icon";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Loading } from "@/components/Loading";
type TUserForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmField: string;
  telephone: string;
};

const Register = ({ loginMode }: { loginMode: VoidFunction }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const registerForm = useForm<TUserForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmField: "",
      telephone: "",
    },
  });

  const { control, reset, watch } = registerForm;

  const onSubmit = async (data: TUserForm) => {
    const finalData: Omit<TUserForm, "confirmField"> = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      telephone: data.telephone,
    };

    try {
      // Make POST request to the register API
      setIsLoading(true);
      const response = await axios.post(
        "https://auth-service-dot-wellsora-app.uc.r.appspot.com/auth/signup",
        finalData
      );

      // const { token, expiresIn } = response.data;

      // // Calculate cookie expiry in days
      // const cookieExpiry = expiresIn / (24 * 60 * 60);
      // // Set the token in the cookie
      // Cookies.set("wellsora_token", token, {
      //   expires: cookieExpiry, // Token expiration time in days
      // });

      // console.log("Cookie set successfully, Registered successfully!");
      navigate("/auth/login");
      loginMode();

      reset(); // Reset the form after successful submission
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>; // ✅ Typecast error correctly

      if (axiosError.response && axiosError.response.data?.message) {
        setError(axiosError.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[460px] mx-auto text-center">
      <div className="relative">
        {error && (
          <div className="absolute w-full text-red-700 bg-red-100 rounded p-4 top-[-50px]">
            <span className="block sm:inline">{error}</span>
            <Button
              variant="outline"
              color="error"
              onClick={() => setError(null)}
              className="absolute bg-transparent border-none top-2 right-2 hover:border hover:bg-transparent hover:border-red-700"
            >
              ✖
            </Button>
          </div>
        )}
      </div>

      <p className="mb-4 text-5xl font-bold text-white lg:text-black">
        Sign Up
      </p>
      <p className="text-xl font-medium mb-4 text-white lg:text-[#5A5365]">
        Join Welsora Health to manage care
      </p>
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <Loading text="Creating your account..." className="mb-3" />
            <p className="text-sm text-gray-500">
              Please wait while we process your registration.
            </p>
          </div>
        ) : (
          <FormWrapper methods={registerForm} onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              <Input.Form
                placeholder="First name"
                className="w-full"
                name="firstName"
                control={control}
                required
              />
              <Input.Form
                placeholder="Last name"
                className="w-full"
                name="lastName"
                control={control}
                required
              />
              <Input.Form
                placeholder="Email"
                control={control}
                name="email"
                className="w-full"
                required
                rules={{
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
              />
              <Input.Form
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                control={control}
                rightSection={
                  <Icon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? "EyeOff" : "View"}
                    className="cursor-pointer"
                  />
                }
                name="password"
                className="w-full"
                required
              />
              <Input.Form
                control={control}
                type={showPassword ? "text" : "password"}
                name="confirmField"
                placeholder="Re-enter Password"
                className="w-full"
                required
                validate={(value) => {
                  const password = watch("password"); // Watch the password field
                  return value === password || "Passwords do not match";
                }}
                rightSection={
                  <Icon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? "EyeOff" : "View"}
                    className="cursor-pointer"
                  />
                }
              />
              <Input.Form
                control={control}
                name="telephone"
                placeholder="Phone number"
                className="w-full"
                required
              />
              <Button
                variant="outline"
                type="submit"
                className="lg:text-white lg:bg-Purple-main"
              >
                Get Started
              </Button>
            </div>
          </FormWrapper>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white lg:text-[#5A5365]">
            Already have an account?
            <span
              className="cursor-pointer hover:text-purple-500 "
              onClick={loginMode}
            >
              {" "}
              Login
            </span>
          </span>

          <span className="text-sm text-white lg:text-[#5A5365]">
            By continuing, you agree to our{" "}
            <a
              href="https://storage.googleapis.com/wellsora-cdn/assets/terms-conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="terms-link"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="https://storage.googleapis.com/wellsora-cdn/assets/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="terms-link"
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
