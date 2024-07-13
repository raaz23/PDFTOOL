
const PremiumFeatures = () => {
  return (
    <div className="px-8 w-full min-h-[520px] bg-miniBlack flex flex-col md:flex-row items-center justify-center py-8 text-white">
      <div className="md:max-w-2xl md:flex-1 md:mr-6 text-center mb-4 md:mb-0">
        <h2 className="text-2xl md:text-5xl font-bold tracker-widest  mb-4">Get More With Premium</h2>
        <p className=" py-2">
          Complete projects faster with batch file processing, convert scanned documents with OCR, and e-sign your business agreements.
        </p>
        <button type="button" className="mb-6 px-8 py-4 mt-12 bg-primaryColor text-white  text-medium text-title tracking-widest text-xl rounded-md hover:bg-red-800 transition-all ">Premium</button>
      </div>
      <div className="  flex justify-center items-center md:flex-1">
        <img src={"prem.jpg"} alt="Premium Features" className="max-w-full h-auto text-white shadow-2xl shadow-black" />
      </div>
    </div>
  );
};

export default PremiumFeatures;
