function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row md:items-start md:justify-center mt-10 md:gap-x-5 lg:gap-x-16 md:px-16 min-h-[80vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-32 h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center">
          <img src="#" alt="profile-picture" />
        </div>
        <h2 className="text-white font-black text-nowrap lg:text-2xl pt-2 pb-5 md:pt-5 md:pb-0">
          GEVER RODRIGUEZ
        </h2>
      </div>
      <p className="text-white text-sm md:text-lg lg:text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi
        ullam, quos, omnis earum repellendus neque odit cumque totam, voluptatum
        explicabo voluptatem a dolor atque eum excepturi autem illo iusto.
        ullam, quos, omnis earum repellendus neque odit cumque totam, voluptatum
      </p>
    </div>
  );
}

export default Hero;
