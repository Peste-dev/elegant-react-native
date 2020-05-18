### Elegant React Native ( WIP ) - RN 0.62.2
### Installation

First, make sure you Installed [React Native] cli and its requirements according to Facebook Docs.

**1 - Clone the Project**

```sh
git clone https://github.com/iran-react-community/elegant-react-native.git
cd elegant-react-native
```
```
yarn Install //Best to use Yarn.
=======
```sh
yarn
nano app.json /* here we go to edit project name and displayName */
react-native eject /* generate ios and android folders */
react-native link /* add app/assets/fonts and react-native-vector-icons  */
cd ios && pod install && cd ../ && yarn ios
yarn android /* android */
```

Open `app.json` **file where you can edit your project name and displayName.**

Now run `react-native eject` **To generate ios and android folders**

`react-native link` **this will add app/assets/fonts and react-native-vector-icons**

`cd ios && pod install && cd..`

`yarn ios` to **Run Ios development**

`yarn android` to **Run Android development**

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
