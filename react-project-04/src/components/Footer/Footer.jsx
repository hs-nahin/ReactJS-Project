import 'react';
import { FaGithub, } from "react-icons/fa";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 font-mono mt-36">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center text-white">

          {/* CareerHive Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h2 className="text-lg font-bold">CareerHive</h2>
            <p className="mt-2">Connect with us on various social media platforms!</p>
            <div className="flex mt-2">
              <div>
                <TiSocialLinkedin className="text-sky-600 text-xs rounded-full bg-white w-8 h-8 mr-2 hover:text-gray-200 hover:bg-sky-600 cursor-pointer ease-in-out duration-200" />
              </div> {/* LinkedIn */}
              <div>
                <FaGithub className="text-gray-500 rounded-full bg-white w-8 h-8 mr-2 hover:text-gray-200 hover:bg-gray-500 cursor-pointer ease-in-out duration-200" />
              </div> {/* GitHub */}
              <div>
                <TiSocialFacebook className="text-blue-600 rounded-full bg-white w-8 h-8 mr-2 hover:text-gray-200 hover:bg-blue-600 cursor-pointer ease-in-out duration-200" />
              </div> {/* Facebook */}
            </div>
          </div>

          {/* About Us Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">About Us</h3>
            <ul className="mt-2">
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Prototype Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">Prototype</h3>
            <ul className="mt-2">
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="mt-2">524 Broadway, NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-white border-t my-8" />

        {/* Copyright & Powered By Section */}
        <div className="text-gray-400 flex justify-between items-center text-sm">
          <p>&copy; 2024 CareerHive. All Rights Reserved</p>
          <p>Powered by CareerHive</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
