import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 text-center md:col-span-2 md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={logo} alt="DevStack" className="w-7 h-7" />

              <h2 className="font-bold">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="text-sm text-gray-400 mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex justify-center gap-5 text-sm text-gray-600 md:justify-start">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-bold text-gray-800">PRODUCT</h3>

            <div className="flex flex-col gap-3 mt-4 text-sm text-gray-400">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-bold text-gray-800">COMPANY</h3>

            <div className="flex flex-col gap-3 mt-4 text-sm text-gray-400">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
