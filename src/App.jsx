import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header />
      <main className="flex-1 container  mx-auto px-4 py-6">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
