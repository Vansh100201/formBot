import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import Workspace from "./pages/Workspace";
import PostLogin from "./pages/PostLogin";
function App() {
return (
<div className="App">
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login />} />
<Route path="/postlogin" element={<PostLogin />} />
<Route path="/signup" element={<Signup />} />
<Route path="/settings" element={<Settings />} />
<Route path="/workspace" element={<Workspace />} />
</Routes>
</BrowserRouter>
</div>
);
}
export default App;