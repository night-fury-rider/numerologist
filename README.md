# Numerologist

It is a React Native app developed for numerology assist. It provides personalized numerology readings and insights based on your birthdate and name to help guide your life decisions and reveal hidden patterns.

This app has following features:

<pre>
✔️ Know the Lucky Name Number.
✔️ Know your Mulyank (Life Path Number)
✔️ Know your Bhagyank (Destiny Number)
</pre>

<p>
  <pre> <img src="https://github.com/user-attachments/assets/17b29f5d-56d1-4b9a-8f62-ac48cf204628" width="200" height="400" alt=""/>  <img src="https://github.com/user-attachments/assets/4ff3a21f-8dd9-4d06-91c3-3671ea47274b" width="200" height="400" alt=""/>  <img src="https://github.com/user-attachments/assets/a471e8d8-d86e-4fbb-aa80-1ffb1b0a1a32" width="200" height="400" alt=""/></pre>
</p>
---

# Technologies and Libraries Used

| Library                                                                              | Version |
| ------------------------------------------------------------------------------------ | ------- |
| [React Native](https://reactnative.dev/)                                             | v0.82   |
| [React](https://reactjs.org/)                                                        | v19     |
| [React Native Paper](https://callstack.github.io/react-native-paper/)                | v5      |
| [React Native Date Picker](https://github.com/henninghall/react-native-date-picker)  | v5      |
| [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons) | v10     |
| [React Native MMKV](https://github.com/mrousavy/react-native-mmkv)                   | v4      |
| [Babel Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)  | v5      |

---

## ⚙️ Prerequisites

| Tool             | Version    |
| ---------------- | ---------- |
| Node.js          | >= 22.13.0 |
| React Native CLI | Latest     |
| Android Studio   | Latest     |
| JDK              | 17         |

---

<br />

### Install dependencies

```bash
npm install
```

### Create the dev build

```
npm run mode:sandbox
```

### Create the prod build

```
npm run mode:prod
```

### Install the app

```
npm run android
```

### Export Source Files to build_src

```
npm run export-src
```

# Enable Wireless hot reload

- Run `adb devices` to get Mobile device name.
- Run `ipconfig` to get the IP (v4).
- Connect mobile to laptop via USB cable.
- Install the app

```
npm android
```

- Disconnect mobile from USB. Metro bundler will be disconnected.
- Shake the mobile to open the React Native Dev menu. Select Settings. Open Debug server host & port for device.
- Enter IP v4 (from step 1) and port number (Generally 8081). Ex. `172.1.1.2:8081`
- Shake the mobile to open the React Native Dev menu .
- Select Reload. Now hot reload should work.

---

# Create the release build

https://github.com/night-fury-rider/react-native-template/wiki/Create-the-release-build

---

# Deploy the App on Play Store

https://github.com/night-fury-rider/react-native-template/wiki/Deploy-the-App-on-PlayStore

---

# Disclaimer

I don't personally believe in numerology, but I created this app for those who do.
