import React from "react";

interface Props {
  onHandleChange: any;
  handleQrModal: any;
}

const NavBar = ({ onHandleChange, handleQrModal }: Props) => {
  const [activeNavItem, setActiveNavItem] = React.useState<string>("about-me");
  const handleNavItemClick = (itemName: string) => {
    setActiveNavItem(itemName);
    onHandleChange(itemName);
  };
  const handleQRItemClick = () => {
    handleQrModal();
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-[10] py-[45px] px-0 transition-all ease-in-out duration-300">
      <nav className="max-w-[1400px] w-full mx-auto h-auto py-0 px-[40px] relative clear-both">
        <div className="w-full flex items-center justify-between">
          <div>
						<a href="#home"><img className="max-w-[200px] max-h-[80px] transition-all ease-in-out duration-300" src="" alt="" /></a>
					</div>
          <div className="flex items-center">
            <div>
              <ul className="flex items-center">
                <li className="mr-40px">
                  <div
                    className={`text-white font-poppins transition-all ease-in-out duration-300 hover:text-extra-color${
                      activeNavItem === "about-me"
                        ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("home")}
                  >
                    <p className="text-white font-poppins transition-all ease-in-out duration-300 hover:text-extra-color">Inicio</p>
                  </div>
                </li>
                <li className="mr-40px">
                  <div
                    className={`text-white font-poppins transition-all ease-in-out duration-300 hover:text-extra-color${
                      activeNavItem === "about-me"
                        ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("about-me")}
                  >
                    Sobre Mí
                  </div>
                </li>
                <li className="mr-40px">
                  <div
                    className={`text-white font-poppins transition-all ease-in-out duration-300 hover:text-extra-color ${
                      activeNavItem === "gallery"
                        ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("gallery")}
                  >
                    Galería
                  </div>
                </li>
                <li className="mr-40px">
                  <div
                    className={`text-white font-poppins transition-all ease-in-out duration-300 hover:text-extra-color${
                      activeNavItem === "contact"
                        ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("contact")}
                  >
                    Contacto
                  </div>
                </li>
                <li className="mr-40px">
                  <div
                    className={`text-white font-poppins transition-all ease-in-out duration-300 hover:text-extra-color ${
                      activeNavItem === "compartir"
                        ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                        : ""
                    } `}
                    onClick={() => handleQRItemClick()}
                  >
                    Compartir
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
