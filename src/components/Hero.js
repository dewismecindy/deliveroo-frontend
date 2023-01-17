const Hero = ({ data }) => {
  return (
    <div className="hero">
      <div className="container">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img
          src={data.restaurant.picture}
          alt="aperçu d'une assiette bien garnie"
        />
      </div>
    </div>
  );
};

export default Hero;
