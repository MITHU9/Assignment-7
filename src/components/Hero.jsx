/* eslint-disable react/prop-types */
import Banner from "../assets/bg-shadow.png";
import HeroImg from "../assets/banner-main.png";
import { Bounce, toast } from "react-toastify";

const Hero = ({ setCoin }) => {
  const handleSetCoin = () => {
    setCoin((prev) => prev + 600000);
    toast.success("Credit added successfully to your account!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="mt-3 px-2">
      <div className="bg-black relative rounded-xl">
        <img
          className="w-full h-[30vh] md:h-full object-cover rounded-xl"
          src={Banner}
          alt="banner"
        />

        <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 lg:gap-6">
          <div>
            <img
              className="size-24 md:size-40 lg:size-48"
              src={HeroImg}
              alt="hero image"
            />
          </div>
          <div className="text-center flex flex-col lg:gap-4 px-1">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-400 font-semibold text-lg ">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border border-[#D4E927] w-48 mx-auto p-1 rounded-xl mt-2">
              <button
                onClick={handleSetCoin}
                className="bg-[#D4E927] py-2 px-4 rounded-xl font-bold text-lg"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
