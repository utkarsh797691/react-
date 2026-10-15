import React from "react";
import { Search, SquarePen } from "lucide-react";
import Brand from "./Brand";
import Avatar from "./Avatar";

export default function ChatSidebar({ contacts, activeId, onSelect, messages, search, onSearchChange, searchRef, mobileOpen }) {
  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <aside className={`chat-sidebar ${mobileOpen ? "chat-sidebar--open" : ""}`}>
      <div className="sidebar-brand-row">
        <Brand compact />
        <button className="icon-button sidebar-new-chat" type="button" aria-label="Find a new chat" title="Find a new chat" onClick={() => searchRef.current?.focus()}>
          <SquarePen size={21} strokeWidth={1.8} />
        </button>
      </div>
      <div className="chat-search">
        <Search size={20} strokeWidth={1.9} aria-hidden="true" />
        <input ref={searchRef} aria-label="Search users" type="search" placeholder="Search users..." value={search} onChange={(e) => onSearchChange(e.target.value)} />
      </div>
      <div className="contact-list" aria-label="Conversations">
        {filtered.map((contact) => {
          const history = messages[contact.id] || [];
          const last = history[history.length - 1];
          const preview = last?.text || "Start chatting";
          const previewText = last?.mine ? `You: ${preview}` : preview;
          const time = last?.mine ? last.time : contact.lastSeen;
          return (
            <button
              className={`contact-row ${activeId === contact.id ? "contact-row--active" : ""}`}
              key={contact.id}
              type="button"
              onClick={() => onSelect(contact.id)}
              aria-current={activeId === contact.id ? "true" : undefined}
            >
              <Avatar initial={contact.initial} variant={contact.avatar} />
              <span className="contact-content">
                <span className="contact-title-line"><span className="contact-name">{contact.name}</span><span className="contact-time">{time}</span></span>
                <span className="contact-preview">{previewText}</span>
              </span>
            </button>
          );
        })}
        {filtered.length === 0 && <p className="empty-search">No users found.</p>}
      </div>
    </aside>
  );
}
