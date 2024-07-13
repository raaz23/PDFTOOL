import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className=" mt-20 md:mt-32 px-4 relative min-h-[600px] bg-white">
      <div className="text-center pt-20">
      <h2 className="text-xs text-indigo tracking-widest font-medium title-font mb-1">FEATURES</h2>
        <h2 className="text-3xl font-medium title-font text-gray-900 lg:text-5xl tracking-wide">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text font-medium title-font text-gray-900">
          Your PDF
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-12 lg:mt-16">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-14">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 text-primaryColor justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-1 text-miniBlack text-xl font-inter font-medium">{feature.text}</h5>
                <p className="text-md mb-8 text-blackHover">
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
