import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Posts = () => {
   


 
    const[api, setApi] = useState([])
    const fetchData = async () => {
        try {
          const response = await axios.get("https://node-react-blog-app.herokuapp.com/api/home");
          return response.data;
        } catch (error) {}
      };
      useEffect(() => {
        const apiFetch = async () => {
            setApi(await fetchData());
        };
        apiFetch();
      }, [api]);
      


  return (
    <>
      {api.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
        return pagename === "Bollywood" && homecard1 === "home1" ? (
          <Link className="link" to={`/bollywood/${title}`}>
            <div key={id} className="posts">
              <div className="post-img">
                <img className="img1" src={imgsrc} alt="" />
              </div>
              <p className="post-heading">{title}</p>
              <div className="post-content-box">
                <p className="post-content">{about.slice(0,170)}...</p>
                
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
                <img className="img1" src={imgsrc} alt="" />
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
                <img className="img1" src={imgsrc} alt="" />
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
                <img className="img1" src={imgsrc} alt="" />
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
                <img className="img1" src={imgsrc} alt="" />
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
    </>
  );
};

export default Posts;

