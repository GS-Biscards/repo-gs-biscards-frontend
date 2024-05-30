"use client"
import React from 'react';
import UserPage from '@/pages/Users';
import Spin from '@/components/Spin';
import { User } from '@/models/user.model';
import { getUserId } from '@/services/user.services';

const UserId = ({ params }: any) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [user, setUser] = React.useState<User | null>(null);
  
  React.useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      const resp: User = await getUserId(params);
      if (resp !== null) {
        setUser(resp)
      } else {
        console.log("ERROR");
      }
    }
    loadUser();
  }, [])

  return (
    <>
      {
        isLoading && user !== null ?
          <UserPage user={user} /> :
          <Spin showSpin={isLoading} />
      }
    </>
  )
}

export default UserId;
