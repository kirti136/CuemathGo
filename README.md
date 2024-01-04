# Cuemath Go! - React Native App

Welcome to Cuemath Go!, a mock implementation of the native app built in React Native. This project is an assignment submission showcasing the integration of various React Native features and components as outlined in the assignment.

## Overview 
Cuemath Go! replicates the design and functionality detailed in the provided [Figma](https://cuemath.notion.site/App-Assignment-Cuemath-Go-4f18089084d040d28f4f1b2ef946db55) file. It emphasizes the utilization of React Native fundamentals, Lottie Animations, Navigation, Carousel, Bottom Sheet, and Async Storage for data storage. [Short Demo](https://drive.google.com/file/d/1-5-IImx78iFFFKwpgq4SLw0RtpksV7H6/view?usp=drive_link)

## Video Walkthrough of the project
[Attach a brief video walkthrough of CUEMATH Go! application](https://drive.google.com/file/d/1sZ7MClYNssbrFRp49XU-4LkfhleM2buj/view?usp=drive_link)

## Features

 - UI Implementation based on the provided Figma design.
 - Integration of Lottie animations:
    - [one-line-wonder-lottie.json](https://file.notion.so/f/f/81d99e49-098d-47e2-b832-3ea5fb19e43d/26afd220-091b-4fd8-a010-4368c5e52472/one-line-wonder-lottie.json?id=83a4cb60-4001-4513-a73e-0e11fbfc1716&table=block&spaceId=81d99e49-098d-47e2-b832-3ea5fb19e43d&expirationTimestamp=1703109600000&signature=2Adme0fz1pwWCJzBuTgHjtDAmAeUbmzm1ZtKOVxXTAk&downloadName=one-line-wonder-lottie.json)
    - [cts-lottie. json](https://file.notion.so/f/f/81d99e49-098d-47e2-b832-3ea5fb19e43d/ca3d3bb9-ef63-4fc2-8884-05d09d4127e8/cts-lottie.json?id=4612d6c1-54da-4db9-9806-027ee497af7d&table=block&spaceId=81d99e49-098d-47e2-b832-3ea5fb19e43d&expirationTimestamp=1703109600000&signature=pKK5tQzBtASULujDlJ9zCE_JM5uo9zHV3pvXu8vbc0Y&downloadName=cts-lottie.json)
    - [no-attack-knight-bishop.json](https://file.notion.so/f/f/81d99e49-098d-47e2-b832-3ea5fb19e43d/5cc6d9d2-8b84-47cc-a9e8-eada679e9f2b/no-attack-knight-bishop.json?id=1f9edaae-a7ba-419d-822c-7ccd35dac2eb&table=block&spaceId=81d99e49-098d-47e2-b832-3ea5fb19e43d&expirationTimestamp=1703109600000&signature=4IIF10P0SIA4t0h99qgiZ0CujRkv28iOnY3H-CE8C6g&downloadName=no-attack-knight-bishop.json)
 - Mock data handling via local storage.
 - Navigation setup for smooth transition between screens.
 - Utilization of carousel and bottom sheet components.



## Installation
- Detailed instructions on how to install, configure, and get the project running
- Open git bash and enter the following commands:-

```bash
  git clone https://github.com/kirti136/CuemathGo.git

  npm install
```

#### Download:

- Android Users: [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

- IOS Users: [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779)

```bash
  npx expo start
```
- Scan the QR code using the previously installed Expo Go application, and the application will be visible to you.


## Screenshots

- **Home Screen:** This component showcases a simple interface with two interactive buttons for "Signup" and "Login," allowing users to navigate between different authentication flows within the mobile application.
 
- **Signup Screen:** This is a form-based interface allowing new users to register for the application. It provides input fields for essential user information and performs real-time error validation, ensuring data accuracy. Upon successful completion, users can create their account by clicking the "Create Account" button, which is then stored in local storage with the key "UserData" and it leads to the Login screen, providing a smooth and intuitive registration experience.

![App Screenshot](https://github.com/kirti136/CuemathGo/blob/main/assets/GitImages/01.png?raw=true)

- **Login Screen:** This component serves as the entry point for existing users to access the application by providing their registered Email ID and Password. It verifies user credentials against the stored user information in local storage and grants access upon successful authentication. The interface is designed with input fields for login credentials, error handling for invalid login attempts, and a "Login" button for user authentication, ensuring a straightforward and secure login experience.

- **Dashboard Screen:** The DashboardScreen component displays essential user information like email and profile image alongside a logout button. It dynamically fetches user details from local storage, showcasing personalized data. Additionally, it integrates a carousel of Lottie animations via the CarouselLottie component, allowing users to navigate through distinct animated slides, each triggering unique actions like launching a web view or revealing a bottom sheet. This combination creates an engaging and visually appealing dashboard interface within the application.

![App Screenshot](https://github.com/kirti136/CuemathGo/blob/main/assets/GitImages/02.png?raw=true)

![App Screenshot](https://github.com/kirti136/CuemathGo/blob/main/assets/GitImages/03.png?raw=true)


## Technology Stack
List of the technologies used in the project.

- React Native            
- Babel
- Expo
- Node.js
- Javascript
- Other libraries/modules
