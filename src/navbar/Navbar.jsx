import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
//import Bollywood from './Bollywood';
import Technology from "./Technology";
import Tourismm from "./Tourism";
import Fitness from "./Fitness";
import Food from "./Food";
import Mainnavbar from "./Mainnavbar";
import Fullcard from "../getfullcard/Fullcard";

const Bollywood = React.lazy(() => import("./Bollywood"));
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainnavbar />}>
            <Route index element={<Home />} />

            <Route
              path="/bollywood"
              element={
                <Suspense fallback={<h4>loading plzz wait...</h4>}>
                  <Bollywood />
                </Suspense>
              }
            />

            <Route path="/technology" element={<Technology />} />
            <Route path="/tourism" element={<Tourismm />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/tourism/:title" element={<Fullcard  />} />
            <Route
              path="/bollywood/:title"
              element={<Fullcard  />}
            />
            <Route path="/food/:title" element={<Fullcard  />} />
            <Route path="/fitness/:title" element={<Fullcard  />} />
            <Route
              path="/technology/:title"
              element={<Fullcard  />}
            />
            <Route path="/home/:title" element={<Fullcard  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
