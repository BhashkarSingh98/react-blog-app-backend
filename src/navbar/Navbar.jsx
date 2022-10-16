import React,{Suspense} from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
//import Bollywood from './Bollywood';
import Technology from './Technology';
import Tourismm from './Tourism';
import Fitness from './Fitness';
import Food from './Food';
import Mainnavbar from './Mainnavbar';
import Fullcard from '../getfullcard/Fullcard';
import Data from '../data/Data';


const Bollywood=React.lazy(()=>import('./Bollywood'))
const Navbar = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
       
        <Route path='/' element={<Mainnavbar/>}>
        <Route  index element={<Home/>} />


        <Route path='/bollywood' element={
          <Suspense fallback={<h3>loading plzz wait...</h3>}>

            <Bollywood/>
          </Suspense>
        }/>


        <Route path='/technology' element={<Technology/>}/>
        <Route path='/tourism' element={<Tourismm/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/tourism/:title' element={<Fullcard Data={Data}/>}  />
        <Route path='/bollywood/:title' element={<Fullcard Data={Data}/>}  />
        <Route path='/food/:title' element={<Fullcard Data={Data}/>}  />
        <Route path='/fitness/:title' element={<Fullcard Data={Data}/>}  /> 
        <Route path='/technology/:title' element={<Fullcard Data={Data}/>}  /> 
        <Route path='/home/:title' element={<Fullcard Data={Data}/>}  /> 
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Navbar