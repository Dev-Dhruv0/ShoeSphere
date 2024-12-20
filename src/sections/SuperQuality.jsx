import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import {arrowRight} from '../assets/icons';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center 
      max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="mt-10 
        font-palanquin text-4xl
        capitalize font-bold lg:max-w-lg"
        >
          We Provide You{" "}
          <span className="text-coral-red inline-block mt-3">Super</span>
          <span className="text-coral-red inline-block mt-3">
            {" "}
            Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our footwear is thoughtfully crafted to combine comfort and style,
          offering an elevated experience with exceptional quality and
          innovation, all with a touch of elegance.{" "}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our commitment to precision and quality guarantees your satisfaction.
        </p>
        <div className="mt-11">
          <Button label="Shop Now" 
          iconURL={arrowRight}/>
        </div>
      </div>
      <div
        className="flex-1 flex 
      justify-center items-center"
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
