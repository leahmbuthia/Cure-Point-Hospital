import React from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700  border-gray-200 mt-20">
      <div className="flex justify-between gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-8">
            <Image src="/logo.svg" alt="Logo" width={200} height={50} />
          </div>
          <p className="w-[570px] h-[120px] text-sm leading-relaxed text-[#4B5563]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-[22px] font-semibold text-gray-800 uppercase mb-8">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-[22px] font-semibold text-gray-800 uppercase mb-8">
            Get in touch
          </h3>
          <div className="flex items-center mb-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>+1-212-456-7890</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>greatstackdev@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#BDBDBD] py-4 text-center text-xs text-gray-500 mt-3">
        Copyright © 2024 GreatStack – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
