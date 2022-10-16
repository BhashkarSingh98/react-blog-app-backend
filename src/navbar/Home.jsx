import React from "react";
import Homecomponent from "./Homecomponent/Homecomponent";
import "./Homecomponent/Post.css";
import "./Homecomponent/toparticle/Toparticle.css";
import "./Homecomponent/letestarticle/Article.css";
import "./Homecomponent/advertistement/Advertistement.css";
import "./Homecomponent/story/Story.css"
import "./hamburger/Burger.css";
import Posts from "./Homecomponent/Posts";
import Articlecard from "./Homecomponent/letestarticle/Articlecard";
import Toparticle from "./Homecomponent/toparticle/Toparticlecard";
import Advertistement from "./Homecomponent/advertistement/Advertistement";
import Storycard from "./Homecomponent/story/Storycard";
const Home = () => {
  return (
    <>
      <div className="homesection1">
        <Homecomponent />

        {/* latest post */}
        <div className="the-lesest">
          <h1>The Latest</h1>
          <div className="underline-1"></div>
        </div>

        <div className="post1-box">
          <Posts />
        </div>

        {/* latest  Article */}
        <div className="the-lesest">
          <h1>Latest Article</h1>
          <div className="underline-1"></div>
        </div>
        <div className="article-box">
          <div className="article-box-1">
            <Articlecard />
          </div>

          {/* top  Article */}
          <div className="article-box-2">
            <div className="top-the-lesest">
              <h1>Top Article</h1>
              <div className="top-underline-1"></div>
            </div>

            <Toparticle />

            <Advertistement />
          </div>
        </div>

        {/* latest stories */}

        <div className="stories">
          <div className="the-lesest">
            <h1>Latest Stories</h1>
            <div className="underline-1"></div>
          </div>

          <div className="story-box">
            <Storycard />
          </div>
        </div>
      </div>
      {/* <div className="burger-box">
        <Burger />
      </div> */}
    </>
  );
};

export default Home;
