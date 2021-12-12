import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList({pokemons, loadPokemons, isNext}) {

  const loadMore = () => {
    loadPokemons();
  }

  //data -> es un array
  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={ isNext&& loadMore}
      onEndReachedThreshold={0,1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.spinner}/>
        )
      }
    />
  )
}


const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 60 : 60,
  }
})