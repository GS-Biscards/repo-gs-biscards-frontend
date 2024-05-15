import React from "react";
import { User } from "@/models/user.model";

interface Props {
  user?: User;
}

const Home = ({ user }: Props) => {
  return (
    <div className="foliox_tm_hero w-full h-screen float-left relative">
      <div className="container-foliox">
        <div className="content h-screen flex items-center">
          <div className="left w-1/2">
            <h3 className="name text-[120px] leading-[1.1] mb-[25px]">
              James <span className="text-extra-color">Smith</span>
            </h3>
            <p className="job text-white text-[23px] font-medium font-poppins mb-[50px]">
              Web Designer based In New York
            </p>
            <div className="foliox_tm_button">
              <a className="py-3 px-9" href="#contact">
                <span>Get Connected</span>
              </a>
            </div>
          </div>
          <div className="right w-1/2 pl-20">
            <img
              class="tilt-effect max-w-[600px] max-h-[600px]"
              src="asset/hero/avatar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
