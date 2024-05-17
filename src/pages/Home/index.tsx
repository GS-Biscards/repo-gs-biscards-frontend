import React from "react";
import Header from "./Header";
import Search from "./Search";

const HomePage = () => {
  return (
    <div>
      <div className="h-full">
        <div className="h-[72px]">
          <Header />
        </div>
        <div className="flex justify-center w-full">
            <Search/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
