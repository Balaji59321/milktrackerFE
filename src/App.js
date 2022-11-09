import "./App.css";
import Customer from "./Components/Customer";
import ResponsiveAppBar from "./Components/AppBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./Transactions";
import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/record" element={<Customer />} />
        <Route exact path="/history" element={<Transactions />} />
        <Route exact path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
