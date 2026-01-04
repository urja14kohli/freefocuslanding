import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="aurora-bg"></div>

      <nav className="glass-nav">
        <div className="logo">FocusFree</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#download" className="nav-cta">
            Get Started
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container">
            <span className="badge">v1.1 Now Available</span>
            <h1>
              Master your attention.
              <br />
              Without the friction.
            </h1>
            <p className="subtitle">
              A beautiful, intelligent blocker that nudges you back to focus. No
              subscriptions. No accounts. Just focus.
            </p>
            <div className="cta-group">
              <a href="#" className="btn primary">
                Add to Chrome <span className="browser-tag">Free</span>
              </a>
              <a href="#how-it-works" className="btn secondary">
                How it works
              </a>
            </div>

            <div className="hero-visual">
              <div className="glass-frame">
                {/* 
                  Using standard img tag to preserve easy styling/sizing from CSS 
                  without fighting Next.js Image wrapper initially. 
                  Can be optimized to <Image /> later if needed.
                */}
                <img
                  src="/assets/screen1.png"
                  alt="FocusFree Interface"
                  className="hero-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Wall / Social Proof */}
        <div className="social-proof">
          <p>Simple tools for complex minds.</p>
        </div>

        <section id="how-it-works" className="steps-section">
          <div className="container">
            <div className="section-header">
              <h2>How it works</h2>
              <p>Three simple steps to reclaim your time.</p>
            </div>

            <div className="step-row">
              <div className="step-text">
                <span className="step-number">01</span>
                <h3>Define your focus.</h3>
                <p>
                  Set your intention for the session. FocusFree reminds you of
                  this goal whenever you stray.
                </p>
              </div>
              <div className="step-image glass-card">
                <img src="/assets/screen1.png" alt="Set focus" />
              </div>
            </div>

            <div className="step-row reverse">
              <div className="step-text">
                <span className="step-number">02</span>
                <h3>Get gently nudged.</h3>
                <p>
                  Opening a distracting site triggers a gentle check-in. &quot;Are
                  you still working on X?&quot;
                </p>
              </div>
              <div className="step-image glass-card">
                <img src="/assets/screen2.png" alt="Nudge Notification" />
              </div>
            </div>

            <div className="step-row">
              <div className="step-text">
                <span className="step-number">03</span>
                <h3>Stay in flow.</h3>
                <p>
                  We block the noise so you can finish what you started. No
                  willpower required.
                </p>
              </div>
              <div className="step-image glass-card">
                <img src="/assets/screen3.png" alt="Blocked Page" />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="container">
            <div className="pricing-card glass-card">
              <div className="pricing-header">
                <h3>Forever Free</h3>
                <div className="price">
                  0 <span className="currency">$</span>
                </div>
                <p>Open source. No hidden fees.</p>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Unlimited blocking
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Privacy-first (Local only)
                  </li>
                  <li>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Aurora Themes
                  </li>
                </ul>
              </div>
              <a href="#" className="btn primary full-width">
                Add to Chrome
              </a>
              <p className="micro-text">No credit card required</p>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2>Ready to focus?</h2>
            <a href="#" className="btn primary big">
              Add to Chrome
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 FocusFree. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
