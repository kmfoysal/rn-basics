import { StyleSheet, View } from "react-native";
import Home from "./components/home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
});
