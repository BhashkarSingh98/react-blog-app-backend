import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Storycard = () => {
  const[api, setApi] = useState([])
  const fetchData = async () => {
      try {
        const response = await axios.get("https://node-react-blog-app.herokuapp.com/api/home");
        console.log(response);
        return response.data;
      } catch (error) {}
    };
    useEffect(() => {
      const apiFetch = async () => {
          setApi(await fetchData());
      };
      apiFetch();
    }, []);
  return (
    <>
      {api.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Bollywood" && homecard4 === "home4" ? (
          <Link className="link" to={`/bollywood/${title}`}>
            <div key={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {api.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Technology" && homecard4 === "home4" ? (
          <Link className="link" to={`/technology/${title}`}>
            <div key={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}{" "}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {api.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Fitness" && homecard4 === "home4" ? (
          <Link className="link" to={`/fitness/${title}`}>
            <div key={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}{" "}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {api.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Food" && homecard4 === "home4" ? (
          <Link className="link" to={`/food/${title}`}>
            <div key={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {api.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Tourism" && homecard4 === "home4" ? (
          <Link className="link" to={`/tourism/${title}`}>
            <div key={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}{" "}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default Storycard;

// import React from "react";

// const Storycard = (props) => {
//   return (
//     <>
//       <div className="top-story">
//         <div className="top-story-img">
//           <img className="top-story-img1" src={imgsrc} alt="" />
//         </div>
//         <p className="top-story-heading">{title}</p>
//         <div className="top-story-content-box">
//           <p className="top-story-content">{about}</p>
//         </div>
//         <div className="top-story-navigation-date">
//           <span className="top-story-navigation-1">{pagename} </span>{" "}
//           <span className="top-story-navigation-2">{date}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Storycard;
