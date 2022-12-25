import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Fullcard = () => {
  const { title } = useParams();
  const[api, setApi] = useState([])

  //using axios
  useEffect(()=>{
    axios.get("https://sore-lime-abalone-gear.cyclic.app/api/data")
    .then((res)=>
    setApi(res.data)
    )
  },[])

  //// using fetch

  
  // const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://node-react-blog-app.herokuapp.com/api/home");
  //       return response.data;
  //     } catch (error) {}
  //   };
  //   useEffect(() => {
  //     const apiFetch = async () => {
  //         setApi(await fetchData());
  //     };
  //     apiFetch();
  //   }, []);


  return (
    <div className="fullcard-container">
      <div className="fullcard-box1">
        {api
          .filter((elem) => elem.title === title)
          .map((elem, index) => {
            //const { id, imgsrc, title, about, date } = elem;
            return (
              <div key={index} className="fullcard-main-box">
                <div className="fullcard" key={elem.id}>
                  <div className="fullcard-img-box-1">
                    <img
                      className="fullcard-img1"
                      src={`.${elem.imgsrc}`}
                      alt="error"
                    />
                  </div>
                  <div className="fullcard-img-box-2">
                    <p className="fullcard-heading">{elem.title}</p>

                    <div className="fullcard-content-box">
                      <p className="fullcard-content">{elem.about}</p>
                    </div>
                    <div className="fullcard-navigation-date">
                      <span className="fullcard-navigation-1">
                        {elem.pagename}{" "}
                      </span>
                      <span className="fullcard-navigation-2">{elem.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="gitcardposts">
        {api.map((elem) => {
          const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
          return pagename === "Bollywood" && homecard1 === "home1" ? (
            <Link className="link" to={`/bollywood/${title}`}>
              <div key={id} className="posts">
                <div className="post-img">
                  <img className="img1" src={`.${imgsrc}`} alt="" />
                </div>
                <p className="post-heading">{title}</p>
                <div className="post-content-box">
                  <p className="post-content">{about}</p>
                </div>
                <div className="navigation-date">
                  <span className="navigation-1">{pagename} </span>
                  <span className="navigation-2">{date}</span>
                </div>
              </div>
            </Link>
          ) : null;
        })}
        {api.map((elem) => {
          const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
          return pagename === "Technology" && homecard1 === "home1" ? (
            <Link className="link" to={`/technology/${title}`}>
              <div key={id} className="posts">
                <div className="post-img">
                  <img className="img1" src={`.${imgsrc}`} alt="" />
                </div>
                <p className="post-heading">{title}</p>
                <div className="post-content-box">
                  <p className="post-content">{about}</p>
                </div>
                <div className="navigation-date">
                  <span className="navigation-1">{pagename} </span>{" "}
                  <span className="navigation-2">{date}</span>
                </div>
              </div>
            </Link>
          ) : null;
        })}
        {api.map((elem) => {
          const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
          return pagename === "Fitness" && homecard1 === "home1" ? (
            <Link className="link" to={`/fitness/${title}`}>
              <div key={id} className="posts">
                <div className="post-img">
                  <img className="img1" src={`.${imgsrc}`} alt="" />
                </div>
                <p className="post-heading">{title}</p>
                <div className="post-content-box">
                  <p className="post-content">{about}</p>
                </div>
                <div className="navigation-date">
                  <span className="navigation-1">{pagename} </span>{" "}
                  <span className="navigation-2">{date}</span>
                </div>
              </div>
            </Link>
          ) : null;
        })}
        {api.map((elem) => {
          const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
          return pagename === "Food" && homecard1 === "home1" ? (
            <Link className="link" to={`/food/${title}`}>
              <div key={id} className="posts">
                <div className="post-img">
                  <img className="img1" src={`.${imgsrc}`} alt="" />
                </div>
                <p className="post-heading">{title}</p>
                <div className="post-content-box">
                  <p className="post-content">{about}</p>
                </div>
                <div className="navigation-date">
                  <span className="navigation-1">{pagename} </span>{" "}
                  <span className="navigation-2">{date}</span>
                </div>
              </div>
            </Link>
          ) : null;
        })}
        {api.map((elem) => {
          const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
          return pagename === "Tourism" && homecard1 === "home1" ? (
            <Link className="link" to={`/tourism/${title}`}>
              <div key={id} className="posts">
                <div className="post-img">
                  <img className="img1" src={`.${imgsrc}`} alt="" />
                </div>
                <p className="post-heading">{title}</p>
                <div className="post-content-box">
                  <p className="post-content">{about}</p>
                </div>
                <div className="navigation-date">
                  <span className="navigation-1">{pagename} </span>{" "}
                  <span className="navigation-2">{date}</span>
                </div>
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Fullcard;
