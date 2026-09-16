"use client";

import { useActionState } from "react";
import Image from "next/image";
import { login, type FormState } from "@/app/admin/actions";

const initialState: FormState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="adm-login">
      <div className="adm-login-card">
        <div className="adm-login-head">
          <Image
            src="/images/atc-logo.png"
            alt="ATC logo"
            width={1254}
            height={1254}
            priority
            style={{ height: 62, width: "auto", borderRadius: "50%" }}
          />
          <h1>Admin Panel</h1>
          <p>Sign in to manage the website</p>
        </div>

        <form action={formAction} className="adm-form">
          {state.error && <div className="adm-msg adm-msg-err">{state.error}</div>}

          <div className="adm-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              placeholder="you@atcajmer.com"
            />
          </div>

          <div className="adm-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="adm-btn adm-btn-primary" disabled={pending}>
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
