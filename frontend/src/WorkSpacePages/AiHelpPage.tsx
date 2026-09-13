import Sidebar from "../Sidebar";
import "../Workspace.css";

function AiHelpPage() {
  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- AI HELP --> */}
        <div className="page-block visible" id="page-aihelp">
          <div className="page-head">
            <h1>ai help</h1>
          </div>

          <div className="suggestion-chips">
            <span className="chip">can I afford this?</span>
            <span className="chip">where did my money go?</span>
            <span className="chip">help me save faster</span>
          </div>

          <div className="chat-window">
            <div className="msg user">can I afford a $600 trip in march?</div>
            <div className="msg ai">
              yes — at your current pace you'll have about $780 spare by then,
              based on your last 3 months of spending.
            </div>
            <div className="msg user">what if I cut dining out by half?</div>
            <div className="msg ai">
              that frees up roughly $90/month, which would get you to $1,050
              spare by march instead.
            </div>
          </div>

          <div className="chat-input-row">
            <input
              type="text"
              placeholder="ask bloom anything about your money..."
            />
            <button className="btn btn-sage">send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiHelpPage;
