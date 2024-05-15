"use-client";
import React from "react";
import { useForm } from "react-hook-form";
import { User } from "@/models/user.model";

interface Props {
  user?: User;
}
const Contact = ({ user }: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<
    {
      name: string,
      email: string,
      message: string,
    }>();
  const sendEmail = async (data: any) => {
    
  }
  return (
    <div className="foliox_tm_contact w-full h-auto clear-both float-left">
      <div className="container-foliox">
        <div className="foliox_tm_main_title w-full max-w-[650px] h-auto clear-both my-0 mx-auto text-center">
          <span className="text-[21px] font-poppins text-extra-color font-medium inline-block mb-[5px]">
            Contacto
          </span>
          <h3 className="text-[48px]">Quiero saber de ti</h3>
        </div>
        <div className="contact_inner w-full flex mt-[80px] mb-[182px] relative">
          <div className="left wow fadeInLeft w-1/2" data-wow-duration="1s">
            <ul>
              <li className="mb-[15px]">
                <div className="list_inner flex items-center">
                  <div className="icon w-[88px] h-[88px] rounded-full relative bg-extra-color">
                    <i className="icon-location absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-white"></i>
                  </div>
                  <div className="short pl-[25px]">
                    <h3 className="text-[30px] mb-[5px]">Dirección</h3>
                    <p>20, Somewhere in world</p>
                  </div>
                </div>
              </li>
              <li className="mb-[15px]">
                <div className="list_inner flex items-center">
                  <div className="icon w-[88px] h-[88px] rounded-full relative bg-extra-color">
                    <i className="icon-mail-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-white"></i>
                  </div>
                  <div className="short pl-[25px]">
                    <h3 className="text-[30px] mb-[5px]">Email</h3>
                    <span>
                      <a
                        className="text-[#b4afc6] transition-all duration-300 hover:text-extra-color"
                        href="#"
                      >
                        hello@dodo.com
                      </a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-[15px]">
                <div className="list_inner flex items-center">
                  <div className="icon w-[88px] h-[88px] rounded-full relative bg-extra-color">
                    <i className="icon-phone absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] text-white"></i>
                  </div>
                  <div className="short pl-[25px]">
                    <h3 className="text-[30px] mb-[5px]">Teléfono</h3>
                    <p>+123 456 7890</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="right wow fadeInRight w-1/2" data-wow-duration="1s">
            <div className="fields w-full clear-both float-left h-auto">
              <form  className="contact_form" id="contact_form" onSubmit={handleSubmit(sendEmail)} >
                <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
								<div className="empty_notice"><span>Please Fill Required Fields</span></div>
                <div className="input_list w-full clear-both float-left h-auto">
                  <ul className="ml-[-12px]">
                    <li className="mb-[12px] w-full float-left pl-[12px]">
                      <input id="name" type="text" placeholder="Nombre" />
                    </li>
                    <li className="mb-[12px] w-full float-left pl-[12px]">
                      <input id="email" type="text" placeholder="Email" />
                    </li>
                  </ul>
                </div>
                <div className="message_area w-full float-left mb-[4px]">
                  <textarea
                    id="message"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <div className="foliox_tm_button">
                  <a id="send_message" href="#">
                    <span>Enviar</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
