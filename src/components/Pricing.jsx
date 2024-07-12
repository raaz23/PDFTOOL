import { useState } from "react";
import { plans } from "../constants";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <section className="px-14 text-gray-600 body-font overflow-hidden bg-white" id="pricing">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl lg:text-6xl font-medium title-font mb-2 text-gray-900">CHoose The Right <span className="bg-gradient-to-r from-red-400 to-red-800 text-transparent bg-clip-text"> Plan For You</span></h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mt-6">
            All prices are here including free version 
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button 
              className={`py-1 px-4 ${monthly ? "bg-indigo-500 text-white" : "text-indigo-500"} focus:outline-none`} 
              onClick={() => setMonthly(true)}
            >
            Monthly
            </button>
            <button 
              className={`py-1 px-4 ${!monthly ? "bg-indigo-500 text-white" : "text-indigo-500"} focus:outline-none`} 
              onClick={() => setMonthly(false)}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div key={idx} className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 hover:shadow-2xl hover:transition-all">
              <div>
                <span className="text-indigo-500 font-medium">{item.name}</span>
                {item.type && (
                  <span className="w-32 text-center absolute right-2 top-1 sm:text-lg md:text-xl rounded-lg bg-indigo-500 text-white">
                    {item.type}
                  </span>
                )}
                <div className="mt-4 text-gray-800 text-3xl font-semibold">
                  ${monthly?item.mPrice:item.yPrice} <span className="text-xl text-gray-600 font-normal">{monthly?"/mo":"/yr"}</span>
                </div>
              </div>
              <ul className="py-8 space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
