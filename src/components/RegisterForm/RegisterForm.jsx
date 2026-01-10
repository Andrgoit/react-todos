import { Link } from "react-router";
import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Filled_Warning from "@/assets/icons/Icon_Filled_Error.svg?react";
// import errorIcon from "@/assets/icons/Error.png";

export default function RegisterForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState(false);
  // const errorCounts = Object.keys(errors).length;

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "This field cannot be empty";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)) {
      errors.login = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "This field cannot be empty";
    } else if (values.name.length < 3) {
      errors.name = "Must be 3 characters or more";
    }
    if (!values.password) {
      errors.password = "This field cannot be empty";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "This field cannot be empty";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Wrong confirm password";
    }
    setErrors(errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validate,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handlerClickShowPassword = (id) => {
    if (id === "password") {
      return setIsShowPassword(!isShowPassword);
    }
    if (id === "confirmPassword") {
      return setIsShowConfirmPassword(!isShowConfirmPassword);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm"
    >
      <p className="text-xl">Sign up</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-4"
      >
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="login"
              name="login"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.login}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.login ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.login && formik.errors.login ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="login"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Email <span className="text-red-600">*</span>
            </label>
          </div>
          {formik.touched.login && formik.errors.login ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.login}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.name ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.name && formik.errors.name ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Name <span className="text-red-600">*</span>
            </label>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`w-full ${formik.values.password ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} rounded-lg border border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.password && formik.errors.password ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <div
              className="absolute right-3 top-1/2 translate-y-[-50%]"
              onClick={() => handlerClickShowPassword("password")}
            >
              {isShowPassword ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <p className="text-xs text-[#2C2C2D]">
          Create a strong password that is at least 8 characters long, includes
          upper-case, lower-case letters, at least 1 digit and 1 special
          character.
        </p>
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={isShowConfirmPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className={`w-full ${formik.values.confirmPassword ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} rounded-lg border border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Confirm password <span className="text-red-600">*</span>
            </label>
            <div
              className="absolute right-3 top-1/2 translate-y-[-50%]"
              onClick={() => handlerClickShowPassword("confirmPassword")}
            >
              {isShowConfirmPassword ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </div>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center gap-1 font-semibold">
        <p>Already have an account? </p>
        <Link to="/login" className="cursor-pointer text-[#0066CC]">
          Login
        </Link>
      </div>
    </motion.div>
  );
}
