import BoxMail from "./components/BoxMail";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImportantData from "./components/ImportantData";
import International from "./components/International";
import Nav from "./components/Nav";
import Out from "./components/Out";
import Services from "./components/Services";

export default function NotFound() {
  return (
    <div>
      <header>
        <BoxMail />
        <Nav />
      </header>
      <main>
        <Hero />
        <div id="home">
          <ImportantData />
        </div>
        <div className="hidden lg:block bg-blue-100" id="our">
          <Out />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="countries" className="bg-blue-100">
          <International />
        </div>
      </main>
      <footer id="contact" className="bg-sky-950 py-20">
        <Footer />
      </footer>
    </div>
  );
}
