import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap
    items-center max-xl:flex-col-reverse
    gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2
          className="mt-10 
        font-palanquin text-4xl
        capitalize font-bold lg:max-w-lg"
        >
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a transformative shopping journey filled with unbeatable
          deals. Discover premier selections and enjoy incredible savings, all
          while experiencing unparalleled value that distinguishes us from the
          competition.{" "}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Explore a world of possibilities tailored to meet your unique desires,
          exceeding even your highest expectations. Your experience with us is
          truly exceptional.
        </p>
        <div className="mt-1 flex flex-wrap gap-4">
          <Button label="View Details" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            border-color="border-slate-gray"
            textColor="text-slate-gray"
            />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
