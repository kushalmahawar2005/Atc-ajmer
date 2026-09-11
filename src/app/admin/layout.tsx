import type { Metadata, Viewport } from "next";
import ServiceWorker from "@/components/layout/ServiceWorker";
import "@/styles/admin.css";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s · ATC Admin" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  // Matches the sidebar so the status bar blends in when installed.
  themeColor: "#00374C",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  // Lets the drawer and topbar reach under the notch via env(safe-area-inset-*).
  viewportFit: "cover",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* The public layout registers this too, but admins often land on
          /admin/login directly and never pass through the site shell. */}
      <ServiceWorker />
    </>
  );
}
