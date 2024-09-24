# Name Numerology

It is a React Native app developed for name numerology.

<p>
  <pre><img src="https://github.com/user-attachments/assets/0df5fde3-3d9b-49d9-936e-fae5289f7247" width="200" height="400" alt=""/></pre>
</p>

<br/><br/>

# Technologies and Libraries Used

- [React Native 0.75.2](https://reactnative.dev/)
- [React 18.3.1](https://reactjs.org/)
- [React Native Paper 5.12.3](https://callstack.github.io/react-native-paper/)

  <br/><br/>

# Getting Started

## Prerequisite

- Mobile with USB debugging enabled
- Mobile and laptop are on the same wifi.

## Install the app on mobile

```
yarn android
```

## Enable Wireless hot reload

- Run `adb devices` to get Mobile device name.
- Run `ipconfig` to get the IP (v4).
- Connect mobile to laptop via USB cable.
- Install the app

```
yarn android
```

- Disconnect mobile from USB. Metro bundler will be disconnected.
- Shake the mobile to open the React Native Dev menu. Select Settings. Open Debug server host & port for device.
- Enter IP v4 (from step 1) and port number (Generally 8081). Ex. `172.1.1.2:8081`
- Shake the mobile to open the React Native Dev menu .
- Select Reload. Now hot reload should work.

  <br/><br/>

# Create the release build

- Make sure that `my-upload-key.keystore` file is kept under the `android/app` directory
- Make sure that `gradle.properties` file is kept under the `.gradle` directory. In Windows, `.gradle` directory is under `C:\Users\<username>`.
- Increment `version` in `package.json`.
- Increment `versionMajor` or `versionMinor` or `versionPatch` in `android/app/build.gradle`
- Create the apk build.

```
yarn run android-build-apk
```

- Uninstall the app from device (from work profile as well if available). Connect the device using USB.
- Install the apk file onto device

```
adb -s <device_name> install android/app/build/outputs/apk/release/app-release.apk
```

- Complete the sanity testing and capture the screenshots.
- Update the screenshots in this README.
- Capture the home screen screenshot on emulator with Nexus_7_API_33.
- Capture the home screen screenshot on emulator with Nexus_10_API_33.
- Create a [release on Github](https://github.com/night-fury-rider/name-numerology/releases). Use [Github filter](https://github.com/night-fury-rider/name-numerology/compare/v0.0.1...main) for extracting data for release notes.
- Create the release build (aab build).

```
yarn run android-build
```

<br/><br/>

# Deploy the App on PlayStore

1. Login into [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. It should open the App Dashboard.
3. Select `Production` (which is under `Release`) from the sidebar.
4. Click on `Create new release` which is on the right top. It would open `Create production release`.
5. Upload the build file and follow the instructions.
   <br/><br/>


# Disclaimer
I don't believe in numerology. I have created this app for people who believe in Numerology
