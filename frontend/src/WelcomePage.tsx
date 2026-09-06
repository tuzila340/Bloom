import "./WelcomePage.css";
import "./App.css";

function WelcomePage() {
  return (
    <>
      <body>
        <header>
          <a href="" className="brand" aria-label="Bloom home">
            <img src="/favicon.svg" alt="" className="logo" />
            <h4>bloom</h4>
          </a>
          <nav>
            <a href="#features" className="page-button">
              features
            </a>
            <a href="#pricing" className="page-button">
              pricing
            </a>
            <a href="#about" className="page-button">
              about
            </a>
          </nav>
          <a href="" className="get-started-button">
            get started
          </a>
        </header>
        <main>
          <div className="main-content">
            <p className="main-title">
              budgeting that feels
              <br />
              less like a chore
            </p>
            <p className="main-description">
              track spending, set friendly goals, and watch your savings grow —
              one small habit at a time.
            </p>
            <div className="main-actions">
              <a href="" className="start-button">
                start for free
              </a>
              <a href="" className="page-button">
                watch demo
              </a>
            </div>
          </div>

          <div className="budget-card">
            <p className="budget-label">left to spend</p>
            <p className="budget-amount">$842</p>
            <div className="progress-track">
              <div className="progress-fill progress-fill-78"></div>
            </div>
            <div className="progress-track">
              <div className="progress-fill progress-fill-60"></div>
            </div>
            <div className="progress-track progress-track-warning">
              <div className="progress-fill progress-fill-90"></div>
            </div>
          </div>

          <div className="card-block">
            <div className="card">
              <i></i>
              <p className="card-title">gentle budgets</p>
              <p className="card-description">
                friendly nudges instead of red alerts when you're close to a
                limit
              </p>
            </div>
            <div className="card">
              <i></i>
              <p className="card-title">smart insights</p>
              <p className="card-description">
                see where your money actually goes, without spreadsheets.
              </p>
            </div>
            <div className="card">
              <i></i>
              <p className="card-title">savings goals</p>
              <p className="card-description">
                set a goal, watch it bloom as you get closer.
              </p>
            </div>
          </div>
        </main>

        {/* Features */}
        <section id="features">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow-free">features</p>
              <h2>everything you need, nothing you don't</h2>
              <p>
                Bloom keeps budgeting to the essentials: know what you have,
                know what you're working toward, and get a nudge before things
                go sideways.
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div
                  className="icon"
                  style={{
                    background: "var(--sage-bg)",
                    color: "var(--sage-deep)",
                  }}
                >
                  ◐
                </div>
                <h3>expense tracking</h3>
                <p>
                  Log spending in seconds and see it sorted into categories
                  automatically.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="icon"
                  style={{
                    background: "var(--amber-bg)",
                    color: "var(--amber)",
                  }}
                >
                  ◑
                </div>
                <h3>gentle budgets</h3>
                <p>
                  Set limits that warn you early, without red banners or guilt
                  trips.
                </p>
              </div>
              <div className="feature-card">
                <div
                  className="icon"
                  style={{
                    background: "var(--coral-bg)",
                    color: "var(--coral)",
                  }}
                >
                  ◒
                </div>
                <h3>savings goals</h3>
                <p>
                  Set a target and watch your progress fill in as you get
                  closer.
                </p>
              </div>
            </div>

            <div className="spotlight">
              <div className="spotlight-text">
                <h3>see it before you feel it</h3>
                <p>
                  Most budgeting tools tell you after you've overspent. Bloom
                  shows your categories filling up in real time, so a close call
                  is a nudge — not a surprise at the end of the month.
                </p>
              </div>
              <div className="spotlight-visual">
                <div className="bar-row">
                  <span>groceries</span>
                  <span>$310 / $400</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "78%" }}></div>
                </div>
                <div className="bar-row">
                  <span>transport</span>
                  <span>$95 / $150</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "63%" }}></div>
                </div>
                <div className="bar-row">
                  <span>dining out</span>
                  <span>$180 / $200</span>
                </div>
                <div className="bar-track warn">
                  <div className="bar-fill warn" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            <div className="spotlight">
              <div className="spotlight-text">
                <h3>ask bloom, not a spreadsheet</h3>
                <p>
                  Ask plain questions like "can I afford a trip in March?" and
                  get an answer grounded in your real numbers, not a generic
                  rule of thumb.
                </p>
              </div>
              <div className="spotlight-visual">
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--gray)",
                    margin: "0 0 10px",
                  }}
                >
                  you asked
                </p>
                <p style={{ fontSize: "14px", margin: "0 0 16px" }}>
                  can I afford a $600 trip in march?
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--gray)",
                    margin: "0 0 10px",
                  }}
                >
                  bloom says
                </p>
                <p style={{ fontSize: "14px", margin: "0" }}>
                  yes — at your current pace you'll have $780 spare by then.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow-free">pricing</p>
              <h2>start free, grow when you're ready</h2>
              <p>
                No hidden fees, no surprise charges. Cancel any time in one tap.
              </p>
            </div>

            <div className="pricing-grid">
              <div className="price-card">
                <h3>free</h3>
                <p className="desc">for getting started</p>
                <p className="price">
                  $0<span> /month</span>
                </p>
                <ul>
                  <li>manual expense tracking</li>
                  <li>up to 3 budget categories</li>
                  <li>1 savings goal</li>
                  <li>monthly summary</li>
                </ul>
                <a href="" className="btn-outline">
                  get started
                </a>
              </div>

              <div className="price-card featured">
                <span className="badge">most popular</span>
                <h3>plus</h3>
                <p className="desc">for staying on top of it</p>
                <p className="price">
                  $6<span> /month</span>
                </p>
                <ul>
                  <li>everything in free</li>
                  <li>unlimited categories & goals</li>
                  <li>ai help & insights</li>
                  <li>bank account sync</li>
                </ul>
                <a href="" className="btn-sage">
                  start plus
                </a>
              </div>

              <div className="price-card">
                <h3>household</h3>
                <p className="desc">for budgeting together</p>
                <p className="price">
                  $10<span> /month</span>
                </p>
                <ul>
                  <li>everything in plus</li>
                  <li>up to 5 members</li>
                  <li>shared & individual budgets</li>
                  <li>joint savings goals</li>
                </ul>
                <a href="" className="btn-outline">
                  start household
                </a>
              </div>
            </div>

            <p className="trust-line">
              bank-level encryption · your data is never sold · cancel anytime
            </p>
          </div>
        </section>

        {/* ABOUT  */}
        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow-free">about us</p>
              <h2>we think budgeting shouldn't feel like punishment</h2>
            </div>

            <div className="about-hero">
              <h2>
                most budgeting apps are built to make you feel bad about money.
                we built bloom to help you feel better about it.
              </h2>
            </div>

            <div className="about-body">
              <p>
                Bloom started from a simple frustration: every budgeting app we
                tried felt like a spreadsheet wearing a coat of paint, or worse,
                a tool that scolded us for buying coffee. Neither approach made
                anyone better with money.
              </p>
              <p>
                So we built something smaller in scope but friendlier in tone.
                Bloom tracks what you spend, shows you where it goes, and nudges
                you gently when you're close to a limit, the same way a good
                friend would, not a bank statement.
              </p>
              <p>
                We're a small team who've all, at some point, avoided opening a
                budgeting app out of dread. Bloom is what we wished existed
                instead.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-item">
                <h4>no shame</h4>
                <p>We show you numbers, never judgment.</p>
              </div>
              <div className="value-item">
                <h4>no jargon</h4>
                <p>Plain language, always — no finance-speak.</p>
              </div>
              <div className="value-item">
                <h4>no surprises</h4>
                <p>Clear pricing and clear data practices, upfront.</p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap">
            <p>bloom · budgeting that feels less like a chore</p>
          </div>
        </footer>
      </body>
    </>
  );
}

export default WelcomePage;
