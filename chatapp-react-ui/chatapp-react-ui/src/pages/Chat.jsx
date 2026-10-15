import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, LogOut, MoreVertical, Paperclip, Phone, Send, Smile, Video, X } from "lucide-react";
import Avatar from "../components/Avatar";
import ChatSidebar from "../components/ChatSidebar";
import MessageBubble from "../components/MessageBubble";
import { seedContacts, seedMessages } from "../data/demoData";

const STORAGE_KEY = "chatapp_demo_messages_v1";

function initialMessages() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : seedMessages;
  } catch {
    return seedMessages;
  }
}

export default function Chat({ user, onLogout }) {
  const [messages, setMessages] = useState(initialMessages);
  const [activeId, setActiveId] = useState("alice");
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [notice, setNotice] = useState("");
  const [mobileChatOpen, setMobileChatOpen] = useState(false);
  const chatEndRef = useRef(null);
  const searchRef = useRef(null);
  const attachmentRef = useRef(null);

  const contact = seedContacts.find((entry) => entry.id === activeId) || seedContacts[0];
  const currentMessages = messages[activeId] || [];

  // Whenever the array changes, persist demo messages locally.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  // Scroll to the latest message when a chat opens or receives a local message.
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [activeId, currentMessages.length]);

  function selectContact(id) {
    setActiveId(id);
    setMobileChatOpen(true);
    setShowEmoji(false);
    setShowMenu(false);
    setNotice("");
  }

  function addMessage(text, attachment = false) {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const nextMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      text,
      mine: true,
      time: formattedTime,
      attachment,
    };
    setMessages((previous) => ({
      ...previous,
      [activeId]: [...(previous[activeId] || []), nextMessage],
    }));
    setDraft("");
    setShowEmoji(false);
  }

  function handleSend(event) {
    event.preventDefault();
    if (!draft.trim()) return;
    addMessage(draft.trim());
  }

  function handleAttachment(event) {
    const file = event.target.files?.[0];
    if (file) addMessage(`Attachment: ${file.name}`, true);
    event.target.value = "";
  }

  function showComingSoon(feature) {
    setNotice(`${feature} can be added in the Django + DRF stage.`);
    setShowMenu(false);
  }

  return (
    <main className="chat-page">
      <div className="chat-app">
        <ChatSidebar
          contacts={seedContacts}
          activeId={activeId}
          onSelect={selectContact}
          messages={messages}
          search={search}
          onSearchChange={setSearch}
          searchRef={searchRef}
          mobileOpen={!mobileChatOpen}
        />

        <section className={`chat-main ${mobileChatOpen ? "chat-main--open" : ""}`} aria-label={`Conversation with ${contact.name}`}>
          <header className="chat-header">
            <button className="icon-button mobile-back" type="button" aria-label="Back to contacts" onClick={() => setMobileChatOpen(false)}><ArrowLeft size={22} /></button>
            <Avatar initial={contact.initial} variant={contact.avatar} size="header" />
            <div className="chat-header__person">
              <h1>{contact.name}</h1>
              <span className={contact.online ? "online-text" : "offline-text"}>{contact.online ? "Online" : "Offline"}</span>
            </div>
            <div className="chat-header__actions">
              <button className="icon-button" aria-label="Voice call" title="Voice call" type="button" onClick={() => showComingSoon("Voice calls")}><Phone size={21} /></button>
              <button className="icon-button" aria-label="Video call" title="Video call" type="button" onClick={() => showComingSoon("Video calls")}><Video size={22} /></button>
              <div className="header-menu-holder">
                <button className="icon-button" aria-label="More options" aria-expanded={showMenu} title="More options" type="button" onClick={() => setShowMenu((value) => !value)}><MoreVertical size={22} /></button>
                {showMenu && (
                  <div className="header-menu">
                    <div className="header-menu__account">Signed in as <strong>{user?.name || "Guest"}</strong></div>
                    <button type="button" onClick={onLogout}><LogOut size={17} /> Logout</button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {notice && <div className="chat-notice" role="status"><span>{notice}</span><button type="button" aria-label="Dismiss notice" onClick={() => setNotice("")}><X size={16} /></button></div>}

          <div className="chat-messages">
            <div className="date-chip">Today</div>
            <div className="message-stack">
              {currentMessages.map((message) => <MessageBubble message={message} key={message.id} />)}
              {currentMessages.length === 0 && <p className="empty-conversation">Say hello to {contact.name}!</p>}
              <div ref={chatEndRef} />
            </div>
          </div>

          <form className="chat-composer" onSubmit={handleSend}>
            {showEmoji && (
              <div className="emoji-picker" role="group" aria-label="Choose emoji">
                {["😀", "😊", "❤️", "👍", "🎉", "🚀"].map((emoji) => (
                  <button type="button" key={emoji} onClick={() => { setDraft((current) => `${current}${emoji}`); setShowEmoji(false); }}>{emoji}</button>
                ))}
              </div>
            )}
            <div className="composer-input-wrap">
              <input ref={attachmentRef} type="file" hidden onChange={handleAttachment} aria-label="Attach a file" />
              <button className="icon-button" type="button" title="Attach file" aria-label="Attach a file" onClick={() => attachmentRef.current?.click()}><Paperclip size={20} /></button>
              <input type="text" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a message..." aria-label="Type a message" maxLength={2000} />
              <button className="icon-button" type="button" title="Choose emoji" aria-expanded={showEmoji} aria-label="Choose emoji" onClick={() => setShowEmoji((value) => !value)}><Smile size={22} /></button>
            </div>
            <button className="send-button" type="submit" aria-label="Send message" title="Send message" disabled={!draft.trim()}><Send size={21} fill="white" strokeWidth={1.7} /></button>
          </form>
        </section>
      </div>
      <p className="demo-caption">React UI demo · Messages are stored only in this browser · No real backend connected yet</p>
    </main>
  );
}
