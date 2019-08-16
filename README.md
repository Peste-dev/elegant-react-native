### Elegant React Native ( WIP )


### Installation

Install [React Native] cli and requirements

```sh
git clone https://github.com/iran-react-community/elegant-react-native.git
cd elegant-react-native
yarn
nano app.json /* here we go to edit project name and displayName */
react-native eject /* generate ios and android folders */
react-native link /* add app/assets/fonts and react-native-vector-icons  */
cd ios && pod install && cd ../ && yarn ios
yarn android /* android */
```

### Additional Steps (Android)
Update your `MainActivity.java` file 

```sh
package com.swmansion.gesturehandler.react.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```


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
   [on Trello]: <https://trello.com/b/51mP8jB1/elegant-react-native>
   [Invitation Link]: <https://trello.com/invite/b/51mP8jB1/f66ec266f4d71ac3ae8d2b6d21b9c32f/elegant-react-native>
