function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-5 lg:gap-x-16 md:px-20 lg:px-56 xl:px-96">
      <div>
        <picture className="bg-white w-10 h-10">
          <img src="" alt="profile-picture" />
        </picture>
        <h2 className="text-white font-black">GEVER RODRIGUEZ</h2>
      </div>
      <p className="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sequi
        ullam, quos, omnis earum repellendus neque odit cumque totam, voluptatum
        explicabo voluptatem a dolor atque eum excepturi autem illo iusto.
        ullam, quos, omnis earum repellendus neque odit cumque totam, voluptatum
      </p>
    </div>
  );
}

export default Hero;
