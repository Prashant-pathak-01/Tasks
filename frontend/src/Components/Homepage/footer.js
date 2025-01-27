import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <div className="bg-[#171717] text-white p-2 w-full justify-center flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="font-serif tracking-wide">--- Connect with us ---</p>
          <div className="flex flex-row space-x-8 mt-1 mb-2">
            <p className="hover:scale-110 hover:text-blue-600 cursor-pointer duration-100">
              <LinkedInIcon />
            </p>

            <p className="hover:scale-110 hover:text-orange-700 cursor-pointer duration-100">
              <InstagramIcon />
            </p>

            <p className="hover:scale-110 hover:text-blue-400 cursor-pointer duration-100">
              <TwitterIcon />
            </p>
            <p className="hover:scale-110  cursor-pointer duration-100">
              <XIcon />
            </p>

            <p className="hover:scale-110 hover:text-blue-600 cursor-pointer duration-100">
              <FacebookIcon />
            </p>
          </div>
        </div>
        <p className="mt-2 border-t-2 pt-2 w-full text-center opacity-50">
          © 2025 DisCuss. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
