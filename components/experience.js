function Experience({ work, position, duration }) {
  return (
    <div className="mb-12 md:mb-24">
      <p className="text-2xl text-pink-700">{work}</p>
      <p className="text-lg my-2">{position}</p>
      <p className="text-lg">{duration}</p>
    </div>
  );
}

export default Experience;
