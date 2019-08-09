### WIP
  - [Follow on Trello]

### Installation

Install [React Native] cli and requirements

```sh
git clone https://github.com/ramyareye/elegant-react-native.git
cd elegant-react-native
yarn
nano app.json /* here we go to edit project name and displayName */
react-native eject /* generate ios and android folders */
react-native link
react-native run-ios / npx jetify & react-native run-android
```

### Additional Steps
  - [React Native Gesture Handler]
  - Add this to command in android gradle.properties
    ```
    android.useAndroidX=true
    android.enableJetifier=true
    ```


License
----

MIT


**Free Software, Hell Yeah!**

   [React Native]: <https://facebook.github.io/react-native/docs/getting-started>
   [React Native Gesture Handler]: <https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html>
   [Follow on Trello]: <https://trello.com/b/51mP8jB1/elegant-react-native>
   [todo]: <# Elegant React Native>
