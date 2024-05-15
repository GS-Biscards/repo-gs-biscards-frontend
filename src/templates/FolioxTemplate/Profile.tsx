import React from "react";
import { User } from "@/models/user.model";
import FileSaver from "file-saver";

interface Props {
  user?: User;
}

const Profile = ({ user }: Props) => {

  return (
    <div className="foliox_tm_about w-full h-auto clear-both float-left mb-[245px]">
      <div className="container-foliox">
        <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
          <span className="text-[21px] ff-poppins text-extra-color font-medium inline-block mb-[5px]">
            About Me
          </span>
          <h3 className="text-[48px]">
            A Passionate Developer Who Loves to Code
          </h3>
        </div>
        <div className="wrapper w-full h-auto clear-both flex mt-[75px]">
          <div className="left w-1/2 relative">
            <div className="big_image float-right relative">
              <img
                className="tilt-effect max-w-425px max-h-[510px]"
                src="asset/hero/avatar.png"
                alt=""
              />
              <div className="small_image absolute z-[1] right-full top-full mt-[-180px] mr-[-100px]">
                <div className="in relative">
                  <img
                    className="relative opacity-0 min-w-[337px] max-w-[337px]"
                    src="asset/hero/avatar.png"
                    alt=""
                  />
                  <div
                    className="main tilt-effect absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                    data-img-url="asset/hero/avatar.png"
                  ></div>
                </div>
              </div>
              <span className="badge w-[120px] h-[120px] inline-block absolute bg-extra-color rounded-[10px] top-[160px] right-full mr-[45px]">
                <img
                  class="svg w-[65px] h-[65px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                  src="asset/hero/avatar.png"
                  alt=""
                />
              </span>
              <div className="experience absolute top-full left-[138px] mt-[35px]">
                <div className="inner relative flex items-center pl-[25px]">
                  <h3 className="text-[72px]">12</h3>
                  <div className="flex flex-col">
                    <p className="text-[15px] ff-poppins text-white leading-[32px] pl-[20px]">
                      Successful</p>
                    <p className="text-[15px] ff-poppins text-white leading-[32px] pl-[20px]">
                      Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-1/2 pl-[90px] relative top-[30px]">
            <h3 className="title text-[30px] mb-[35px]">Sobre mí</h3>
            <p className="text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat
              cupidatat non proident, sunt in culpa qui officia dese runt mollit
              anim id est laborum velit esse cillum dolore eu fugiat.
            </p>
            <div className="list w-full clear-both float-left overflow-hidden rounded-[10px] border-solid border-[#625a7d] border-2 mt-[32px] mb-[40px]">
              <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] pt-[2px] float-left pl-[2px]">
                <li className="m-0 float-left w-1/2 border-solid border-[#625a7d] border-2 relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <ul className="item py-[25px] px-[35px]">
                    <li className="mb-[11px]">
                      <span className="ff-poppins text-[16px] font-medium text-white inline-block">
                        Nombre
                      </span>
                      <p className="text-[16px]">Alan Walker</p>
                    </li>
                    <li className="mb-[11px]">
                      <span className="ff-poppins text-[16px] font-medium text-white inline-block">
                        Email
                      </span>
                      <p className="text-[16px]">
                        <a className="text-main-color" href="#">
                          hello@foliox.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <span className="ff-poppins text-[16px] font-medium text-white inline-block">
                        Teléfono
                      </span>
                      <p className="text-[16px]">+123 456 7890</p>
                    </li>
                  </ul>
                </li>
                <li className="m-0 float-left w-1/2 border-solid border-[#625a7d] border-2 relative mt-[-2px] ml-[-2px] overflow-hidden">
                  <ul className="item py-[25px] px-[35px]">
                    <li className="mb-[11px]">
                      <span className="ff-poppins text-[16px] font-medium text-white inline-block">
                        Dirección
                      </span>
                      <p className="text-[16px]">20, Bordeshi, Dhaka</p>
                    </li>
                    <li className="mb-[11px]">
                      <span className="ff-poppins text-[16px] font-medium text-white inline-block">
                        Grado
                      </span>
                      <p className="text-[16px]">Master</p>
                    </li>
                    <li>
                      <span className="ff-poppins text-[16px] font-medium text-white inline-block">
                        Freelance
                      </span>
                      <p className="text-[16px]">Available</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="foliox_tm_button">
              <a href="assets/img/cv/1.jpg" download>
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
