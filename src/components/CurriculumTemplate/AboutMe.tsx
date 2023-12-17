import React from 'react';
import { User } from '@/models/user.model';

interface Props {
    user: User
}

const AboutMe = ({ user }: Props) => {
    return (
        <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 mb-8">
            <h2 className="text-4xl font-medium mb-2.5 text-white">Sobre Mí</h2>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                <div className="col-span-12 space-y-2.5">
                    <div className="lg:mr-16">
                        <p className="text-white leading-7">
                            {user.histoy}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
