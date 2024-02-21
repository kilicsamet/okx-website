import React from 'react';
import Link from 'next/link';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
const MenuItem = ({ text, isOpen }) => {
    return (
      <div >
        <Link className="mr-4 flex items-center" href="/#">
          {text}
          {text === "Akademi" ? "" :
            isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </Link>
      </div>
    );
  };
const NavBar = ({ activeButton, handleButtonClick, handleMouseEnter, handleMouseLeave, isLinkHovered, getMenuItems }) => {
    return (
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              className="w-20 h-auto"
              alt="OKX - Önde Gelen Kripto Para Borsası"
              title="OKX"
            />
          </Link>
          <div className="flex space-x-0 m-2">
            <button
              onClick={() => handleButtonClick("/tr")}
              style={{
                height: '28px',
                border: '1px solid #bdbdbd',
                borderRadius: "3px",
                fontSize: "12px",
                backgroundColor: activeButton === "/tr" ? 'white' : '#545454',
                color: activeButton === "/tr" ? 'black' : 'white',
                padding: "5px",
              }}
            >
              Borsa
            </button>
            <button
              onClick={() => handleButtonClick("/tr/web3")}
              style={{
                height: '28px',
                border: '1px solid #bdbdbd',
                borderRadius: "3px",
                fontSize: "12px",
                backgroundColor: activeButton === "/tr/web3" ? 'white' : '#545454',
                color: activeButton === "/tr/web3" ? 'black' : 'white',
                padding: "5px",
    
              }}
            >
              Web3
            </button>
          </div>
          <div className="divider" style={{ margin: "5px", height: '20px', width: '1px', backgroundColor: '#545454' }}></div>
          <div>
            <div className="flex text-white p-1" style={{ fontSize: "10px" }}>
              {getMenuItems().map((item) => (
                <div
                  key={item.link}
                  onMouseEnter={() => handleMouseEnter(item.link)}
                  style={{ position: 'relative', zIndex: isLinkHovered(item.link) ? 1 : 'auto' }}
                >
                  <MenuItem text={item.text} isOpen={isLinkHovered(item.link)} />
                  {item.text === "Akademi" ? null :
                    <div
                      className="absolute p-2 m-3"
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        fontSize: "12px",
                        border: "1px solid #bdbdbd",
                        borderRadius: "5px",
                        width: "250px",
                        display: isLinkHovered(item.link) ? 'block' : 'none',
                      }}
                      onMouseEnter={() => handleMouseEnter(item.link)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <div
                        onMouseEnter={() => handleMouseEnter(item.link)}
                        onMouseLeave={() => handleMouseLeave()}
                      >
                        {item.list}
                      </div>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default NavBar;
