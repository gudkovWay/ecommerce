import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WelcomeSlider = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 4444,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        <div>
          <Image
            src="/slider/001.png"
            alt="Slider Image"
            width={1440}
            height={200}
          />
        </div>
        <div>
          <Image
            src="/slider/002.png"
            alt="Slider Image"
            width={1440}
            height={200}
          />
        </div>
      </Slider>
    </section>
  );
};

export default WelcomeSlider;
