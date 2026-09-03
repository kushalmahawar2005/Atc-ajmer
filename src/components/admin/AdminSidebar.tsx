"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNav } from "@/lib/admin/nav";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="adm-side">
      <div className="adm-side-head">
        <Link href="/admin">
          <Image
            src="/images/atc-logo.png"
            alt="ATC logo"
            width={1254}
            height={1254}
            style={{ height: 40, width: "auto", borderRadius: "50%" }}
          />
        </Link>
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
  );
}
