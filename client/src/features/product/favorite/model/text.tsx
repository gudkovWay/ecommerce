import { FavoriteModelProps } from "./props";
import Icons from "@/shared/ui/icons";

const FavoriteModelText: React.FC<FavoriteModelProps> = ({className, func}) => {
  return (
    <div className={className}>
      <Icons iconName="favorite" />
      <span onClick={func}>В избранное</span>
    </div>
  )
} 

export default FavoriteModelText
