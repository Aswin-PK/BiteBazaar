// import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-slate-200 py-10
        px-5 mt-10 flex flex-col gap-5
        xl:px-[15rem]
    ">
        <div className="flex items-center justify-between">
            <span className="font-bold text-2xl xl:text-3xl">BiteBazaar</span>
            <span className="w-[6rem] py-1 px-3 border lg:mr-[8rem] rounded-sm flex items-center justify-between">
                <p>🌐</p>
                <p>India</p>
            </span>
        </div>
        <ul className="footer-menu flex
            flex-col flex-wrap
            lg:flex-row justify-between
        ">
          <li className="text-md lg:text-xl mb-4 lg:mb-0">Company
            <ul className="flex flex-col gap-2 mt-2">
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">About</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Team</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100"></li>
            </ul>
          </li>
          <li className="text-md lg:text-xl mb-4 lg:mb-0">Contact Us
            <ul className="flex flex-col gap-2 mt-2">
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">+91 XXX XXX XXXX</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">aswinpk3377@gmail.com</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Bangalore</li>
            </ul>
          </li>
          <li className="text-md lg:text-xl mb-4 lg:mb-0">Legal
            <ul className="flex flex-col gap-2 mt-2">
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Terms & Conditions</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Cookie Policy</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Privacy Policy</li>
            </ul>
          </li>
          <li className="text-md lg:text-xl mb-4 lg:mb-0">We deliver to:
            <ul className="flex flex-col gap-2 mt-2">
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Bangalore</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Kerala</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Hyderabad</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Chennai</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Mumbai</li>
                <li className="text-gray-500 hover:text-gray-400 text-sm lg:text-[1.1rem] cursor-pointer transition delay-100">Pune</li>
            </ul>
          </li>
          <li>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul></li>  
        </ul>
    </footer>
  )
}

export default Footer