import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


 const UpperHeader = ()=>{
    return (
        <div className="bg-themeOrange text-white ">
            <div className="mx-40 flex justify-between items-center">
                <p className="font-ptsans text-xs px-2 py-1.5 mx-1">An ISO 9001:2015 certified company</p>

                <ul className="flex justify-center items-center">
                    
                    <li className="text-white hover:bg-btnHoverRed hover:cursor-pointer rounded-sm text-xs px-2 py-1 mx-1">CV Building & Interview Webinar</li>
                    |
                    <li className="text-white hover:bg-btnHoverRed hover:cursor-pointer text-xs px-2 py-1 mx-1">Contact Us</li>
                    |
                    <li className="text-white hover:bg-btnHoverRed hover:cursor-pointer text-xs px-2 py-1 mx-1">GCP Trainer</li>
                    |
                    <li className="text-white hover:bg-btnHoverRed hover:cursor-pointer text-xs px-2 py-1 mx-1">₹ INR</li>
                    |
                    <li className="text-white hover:bg-btnHoverRed hover:cursor-pointer text-xs px-2 py-1 mx-1">Sign In</li>

                </ul>
            </div>
        </div>
    )
}


const HeaderDropdowns = (props)=> {
  return (
    <Menu as="div" className="relative  inline-block text-left">
      <div >
        <MenuButton className=" inline-flex w-full justify-center px-0 py-0 items-center bg-white text-gray-900 hover:cursor-pointer hover:text-themeOrange border-none focus:outline-none">
          {props.name}
          
          <ChevronDownIcon aria-hidden="true" className=" size-4 text-gray-900" />
          
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">

          {props.values.map((value)=>{
            return (
             <MenuItem key={value}>
            <a
              href="#"
              className=" block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-themeOrange data-[focus]:outline-none"
            >
              {value}
            </a>
          </MenuItem>
          )

          })}
         
          
        </div>
      </MenuItems>
    </Menu>
  )
}

const MainHeader = ()=>{
  
  return (
    <div className="flex mx-40 justify-between items-center">
    <img className="w-28 px-2 py-1 mx-1 my-1" src="https://gaads.in/assets/images/logo.webp?width=100"></img>
    

    <ul className=" flex items-center px-2 py-1 mx-1 my-1">
      <li className="p-4 text-xs text-gray-900 relative group hover:cursor-pointer hover:text-themeOrange ">Home
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-themeOrange transition-all duration-200 group-hover:w-full"></span>

      </li>
      
        <li className="p-4 text-xs text-gray-900 hover:cursor-pointer hover:text-themeOrange"><HeaderDropdowns values={["Clinical Research","Medical Writing","Pharmacovigilance","Business Development"]} name={"Courses"}/></li>
      <li className=" relative p-4 text-xs text-gray-900 group hover:cursor-pointer hover:text-themeOrange">Webinar
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-themeOrange transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="p-4 text-xs text-gray-900 relative group hover:cursor-pointer hover:text-themeOrange">Advisory Board
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-themeOrange transition-all duration-200 group-hover:w-full"></span>

      </li>
      <li className="p-4 text-xs text-gray-900 relative group hover:cursor-pointer hover:text-themeOrange">Academic Collaboration
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-themeOrange transition-all duration-300 group-hover:w-full"></span>

      </li>
      
        <li className="p-4 text-xs group text-gray-900 "><HeaderDropdowns values={["Soft Skills Training","HR Services"]} name={"Services"}/>
         
        </li>
      
      <li className="p-3 text-xs hover:cursor-pointer hover:bg-btnHoverRed  font-bold rounded-sm text-white bg-[#f89d1b]">Join Free Demo Class</li>

    </ul>
    </div>
   
  )
}


const Header = ()=>{
    return (
        <>
        <UpperHeader/>
       <MainHeader/>
        </>
    )
}

export default Header;