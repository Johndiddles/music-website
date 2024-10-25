import Hero from "@/components/Home/Hero";
import LatestVideo from "@/components/Home/LatestVideo";
import SongsSection from "@/components/Home/SongsSection";

const Home = () => {
  return (
    <main className="flex flex-col w-full flex-1 pb-5">
      <Hero />
      <SongsSection />
      <LatestVideo />
    </main>
  );
};

export default Home;
