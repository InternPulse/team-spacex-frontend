import {
  NavBar,
  Hero,
  Companies,
  FeaturesOne,
  BizCardList,
  FeaturesTwo,
  Testimonials,
  FAQ,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Hero />
        <Companies />
        <FeaturesOne />
        <BizCardList />
        <FeaturesTwo />
        <Testimonials />
        <FAQ />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
