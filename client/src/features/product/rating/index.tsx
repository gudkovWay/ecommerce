import Icons from "@/shared/ui/icons";

type renderRatingProps = {
  rating: number;
};
const renderRating: React.FC<renderRatingProps> = ({ rating }) => {
  return Array(5)
    .fill(null)
    .reduce(
      (acc, _, i) => [
        ...acc,
        <Icons key={i}  iconName={
          i < rating ? "starFill" 
          : i === rating ? "starHalf" 
          : "starEmpty"} 
        />   
      ],
      [],
    );
};

export default renderRating;
