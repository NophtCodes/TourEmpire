import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Adventure Awaits
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 mx-w-4xl">
        Experience the world with our expertly curated tours. From breathtaking
        natural wonders to vibrant cultural experiences, we've got your next
        adventure covered.
      </p>
    </div>
  );
};

export default HeroSection;
