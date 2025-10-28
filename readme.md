# 🧭 Gradient Compass App

A beautiful, minimal React Native + Expo compass app that displays your real-time heading, lets you drop GPS pins, and share or copy your location easily.

---

## ⚙️ Installation

### 1. Install dependencies
```bash
npm install
```

### 2. Start the Expo development server
```bash
npx expo start
```

### 3. Run the app
- **On Android/iOS:** Scan the QR code using the **Expo Go** app.  
- **On Web:** Runs in browser *(limited features – Share API not supported)*.

---

## 📱 Usage

### Compass Screen
See your live heading, copy/share your location, and drop pins.

### Pins Screen
View saved pins, share, or delete them.

### Each pin contains:
- 📍 Latitude & Longitude  
- 🧭 Heading (0°–360°)  
- 🌐 Human-readable cardinal direction (e.g., “NE”)  
- 🕒 Timestamp  

---

## 🧩 Folder Structure

```
📁 src/
 ┣ 📂 screens/
 ┃ ┣ 📜 CompassScreen.js     # Main compass & actions
 ┃ ┗ 📜 PinsScreen.js        # Saved pins list
 ┣ 📜 storage.js             # Local storage helpers (load/save pins)
 ┣ 📂 utils/
 ┃ ┗ 📜 geo.js               # Helper functions (cardinal direction, formatting)
```

---

## ⚠️ Notes

- The **Share API** does **not** work on Web preview (only on iOS & Android).  
- Ensure you grant **location permissions** when prompted — otherwise, heading & coordinates won’t update.  
- You can clear app storage anytime to reset saved pins.

---

## 🧑‍💻 Author

**Roni Maity**  
📧 maityroni1425@gmail.com
🐙 [@yourgithub](https://github.com/RoniMaity)

---

## 🪄 License

**MIT License © 2025** — Feel free to use and modify.
