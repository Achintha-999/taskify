# 📝 Taskify

**Taskify** is a simple and intuitive React Native To-Do app that helps users manage their tasks efficiently. With features like adding, editing, and deleting tasks, Taskify ensures you stay organized.

---

## 🚀 Features

- ✅ Add, edit, and delete tasks.
- 📋 Mark tasks as completed or pending.
- 🔒 User authentication.
- 💾 Persistent task storage using `AsyncStorage`.
- 🎨 Clean and responsive UI.

---

## 📸 Screenshots

| **Login Screen** | **Task List** | **Add Task** |
|------------------|---------------|--------------|
| ![Login](https://via.placeholder.com/150) | ![Task List](https://via.placeholder.com/150) | ![Add Task](https://via.placeholder.com/150) |

---

## 🛠️ Tech Stack

- **React Native**: For building the mobile app.
- **TypeScript**: For type safety and better development experience.
- **AsyncStorage**: For local data storage.
- **React Navigation**: For screen navigation.
- **react-native-alert-notification**: For toast notifications.
- **KeyboardAwareScrollView**: For handling keyboard interactions.

---

## 🧑‍💻 How to Run the Project

Follow these steps to set up and run the project on your local machine:

### 1️⃣ Prerequisites

- Install [Node.js](https://nodejs.org/) (v16 or higher).
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/):

  ```bash
  npm install -g expo-cli
  ```

- Install a mobile emulator or use a physical device with the Expo Go app.

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/Achintha-999/taskify.git
cd taskify
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Development Server

```bash
npm start
```

This will open the Expo Developer Tools in your browser. You can scan the QR code with your device or run the app on an emulator.

---

## 🏃‍♂️ How It Works

### Sign In

- Enter your email and password to log in.
- If the credentials are valid, you'll be redirected to the task list screen.

### Task Management

- Add a new task by typing in the input field and pressing the "+" button.
- Mark tasks as completed by tapping on them.
- Delete tasks by pressing the delete icon.

### Persistent Storage

- Tasks are saved locally using AsyncStorage, so they remain even after the app is closed.

### Logout

- Press the logout button to return to the sign-in screen.

---

## 📂 Project Structure

```
Taskify/
├── src/
│   ├── screens/
│   │   ├── SignInScreen.tsx
│   │   ├── SignUpScreen.tsx
│   │   ├── TaskListScreen.tsx
│   ├── components/
│   ├── assets/
│   │   └── logo.png
│   ├── App.tsx
├── .gitignore
├── package.json
├── README.md
```

---

## 🌟 Features in Progress

- 🔔 Push notifications for task reminders.
- 🌐 Backend integration for syncing tasks across devices.
- 🎨 Dark mode support.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to Taskify, please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add feature-name"
   ```

4. Push to your forked repository:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgments

Thanks to the React Native community for their amazing tools and libraries.  
Icons by FontAwesome.
