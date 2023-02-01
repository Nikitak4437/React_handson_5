import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationLinks from "./pages/NavigationLinks";
import "./App.css";
import HOC_CALL from "./pages/HOC_CALL";
import Pure from "./pages/Pure";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationLinks />}>
          <Route index element={<Pure />} />
          <Route path="Hoc" element={<HOC_CALL />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
