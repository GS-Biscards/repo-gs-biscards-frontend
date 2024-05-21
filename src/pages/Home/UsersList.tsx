import React from "react";
import { User } from "@/models/user.model";
import { URL_BASE } from "@/config/env.config";

interface Props {
  user?: User;
}

const UserList = ({ user }: any) => {
  return (
    <div className="w-[263px] h-[317px]  m-4 max-w-md flex flex-col rounded-[60px] bg-white shadow-2xl opacity-100">
      <div className="flex justify-center flex-col m-[15px]">
        <div className="flex justify-center my-[10px]">
          <img
            /* src={user.accountImg.profileImg} */
            src="https://st4.depositphotos.com/1049680/22058/i/450/depositphotos_220585526-stock-photo-handsome-young-business-man-grey.jpg"
            className="h-[200px] w-[200px] rounded-[100%]"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="ff-roboto text-2xl font-semibold text-gray-950 text-center">
              {user?.firstName + " " + user?.lastName}
            </h2>
            <p className="text-sm font-medium text-gray-500 text-center">
              {user?.description}
            </p>
          </div>
          {/* <div className='flex w-full justify-end'>
                        <a href={`${URL_BASE + user.userId}`} target="_blank" rel="noopener noreferrer">
                            <span className='ff-arvo text-md underline font-medium text-[#3B6978]  flex flex-row items-center gap-x-2'>
                               
                                Visitar mi pagina.
                            </span>
                        </a>

                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserList;
