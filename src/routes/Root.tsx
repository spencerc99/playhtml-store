import { playhtml } from "@playhtml/react";
import "../styles/App.scss";
import { SoundProvider } from "../context/SoundProvider";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    playhtml.init({ room: "playhtml-store" });
  }, [location.key]);
  return (
    <SoundProvider>
      <main id="contentContainer">
        <Link to="/">
          <h1>play(html)store</h1>
        </Link>

        <Outlet />
      </main>
      <footer>
        <p>
          a <a href="https://playhtml.fun">playhtml</a> store | stewarded by{" "}
          <a href="https://spencerchang.me">spencer chang</a>
        </p>
      </footer>
    </SoundProvider>
  );
}

export default App;
