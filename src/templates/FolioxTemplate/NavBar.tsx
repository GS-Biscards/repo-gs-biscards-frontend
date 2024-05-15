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
    <header className="fixed top-0 left-0 right-0 z-10 py-11 px-0 transition-all duration-300">
      <nav className="container-foliox max-w-52 w-full mx-auto h-auto py-0 px-10 relative clear-both">
        <div className="w-full flex items-center justify-between">
          <div className="logo">
						<a href="#home"><img className="max-w-52 max-h-20 transition-all duration-300" src="" alt="" /></a>
					</div>
          <div className="flex items-center">
            <div>
              <ul className="flex items-center">
                <li>
                  <div
                    className={`cursor-pointer text-white ff-poppins transition-all duration-300 hover:text-extra-color ${
                      activeNavItem === "about-me"
                        ? "text-extra-color"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("home")}
                  >
                    <a href="#home">Inicio</a>
                  </div>
                </li>
                <li>
                  <div
                    className={`cursor-pointer text-white ff-poppins transition-all duration-300 hover:text-extra-color ${
                      activeNavItem === "about-me"
                        ? "text-extra-color"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("about-me")}
                  >
                    <a href="#about">Sombre mí</a>
                  </div>
                </li>
                <li>
                  <div
                    className={`cursor-pointer text-white ff-poppins transition-all duration-300 hover:text-extra-color ${
                      activeNavItem === "gallery"
                        ? "text-extra-color"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("gallery")}
                  >
                    Galería
                  </div>
                </li>
                <li>
                  <div
                    className={`cursor-pointer text-white ff-poppins transition-all duration-300 hover:text-extra-color${
                      activeNavItem === "contact"
                        ? "text-extra-color"
                        : ""
                    } `}
                    onClick={() => handleNavItemClick("contact")}
                  >
                    <a href="#contact">Contacto</a>
                  </div>
                </li>
                <li>
                  <div
                    className={`cursor-pointer text-white ff-poppins transition-all duration-300 hover:text-extra-color${
                      activeNavItem === "compartir"
                        ? "text-extra-color"
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
