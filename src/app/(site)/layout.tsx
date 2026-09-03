import EnquireProvider from "@/components/layout/EnquireProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LanguageProvider from "@/components/layout/LanguageProvider";
import ServiceWorker from "@/components/layout/ServiceWorker";
import SocialWidget from "@/components/layout/SocialWidget";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "@/styles/site.css";
import "@/styles/pages.css";
import "@/styles/ras-banner.css";

/** Public website chrome. The admin panel sits outside this group. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <EnquireProvider>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
          <SocialWidget />
          <WhatsAppFloat />
          <ServiceWorker />
        </div>
      </EnquireProvider>
    </LanguageProvider>
  );
}
