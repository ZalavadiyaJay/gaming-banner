import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | GAMINGBANNER",
  description: "Read the terms of service and usage conditions for the GAMINGBANNER platform and customizer tools.",
};

export default function Terms() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[800px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-4xl font-extrabold text-on-background">Terms and Conditions</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed font-data-mono">
            Last updated: June 2025
          </p>
        </section>

        <section className="bg-surface-container/60 border border-outline-variant/50 p-lg rounded-xl flex flex-col gap-lg leading-relaxed text-sm text-outline">
          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">1. Acceptance of Terms</h2>
          <p>
            By using GamingBanner, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the platform.
          </p>

          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">2. Use of Service</h2>
          <p>
            You are granted a non-exclusive, non-transferable, revocable license to access and use GamingBanner for personal or commercial branding purposes. You may not use this service for any illegal or unauthorized activities.
          </p>

          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">3. Intellectual Property</h2>
          <p>
            All custom banner templates created by GamingBanner's design team are free to customize and download. The underlying SVG frames, web design assets, code structures, and gamepad logo outline are the exclusive intellectual property of GamingBanner.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
