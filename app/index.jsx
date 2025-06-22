import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import pinImg from "@/assets/images/post-it.png";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={pinImg} style={styles.img} />
      <Text style={styles.title}>Welcome to the Notes App</Text>
      <Text style={styles.subtitle}>Captures yous notes anywhere, anytime</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/notes')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#666",
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
