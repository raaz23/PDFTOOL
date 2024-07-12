
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  function date(){
    return new Date().getFullYear();
  }
  return (
    <footer className="px-14 py-12 border-t border-neutral-400">
      <div className="text-center grid md:grid-cols-3  grid-cols-1 gap-12">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-600 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr  className="w-full h-[2px] bg-slate-500 mt-8 "/>
      <div className="mt-4 px-20">
    <div className="container mx-auto py-8 flex flex-wrap flex-col sm:flex-row">
      <p className="text-sm text-center sm:text-left"> <span className="text-xl">@</span> {date()} All Right Reversed
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 gap-6 justify-center sm:justify-start">  
   <a href=""><img className="social-icon" src="fb.svg" alt="fb"/></a>  
   <a href=""><img className="social-icon" src="insta.svg" alt="insta"/></a>  
   <a href=""><img className="social-icon" src="twiter.svg" alt="twiter"/></a> 
   <a href=""><img className="social-icon" src="yt.svg" alt="yt"/></a>
      </span>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
