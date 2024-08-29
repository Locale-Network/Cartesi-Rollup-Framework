function LLP() {
  return (
    <div className="llp">
      <h1>LLP</h1>
      <div className="llp-balance-container">
        <div className="llp-balance-summary">
          <div className="llp-balance-item">
            <h3>Total LLP (Claimable + Locked)</h3>
            <p>0.00 LLP</p>
          </div>
          <div className="llp-balance-item">
            <h3>Claimable LLP</h3>
            <p>0.00 LLP</p>
          </div>
          <div className="llp-balance-item">
            <h3>Locked LLP</h3>
            <p>0.00 LLP</p>
          </div>
        </div>
        <div className="llp-balance-info">
          <p>You do not have any sources of LLP rewards. You can earn rewards by supplying to pools.</p>
        </div>
      </div>
    </div>
  );
}

export default LLP;