import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    let profile = null;
    try {
      profile = JSON.parse(localStorage.getItem("chatapp_demo_profile") || "null");
    } catch {
      profile = null;
    }
    const name = profile?.email?.toLowerCase() === email.trim().toLowerCase()
      ? profile.fullName
      : email.trim().split("@")[0];
    // Mock login: accepts any non-empty credentials. Do not use as real auth.
    onLogin({ email: email.trim(), name, remember });
    navigate("/chat", { replace: true });
  }

  return (
    <AuthLayout mode="login">
      <section className="auth-content">
        <header className="auth-heading">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </header>

        {location.state?.registered && (
          <div className="form-success" role="status">Your account form is complete. Sign in to explore the chat demo.</div>
        )}
        {error && <div className="form-error" role="alert">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <FormField
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
          />
          <FormField
            icon={LockKeyhole}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
          />

          <div className="form-extras">
            <label className="remember-me">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span>Remember me</span>
            </label>
            <button type="button" className="text-link" onClick={() => setError("Password reset will be connected when we build the Django backend.")}>Forgot password?</button>
          </div>

          <button type="submit" className="primary-button">Login</button>
        </form>
        <p className="auth-footer">Don't have an account? <Link to="/register">Sign up</Link></p>
      </section>
    </AuthLayout>
  );
}
