# ChatApp — React UI (Login, Registration, Chat)

A frontend-only chat UI built to closely match the three screens in the supplied reference image. Designed to be beginner-friendly and ready to connect to **Django REST Framework** later.

## Run locally

1. Install Node.js 20+.
2. Open this directory in VS Code.
3. Open the terminal and run:

```bash
npm install
npm run dev
```

4. Visit `http://localhost:5173`.

## How to use the demo

- `/login` — Login form, remember-me checkbox, password toggle, link to registration.
- `/register` — Sign-up form, password confirmation, link to login.
- `/chat` — Conversation sidebar, search, message bubbles, local message sending, emoji picker, filename-only attachment demo, logout.
- Submit any valid email and a nonempty password to enter the **UI demo**; no actual authentication occurs.
- Registering saves only a display name and email in the browser so the demo can show your name; passwords are **never** stored.
- Messages are saved in your browser's `localStorage`. They are NOT sent to another person and do not reach a server.
- Use the three-dot menu in the chat header to log out. You'll be sent back to login.
- On narrow phone screens, choose a contact first and use the back arrow to return to contacts.

## Concepts used

- **JSX + functional components:** `Login.jsx`, `Register.jsx`, `Chat.jsx`, and smaller reusable components.
- **Props:** `FormField`, `Brand`, `ChatSidebar`, `Avatar`, `MessageBubble`.
- **useState:** forms, selected chat, search, emoji picker, demo session.
- **useEffect:** browser-local message persistence and auto-scroll.
- **Events:** `onChange`, `onSubmit`, `onClick`.
- **Controlled inputs:** forms and message composer.
- **Lists and keys:** contacts and messages with `.map()`.
- **Conditional rendering:** error messages, menu, selected conversation, mobile layout.
- **React Router:** `BrowserRouter`, `Routes`, `Route`, `Navigate`, `Link`, `useNavigate`.
- **Plain CSS:** no Tailwind or Bootstrap, so styles are easy to understand and tweak.

The supplied YouTube lecture link could not be checked reliably here for a precise chapter-by-chapter match. These are common beginner React course concepts.

## Project structure

```text
src/
  main.jsx
  App.jsx                     # Page routes and mock login session
  pages/
    Login.jsx                 # Login UI
    Register.jsx              # Registration UI
    Chat.jsx                  # Working chat UI demo
  components/
    AuthLayout.jsx            # Shared card and gradient background
    Brand.jsx                 # ChatApp logo
    FormField.jsx             # Reusable form input
    Avatar.jsx                # User initials
    ChatSidebar.jsx           # Contacts and search
    MessageBubble.jsx         # Incoming/outgoing message
  data/demoData.js             # Sample contacts and messages
  styles/global.css           # All visual styling and responsive CSS
```

## Next: connect Django + DRF

When you're ready, we will replace the browser-only demo with:

| Page | DRF endpoint | Method |
|------|--------------|--------|
| Register | `/api/auth/register/` | POST |
| Login | `/api/auth/login/` | POST |
| Conversation sidebar | `/api/conversations/` | GET |
| Chat history | `/api/conversations/:id/messages/` | GET |
| Send a message | `/api/conversations/:id/messages/` | POST |

Those endpoints are **planned**, not implemented in this download. The exact authentication design (session or JWT) should be established before writing the backend.

> ⚠️ Never use the mock login or client-side route guard as production security. User identity and permissions must be verified on the Django server. Passwords must be processed securely in Django, not stored in frontend `localStorage`.

## UI reference

The layout, colors and text are based on the image supplied in the conversation: lavender auth background, white rounded auth card, blue gradient actions, left-aligned contact sidebar, Alice chat, alternating gray/blue message bubbles.
