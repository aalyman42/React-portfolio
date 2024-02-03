import { Outlet } from "react-router-dom";
import Nav from "./elements/nav";
import Footer from "./elements/footer";

function App() {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
}
export default App;
