import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isPokemonFavApi,
  removePokemonFavApi
} from "../../api/favorite";

export default function Favorite({ id }) {

  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setreloadCheck] = useState(false);

  console.log(isFavorite);

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })()
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setreloadCheck(!reloadCheck);
  }

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Icon
        name="heart"
        color="#fff"
        size={20}
        solid={isFavorite}
        onPress={ isFavorite ? removeFavorite : addFavorite }
        style={{ marginRight: 20 }}
      />
    </>
  );
}
