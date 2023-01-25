import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();

  const [data, setData] = useState(null);

  const getCourseById = async () => {
    let res = await axios(`http://localhost:3000/courses/${id}`);
    return setData(res.data);
  };

  useEffect(() => {
    getCourseById();
  }, []);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details Page</title>
      </Helmet>
      <section id="details">
        <div className="left">
          <img src={`${data?.courseImage}`} alt="" />
        </div>
        <div className="right">
          
        </div>
      </section>
    </main>
  );
};

export default Details;
