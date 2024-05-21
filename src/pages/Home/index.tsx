import React from "react";
import Header from "./Header";
import Search from "./Search";
import UserList from "./UsersList";

const HomePage = () => {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      description: "Doctor",
      //profileImg: "/asset/icons/guilsoft.png",
      userId: "id_del_usuario",
    },
    {
      firstName: "John",
      lastName: "Doe",
      description: "Doctor",
      //profileImg: "/asset/icons/guilsoft.png",
      userId: "id_del_usuario",
    },
    {
      firstName: "John",
      lastName: "Doe",
      description: "Doctor",
      //profileImg: "/asset/icons/guilsoft.png",
      userId: "id_del_usuario",
    },
    {
      firstName: "John",
      lastName: "Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      //profileImg: "/asset/icons/guilsoft.png",
      userId: "id_del_usuario",
    },
  ];
  return (
    <div className="h-full w-full">
      <div className="h-[72px]">
        <Header />
      </div>
      <div className=" bg-[#F6F6F6] mt-[53px]">
        <div className="flex justify-center items-center h-full">
          <Search />
        </div>
        <div className="px-[62px] py-10 pb-12">
          <div className="flex flex-wrap justify-center">
            {users.map((user: any, index: number) => {
              return (
                //<UserList key={`landing-user-card-${index}`} user={user} />
                <a href={`/user/${user.id}`} key={`landing-user-card-${index}`}>
                  <UserList user={user} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
