import { logout } from "@/app/admin/actions";
import type { AdminSession } from "@/lib/admin/session";

export default function AdminTopbar({
  title,
  subtitle,
  session,
}: {
  title: string;
  subtitle?: string;
  session: AdminSession;
}) {
  const initials = session.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="adm-topbar">
      <div>
        <h1>{title}</h1>
        {subtitle && <div className="adm-topbar-sub">{subtitle}</div>}
      </div>

      <div className="adm-user">
        <div className="adm-avatar">{initials}</div>
        <div>
          <div style={{ fontWeight: 600, color: "var(--text)" }}>{session.name}</div>
          <div style={{ fontSize: 11.5 }}>{session.role}</div>
        </div>
        <form action={logout}>
          <button type="submit" className="adm-btn adm-btn-ghost adm-btn-sm">
            <i className="fas fa-right-from-bracket" aria-hidden="true" /> Log out
          </button>
        </form>
      </div>
    </header>
  );
}
