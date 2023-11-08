import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';

export default function BreakfastScreen({ route }) {
  const { breakfastData } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{breakfastData.name}</Text>
      <Image source={{ uri: breakfastData.image }} style={styles.image} />
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <Text style={styles.ingredients}>{breakfastData.ingredients}</Text>
      <Text style={styles.recipeTitle}>Recipe:</Text>
      <Text style={styles.recipe}>{breakfastData.recipe}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 16,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipe: {
    fontSize: 16,
  },
});
