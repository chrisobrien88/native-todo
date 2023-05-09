import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        
        // the style prop for pressable takes an object or a function.
        // the function is called automatically whenever the press state changes.
        // the function takes an object as an argument, which has a pressed property (this is built it).
        style={({pressed}) => pressed && styles.pressedItem}
        // or:
        // style={(myButton) => {myButton.pressed && styles.pressedItem}}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  pressedItem: {
    backgroundColor: "#dddddd",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
