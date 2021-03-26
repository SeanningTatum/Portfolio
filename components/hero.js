function Hero() {
  return (
    <div className="max-w-2xl flex-1">
      <p className="mb-2 lg:mb-6 text-lg font-light">Greetings 🖖, My name is</p>
      <h1 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6 ">
        Sean Stuart Urgel
        {' '}
        <span className="hidden sm:inline">👨‍💻</span>
        {' '}
      </h1>
      <p className="font-light text-lg mb-4">
        I'm a
        {' '}
        <span className="font-medium">Senior Software Engineer</span>
        {' '}
        that has worked and released apps with numerous
        startups and businesses from United States, UK, Australia, New Zealand, Singapore, China
        and Philippines.
      </p>
      <p className="font-light text-lg mb-4">
        I am also a hackathon winner, speaker and co-founder for Facebook
        Developer Group Cebu and a core member of Google Developer Group
        Cebu for Flutter.
      </p>
    </div>
  );
}

export default Hero;
