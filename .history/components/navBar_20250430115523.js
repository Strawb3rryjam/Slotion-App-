import styles from

export default function NavBar() {
  const nav = document.createElement("nav");
  nav.className = "navbar";

  const buttons = ["Home", "About", "Community", "Profile", "Settings"];

  buttons.forEach((text) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = "nav-button";
    nav.appendChild(button);
  });

  return nav;
}
