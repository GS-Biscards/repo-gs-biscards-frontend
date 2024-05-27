import React from "react";
import Search from "./Search";
import UserList from "./UsersList";
import Header from "../Home/Header";

const SearchForm = () => {
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
        <Header />
        <Search />    
        <div className="px-[62px] py-10 pb-12 h-full">
          <div className="flex flex-wrap justify-center">
            {users.map((user: any, index: number) => {
              return (
                <a href={`/user/${user.id}`} key={`landing-user-card-${index}`} >
                  <UserList user={user} />
                </a>
              );
            })}
          </div>
        </div>
      </div> 
  );
};

export default SearchForm;
