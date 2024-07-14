import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-secondBackgroundColor py-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 px-10 md:px-0">
        <div className="md:flex-1">
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
        <div className="md:flex-1">
          <h3 className="text-md font-bold tracking-wider mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
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
        <div className="md:flex-1">
          <h3 className="text-md font-bold tracking-wider mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
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
      </div>

      <hr className="w-full h-[2px] bg-slate-500 mt-8" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="pdf.png" className="social-icon" alt="logo" />
            <h1 className="text-gradient font-bold font-title tracking-widest mt-2">PDFTOOL</h1>
          </div>
          <h2>
            <span className="font-bold text-miniBlack">Contact: </span>
            7042479706
          </h2>
          <h2>
            <span className="font-bold text-miniBlack">Email: </span>
            yadavraj1244@gmail.com
          </h2>
          <p className="text-md text-center sm:text-left font-bold text-miniBlack">
            @ {getCurrentYear()} All Rights Reserved
          </p>
        </div>

        <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/loveraju.yadav"
            className="hover:scale-110 transition-all"
            aria-label="Facebook"
          >
            <img className="social-icon" src="fb.svg" alt="fb" />
          </a>
          <a
            href="https://www.instagram.com/raazveer30/"
            className="hover:scale-110 transition-all"
            aria-label="Instagram"
          >
            <img className="social-icon" src="insta.svg" alt="insta" />
          </a>
          <a
            href="https://www.linkedin.com/in/raju-yadav-148525283"
            className="hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <img className="social-icon" src="linkedin..svg" alt="linkedin" />
          </a>
          <a
            href="https://linktr.ee/raaz23"
            className="hover:scale-110 transition-all"
            aria-label="Linktree"
          >
            <img className="social-icon" src="linktree.svg" alt="linktree" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
