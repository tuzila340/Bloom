import "./AddEntryDialog.css";

type AddEntryDialogProps = {
  onClose: () => void;
};

function AddEntryDialog({ onClose }: AddEntryDialogProps) {
  return (
    <body>
      <div className="backdrop">
        <div className="dialog">
          <div className="dialog-head">
            <h2>add entry</h2>
            <button className="close-btn">✕</button>
          </div>
          <button type="button" className="close-btn" onClick={onClose}>
            ✕
          </button>
          <p className="dialog-sub">log a new expense or income entry.</p>

          <div className="type-toggle">
            <div className="type-btn active-expense">expense</div>
            <div className="type-btn">income</div>
          </div>

          <div className="field amount-field">
            <label htmlFor="amount">amount</label>
            <div className="prefix-wrap">
              <span className="prefix">$</span>
              <input type="text" id="amount" placeholder="0.00" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="desc">description</label>
            <input type="text" id="desc" placeholder="e.g. whole foods" />
          </div>

          <div className="field">
            <label>category</label>
            <div className="category-grid">
              <div className="category-chip selected">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--sage-bg)",
                    color: "var(--sage-deep)",
                  }}
                >
                  🛒
                </div>
                <span className="label">groceries</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--amber-bg)",
                    color: "var(--amber)",
                  }}
                >
                  ☕
                </div>
                <span className="label">dining</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{ background: "var(--blue-bg)", color: "var(--blue)" }}
                >
                  🚗
                </div>
                <span className="label">transport</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--purple-bg)",
                    color: "var(--purple)",
                  }}
                >
                  🎬
                </div>
                <span className="label">fun</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--coral-bg)",
                    color: "var(--coral)",
                  }}
                >
                  🏠
                </div>
                <span className="label">home</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--sage-bg)",
                    color: "var(--sage-deep)",
                  }}
                >
                  💊
                </div>
                <span className="label">health</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--amber-bg)",
                    color: "var(--amber)",
                  }}
                >
                  📦
                </div>
                <span className="label">other</span>
              </div>
              <div className="category-chip">
                <div
                  className="icon-circle"
                  style={{
                    background: "var(--cream)",
                    color: "var(--gray)",
                    border: "1px dashed var(--border)",
                  }}
                >
                  +
                </div>
                <span className="label">new</span>
              </div>
            </div>
          </div>

          <div className="row-2">
            <div className="field">
              <label htmlFor="date">date</label>
              <input type="text" id="date" value="sep 24, 2026" />
            </div>
            <div className="field">
              <label htmlFor="repeat">repeats</label>
              <select id="repeat">
                <option>never</option>
                <option>weekly</option>
                <option>monthly</option>
              </select>
            </div>
          </div>

          <div className="dialog-actions">
            <button className="btn btn-cancel">cancel</button>
            <button className="btn btn-save">save entry</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default AddEntryDialog;
