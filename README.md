### Elegant React Native ( WIP ) - RN 0.63.2
### Installation

First, make sure you Installed [React Native] cli and its requirements according to Facebook Docs.

  1. Clone the project:

     ```shell script
     git clone https://github.com/iran-react-community/elegant-react-native.git
     cd elegant-react-native
     ```

  2. Add your desired name:

     Open `app.json` **file where you can edit your project name and displayName.**

  3. Eject:

     Now run `react-native eject` **To generate ios and android folders**

  4. Linking the vector icons:

     `react-native link` **this will add app/assets/fonts and react-native-vector-icons**

  5. Install the iOS dependencies:

     ```cd ios && pod install && cd ..```

  6. Run the project:

     - `yarn ios` to **Run Ios development**

     - `yarn android` to **Run Android development**

### Fix probable issues

 - Android: For some unknown reason the latest React-Native version has an incompatible Gradle version, so for fixing the issue follow [this Stack Overflow] answer.
 - iOS: If you do not link the `vector icons` it doesn't work, if you link it then you cannot have an iOS build, so link it and then open the Xcode with double-click the `{projectName}.xcworkspace`, then in the `Build phase > [CP] Copy Pods Resources` delete all outputs. after it the `yarn ios` will work properly. 

### Additional Steps

- [React Native Gesture Handler (Android) ]
- [React Native RTL Support]

### Enable Hermes

Edit your `android/app/build.gradle` file and make the change illustrated below:

```sh
  project.ext.react = [
      entryFile: "index.js",
-     enableHermes: false  // clean and rebuild if changing
+     enableHermes: true  // clean and rebuild if changing
  ]
```

```sh
cd android && ./gradlew clean && cd ../  && yarn android
```

### Todo then

- Add Customizable Theme and Dark Mode
- Auto Eject after Initialize Project
- Turn Elegant to a React Native Template
- Offline Management
- Web - SPA/SSR
- Tests
- Docs

### Contribution

- Todos [on Trello] ( [Invitation Link] )
- Open an issue
- Fork
- Send PR

## License

MIT

**Free Software, Hell Yeah!**

[react native]: https://facebook.github.io/react-native/docs/getting-started
[react native gesture handler (android) ]: https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#android
[react native rtl support]: https://facebook.github.io/react-native/blog/2016/08/19/right-to-left-support-for-react-native-apps#making-an-app-rtl-ready
[on trello]: https://trello.com/b/51mP8jB1/elegant-react-native
[invitation link]: https://trello.com/invite/b/51mP8jB1/f66ec266f4d71ac3ae8d2b6d21b9c32f/elegant-react-native
[this Stack Overflow]: https://stackoverflow.com/a/62302375/6877799
