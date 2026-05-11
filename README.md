# Reusable Profile Card Component
A simple, static, and reusable profile card component built with React (via CDN) and CSS.

## Preview
<img width="1470" height="596" alt="Screenshot 2026-05-10 at 11 25 31 PM" src="https://github.com/user-attachments/assets/102e2b64-8bc1-4568-b62d-0d25181e8eef" />

## Description
This project is a small static demo that renders a set of reusable profile cards. Each card shows a name, professional title, and short bio. The project uses React and ReactDOM from CDN and compiles the JSX in the browser with Babel standalone, so no build step or local dependencies are required.

## Features
- Reusable `Card` React component with props for `name`, `title`, and `bio`.
- Responsive card layout using CSS flexbox and a media query for larger screens.
- Simple, clean styling with a blue accent and rounded card design.
- No build/tooling required — works by serving the static files.

## Technologies
- HTML5
- CSS3
- React (via CDN)
- Babel (browser standalone)

## Installation & Usage
To view this project locally:

1. Clone the repository:
   ```
   git clone https://github.com/vanessapopa/React-Reusable-Profile-Card-Component.git
   ```

2. Navigate to the project directory:
   ```
   cd React-Reusable-Profile-Card-Component
   ```

3. Start a simple static server and open the site in your browser. Examples:

   Using Python (macOS/Linux):
   ```bash
   python3 -m http.server 5173 &
   open http://localhost:5173/
   ```

   Or using Node `http-server` (if installed):
   ```bash
   npx http-server -p 5173
   ```

4. Open `http://localhost:5173/` in your browser. The profile cards should render on the page.

## Notes
- This project uses Babel in the browser to transform JSX. This is convenient for demos but not recommended for production. For development with faster rebuilds and modern tooling, consider migrating to a bundler like Vite or Parcel.
- If you are offline, the CDN-hosted React/Babel scripts may not load and the app won't render.
