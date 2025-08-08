import { View, Text, StyleSheet } from "react-native";
const SubTitle = (props) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{props.children}</Text>
    </View>
  )
}

export default SubTitle;

const styles = StyleSheet.create({
    subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#683414ff',
    borderBottomWidth: 2,
  },  
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#683414ff',
  }
})
