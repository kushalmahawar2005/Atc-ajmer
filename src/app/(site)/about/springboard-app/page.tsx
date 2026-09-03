import type { Metadata } from "next";
import PageShell, { type Crumb } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Download Applications of ATC to Access Online Courses",
  description: "Download our Android IOS and Windows Applications to Access Online Courses Offered by ATC.",
  alternates: { canonical: "/about/springboard-app" },
};

const breadcrumb: Crumb[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "ATC Mobile and Desktop Applications" },
];

export default function Page() {
  return (
    <PageShell
      breadcrumb={breadcrumb}
      title="Download Our Applications"
    >
      <>
                    <div className="app-download-wrap">

                        <p className="app-download-intro">
                            Access ATC&apos;s online courses, test series, and study material on any device.
                            Choose your platform below to get started.
                        </p>

                        <div className="platform-grid">

                            
                            <a className="plat-card win" href="https://appx-content-v2.classx.co.in/windows/Springboard_Academy%20UHS5%20Setup%200.0.3%20(1).zip" aria-label="Download for Windows">
                                <i className="fab fa-windows plat-icon"></i>
                                <div>
                                    <div className="plat-sub">Download for</div>
                                    <div className="plat-name">Windows</div>
                                </div>
                            </a>

                            
                            <div className="plat-card-mac" id="macCard">
                                <button className="mac-trigger apple" id="macTrigger" aria-label="Download for Mac" aria-expanded="false">
                                    <i className="fab fa-apple plat-icon"></i>
                                    <div>
                                        <div className="plat-sub">Download for</div>
                                        <div className="plat-name">Mac</div>
                                        <div className="mac-chip-badge" id="macBadge">Intel &amp; Apple Silicon</div>
                                    </div>
                                    <i className="fas fa-chevron-down mac-chevron" id="macChevron"></i>
                                </button>

                                
                                <div className="mac-sub-panel" id="macSubPanel" role="group" aria-label="Choose Mac version">
                                    <a className="mac-sub-btn" href="https://appx-content-v2.classx.co.in/windows/Spring_Board%20Academy-0.0.1.dmg">
                                        <i className="fas fa-microchip"></i> Intel Chip
                                    </a>
                                    <a className="mac-sub-btn" href="https://drive.usercontent.google.com/download?id=11hF7B3Ghgw_kJH0VDHdQdw2DVEEmr1ef&export=download&authuser=0">
                                        <i className="fas fa-microchip"></i> Apple Chip (M1 / M2 / M3)
                                    </a>
                                </div>
                            </div>

                            
                            <a className="plat-card gplay" href="https://play.google.com/store/apps/details?id=spring.board.acs&pcampaignid=web_share&pli=1" target="_blank" rel="noopener" aria-label="Get it on Google Play">
                                <i className="fab fa-google-play plat-icon"></i>
                                <div>
                                    <div className="plat-sub">Get it on</div>
                                    <div className="plat-name">Google Play</div>
                                </div>
                            </a>

                            
                            <a className="plat-card appst" href="https://apps.apple.com/in/app/springboard-academy-jaipur/id6444765712" target="_blank" rel="noopener" aria-label="Download on the App Store">
                                <i className="fab fa-app-store-ios plat-icon"></i>
                                <div>
                                    <div className="plat-sub">Download on the</div>
                                    <div className="plat-name">App Store</div>
                                </div>
                            </a>

                        </div>
                    </div>
                
            

            </>
    </PageShell>
  );
}
