import { appDownloads } from "@/lib/home-content";

export default function AppDownload() {
  return (
    <div className="app-download">
      <h2 className="section-title">Download Our Study Apps</h2>
      <div className="app-buttons">
        {appDownloads.map((app) => (
          <a
            key={app.name}
            href={app.href}
            className="app-btn app-dl-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="app-dl-inner">
              <i className={`${app.icon} app-dl-icon`} aria-hidden="true" />
              <div className="app-dl-label">
                <span className="app-dl-sub">{app.sub}</span>
                <span className="app-dl-name">{app.name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
