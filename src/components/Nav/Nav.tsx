import React from 'react';
interface NavProps {
  isIntersecting: boolean;
}
function Nav(props: NavProps) {
  return (
    <nav
      className={`${
        props.isIntersecting ? 'bg-white text-black shadow ' : 'text-white'
      } fixed top-0 w-full z-10 transition delay-200 ease-in-out`}>
      <div className="container mx-auto py-5 flex justify-between items-center">
        <h2 className=" font-bold text-xl">Drop Taxi</h2>
        <div>
          <ul className="flex space-x-4 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
