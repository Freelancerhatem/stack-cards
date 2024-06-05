import "./Home.css";

const HomeSection = () => {
  return (
    <div className="relative h-screen py-16">
      {/* Blue Triangle */}
      <div className="absolute banner top-0 left-0 h-full w-full overflow-hidden">
        <div className="w-0 h-0 border-r-[100vw] border-t-[80vh] border-r-transparent border-t-blue-500 relative">
          {/* Gradient overlay */}
          <div className=" w-full h-full">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          {/* Waves */}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative md:w-1/2 text-center md:text-left mb-8 md:mb-0 z-10">
        <h1 className="text-4xl font-bold text-black">
          UKs leading <br /> 1-to-1 tuition centre
        </h1>
        <p className="text-gray-700 mt-4">
          Once enrolled the student will get access to materials crafted
          carefully to allow students to enrich/reach their true potential.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Book Free Lesson
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative md:w-1/2 z-10">
        <img
          src={""}
          alt="Tutoring interface screenshot"
          className="w-full shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default HomeSection;
