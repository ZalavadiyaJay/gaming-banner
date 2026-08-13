import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Gaming Banner",
  description: "Read the Privacy Policy for Gaming Banner. Learn how we handle client-side rendering, cookies, Google AdSense, GDPR, CCPA, and data protection.",
  alternates: {
    canonical: "https://gamingbanner.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-[960px] mx-auto flex flex-col gap-8 text-on-background">
        {/* Header */}
        <section className="text-center py-6 border-b border-outline-variant/60 flex flex-col items-center gap-2">
          <span className="text-xs font-bold font-data-mono text-primary-container uppercase tracking-widest bg-primary-container/10 border border-primary-container/20 px-3 py-1 rounded-full">
            Legal Transparency
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-on-background tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs md:text-sm text-outline font-data-mono">
            Last Updated: August 2026 • Effective Date: January 1, 2025
          </p>
        </section>

        {/* Content Body */}
        <div className="bg-surface-container/60 border border-outline-variant/50 p-6 md:p-10 rounded-2xl flex flex-col gap-8 leading-relaxed text-sm text-outline">
          
          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              1. Overview & Commitment to Privacy
            </h2>
            <p>
              Welcome to <strong>Gaming Banner</strong> (accessible at <Link href="https://gamingbanner.com" className="text-primary-container underline">https://gamingbanner.com</Link>). We respect your privacy and are committed to protecting it through transparent data practices. This Privacy Policy explains the types of information we collect, how we use and safeguard that information, and your rights under applicable privacy laws, including the European Union General Data Protection Regulation (<strong>GDPR</strong>) and the California Consumer Privacy Act (<strong>CCPA/CPRA</strong>).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              2. Client-Side Processing (No Gamertag Storage)
            </h2>
            <p>
              GamingBanner is built on a <strong>privacy-first, client-side architecture</strong>. When you input your gamertag, clan tag, social handles, or customize font colors inside our banner studio:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li>All text rendering, color layering, font styling, and 4K canvas drawing are executed entirely inside your local web browser session via HTML5 Canvas.</li>
              <li>Your custom gamertags, channel names, and downloaded images are <strong>never transmitted to, stored on, or harvested by our backend servers or databases</strong>.</li>
              <li>We do not require account registration, email sign-ups, or social logins to create or download banners.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              3. Google AdSense & Advertising Cookies (DART Cookies)
            </h2>
            <p>
              We use <strong>Google AdSense</strong> and other certified third-party advertising partners to serve ads when you visit our website. Google, as a third-party vendor, uses cookies to serve advertisements tailored to user interests:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li><strong>DART Cookie:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visits to GamingBanner and other websites across the Internet.</li>
              <li><strong>Third-Party Vendors:</strong> Third-party vendors and ad networks may also use cookies, web beacons, and JavaScript to measure the effectiveness of their advertisements and personalize the advertising content you see.</li>
              <li><strong>Opting Out of Personalized Ads:</strong> You may opt out of personalized Google advertising at any time by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary-container underline">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-container underline">AboutAds.info</a>.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              4. Cookies, Web Beacons & Analytics
            </h2>
            <p>
              Like most professional web applications, GamingBanner uses standard browser cookies and local storage tokens to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li>Save your UI theme preferences and recent tool state.</li>
              <li>Analyze aggregate website traffic patterns, visitor counts, and page load performance through privacy-conscious web analytics.</li>
            </ul>
            <p>
              You can choose to disable cookies through your individual browser settings (Chrome, Safari, Firefox, Edge). Please note that disabling essential session cookies may affect some UI interactivity.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              5. Log Files & Server Logs
            </h2>
            <p>
              GamingBanner follows standard hosting log file procedures. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and the number of clicks. This data is not linked to any personally identifiable information and is used solely for analyzing trends, administering the site, preventing DDoS abuse, and gathering broad demographic statistics.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              6. GDPR Data Subject Rights (European Economic Area)
            </h2>
            <p>
              If you reside within the European Economic Area (EEA) or UK, you possess specific data protection rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li><strong>Right to Access:</strong> You have the right to request copies of any personal data held about you.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
              <li><strong>Right to Restrict or Object to Processing:</strong> You have the right to restrict or object to the processing of your data.</li>
            </ul>
            <p>
              Because we do not store accounts, emails, or personal identification records, our data collection is limited to anonymous analytics and ad-serving cookies managed through your browser.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              7. CCPA / CPRA Privacy Rights (California Residents)
            </h2>
            <p>
              Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-on-surface-variant">
              <li>Request disclosure of the categories and specific pieces of personal data collected.</li>
              <li>Request deletion of any personal data collected about the consumer.</li>
              <li><strong>Do Not Sell My Personal Information:</strong> GamingBanner does not sell, rent, or trade your personal information to third parties.</li>
              <li>Non-discrimination: We will never discriminate against you for exercising your CCPA rights.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              8. Children's Online Privacy Protection (COPPA)
            </h2>
            <p>
              Protecting children's privacy online is paramount. GamingBanner does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that GamingBanner has inadvertently collected personal information of a child under 13, please contact us immediately, and we will promptly remove such information from our records.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-bold text-on-background border-l-4 border-primary-container pl-3">
              9. Contact Us & Data Inquiries
            </h2>
            <p>
              If you have any questions, suggestions, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
            </p>
            <div className="bg-surface-container-high/60 p-4 rounded-xl border border-outline-variant/40 text-xs font-data-mono">
              <p className="font-bold text-on-background">GamingBanner Editorial & Privacy Team</p>
              <p>Email: <a href="mailto:support@gamingbanner.com" className="text-primary-container underline">support@gamingbanner.com</a></p>
              <p>Website: <Link href="https://gamingbanner.com" className="text-primary-container underline">https://gamingbanner.com</Link></p>
              <p>Contact Page: <Link href="/contact" className="text-primary-container underline">https://gamingbanner.com/contact</Link></p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
