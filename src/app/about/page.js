import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Professional Gaming Branding Made Easy | GAMINGBANNER",
  description: "Learn about GAMINGBANNER, the ultimate branding hub helping gamers, streamers, and esports clans design professional headers instantly.",
};

export default function About() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen py-24 px-xl max-w-[800px] mx-auto flex flex-col gap-xl">
        <section className="text-center py-lg border-b border-outline-variant/60 flex flex-col items-center gap-sm">
          <h1 className="text-4xl font-extrabold text-on-background">About GamingBanner</h1>
          <p className="max-w-[620px] text-sm text-outline leading-relaxed">
            The free graphic maker platform built by gamers, for gamers.
          </p>
        </section>

        <section className="flex flex-col gap-lg leading-relaxed text-sm text-outline">
          <div className="border-l-4 border-primary-container pl-lg">
            <h2 className="text-xl font-bold text-on-background">Our Story</h2>
          </div>
          <p>
            GamingBanner was launched in 2025 with a simple goal: to make professional social channel art accessible to every content creator, regardless of budget or design experience.
          </p>
          <p>
            We realized that while professional graphics tools like Photoshop offer massive design potential, they carry a steep learning curve and high license fees. Simple creators starting their streaming journeys need to bootstrap quickly. GamingBanner solves this by providing instant, safe-zone calibrated template engines that render high-res files watermark-free.
          </p>

          <div className="border-l-4 border-primary-container pl-lg mt-md">
            <h2 className="text-xl font-bold text-on-background">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {[
              { title: "Speed", desc: "Generate custom branding layouts in under 60 seconds." },
              { title: "Quality", desc: "Calibrated vectors ensuring pixel-perfect displays on mobile, tablet, and desktop." },
              { title: "Free Forever", desc: "Core template builders will remain free with absolutely zero hidden watermark charges." },
            ].map((val, idx) => (
              <div key={idx} className="p-lg bg-surface-container border border-outline-variant/40 rounded-lg">
                <span className="font-bold text-on-background text-sm">{val.title}</span>
                <p className="text-xs text-outline mt-1 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
