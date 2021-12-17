import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { getPokemonsFavoriteApi } from '../api/favorite'

export default function Favorite() {

  const checkFavorites = async () =>  {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  }

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  )
}
