### Installation

Install [React Native] cli and requirements

```sh
$ git clone https://github.com/ramyareye/elegant-react-native.git
$ cd elegant-react-native
$ yarn
$ nano app.json /* here we go to edit project name and displayName */
$ react-native eject
$ react-native link /* check additional steps first */
$ react-native link lottie-ios /* WT! */
$ react-native run-ios / run-android
```

### Additional Steps
  - [React Navigation]
  - (IOS only) Open ios folder in Xcode > General > Embedded Binaries > add Lottie.framework

# Todo

  - Test
  - Hooks
  - Documents  
  - Authentication flow
  - Error Handling
  - Check Internet Connection Startup
  - Branches based on different routing strategies
  - Api Integration (gate)
    - I'm thinking of an standard to support Rest, GraphQl, Firebase, Parse, AWS and ...  

License
----

MIT


**Free Software, Hell Yeah!**

   [React Native]: <https://facebook.github.io/react-native/docs/getting-started>
   [React Navigation]: <https://reactnavigation.org/>
   [NativeBase]: <https://github.com/GeekyAnts/NativeBase>
   [todo]: <https://github.com/marudy/react-native-responsive-screen>
   [todo]: <https://github.com/rgommezz/react-native-offline>
   [todo]: <https://medium.com/@abhisheknalwaya/react-native-deep-linking-for-ios-and-android-d33abfba7ef3>
   [improvement]: <https://github.com/onoufriosm/redux-setup-guide>
   [todo]: <# Elegant React Native>
