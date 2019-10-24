### Elegant React Native ( WIP ) - RN 0.61.2



### Installation

Install [React Native] cli and requirements

```sh
git clone https://github.com/iran-react-community/elegant-react-native.git
cd elegant-react-native
```
```sh
yarn
nano app.json /* here we go to edit project name and displayName */
cp .env.example .env /* some ENV stuff? I hope I can remove it smdy! */
react-native eject /* generate ios and android folders */
react-native link /* add app/assets/fonts and react-native-vector-icons  */
cd ios && pod install && cd ../ && yarn ios
yarn android /* android */
```
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


License
----

MIT


**Free Software, Hell Yeah!**

   [React Native]: <https://facebook.github.io/react-native/docs/getting-started>
   [React Native Gesture Handler (Android) ]: <https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html#android>
   [React Native RTL Support]: <https://facebook.github.io/react-native/blog/2016/08/19/right-to-left-support-for-react-native-apps#making-an-app-rtl-ready>
   [on Trello]: <https://trello.com/b/51mP8jB1/elegant-react-native>
   [Invitation Link]: <https://trello.com/invite/b/51mP8jB1/f66ec266f4d71ac3ae8d2b6d21b9c32f/elegant-react-native>
