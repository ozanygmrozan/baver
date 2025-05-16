import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blogs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout><Outlet /></Layout>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hizmetlerimiz" element={<AboutPage />} />
          <Route path="/hakkimizda" element={<BlogPage />} />
          <Route path="/iletisim" element={<ContactPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
