import { Button } from "@/Components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

function NavBar() {
  return (
    <header className="flex flex-col items-center justify-center
        h-auto
        lg:h-[4rem] lg:px-[8rem] lg:flex-row lg:justify-between
        2xl:h-[4.5rem]
      "
    >
      <div className="logo-container h-[3.5rem] w-full flex items-center justify-between px-5 cursor-pointer font-bold text-orange-500">
        <span className="text-[1.6rem] lg:text-2xl">BiteBazaar</span>
        
        {/* For the mobile screen */}
        <span className="block lg:hidden">
          <i className="ri-menu-4-line text-2xl text-[#333]"></i>
        </span>
      
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
          <li className="hidden lg:block cursor-pointer hover:text-orange-600">About</li>
          <li className="hidden lg:block cursor-pointer hover:text-orange-600">Menu</li>
          <li className="hidden lg:block cursor-pointer hover:text-orange-600">Cart</li>
          <li className="hidden lg:block cursor-pointer hover:text-orange-600 text-nowrap">Sign in</li>
          <li className="hidden lg:block cursor-pointer hover:text-orange-600"><Button>Sign up</Button></li>
        </ul>
      </div>

    </header>
  );
}

export default NavBar