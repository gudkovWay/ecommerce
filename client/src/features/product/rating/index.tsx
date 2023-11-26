import Image from "next/image";

type renderRatingProps = {
  rating: number;
};
const renderRating: React.FC<renderRatingProps> = ({ rating }) => {
  const filled = "/ratings/star__active.svg";
  const half = "/ratings/star__half.svg";
  const empty = "/ratings/star__inactive.svg";

  return Array(5)
    .fill(null)
    .reduce(
      (acc, _, i) => [
        ...acc,
        <Image
          key={i}
          src={i < rating ? filled : i === rating ? half : empty}
          alt="star"
          width={16}
          height={16}
        />,
      ],
      [],
    );
};

export default renderRating;
