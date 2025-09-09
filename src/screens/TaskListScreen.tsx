import React, { useEffect, useState } from "react";
import {View,Text, FlatList, TextInput, Pressable,
    StyleSheet, KeyboardAvoidingView, Platform,
    Keyboard, TouchableWithoutFeedback,Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type Props = {
    route: any; 
};

export default function TaskListScreen({ route }: Props) {
    const { loggedUser } = route.params;
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");
    const navigation = useNavigation();

    const STORAGE_KEY = `tasks_${loggedUser.username}`;

    const loadTasks = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            setTasks(jsonValue != null ? JSON.parse(jsonValue) : []);
        } catch (e) {
            console.error("Error loading tasks", e);
        }
    };

    const saveTasks = async (newTasks: Task[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
        } catch (e) {
            console.error("Error saving tasks", e);
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const addTask = () => {
        if (newTask.trim() === "") return;
        const task: Task = {
            id: Date.now(),
            title: newTask,
            completed: false,
        };
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
        setNewTask("");
    };

    const toggleTask = (id: number) => {
        const updatedTasks = tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((t) => t.id !== id);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };

    const logout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "SignIn" as never }], 
        });
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.innerContainer}>

                    <View style={styles.logoContainer}>
                                <Image
                                  style={styles.logo}
                                  source={require("../../assets/logo.png")}
                                />
                              </View>
                    <Text style={styles.header}>
                        Hello, {loggedUser.username}!
                    </Text>


                    <Text style={styles.header}>
                         Here are your tasks:
                    </Text>

                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Add new task"
                            value={newTask}
                            onChangeText={setNewTask}
                            returnKeyType="done"
                            onSubmitEditing={addTask}
                        />
                        <Pressable style={styles.addButton} onPress={addTask}>
                            <Text style={styles.btnText}>+</Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.taskRow}>
                                <Pressable onPress={() => toggleTask(item.id)}>
                                    <Text
                                        style={
                                            item.completed
                                                ? styles.taskDone
                                                : styles.taskText
                                        }
                                    >
                                        {item.title}
                                    </Text>
                                </Pressable>
                                <Pressable onPress={() => deleteTask(item.id)}>
                                    <Text style={styles.deleteText}>❌</Text>
                                </Pressable>
                            </View>
                        )}
                        contentContainerStyle={styles.taskList}
                    />

                    <Pressable style={styles.logoutButton} onPress={logout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </Pressable>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {marginTop:30, flex: 1, backgroundColor: "#f9f9f9" },
    innerContainer: { flex: 1, padding: 20 },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
    },
    inputRow: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "center",
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 2,
    },
    addButton: {
        backgroundColor: "#007BFF",
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 15,
        elevation: 2,
    },
    btnText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
    taskList: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    taskRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginBottom: 10,
        elevation: 2,
        borderLeftWidth: 5,
        borderLeftColor: "#007BFF",
    },
    taskText: { fontSize: 16, color: "#333" },
    taskDone: {
        fontSize: 16,
        textDecorationLine: "line-through",
        color: "gray",
    },
    deleteText: { color: "red", fontSize: 18 },
    logoutButton: {
        backgroundColor: "#FF3B30",
        padding: 5,
        width: "30%",
        alignContent: "flex-start",
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    logoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
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
