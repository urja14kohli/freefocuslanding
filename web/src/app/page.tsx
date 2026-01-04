import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="glass-nav">
        <div className="logo">focus free.</div>
        <div className="nav-links">
          <a href="#features">features</a>
          <a href="#how">how?</a>
          <a href="#pricing">pricing</a>
          <a href="#download" className="nav-cta">
            add to chrome
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container">
            <h1>
              master your attention <br />
              <span>without the noise</span>
            </h1>
            <p className="subtitle">
              a simple, powerful website blocker that actually works. <br />
              built for deep work, without the monthly fees.
            </p>
            <div className="cta-group">
              <a href="#" className="btn primary">
                add to chrome
              </a>
              <a href="#how" className="btn secondary">
                how?
              </a>
            </div>

            <div className="hero-visual">
              {/* RESTORED: Real App Screenshot in the Hero as requested */}
              <img
                src="/assets/screen1.png"
                alt="FocusFree App Interface"
                className="hero-img"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features">
          <div className="container">
            <div className="text-center" style={{ marginBottom: "60px" }}>
              <span className="step-number" style={{ marginBottom: "16px" }}>
                features
              </span>
              <h2>everything you need.</h2>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
                <h3>unlimited blocking</h3>
                <p>
                  block as many distracting sites as you need. no paywalls limiting
                  your peace of mind.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>privacy first</h3>
                <p>
                  your data stays right here. we don&#39;t track your browsing or sell
                  your habits.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3>forever free</h3>
                <p>
                  open source and free. because staying focused shouldn&#39;t cost a
                  monthly subscription.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="steps-section">
          <div className="container">
            <div className="section-header">
              <h2>how it works.</h2>
              <p className="subtitle">three simple steps.</p>
            </div>

            <div className="step-row">
              <div className="step-text">
                <span className="step-number">01</span>
                <h3>define your blocklist.</h3>
                <p>
                  add the sites that drain your energy. youtube, twitter, reddit.
                  if it distracts you, it goes on the list.
                </p>
              </div>
              <div className="step-image">
                <img src="/assets/screen1.png" alt="Define Focus Blocklist" />
              </div>
            </div>

            <div className="step-row reverse">
              <div className="step-text">
                <span className="step-number">02</span>
                <h3>get gently nudged.</h3>
                <p>
                  try to visit a blocked site? we&#39;ll gently remind you of your
                  goals. no shame, just a nudge back to work.
                </p>
              </div>
              <div className="step-image">
                <img src="/assets/screen2.png" alt="Nudge Notification" />
              </div>
            </div>

            <div className="step-row">
              <div className="step-text">
                <span className="step-number">03</span>
                <h3>stay in flow.</h3>
                <p>
                  enjoy the silence. with distractions blocked, you can finally
                  finish that side project.
                </p>
              </div>
              <div className="step-image">
                <img src="/assets/screen3.png" alt="Blocked Page" />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="pricing-card">
            <div className="pricing-header">
              <p style={{ opacity: 0.8, fontSize: "0.9rem", fontWeight: 700 }}>
                OPEN SOURCE
              </p>
              <div className="price">$0</div>
              <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                free forever. no catch.
              </p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>unlimited websites</li>
                <li>unlimited blocking</li>
                <li>no account required</li>
                <li>local privacy</li>
              </ul>
            </div>
            <a
              href="#"
              className="btn secondary"
              style={{ background: "white", color: "#302b63", fontWeight: 700 }}
            >
              add to chrome
            </a>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <div className="footer-col">
              <div className="logo" style={{ marginBottom: "16px" }}>
                focus free.
              </div>
              <p
                style={{
                  color: "var(--text-sub)",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                }}
              >
                reclaim your attention. <br />
                built with love for the distracted.
              </p>
            </div>
            <div className="footer-col">
              <h4>product</h4>
              <a href="#how">how?</a>
              <a href="#features">features</a>
              <a href="#pricing">pricing</a>
            </div>
            <div className="footer-col">
              <h4>resources</h4>
              <a href="#">privacy</a>
              <a href="#">github</a>
            </div>
            <div className="footer-col">
              <h4>social</h4>
              <a href="#">twitter</a>
              <a href="#">linkedin</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
