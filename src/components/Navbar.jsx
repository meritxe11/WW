import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false); // state to manage the mobile menu
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between"> {/* width 100% of its parent container, height 4rem (64px), but when its on medium screen or larger it's set to 5 rem flex container to css felxbox layout. Items are centere, aligns flex items vertically to the center, and then with the justify, distributes space between flex items, pushing them to the edges  */}
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold"> {/* flex container, items are centered, and there is a gap of 4 between them, font size is 2xl and bold */}
        <img src="public\logo.png" className="w-8 h-8" alt="" />
        <span>lamalog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBLIE BUTTON */}
        <div className="cursor-pointer text-4xl" 
        onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "≡"}
        </div>
        {/* MOBLIE LINK LIST */}
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all esea-in-out ${open ? "-right-0"  : "-right-[100%]"}`}>
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
