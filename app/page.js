import HeroSection from "@/components/HeroSection";
import InsuranceCategories from "@/components/InsuranceCategories";
import AIAdvisorSection from "@/components/AIAdvisorSection";
import PolicyComparison from "@/components/PolicyComparison";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClaimJourney from "@/components/ClaimJourney";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InsuranceCategories />
      <AIAdvisorSection />
      <PolicyComparison />
      <WhyChooseUs />
      <ClaimJourney />
      <FinalCTA />
    </>
  );
}
