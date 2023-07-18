import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="lg:flex lg:justify-between h-16 text-[#14213D] lg:w-3/4 mx-auto">
      <Link
        href={"/Auth"}
        className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent] text-sm font-semibold font-poppins  text-center inline-block"
      >
        Login
      </Link>
      <div className="w-[350px] flex items-center justify-between">
        <div>
          <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent]  text-sm font-semibold font-poppins text-base-black text-left inline-block">
            About
          </button>
        </div>
        <div>
          <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent] text-sm font-semibold font-poppins text-base-black text-left inline-block">
            Events
          </button>
        </div>
        <div>
          <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent]   text-sm font-semibold font-poppins text-base-black text-left inline-block">
            Contact
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-[125px]">
        <div className=" bg-[#fca311] w-px h-[19px] w-[2px]" />
        <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent]  text-sm font-semibold font-poppins text-base-black text-left inline-block">
          Account
        </button>
      </div>

      <img
        className="absolute top-[12px] left-[12px] w-16 h-16 object-cover"
        alt=""
        src="/logodesign-1@2x.png"
      />
    </nav>
  )
}

export default Navbar