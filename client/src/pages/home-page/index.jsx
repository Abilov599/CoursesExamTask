import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/getAllCources";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const productsData = useSelector((state) => state.getAllCources);

  const [data, setData] = useState([]);

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSort = () => {};

  return (
    <main id="home-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
      </Helmet>
      <section id="header-bottom">
        <div className="huge-text">
          <h1>
            Get your <span>Education</span> today!
          </h1>
        </div>
      </section>
      <section className="courses container">
        <div>
          <h1>Popular Courses</h1>
          <div>
            <input type="text" name="" id="" />
            <button onClick={handleSort}>Sort</button>
          </div>
        </div>
        <div className="cards-row">
          {productsData.data?.map((el) => {
            return (
              <div key={el._id} className="card">
                <Link to={`/courses/${el._id}`}>
                  <div>
                    <img src={`${el.courseImage}`} alt="" />{" "}
                  </div>
                  <h2>{el.courseName}</h2>
                  <p>{el.courseDescription}</p>
                  <div>
                    <span>{`${el.courseAuthor},Author`}</span>
                    <span>{`$${el.coursePrice}`}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="course-search">
        <div>
          <div className="left">
            <div className="left-content">
              <h1>
                Register now and get a discount <span>50%</span> discount until
                1 January
              </h1>
              <p>
                In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
                vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
                finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante
                nisl fermentum nulla, vitae tempo.
              </p>
              <div>
                <a href="#">register now</a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-content">
              <h1>Search for your course</h1>
              <form action="">
                <input placeholder="Name" type="text" name="" id="" />
                <input placeholder="Category" type="text" name="" id="" />
                <input placeholder="Degree" type="text" name="" id="" />
                <button type="submit">SEARCH COURSE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
