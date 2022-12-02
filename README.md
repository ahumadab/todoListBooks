# TodoListBooks

This project is made for learning Ionic 6.

The project is built with the following stack:

- [Ionic](https://ionicframework.com/)
- [React](https://reactjs.org/) (with [Hooks](https://reactjs.org/docs/hooks-intro.html))
- [Typescript](https://www.typescriptlang.org/)

## Concept

This project is a basic "todo list" but for books, a "To read list". You can add books to read, select books you had read and add to favorites.
You'll be able to modify and delete books. You can also share these books !

The main goal is to learn Ionic concepts and to use Native Plugins.
This app uses:

- Storage Plugin
- Social Sharing Plugin

## Usage

You need to have [NodeJS 18+](https://nodejs.org/en/) installed.
You need to have [Android Studio | (Dolphin) 2021.3.1+](https://developer.android.com/studio) if you want to use it with your Android device.

### Development

```bash
# install dependencies
npm install
```

#### For Web Brower

```bash
# launch project on browser in dev environment
npm start
```

#### For Android Device

```bash
# Make sure you have Ionic CLI
npm install -g @ionic/cli

# build the project
ionic build

# add build to android package (just once, its will creat a folder in root project)
ionic capacitor add android

# if android folder is already created, type this command to update android package
ionic capacitor sync android

#Run on android device, with android studio opened
ionic capacitor run android
```

The main files are located in `src`.
