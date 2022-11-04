import React from 'react';

function Section2() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex w-full space-x-10 justify-between">
          <article className="">
            <h3 className="text-3xl font-semibold pb-5">
              Ultimate ride Experience
            </h3>
            <p className="text-xl w-3/4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              similique.
            </p>
            <ul className="pt-10 list-disc ml-10 space-y-3 text-xl">
              <li>User friendly</li>
              <li>Domestic Access</li>
              <li>Fast and safe</li>
            </ul>
          </article>
          <figure className="flex-none">
            <img
              src="https://images.unsplash.com/photo-1542842863-a7d467653530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRheGl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="taxi"
              className="h-[500px] w-[500px] object-cover rounded-lg"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Section2;
