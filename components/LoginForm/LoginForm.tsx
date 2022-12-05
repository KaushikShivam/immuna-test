import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import Button from "../Button/Button";
import { useLocalForageAsync } from "../../hooks/useLocalForage";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [responses, setResponses] = useLocalForageAsync<{ address: string }>(
    "address"
  );
  const { push } = useRouter();

  return (
    <div className="loginForm">
      <div className="loginForm__title">
        <h1 className="heading-one">Welcome to Immuna!</h1>
        <h2 className="heading-two">Connect your wallet</h2>
      </div>
      <Formik
        initialValues={{
          address: responses && responses.address ? responses.address : "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { setFieldError }) => {
          if (!values.address)
            setFieldError("address", "Address cannot be empty");
          await setResponses({ address: values.address });
          push("/dashboard");
        }}
      >
        <Form>
          <div className="input__label">
            <Image
              src="/icons/etherium.svg"
              width="11"
              height="13"
              alt="Etherium logo"
            />
            <label htmlFor="address">Ethereum</label>
          </div>
          <Field
            className="input"
            type="text"
            name="address"
            id="address"
            placeholder="Enter wallet address"
            // required
          />
          <div className="input__error">
            <ErrorMessage name="address" />
          </div>
          <Button>Connect to Wallet</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
