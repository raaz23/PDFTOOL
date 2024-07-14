
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  function date(){
    return new Date().getFullYear();
  }
  return (
    <footer className >
      <div className="flex justify-evenly ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-20 lg:gap-x-48 mt-12 ">
        <div className="mt-4 md:mt-0">
          <h3 className="text-md font-bold tracking-wider mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index} className="">
                <a
                  href={link.href}
                  className="text-miniBlack hover:text-primaryColor"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-md font-bold tracking-wider mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index} className=" ">
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-primaryColor"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-md font-bold tracking-wider mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index} className="hover:text-primaryColor">
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-primaryColor"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      <hr  className="w-full h-[2px] bg-slate-500 mt-8  actualFooter"/>
      
      <div className="bg-secondBackgroundColor py-4 flex ">
    <div className="sm:container mx-auto md:py-8 flex flex-wrap flex-col sm:flex-row gap-6" >
      <div className="flex flex-col text-md space-y-2 text-center sm:text-start">
        <div className="flex justify-center sm:justify-normal gap-2">
          <img src="pdf.png" className="social-icon" alt="logo" />
        <h1 className="text-gradient font-bold font-title tracking-widest mt-2">PDFTOOL</h1>
        </div>
        <h2><span className="font-bold text-miniBlack">Contact: </span>7042479706</h2>
        <h2><span className="font-bold text-miniBlack">Email: </span>yadavraj1244@gmail.com</h2>
      <p className="text-md text-center sm:text-left font-bold text-miniBlack -ml-1">@ {date()} All Right Reversed
      </p>
      </div>
      
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 gap-6 justify-center sm:justify-start">  
   <a href="https://www.facebook.com/loveraju.yadav" className="hover:scale-110 transition-all"><img className="social-icon" src="fb.svg" alt="fb"/></a>  
   <a href="https://www.instagram.com/raazveer30/"className="hover:scale-110 transition-all"><img className="social-icon" src="insta.svg" alt="insta"/></a>  
   <a href="https://www.linkedin.com/in/raju-yadav-148525283"className="hover:scale-110 transition-all"><img className="social-icon" src="linkedin..svg" alt="linkedin"/></a> 
   <a href="https://linktr.ee/raaz23"className="hover:scale-110 transition-all"><img className="social-icon" src="linktree.svg" alt="linktree"/></a>
      </span>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
