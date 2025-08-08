import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/subTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/ui/IconButton";


const MealDetailScreen = ({ route,navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('pressed');
  }


  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
          onPress={headerButtonPressHandler}
          icon='star'
          color='white'
        />
      }
    })
  },[navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContaier}>
      <Image source={{uri: selectedMeal.imageUrl }} style={styles.image}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle ={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContaier: {
    marginBottom: 32,
  },  
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  textStyle: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listInnerContainer: {
    maxWidth: '80%',
  }

})