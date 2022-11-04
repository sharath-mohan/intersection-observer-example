import React, { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';

function Header() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setisIntersecting] = useState(false);
  useEffect(() => {
    const target = heroRef.current;
    const observer = new IntersectionObserver(
      entries => {
        console.log(entries);
        setisIntersecting(entries[0].isIntersecting);
      },
      { rootMargin: '-200px 0px 0px 0px' }
    );
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <header
      className={` bg-cover relative bg-center bg-[url('https://images.unsplash.com/photo-1630202328184-900c1190b790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')] h-[70vh] md:h-[50vh]`}>
      <Nav isIntersecting={!isIntersecting} />
      <section className="container mx-auto  h-full" ref={heroRef}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-5xl text-white font-bold text-center pb-5">
            Let&apos;s Ride
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 space-x-0 md:space-y-0 md:space-x-3 mx-3 md:justify-center">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md w-full md:w-auto">
              Apply to Drive
            </button>
            <button className="px-4 py-2 bg-white rounded-md w-full md:w-auto">
              Sign up to Ride
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
