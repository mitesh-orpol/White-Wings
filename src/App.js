import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/white/Home";
import Product from "./components/product/Product";

import UPVC from "./components/wingsproduct/upvc/UPVC";
import Sliding from "./components/wingsproduct/upvc/Sliding";
import Casement from "./components/wingsproduct/upvc/Casement";
import Folding from "./components/wingsproduct/upvc/Folding";

import Aluminium from "./components/wingsproduct/aluminium/Aluminium";
import SlidingAlu from "./components/wingsproduct/aluminium/SlidingAlu";
import CasementAlu from "./components/wingsproduct/aluminium/CasementAlu";
import FoldDoor from "./components/wingsproduct/aluminium/FoldDoor";
import Ultra from "./components/wingsproduct/aluminium/Ultra";
import WindowS146LM from "./components/wingsproduct/aluminium/WindowS146LM";
import WindowSC140 from "./components/wingsproduct/aluminium/WindowSC140";
import WindowSC140NI from "./components/wingsproduct/aluminium/WindowSC140NI";
import WindowS115 from "./components/wingsproduct/aluminium/WindowS115";
import WindowSC95 from "./components/wingsproduct/aluminium/WindowSC95";
import WindowSC95TT from "./components/wingsproduct/aluminium/WindowSC95TT";
import WindowSC45 from "./components/wingsproduct/aluminium/WindowSC45";
import WindowSC40 from "./components/wingsproduct/aluminium/WindowSC40";
import Window40N from "./components/wingsproduct/aluminium/Window40N";
import Window45DS from "./components/wingsproduct/aluminium/Window45DS";
import Window56LW from "./components/wingsproduct/aluminium/Window56LW";
import WindowB60 from "./components/wingsproduct/aluminium/WindowB60";
import Window67IW from "./components/wingsproduct/aluminium/Window67IW";
import WindowB70 from "./components/wingsproduct/aluminium/WindowB70";
import Door45V from "./components/wingsproduct/aluminium/Door45V";
import DoorBSF70 from "./components/wingsproduct/aluminium/DoorBSF70";

import Door from "./components/product/Door";
import DoorAlu from "./components/product/DoorAlu";
import ProductDetail from "./components/product/ProductDetail";
import Twinsash from "./components/product/Twinsash";
import Vertical from "./components/product/Vertical";
import Tilt from "./components/product/Tilt";
import TwinsashAlu from "./components/product/TwinsashAlu";
import VerticalAlu from "./components/product/VerticalAlu";
import TitlsAlu from "./components/product/TitlsAlu";
import CasementDoor from "./components/product/CasementDoor";
import SlidingDoor from "./components/product/SlidingDoor";
import LiftDoor from "./components/product/LiftDoor";
import TiltDoor from "./components/product/TiltDoor";

