import { Outlet } from "react-router-dom";
import Nav from "./elements/nav";
import Footer from "./elements/footer";
import "./pages/styles/main.css";
function App() {
  return (
    <main>
      <Nav />

      <Outlet />

      <Footer />
    </main>
  );
}
export default App;
