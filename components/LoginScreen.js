import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.navigate("Homepage", { name, email });
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.jobizzText}>Jobizz</Text>
      <View>
        <Text style={styles.welcomeText}>Welcome Back 👋</Text>
        <Text style={styles.smallText}>Let's log in. Apply to jobs!</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={[styles.button, { height: 56, backgroundColor: "rgba(53, 104, 153, 1)" }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.belowButton}>
        <View style={styles.leftLine}></View>
        <Text style={styles.continueText}>Or continue with</Text>
        <View style={styles.rightLine}></View>
      </View>

      <View style={styles.accountIcons}>
        <Image
          source={require("../assets/images/apple.png")}
          style={styles.filterIcon}
        />
        <Image
          source={require("../assets/images/google.png")}
          style={styles.filterIcon}
        />
        <Image
          source={require("../assets/images/facebook.png")}
          style={styles.filterIcon}
        />
      </View>

      <View style={styles.belowIcons}>
        <Text style={styles.dontHaveText}>Haven't an account?</Text>
        <Text style={styles.registerText}>Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(250, 250, 253, 1)',
  },

  formContainer:{
    marginBottom: 30,
    marginTop: 50,
  },

  input: {
    height: 52,
    borderColor: "rgba(175, 176, 182, 1)",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  belowButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  leftLine: {
    backgroundColor: "black",
    width: 105,
    height: 1,
    marginRight: 10,
    backgroundColor: "rgba(175, 176, 182, 1)",
  },

  continueText:{
    color: 'rgba(175, 176, 182, 1)'
  },

  rightLine: {
    backgroundColor: "rgba(175, 176, 182, 1)",
    width: 105,
    height: 1,
    marginLeft: 10,
  },

  accountIcons: {
    display: "flex",
    flexDirection: "row",
    height: 75,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 30,
  },

  belowIcons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 70,
    marginTop: 30,
  },

  dontHaveText: {
    color: "#95969D",
    fontSize: 14,
    marginRight: 3,
  },
  registerText: {
    color: "#rgba(53, 104, 153, 1)",
    fontSize: 14,
  },

  jobizzText: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 33,
    color: "#rgba(53, 104, 153, 1)",
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 33.6,
    color: "rgba(13, 13, 38, 1)",
  },

  smallText: {
    fontSize: 14,
    color: "rgba(175, 176, 182, 1)",
    lineHeight: 22.4,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;




