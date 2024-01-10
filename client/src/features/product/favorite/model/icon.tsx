import Icons from "@/shared/ui/icons"
import { FavoriteModelProps } from "./props"

const FavoriteModelIcon: React.FC<FavoriteModelProps> = ({className, func}) => {
  return (
    <button
      className={className}
      onClick={func}
      type="button"
    >
      <Icons iconName="favorite" />
    </button>

  )
}

export default FavoriteModelIcon
