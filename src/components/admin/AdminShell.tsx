import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import type { AdminSession } from "@/lib/admin/session";

export default function AdminShell({
  session,
  title,
  subtitle,
  children,
}: {
  session: AdminSession;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="adm-shell">
      <AdminSidebar />
      <div className="adm-main">
        <AdminTopbar title={title} subtitle={subtitle} session={session} />
        <div className="adm-body">{children}</div>
      </div>
    </div>
  );
}
