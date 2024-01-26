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
} from "../components";

const LandingPage = () => {
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

      <Footer />
    </>
  );
};

export default LandingPage;
