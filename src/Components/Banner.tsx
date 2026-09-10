import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-gray-500 leading-6 max-w-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-3 mt-8">
            <button className="text-white text-sm px-4 py-3 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
              Explore Technologies
            </button>

            <button className="text-sm text-gray-600 px-5 py-3 rounded-md border border-gray-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Right  */}
        <div className="md:w-1/2 sm:w-full flex justify-center">
          <img src={bannerStack} alt="DevStack" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
