import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import ButtonStyles from "../styles/css/buttons.module.css";

export default function Contact() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Layout title="Contact">
      <form
        data-aos-once="true"
        data-aos="fade-up"
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-75 m-auto my-5 "
      >
        <input
          className="my-1 p-2 fs-6 "
          type="text"
          placeholder="First name"
          {...register("FirstName", { required: true, maxLength: 80 })}
        />
        <p className="text-danger">
          {errors.FirstName?.type === "required" && "First name is required"}
        </p>
        <input
          className="my-1 p-2 fs-6 "
          type="text"
          placeholder="Last name"
          {...register("LastName", { required: true, maxLength: 100 })}
        />
        <p className="text-danger">
          {errors.LastName?.type === "required" && "Last name is required"}
        </p>
        <input
          className="my-1 p-2 fs-6 "
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <p className="text-danger">
          {errors.Email?.type === "required" && "Email is required"}
        </p>
        <input
          className="my-1 p-2 fs-6 "
          type="text"
          placeholder="Subject"
          {...register("Subject", { required: true })}
        />
        <p className="text-danger">
          {errors.Subject?.type === "required" && "Subject is required"}
        </p>
        <textarea
          className="m-1 p-2 fs-6 "
          placeholder="type here ..."
          {...register("Message", { required: false })}
        ></textarea>
        <input type="submit" className={`${ButtonStyles.button} m-1 my-2`} />
      </form>
    </Layout>
  );
}
