
const PremiumFeatures = () => {
  return (
    <div className="min-h-[520px] bg-[#898996] flex flex-col md:flex-row items-center justify-center py-8 px-4 text-white">
      <div className="md:max-w-2xl md:flex-1 md:mr-6 text-center mb-4 md:mb-0">
        <h2 className="text-2xl md:text-5xl font-bold tracker-widest  mb-4">Get more with Premium</h2>
        <p className=" py-2">
          Complete projects faster with batch file processing, convert scanned documents with OCR, and e-sign your business agreements.
        </p>
        <button type="button" className="w-96 h-12 mt-12 bg-red-600 text-white rounded-lg hover:bg-red-800 transition-all ">Premium</button>
      </div>
      <div className="flex justify-center items-center md:flex-1">
        <img src={"prem.jpg"} alt="Premium Features" className="max-w-full h-auto text-white" />
      </div>
    </div>
  );
};

export default PremiumFeatures;
