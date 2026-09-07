import "./RegistrationPage.css";
import { Link } from "react-router";

function RegistrationPage() {
  return (
    <div className="page">
      <div className="form-panel">
        <div className="brand-logo">
          <Link to="/" className="brand" aria-label="Bloom home">
            <img src="/favicon.svg" alt="" className="logo-mark" />
            <h4>bloom</h4>
          </Link>
        </div>

        <div className="form-wrap">
          <h1>create your account</h1>
          <p className="sub">it takes about a minute to get started.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="name">full name</label>
              <input type="text" id="name" placeholder="alex morgan" />
            </div>

            <div className="field">
              <label htmlFor="email">email</label>
              <input type="email" id="email" placeholder="alex@email.com" />
            </div>

            <div className="field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                placeholder="at least 8 characters"
              />
              <p className="hint">
                use 8+ characters with a mix of letters and numbers.
              </p>
            </div>

            <button type="submit" className="btn-primary">
              create account
            </button>
          </form>

          <div className="divider">or</div>

          <button type="button" className="btn-google">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.52 12.27c0-.85-.08-1.66-.22-2.44H12v4.62h6.47c-.28 1.5-1.13 2.78-2.4 3.63v3.02h3.88c2.27-2.09 3.57-5.17 3.57-8.83z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.88-3.02c-1.08.72-2.45 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.92H1.3v3.11C3.26 21.3 7.3 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.31 14.31A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.58.4-2.31V6.58H1.3A11.98 11.98 0 0 0 0 12c0 1.93.46 3.76 1.3 5.42l4.01-3.11z"
              />
              <path
                fill="#EA4335"
                d="M12 4.77c1.76 0 3.35.6 4.59 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.3 0 3.26 2.7 1.3 6.58l4.01 3.11C6.25 6.87 8.89 4.77 12 4.77z"
              />
            </svg>
            continue with google
          </button>

          <p className="switch-line">
            already have an account? <a href="#">log in</a>
          </p>

          <p className="terms">
            by creating an account, you agree to bloom's{" "}
            <a href="#">terms of service</a> and <a href="#">privacy policy</a>.
          </p>
        </div>
      </div>

      <div className="brand-panel">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="brand-content">
          <h2>budgeting that feels less like a chore</h2>
          <p>
            join bloom to track spending, set gentle budgets, and watch your
            savings grow.
          </p>

          <div className="preview-card">
            <p className="label">left to spend this month</p>
            <p className="amount">$842</p>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
