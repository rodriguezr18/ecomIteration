import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <p>
          <i class="fas fa-infinity"></i>
        </p>
      </div>

      <ul class="link-container">
        <li>
          <a
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/?hl=en"
          >
            <i class="fab fa-instagram icon"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/?lang=en"
          >
            <i class="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a
            aria-label="Snapchat"
            target="_blank"
            rel="noreferrer"
            href="https://www.snapchat.com/"
          >
            <i class="fab fa-snapchat-ghost icon"></i>
          </a>
        </li>
      </ul>

      <p class="copy-right">&copy; Rudy Rodriguez 2020</p>
    </footer>
  );
}

export default Footer;
