import { Button } from "@/Components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

import {Link} from 'react-router-dom'

function NavBar() {


  const handleClick = () => {
    alert("clicked");
  }
  return (
    <header className="flex flex-col items-center justify-center bg-white
        h-auto z-50
        lg:h-[4rem] lg:px-[8rem] lg:flex-row lg:justify-between
        2xl:h-[4.5rem]
        sticky top-0
      "
    >
      <div className="logo-container h-[3.5rem] w-full flex items-center justify-between px-5 cursor-pointer font-bold text-orange-500">
        <Link to='/'>
          <span className="text-[1.6rem] lg:text-2xl">BiteBazaar</span>
        </Link>
        
        {/* For the mobile screen */}
        <div className="flex items-center justify-center gap-7">
          <span className="block lg:hidden cursor-pointer text-[#949494] active:text-orange-400 whitespace-nowrap">
            {null && <sup className="bg-green-500 text-white p-[0.05rem] px-[0.3rem] rounded-full">1</sup>} <i className="ri-shopping-cart-2-line"></i> Cart
          </span>
          <span className="block lg:hidden" onClick={handleClick}>
            <i className="ri-user-3-line text-xl text-[#949494] active:text-orange-400 border-2 border-current p-1 rounded-full"></i>
          </span>
        </div>
      
      </div>
      <div className="nav-items w-full flex items-center justify-center gap-[3rem]">
        <ul className="menu-items
          px-4 flex items-center justify-center 
          gap-[3rem]">
          <li>
            <div className="search-bar-container
              flex items-center justify-center
              h-[2.5rem]
              xl:h-[3rem]
            ">
              <div className="location h-full">
                <Select>
                  <SelectTrigger className="w-[7rem] lg:w-[9rem] h-full rounded-l-md shadow-md">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangalore" selected>Bangalore</SelectItem>
                    <SelectItem value="kannur">Kannur</SelectItem>
                    <SelectItem value="kochi">Kochi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <input
                type="text"
                name="search-anything"
                id="search-anything"
                placeholder="Search for restaurants and foods..."
                className="
                  px-4 shadow-md border outline-none
                  rounded-r-md
                  w-full h-full text-[0.75rem]
                  xl:w-[25rem] xl:h-full lg:text-lg
              "/>
            </div>
          </li>

          {/* Only visible in the bigger screen */}
          {/* <li className="hidden lg:block cursor-pointer hover:text-orange-600 whitespace-nowrap">About</li> */}
          <li className="hidden lg:block cursor-pointer hover:text-orange-600 whitespace-nowrap">
            {null && <sup className="bg-green-500 text-white p-[0.05rem] px-[0.35rem] rounded-full">1</sup>}
            <i className="ri-shopping-cart-2-line"></i> Cart</li>
          <li className="hidden lg:block cursor-pointer hover:text-orange-600 whitespace-nowrap text-nowrap"><i className="ri-login-circle-line"></i> Sign in</li>
          <li className="hidden lg:block cursor-pointer hover:text-orange-600 whitespace-nowrap"><Button>Sign up</Button></li>
        </ul>
      </div>

    </header>
  );
}

export default NavBar