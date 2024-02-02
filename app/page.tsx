import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.css';


export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-purple pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <Footer />
    </div>
  );
}