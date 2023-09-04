# React Quiz App using useReducer

This is a simple quiz app built using React and useReducer hook.
The data folder is just a mock data containing some React Quizzes.
To create the fake API I am using [json-server](

    npm install -g json-server
    json-server --watch data/data/questions --port 8000

The app is deployed on Netlify and can be accessed [here](https://react-usereducer-tut.netlify.app/)

To run the app locally, clone the repo and run the following commands:

```bash
npm install
npm start
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
