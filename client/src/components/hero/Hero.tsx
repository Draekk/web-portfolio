function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-5 lg:gap-x-16 md:max-w-[640px]">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center">
          <img src="" alt="profile-picture" />
        </div>
        <h2 className="text-white font-black text-nowrap">GEVER RODRIGUEZ</h2>
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
