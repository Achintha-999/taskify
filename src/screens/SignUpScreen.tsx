import React, { useState } from "react";
import {
  Pressable,Text, TextInput, View, StyleSheet, Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  AlertNotificationRoot,
  Toast,
  ALERT_TYPE,
} from "react-native-alert-notification";

const PUBLIC_URL = "https://5c1bee0da4b4.ngrok-free.app";

export default function SignUpScreen({ navigation }: any) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  const handleSignUp = async () => {
    const user = { fullName, username, email, password, confirmpassword };

    try {
      const response = await fetch(PUBLIC_URL + "/ToDo/SignUp", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      if (json.status) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: "Account created successfully!",
        });
        navigation.navigate("SignIn");
      } else {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Error",
          textBody: json.message,
        });
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Network Error",
        textBody: "Unable to connect to the server.",
      });
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
    >
      <AlertNotificationRoot>
        <View style={styles.subContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
          </View>
          <Text style={styles.headerText}>Create Account</Text>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              onChangeText={setFullName}
              value={fullName}
            />
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              onChangeText={setUsername}
              value={username}
            />
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              inputMode="email"
              style={styles.input}
              placeholder="Enter your email"
              onChangeText={setEmail}
              value={email}
            />
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Enter password"
              onChangeText={setPassword}
              value={password}
            />
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="Enter password"
              onChangeText={setConfirmPassword}
              value={confirmpassword}
            />
          </View>
  
          <View style={styles.btnContainer}>
            <Pressable style={styles.button} onPress={handleSignUp}>
              <Text style={styles.btnText}>Sign Up</Text>
            </Pressable>
          </View>
  
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.createButton}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.btnText}>Already have an account? Sign In</Text>
            </Pressable>
          </View>
        </View>
      </AlertNotificationRoot>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {  flex: 1, backgroundColor: "#fff", padding: 10 },
  subContainer: { padding: 20, justifyContent: "center", alignItems: "center" },
  headerText: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  inputContainer: { marginVertical: 10, width: "100%", marginBottom: 15 },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    borderWidth: 1,
    height: 50,
    paddingLeft: 10,
    borderColor: "black",
    borderRadius: 10,
    fontSize: 16,
  },
  btnContainer: { width: "100%", marginTop: 20 },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  createButton: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    height: 70,
    width: 80,
    borderRadius: 60,
  }
});
