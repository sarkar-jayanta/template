# 🚀 React Native Template By Jayanta

A **React Native boilerplate** to kickstart your mobile app development faster, with preconfigured essentials like:

- 🔁 **Redux Toolkit** for scalable state management
- 📍 **React Navigation** for robust navigation
- 🗂️ Scalable **folder structure**
- 🧰 Common **utility functions**
- 📦 Pre-installed **useful dependencies**
- ⚙️ Optimized project setup for faster development

---

## 📦 Features

- ✅ **Redux Toolkit** with example slices and hooks
- ✅ **React Navigation** with Stack & Tab Navigator setup
- ✅ **Custom folder structure** for features, utils, navigation, etc.
- ✅ **Useful helpers** like debouncers, formatters, logger
- ✅ **Theme support** and central style management
- ✅ **Pre-configured TypeScript** and ESLint
- ✅ **Common third-party libraries installed**
  - `axios`
  - `react-native-vector-icons`
  - `react-native-safe-area-context`
  - `react-native-gesture-handler`
  - `@react-navigation/*`
  - `@reduxjs/toolkit`
  - `react-redux`
  - And more...

---

## 📁 Folder Structure

```
template/
├── src/
│   ├── assets/          # Images, fonts, icons
│   ├── components/      # Reusable UI components
│   ├── navigation/      # Stack/Tab navigation setup
│   ├── redux/           # Redux Toolkit setup (store, slices)
│   ├── screens/         # App screens
│   ├── services/        # API and external services
│   ├── utils/           # Helper functions
│   └── theme/           # Colors, typography, spacing
├── App.tsx              # Entry point
└── template.config.js   # RN template config
```

---

## 🚀 Getting Started

### Create a New Project Using This Template

```bash
npx @react-native-community/cli init MyApp --template @jayanta-sarkar/template
```

> Replace `MyApp` with your app name.

---

## 🔧 Project Setup

1. Navigate into your project:

   ```bash
   cd MyApp
   ```

2. Install dependencies (if not already):

   ```bash
   npm install
   ```

3. Install iOS pods (Mac only):

   ```bash
   cd ios && pod install && cd ..
   ```

4. Start Metro server:

   ```bash
   npx react-native start
   ```

5. Run the app:

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

---

## 🧠 Usage Instructions

### 📌 Redux Toolkit

1. The Redux store is already configured in `src/redux/store.ts`.
2. To access a slice:

```tsx
// src/screens/HomeScreen.tsx
import { useAppSelector, useAppDispatch } from "../redux/store";
import { increment } from "../redux/slices/counterSlice";

const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();

<Button title="Increment" onPress={() => dispatch(increment())} />;
```

---

### 🌐 Navigation

1. Defined in `src/navigation/` using React Navigation.
2. Navigate between screens:

```tsx
navigation.navigate("DetailsScreen");
```

3. Register new screens in `RootNavigator.tsx`.

---

### 🧰 Utility Functions

Use helpful utility functions from `src/utils/`:

```tsx
import { debounce } from "../utils/debounce";
import { formatDate } from "../utils/dateUtils";
```

---

## 🪄 Customization Tips

- Add new slices under `redux/slices`
- Add new API services under `services/`
- Organize screens under `screens/FeatureName/`
- Keep shared components in `components/`

---

## 🤝 Contributing

Feel free to fork this template and customize it to fit your own style! Pull requests welcome.

---

## 📜 License

MIT © [Jayanta Sarkar](https://github.com/sarkar-jayanta)
