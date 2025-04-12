import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Header from './header.jsx'
// import Form from './form.jsx'
// import Text from './textUpdater.jsx'
// import UserCard from './userCard.jsx'
// import Button from './Button.jsx'
// import Login from './LoginForm.jsx'
import Form, { Text, UserCard, Button, Login } from "./Assignment-3";
import Card from "./Card.jsx";
import AuthPage from "./AuthPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header/> */}
    <Form />
    <Text />
    <UserCard />
    <Button />
    <Login />
    {/* <App /> */}
    <Card />
    <AuthPage />
  </StrictMode>
);
