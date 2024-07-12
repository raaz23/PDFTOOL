import { Tv } from "lucide-react";
import Button from "../constants/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="#">
      <h1 className=" text-neutral-600 bg-clip-text text-2xl lg:text-5xl text-center tracking-wide">
      Simplify Your PDF Tasks with Our 
        <span className="">
          {" "}
          All-in-One Tool Suite
        </span>
      </h1>
      <p className="px-3 mt-10 text-sm lg:text-lg text-center text-neutral-500 max-w-4xl">
      Every tool you need to use PDFs, at your fingertips. <br /> All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
      </p>
      <div className="flex justify-center my-10 ">
        <Button label={"Get Start"} link={"#"}/>
        <Button label={"Try For Free"} link={"#"}/>
      </div>
      <div className="flex flex-col mt-3 lg:mt-10 justify-center px-2">
        <video
          autoPlay
          loop
          muted
          controls
          className="rounded-lg w-full border border-red-700 shadow-sm shadow-red-400"
        >
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="text-center mt-4 font-bold flex justify-center gap-4 underline underline-offset-8"> <Tv/> demo video</h3>
      </div>
    </div>
  );
};

export default HeroSection;