// import Blog from "./components/blog/Blog";
import UpvcCasementDoor from "./components/product/UpvcCasementDoor";
import UpvcFoldSliderDoor from "./components/product/UpvcFoldSliderDoor";
import UpvcSliderDoor from "./components/product/UpvcSliderDoor";
import UpvcLiftSlideDoor from "./components/product/UpvcLiftSlideDoor";
import UpvcTiltSlideDoor from "./components/product/UpvcTiltSlideDoor";
import DoorB60 from "./components/product/DoorB60";
import DoorB70 from "./components/product/DoorB70";
import DoorSC40 from "./components/product/DoorSC40";
import DoorSC45 from "./components/product/DoorSC45";
import DoorSC95 from "./components/product/DoorSC95";
import DoorSC95TT from "./components/product/DoorSC95TT";
import DoorS115 from "./components/product/DoorS115";
import DoorSC140 from "./components/product/DoorSC140";
import DoorSC140NI from "./components/product/DoorSC140NI";
import DoorS146LM from "./components/product/DoorS146LM";
import Door40N from "./components/product/Door40N";
import Door67IW from "./components/product/Door67IW";
import Door56IW from "./components/product/Door56IW";
import Door45DS from "./components/product/Door45DS";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<Product />} />
      
      <Route path="UPVC" element={<UPVC />} />
      <Route path="UPVC/sliding" element={<Sliding />} />
      <Route path="UPVC/casement" element={<Casement />} />
      <Route path="UPVC/folding" element={<Folding />} />

      <Route path="aluminium" element={<Aluminium />} />
      <Route path="aluminium/slidingalu" element={<SlidingAlu />} />
      <Route path="aluminium/casementalu" element={<CasementAlu />} />
      <Route path="aluminium/foldDoor" element={<FoldDoor />} />
      <Route path="aluminium/Ultra" element={<Ultra />} />
      <Route path="aluminium/slidingalu/windowSC40" element={<WindowSC40 />} />
      <Route path="aluminium/slidingalu/windowSC45" element={<WindowSC45 />} />
      <Route path="aluminium/slidingalu/windowSC95TT" element={<WindowSC95TT />} />
      <Route path="aluminium/slidingalu/windowSC95" element={<WindowSC95 />} />
      <Route path="aluminium/slidingalu/windowS115" element={<WindowS115 />} />
      <Route path="aluminium/slidingalu/windowSC140NI" element={<WindowSC140NI />} />
      <Route path="aluminium/slidingalu/windowSC140" element={<WindowSC140 />} />
      <Route path="aluminium/slidingalu/windowS146LM" element={<WindowS146LM />} />
      <Route path="aluminium/casementalu/40n" element={<Window40N />} />
      <Route path="aluminium/casementalu/45ds" element={<Window45DS />} />
      <Route path="aluminium/casementalu/56lw" element={<Window56LW />} />
      <Route path="aluminium/casementalu/b60" element={<WindowB60 />} />
      <Route path="aluminium/casementalu/67iw" element={<Window67IW />} />
      <Route path="aluminium/casementalu/b70" element={<WindowB70 />} />
      <Route path="aluminium/foldDoor/door45v" element={<Door45V />} />
      <Route path="aluminium/foldDoor/doorbsf70" element={<DoorBSF70 />} />

      {/* <Route path="blog" element={<Blog />} /> */}
      <Route path="details" element={<ProductDetail />} />
      <Route path="twinsash" element={<Twinsash />} />
      <Route path="vertical" element={<Vertical />} />
      <Route path="tilt" element={<Tilt />} />
      <Route path="twinsashalu" element={<TwinsashAlu />} />
      <Route path="verticalalu" element={<VerticalAlu />} />
      <Route path="tiltalu" element={<TitlsAlu />} />
      <Route path="door" element={<Door />} />
      <Route path="UpvccasementDoor" element={<UpvcCasementDoor />} />
      <Route path="UpvcfoldDoor" element={<UpvcFoldSliderDoor />} />
      <Route path="UpvcslidingDoor" element={<UpvcSliderDoor />} />
      <Route path="UpvcliftDoor" element={<UpvcLiftSlideDoor />} />
      <Route path="UpvctiltDoor" element={<UpvcTiltSlideDoor />} />
      <Route path="dooralu" element={<DoorAlu />} />
      <Route path="casementDoor" element={<CasementDoor />} />
      <Route path="slidingDoor" element={<SlidingDoor />} />
      <Route path="liftDoor" element={<LiftDoor />} />
      <Route path="tiltDoor" element={<TiltDoor />} />

      <Route path="doorb60" element={<DoorB60 />} />
      <Route path="doorb70" element={<DoorB70 />} />
      <Route path="sc40" element={<DoorSC40 />} />
      <Route path="sc45" element={<DoorSC45 />} />
      <Route path="sc95" element={<DoorSC95 />} />
      <Route path="sc95tt" element={<DoorSC95TT />} />
      <Route path="s115" element={<DoorS115 />} />
      <Route path="sc140" element={<DoorSC140 />} />
      <Route path="sc140ni" element={<DoorSC140NI />} />
      <Route path="s146lm" element={<DoorS146LM />} />
      <Route path="door40N" element={<Door40N />} />
      <Route path="door67iw" element={<Door67IW />} />
      <Route path="door56iw" element={<Door56IW />} />
      <Route path="door45ds" element={<Door45DS />} />
    </Routes>
  );
}

export default App;
