import type { Metadata } from "next";
import { asc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InlineEditRow from "@/components/admin/InlineEditRow";
import ResourceForm, { type Field } from "@/components/admin/ResourceForm";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { requireAdmin } from "@/lib/admin/auth";
import { deleteUser, saveUser } from "./actions";

export const metadata: Metadata = { title: "Admin Users" };
export const dynamic = "force-dynamic";

const fields: Field[] = [
  { name: "name", label: "Full name", required: true, half: true },
  { name: "email", label: "Email address", required: true, half: true },
  { name: "role", label: "Role (admin or editor)", placeholder: "editor", half: true },
  { name: "password", label: "Password (blank keeps current)", half: true },
  { name: "active", label: "Active", type: "checkbox" },
];

export default async function UsersPage() {
  const session = await requireAdmin();
  const rows = await db.select().from(adminUsers).orderBy(asc(adminUsers.id));
  const canManage = session.role === "admin";

  return (
    <AdminShell
      session={session}
      title="Admin Users"
      subtitle="Accounts that can sign in to this panel."
    >
      {!canManage && (
        <div className="adm-msg adm-msg-err" style={{ marginBottom: 18 }}>
          Only accounts with the <strong>admin</strong> role can add or change users.
        </div>
      )}

      <div className="adm-panel">
        <div className="adm-panel-head">
          <div className="adm-panel-title">All accounts</div>
          {canManage && (
            <ResourceForm action={saveUser} fields={fields} addLabel="Add user" />
          )}
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Last login</th>
                <th>Status</th>
                {canManage && <th />}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) =>
                canManage ? (
                  <InlineEditRow
                    key={row.id}
                    id={row.id}
                    columns={6}
                    fields={fields}
                    values={{ ...row, password: "" }}
                    saveAction={saveUser}
                    deleteAction={deleteUser}
                    cells={
                      <>
                        <td>
                          <strong>{row.name}</strong>
                          {row.id === session.id && (
                            <span className="adm-muted"> (you)</span>
                          )}
                        </td>
                        <td className="adm-nowrap">{row.email}</td>
                        <td className="adm-nowrap">{row.role}</td>
                        <td className="adm-nowrap adm-muted">
                          {row.lastLoginAt
                            ? row.lastLoginAt.toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "Never"}
                        </td>
                        <td>
                          <span
                            className={`adm-badge ${row.active ? "adm-badge-on" : "adm-badge-off"}`}
                          >
                            {row.active ? "Active" : "Disabled"}
                          </span>
                        </td>
                      </>
                    }
                  />
                ) : (
                  <tr key={row.id}>
                    <td>
                      <strong>{row.name}</strong>
                    </td>
                    <td className="adm-nowrap">{row.email}</td>
                    <td className="adm-nowrap">{row.role}</td>
                    <td className="adm-nowrap adm-muted">
                      {row.lastLoginAt ? row.lastLoginAt.toLocaleDateString("en-IN") : "Never"}
                    </td>
                    <td>
                      <span
                        className={`adm-badge ${row.active ? "adm-badge-on" : "adm-badge-off"}`}
                      >
                        {row.active ? "Active" : "Disabled"}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
