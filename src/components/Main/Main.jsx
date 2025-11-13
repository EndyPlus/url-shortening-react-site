import BoostSection from "./BoostSection";
import ShortenSection from "./ShortenSection/ShortenSection";
import StatisticsSection from "./StatisticsSection";
import WelcomeSection from "./WelcomeSection";

export default function Main() {
  return (
    <main>
      <WelcomeSection />
      <ShortenSection />
      <StatisticsSection />
      <BoostSection />
    </main>
  );
}
