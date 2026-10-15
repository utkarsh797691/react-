import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";

const SESSION_KEY = "chatapp_demo_session";

function readSession() {
  try {
    const value = sessionStorage.getItem(SESSION_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export default function App() {
  const [user, setUser] = useState(readSession);

  function signIn(nextUser) {
    // UI demonstration only. Real authentication belongs in Django/DRF.
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }

  function signOut() {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/chat" : "/login"} replace />} />
        <Route path="/login" element={user ? <Navigate to="/chat" replace /> : <Login onLogin={signIn} />} />
        <Route path="/register" element={user ? <Navigate to="/chat" replace /> : <Register />} />
        <Route path="/chat" element={user ? <Chat user={user} onLogout={signOut} /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
