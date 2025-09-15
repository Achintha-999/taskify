import React, { useState } from "react";
import {
    Pressable,  Text,  TextInput,
    View, StyleSheet,  Image,  Platform,  KeyboardAvoidingView,
} from "react-native";
import {
    AlertNotificationRoot,
    Toast,
    ALERT_TYPE,
} from "react-native-alert-notification";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PUBLIC_URL = "https://07c6ad2704d0.ngrok-free.app";

export default function SignInScreen({ navigation }: any) {
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");

    const handleSignIn = async () => {
        const loginDetails = { email: getEmail, password: getPassword };

        try {
            const response = await fetch(PUBLIC_URL + "/ToDo/SignIn", {
                method: "POST",
                body: JSON.stringify(loginDetails),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                const json = await response.json();
                if (json.status) {
                    Toast.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: "Success",
                        textBody: "Login successful!",
                    });
                    navigation.navigate("Tasks", { loggedUser: json.user });
                } else {
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: "WARNING",
                        textBody: json.message,
                    });
                }
            } else {
                Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "Login failed!",
                });
            }
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: "Network Error",
                textBody:
                    "Unable to connect to the server. Please try again later.",
            });
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            extraScrollHeight={20}
            keyboardShouldPersistTaps="handled"
        >
            <AlertNotificationRoot>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                    style={{ flex: 1 }}
                >
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require("../../assets/logo.png")}
                        />
                    </View>

                    <Text style={styles.headerText}>Welcome Back!</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            inputMode="email"
                            style={styles.input}
                            placeholder="Enter your email"
                            onChangeText={setEmail}
                            value={getEmail}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            placeholder="Password"
                            onChangeText={setPassword}
                            value={getPassword}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable style={styles.button} onPress={handleSignIn}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </Pressable>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.createButton}
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            <Text style={styles.btnText}>Create Account</Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </AlertNotificationRoot>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f9f9f9",
        padding: 24,
        justifyContent: "center",
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    logo: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 30,
    },
    inputContainer: {
        marginVertical: 10,
        width: "100%",
    },
    label: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        height: 50,
        paddingLeft: 15,
        borderColor: "#ccc",
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    btnContainer: {
        width: "100%",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    createButton: {
        backgroundColor: "#28A745",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
