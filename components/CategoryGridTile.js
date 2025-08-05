import { Pressable, View, Text, StyleSheet, Platform} from "react-native";


const categoryGridTile = (props) => {
  return (
    <View style={styles.gridItemOuter}>
      <Pressable 
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} 
        android_ripple={{ color: '#ccc' }}
        onPress={props.onPress}
      >
        <View style={[styles.gridItemInner, { backgroundColor: props.color }]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default categoryGridTile;

const styles = StyleSheet.create({
  gridItemOuter: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: .25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS ==='android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },  
  buttonPressed: {
    opacity: 0.5,
  },
  gridItemInner: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});