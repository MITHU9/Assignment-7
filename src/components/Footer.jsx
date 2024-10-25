import FooterImg from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#060919]  z-10">
      <div className=" p-12">
        <div className="w-1/2 mx-auto text-center flex items-center justify-center py-5 mt-32 lg:mt-36">
          <img src={FooterImg} alt="footer-logo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-white container mx-auto mt-4 gap-3">
          <div className="w-3/4 lg:w-1/2">
            <h2 className="text-xl font-bold">About Us</h2>
            <p className="font-semibold text-gray-600">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="text-gray-500 font-semibold mt-2 list-disc ml-5">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Subscribe</h2>
            <p className="text-gray-500 font-semibold lg:w-1/2 py-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                className="py-1 px-3 rounded-lg rounded-r-none outline-none text-black"
                type="text"
                placeholder="Enter your email"
              />
              <button className="p-2 bg-gradient-to-r from-yellow-500 to-red-600 rounded-lg rounded-l-none font-bold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-12 border-gray-600 p-0" />
      <div className="text-center text-gray-600 py-2 font-semibold">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
