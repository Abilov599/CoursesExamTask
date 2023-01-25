import axios from "axios";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./index.scss"
import { Helmet } from "react-helmet";

const AddPage = () => {
  const addCourseSchema = Yup.object().shape({
    courseName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    courseDescription: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    coursePrice: Yup.number().required("Required"),
    courseAuthor: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    courseImage: Yup.string().min(2, "Too Short!").required("Required"),
  });

  return (
    <main id="add-course">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Course</title>
      </Helmet>
      <div className="form-div">
        <h1>AddCourse</h1>
        <Formik
          initialValues={{
            courseName: "",
            courseDescription: "",
            coursePrice: "",
            courseAuthor: "",
            courseImage: "",
          }}
          validationSchema={addCourseSchema}
          onSubmit={(values) => {
            // same shape as initial values
            axios.post("http://localhost:3000/courses/", values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field placeholder="Course Name" name="courseName" />

              {errors.courseName && touched.courseName ? (
                <div>{errors.courseName}</div>
              ) : null}
              <Field placeholder="Description" name="courseDescription" />

              {errors.courseDescription && touched.courseDescription ? (
                <div>{errors.courseDescription}</div>
              ) : null}
              <Field placeholder="Price" name="coursePrice" type="number" />

              {errors.coursePrice && touched.coursePrice ? (
                <div>{errors.coursePrice}</div>
              ) : null}
              <Field placeholder="Author" name="courseAuthor" />

              {errors.courseAuthor && touched.courseAuthor ? (
                <div>{errors.courseAuthor}</div>
              ) : null}
              <Field placeholder="Image Url" name="courseImage" />

              {errors.courseImage && touched.courseImage ? (
                <div>{errors.courseImage}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default AddPage;
