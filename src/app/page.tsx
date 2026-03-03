import Image from "next/image";

export default function Home() {
  return (

<header>
  <div class="logo">🚀 Nexora</div>
</header>

<section class="hero">
  <h1>Sync GitHub & GitLab Automatically</h1>
  <p>
    Nexora connects your repositories between GitHub and GitLab instantly.
    No manual push. No duplicate work. Just seamless sync.
  </p>
  <a href="#waitlist" class="btn">Join the Waitlist</a>
</section>

<section class="section">
  <h2>Why Nexora?</h2>
  <div class="features">
    <div class="feature">
      <h3>🔄 Auto Sync</h3>
      <p>Push to GitHub and automatically mirror to GitLab.</p>
    </div>
    <div class="feature">
      <h3>🔐 Secure Webhooks</h3>
      <p>Signed and verified events for secure repository duplication.</p>
    </div>
    <div class="feature">
      <h3>⚡ Fast Setup</h3>
      <p>Connect your accounts and sync in seconds.</p>
    </div>
  </div>
</section>

<section id="waitlist" class="waitlist">
  <h2>Join the Waitlist</h2>
  <p>Be the first to access Nexora when we launch.</p>
  <form>
    <input type="email" placeholder="Enter your email" required />
    <button type="submit" class="btn">Join</button>
  </form>
</section>

<footer>
  © 2026 Nexora. Built for developers.
</footer>


  );
}
