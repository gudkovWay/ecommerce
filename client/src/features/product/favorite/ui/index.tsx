import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import Image from "next/image";
import { setIsFavorite } from "@/features/drawer/favorite/favoriteDrawerSlice";
import { RootState } from "@/shared/lib/redux/store";

import FavoriteModelIcon from "../model/icon";
import styles from "./Favorite.module.scss";
import FavoriteModelText from "../model/text";

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

  const iconClassname = clsx(styles.favorite, {
    [styles.favorite__active]: isFavorite,
  })
  const textClassname = clsx(styles.favoriteText)

  const handleIsFavorite = () => {
    dispatch(setIsFavorite({ id }))
  }

  return (
    <>
      {type === "icon" ? (
        <FavoriteModelIcon className={iconClassname} func={handleIsFavorite} />
      ) :
        <FavoriteModelText className={textClassname} func={handleIsFavorite} />
      }
    </>
  )
}

export default Favorite;
