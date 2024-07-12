import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className=" mt-20 md:mt-32 px-4 md:px-12 lg:px-20 relative  border-b border-neutral-800 min-h-[600px] bg-white">
      <div className="text-center">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 underline underline-offset-2">FEATURES</h2>
        <h2 className="text-3xl font-medium title-font text-gray-900 lg:text-6xl mt-3  tracking-wide">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text font-medium title-font text-gray-900">
          Your PDF
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 border-2 border-red-700 text-indigo-500 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-4 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-8 md:mb-12 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
