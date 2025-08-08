import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "./MealDetails";

const MealItem = (props) => {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetails', {
    mealId: props.id,
  });
}
 

  return (
    <View style={styles.mealItem}>
      <Pressable 
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: props.imageUrl }} style={styles.image}/>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails 
            duration={props.duration}
            affordability={props.affordability}
            complexity={props.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: .35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#5c2c02',
    margin: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  }, 
  buttonPressed: {
    opacity: 0.5,
  }

})