import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <div className="shell">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
