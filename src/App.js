import "./App.css";
import Sidebar from "./components/Slidebar";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Alert from "./components/Alert";
import ClientDetail from "./components/ClientDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex-grow">
            <Navbar />
            <Alert status="success" message="This is demo alert message" />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route
                path="/clients"
                element={<DataTable title="Client Requests" />}
              ></Route>
              <Route path="/client/detail" element={<ClientDetail />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
