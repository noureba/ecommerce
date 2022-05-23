import React, { useState } from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ButtonStyles from "../styles/css/buttons.module.css";

function Checkout() {
  const [state, setState] = useState({ count: 0 });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setState(data);
  };

  return (
    <Layout title="chekout">
      <div>
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
            placeholder="Address"
            {...register("Address", { required: true })}
          />
          <p className="text-danger">
            {errors.Subject?.type === "required" && "Address is required"}
          </p>
          <p>Payment Methods:</p>
          <div className="d-flex flex-row align-items-center my-2">
            <input
              className="fs-6 "
              type="radio"
              checked={true}
              value="paypal"
              id="paypal"
              {...register("Paypal", { required: true })}
            />
            <label className="mx-2" htmlFor="paypal">
              Paypal
            </label>
          </div>
          <input
            type="submit"
            value="Place Order"
            className={`${ButtonStyles.button} m-1 my-2`}
          />
        </form>
      </div>
      {state.count == 0 ? (
        ""
      ) : (
        <div className="border p-3 ">
          <p className="fw-bold">Order details</p>
          <p>First Name: {state.FirstName}</p>
          <p>Last Name: {state.LastName}</p>
          <p>Email: {state.Email}</p>
          <p>Address: {state.Address}</p>
          <p>Payment Methods: Paypal</p>

          <PayPalScriptProvider
            deferLoading={true}
            options={{
              "client-id":
                "AYrUYtPIZX1vDQOi39Wh7Lg0QkQyARVuZVIJ_kQxgzrYmHNJ5LwQS-Gthh-33HYaI9RVrrdCVDk0JEw3",
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "1.99",
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      )}
    </Layout>
  );
}

export default Checkout;
