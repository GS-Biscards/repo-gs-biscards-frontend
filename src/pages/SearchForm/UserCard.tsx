import React from 'react';
import { User } from '@/models/user.model';
import { URL_BASE } from '@/config/env.config';

interface Props {
    user: User
}

const UserCard = ({ user }: Props) => {
    return (

        <div className="max-w-md flex flex-col p-6 rounded-2xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className='grid grid-cols-3'>
                <div className="col-span-1">
                    <img
                        src={user.accountImg.profileImg}
                        className="h-[100px] w-[100px] rounded-[100%]"
                        alt=""
                    />
                </div>
                <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                        <h2 className="ff-roboto text-2xl font-semibold text-gray-950">
                            {user.firstName + " " + user.lastName}
                        </h2>
                        <p className="text-sm font-medium text-gray-500 flex items-center">
                            {user.description}
                        </p>
                    </div>
                    <div className='flex w-full justify-end'>
                        <a href={`${URL_BASE + user.userId}`} target="_blank" rel="noopener noreferrer">
                            <span className='ff-arvo text-md underline font-medium text-[#3B6978]  flex flex-row items-center gap-x-2'>
                               
                                Visitar mi pagina.
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard