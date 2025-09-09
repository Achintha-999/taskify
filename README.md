# 📝 Taskify

**Taskify** is a simple and intuitive React Native To-Do app that helps users manage their tasks efficiently. With features like adding, editing, and deleting tasks, Taskify ensures you stay organized and productive. The app also supports user authentication and stores tasks locally using `AsyncStorage`.

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


Install a mobile emulator or use a physical device with the Expo Go app.

2️⃣ Clone the Repository


git clone https://github.com/your-username/taskify.git
cd taskify


3️⃣ Install Dependencies
npm install

4️⃣ Start the Development Server
npm install


This will open the Expo Developer Tools in your browser. You can scan the QR code with your device or run the app on an emulator.

🏃‍♂️ How It Works
Sign In:

Enter your email and password to log in.
If the credentials are valid, you'll be redirected to the task list screen.
Task Management:

Add a new task by typing in the input field and pressing the + button.
Mark tasks as completed by tapping on them.
Delete tasks by pressing the delete icon.
Persistent Storage:

Tasks are saved locally using AsyncStorage, so they remain even after the app is closed.
Logout:

Press the logout button to return to the sign-in screen.
📂 Project Structure
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


🌟 Features in Progress
🔔 Push notifications for task reminders.
🌐 Backend integration for syncing tasks across devices.
🎨 Dark mode support.
🤝 Contributing
Contributions are welcome! If you'd like to contribute to Taskify, please follow these steps:

Fork the repository.
Create a new branch:
git checkout -b feature-name

Make your changes and commit them:
git commit -m "Add feature-name"

Push to your forked repository:
git push origin feature-name

Open a pull request.
📜 License
This project is licensed under the MIT License.

🙌 Acknowledgments
Thanks to the React Native community for their amazing tools and libraries.
Icons by FontAwesome.
