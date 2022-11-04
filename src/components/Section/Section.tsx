import React from 'react';

function Section() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex w-full space-x-10 justify-between">
          <article className="">
            <h3 className="text-3xl font-semibold pb-5">Start your ride</h3>
            <p className="text-xl w-3/4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              dolore atque ipsam perspiciatis minima rerum, officia delectus
              fugiat assumenda asperiores molestias iusto praesentium? Sed
              repellat architecto ratione eos aut, veniam nobis voluptas
              veritatis necessitatibus nam magni blanditiis ea atque, harum nemo
              a quae earum provident. Excepturi repellat optio sapiente ex
              nostrum ipsa nesciunt soluta aliquid necessitatibus eveniet sequi
              exercitationem accusamus eius, dolores corrupti fuga voluptates
              assumenda iure facilis saepe corporis! Reprehenderit laboriosam
              nobis mollitia labore debitis, ea blanditiis pariatur, ipsum et
              ipsa corporis tempore sit ullam nihil deserunt? Sunt molestiae
              blanditiis commodi, nemo iste quo odit dolorum quasi ea iure.
            </p>
          </article>
          <figure className="flex-none">
            <img
              src="https://images.unsplash.com/photo-1578459791933-5b6f1c48f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"
              alt="taxi"
              className="h-[500px] w-[500px] object-cover rounded-lg"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Section;
