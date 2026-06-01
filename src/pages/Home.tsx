import Header from "../components/Header";
import LogoLoop from "../components/LogoLoop";
import { techLogos } from "../data/techLogos";


export default function Home() {
  return (
    <>
      <Header />
      <div
        className="mt-10 mb-15"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={50}
          gap={80}
          scaleOnHover
          fadeOut
          fadeOutColor="#111"
        />
      </div>
    </>
  );
}
