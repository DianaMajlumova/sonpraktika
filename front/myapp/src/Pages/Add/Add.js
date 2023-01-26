import React from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./Add.scss";
function Add() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Formik
        initialValues={{ categories: "", name: "", price: "" }}
        validationSchema={Yup.object({
          categories: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          axios.post("http://localhost:7007/cards", values);
        }}
      >
        <Form>
          <label htmlFor="categories">Categories</label>
          <Field name="categories" type="text" />
          <ErrorMessage name="categories" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default Add;
