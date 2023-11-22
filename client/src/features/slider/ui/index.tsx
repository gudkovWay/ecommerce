import Image from "next/image";
import Slider from "react-slick";

const WelcomeSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Image
          src="/slider/001.png"
          alt="Slider Image"
          width={1440}
          height={200}
        />
      </div>
      <div></div>
    </>
  );
};

export default WelcomeSlider;
