import "./App.css";
import Customer from "./Components/Customer";
import ResponsiveAppBar from "./Components/AppBar";
import { BrowserRouter, Route, Routes,Router } from "react-router-dom";
import Transactions from "./Transactions";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import HomePage from "./Components/HomePage";
import {ContextConsumer} from "./Config";

function App() {
  const {user} = ContextConsumer();
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {user && <Route exact path="/dashboard" element={<Dashboard />} />}
        {user && <Route exact path="/record" element={<Customer />} />}
        {user && <Route exact path="/history" element={<Transactions />} />}
        {user && <Route exact path="/users" element={<Users />} />}
      </Routes>
    </>
  );
}

export default App;
