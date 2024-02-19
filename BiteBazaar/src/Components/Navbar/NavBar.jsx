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
    <header className="flex items-center justify-between
        h-[3rem] px-5
        md:h-[3.5rem]
        lg:h-[4rem] lg:px-[10rem]
        2xl:h-[4.5rem]
      "
    >
      <div className="logo-container
        w-full cursor-pointer font-bold text-orange-500
        text-md
        lg:text-2xl
      ">
        BiteBazaar
      </div>
      <div className="nav-items w-full
        flex items-center justify-center 
        gap-[3rem]
      "
      >
        <ul className="menu-items
          px-4
          flex items-center justify-center 
          gap-[3rem]
        ">
          <li>
            <div className="search-bar-container
              flex items-center justify-center
              h-[2.5rem]
              xl:h-[3rem]
            ">
              <div className="location h-full">
                <Select>
                  <SelectTrigger className="w-[9rem] h-full rounded-l-md shadow-md">
                    <SelectValue placeholder="Your Location" />
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
                  w-[10rem] h-full
                  xl:w-[25rem] xl:h-full
              "
              />
            </div>
          </li>
          <li className="cursor-pointer hover:text-orange-600">About</li>
          <li className="cursor-pointer hover:text-orange-600">Menu</li>
          <li className="cursor-pointer hover:text-orange-600">Cart</li>
          <li className="cursor-pointer hover:text-orange-600 text-nowrap">Sign in</li>
          <li className="cursor-pointer hover:text-orange-600"><Button>Sign up</Button></li>
        </ul>
      </div>

      <div className="hamburger-menu"></div>
    </header>
  );
}

export default NavBar