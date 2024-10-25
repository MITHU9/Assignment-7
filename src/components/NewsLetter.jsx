import BgShadow from "../assets/bg-shadow.png";

const NewsLetter = () => {
  return (
    <div>
      <div className="absolute right-0.5 -bottom-72 w-full md:-bottom-44 lg:-bottom-48 z-50  md:mt-16 border p-3 rounded-lg ">
        <div className="relative h-[40vh] lg:h-[50vh] rounded-lg bg-white">
          <img
            className="w-full h-full rounded-lg"
            src={BgShadow}
            alt="shadow-bg"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-2">
            <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
            <p className="text-gray-500 font-semibold">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="flex items-center gap-2">
              <input
                className="py-2 border border-gray-300 px-3 rounded-lg  outline-none text-black"
                type="text"
                placeholder="Enter your email"
              />
              <button className="p-2 bg-gradient-to-r from-yellow-500 to-red-600 rounded-lg  font-bold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
