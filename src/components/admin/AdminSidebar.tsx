"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNav } from "@/lib/admin/nav";
import { useAdminNav } from "./AdminNav";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useAdminNav();

  return (
    <>
      {/* Only interactive while the drawer is open; inert and invisible otherwise. */}
      <div
        className={`adm-side-backdrop${open ? " is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside id="adm-sidebar" className={`adm-side${open ? " is-open" : ""}`}>
        <div className="adm-side-head">
          <Link href="/admin" onClick={() => setOpen(false)}>
            <Image
              src="/images/atc-logo.png"
              alt="ATC logo"
              width={1254}
              height={1254}
              style={{ height: 40, width: "auto", borderRadius: "50%" }}
            />
          </Link>
          <button
            type="button"
            className="adm-side-close"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>

        <nav className="adm-side-nav">
          {adminNav.map((group) => (
            <div key={group.label}>
              <div className="adm-side-label">{group.label}</div>
              {group.items.map((item) => {
                // "/admin" would otherwise match every child route.
                const active =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`adm-side-link${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                    // Navigating should take the drawer with it.
                    onClick={() => setOpen(false)}
                  >
                    <i className={item.icon} aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="adm-side-foot">
          <Link href="/" target="_blank">
            <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" /> View website
          </Link>
        </div>
      </aside>
    </>
  );
}
