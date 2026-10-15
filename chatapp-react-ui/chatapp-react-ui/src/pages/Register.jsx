import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, UserRound } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  function changeField(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Use a password with at least 6 characters.");
      return;
    }

    // Only display name and email are stored for the UI demo; passwords aren't saved.
    localStorage.setItem("chatapp_demo_profile", JSON.stringify({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
    }));
    navigate("/login", { state: { registered: true }, replace: true });
  }

  return (
    <AuthLayout mode="register">
      <section className="auth-content">
        <header className="auth-heading auth-heading--register">
          <h1>Create an Account</h1>
          <p>Join us and start chatting</p>
        </header>
        {error && <div className="form-error" role="alert">{error}</div>}

        <form className="auth-form auth-form--register" onSubmit={handleSubmit}>
          <FormField icon={UserRound} name="fullName" placeholder="Full Name" autoComplete="name" value={form.fullName} onChange={changeField} />
          <FormField icon={Mail} type="email" name="email" placeholder="Email address" autoComplete="email" value={form.email} onChange={changeField} />
          <FormField icon={LockKeyhole} type="password" name="password" placeholder="Password" autoComplete="new-password" minLength={6} value={form.password} onChange={changeField} />
          <FormField icon={LockKeyhole} type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="new-password" minLength={6} value={form.confirmPassword} onChange={changeField} />
          <button type="submit" className="primary-button">Sign Up</button>
        </form>
        <p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p>
      </section>
    </AuthLayout>
  );
}
