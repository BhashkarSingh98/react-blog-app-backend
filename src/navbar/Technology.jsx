import React from "react";
import Advertistement from "./Homecomponent/advertistement/Advertistement";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

const Technology = () => {
  const[api, setApi] = useState([])

  //using axios
  useEffect(()=>{
    axios.get("https://node-react-blog-app.herokuapp.com/api/home")
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
    <>
      <div className="main-food-page">
        {/*Hollywood */}
        <div className="the-lesest">
          <h1>Technology</h1>
          <div className="underline-1"></div>
        </div>
        <div className="article-box">
          <div className="article-box-1">
            {api.map((elem) => {
              const { id, imgsrc, title, about, pagename, date } = elem;
              return pagename === "Technology" ? (
                <Link className="link" to={`/technology/${title}`}>
                <div className="article-main-box">
                  <hr />

                  <div className="artile" key={id}>
                    <div className="artile-img-box-1">
                      <img className="article-img1" src={imgsrc} alt="" />
                    </div>
                    <div className="artile-img-box-2">
                      <p className="artile-heading">{title}</p>
                      <div className="artile-content-box">
                        <p className="artile-content">{about}</p>
                      </div>
                      <div className="artile-navigation-date">
                        <span className="artile-navigation-1">{pagename} </span>{" "}
                        <span className="artile-navigation-2">{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              ) : null;
            })}
          </div>

          {/* top  Article */}
          <div className="article-box-2">
            <div className="top-the-lesest">
              <h1>Top Article</h1>
              <div className="top-underline-1"></div>
            </div>
            {api.map((elem) => {
              const { id, imgsrc, title,  pagename, date,toparticle  } =
                elem;
              return pagename === "Technology"&& toparticle==="toptechnology" ? (
                <Link className="link" to={`/technology/${title}`}>
                <div className="top-article-main-box" key={id} >
                  <div className="top-artile">
                    <div className="top-artile-img-box-1">
                      <img className="top-article-img1" src={imgsrc} alt="" />
                    </div>
                    <div className="top-artile-img-box-2">
                      <p className="top-artile-heading">{title}</p>
                      <div className="top-artile-navigation-date">
                        <span className="top-artile-navigation-1">
                          {pagename}
                        </span>
                        <span className="top-artile-navigation-2">{date}</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                </Link>
              ) : null;
            })}
            <Advertistement />
          </div>
        </div>
      </div>
    </>
  );
  
};


export default Technology