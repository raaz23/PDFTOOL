import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="mb-8">
      <div className=" max-w-7xl mx-auto py-8 px-6 tracking-wide mt-8">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font text-center mb-1">TESTIMONIAL</h2>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center pb-12 text-gray-900">
        What People Say
        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text"> About Us</span> 
      </h2>
      <div className="flex flex-wrap justify-center text-white">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-700 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border-2 border-red-500 bg-fit"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-indigo-300">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default Testimonials;
