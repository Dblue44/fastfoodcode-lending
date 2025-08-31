import {Header} from "@shared/ui/header";
import {Hero} from "@widgets/hero";
import {HowItWorks} from "@widgets/howItWorks";
import {Benefits} from "@widgets/benefits";
import {Comparison} from "@widgets/comparison";
import {Features} from "@widgets/features";
import {Pricing} from "@widgets/pricing";
import {Recommendations} from "@widgets/recommendations";
import {FinalCta} from "@widgets/finalCta";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Features />
      <Pricing />
      <Recommendations />
      <FinalCta />
    </>
  )
}