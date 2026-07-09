import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | GAMINGBANNER",
  description: "Read the privacy policy for GAMINGBANNER. Understand how we collect, store, and protect your user data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[800px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-4xl font-extrabold text-on-background">Privacy Policy</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed font-data-mono">
            Last updated: June 2025
          </p>
        </section>

        <section className="bg-surface-container/60 border border-outline-variant/50 p-lg rounded-xl flex flex-col gap-lg leading-relaxed text-sm text-outline">
          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">1. Information We Collect</h2>
          <p>
            We do not collect any personal identifier data on GamingBanner. Any gamertag alias inputted into our web customization fields is strictly processed client-side inside your browser session to render graphic preview frames, and is not stored on our databases.
          </p>

          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">2. Google AdSense</h2>
          <p>
            We use Google AdSense to serve third-party ads. Google uses cookies to serve ads based on your prior visits to our website or other sites on the Internet. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites. You can opt out of personalized advertising by visiting Ad Settings in your Google Account.
          </p>

          <h2 className="text-lg font-bold text-on-background border-l-2 border-primary-container pl-sm">3. Cookies & Tracking</h2>
          <p>
            We use cookies to analyze web traffic behaviors and optimize user experience metrics. These cookies store anonymous session IDs that contain no personal identity values.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
