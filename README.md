# Numerologist

It is a React Native app developed for numerology assist.

<p>
  <pre><img src="https://github.com/user-attachments/assets/7775da0a-6bb7-42e9-8035-bf20b4f6ecdf" width="200" height="400" alt=""/>  <img src="https://github.com/user-attachments/assets/ccd8001b-6dda-4905-8526-f92660c87d0e" width="200" height="400" alt=""/>  <img src="https://github.com/user-attachments/assets/a3f544fd-6f3f-4dd1-b872-5153f7c0a161" width="200" height="400" alt=""/></pre>
</p>
***

# Technologies and Libraries Used

- [React Native 0.75.2](https://reactnative.dev/)
- [React 18.3.1](https://reactjs.org/)
- [React Native Paper 5.12.3](https://callstack.github.io/react-native-paper/)
***

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
***


# Create the release build
https://github.com/night-fury-rider/react-native-template/wiki/Create-the-release-build
***

# Deploy the App on PlayStore
1. Login into [Developer Console Account](https://play.google.com/console/developers)
2. Select the app from the App list. It should open the App Dashboard.
3. Select `Production` (which is under `Release`) from the sidebar.
4. Click on `Create new release` which is on the right top. It would open `Create production release`.
5. Upload the build file and follow the instructions.
***

# Disclaimer
I don't believe in Numerology. I have created this app for people who believe in Numerology.
