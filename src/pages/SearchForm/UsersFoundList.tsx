import { User } from '@/models/user.model'
import React from 'react'
import UserCard from './UserCard'

interface Props {
    usersFound: User[]
}

const UsersFoundList = ({ usersFound }: Props) => {
    return (
        <div className='px-40 pb-12'>
            <div className='grid grid-cols-3 gap-y-6'>
                {
                    usersFound.map((user: User, index: number) => {
                        return (
                            <UserCard key={`landing-user-card-${index}`} user={user} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersFoundList