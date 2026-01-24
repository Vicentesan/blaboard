import { LandingHeader } from "@/components/landing/landing-header";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
	return (
		<div className="flex min-h-screen flex-col">
			<LandingHeader />
			<main className="flex-1">
				<HeroSection />
				<FeaturesSection />
				<SocialProofSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}
