import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import Image from "next/image";
import { setIsFavorite } from "@/features/drawer/favorite/favoriteDrawerSlice";
import { RootState } from "@/shared/lib/redux/store";

import styles from "./Favorite.module.scss";

interface FavoriteProps {
  type: "icon" | "text";
  id: number;
}

const Favorite: React.FC<FavoriteProps> = ({ type, id }) => {
  const dispatch = useDispatch();
  const { favoriteItems } = useSelector(
    (state: RootState) => state.favoriteDrawer,
  );

  const isFavorite =
    favoriteItems &&
    favoriteItems.find((item) => item.id === id) &&
    favoriteItems.find((item) => item.id === id).isFavorite;

  return (
    <button
      className={clsx(styles.favorite, {
        [styles.favorite__active]: isFavorite,
      })}
      onClick={() => dispatch(setIsFavorite({ id }))}
      type="button"
    >
      <Image
        src="/icons/favorite.svg"
        alt="favorite"
        width={24}
        height={24}
      />
    </button>

  )
}

export default Favorite;
