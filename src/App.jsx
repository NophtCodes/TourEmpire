import ContactForm from "./components/ContactForm";
import FeatureSection from "./components/FeatureSection";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
