import { useState } from 'react';
import usdc from '../assets/usdc.png';
import { FaInfoCircle, FaCircle } from "react-icons/fa";

function Dashboard() {
  const [activeButton, setActiveButton] = useState('Overview');

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="portfolio-summary">
        <div className="overview-header">
          <div className="overview-tabs">
            <button className={`${activeButton === 'Overview'? 'active' : ''}`} onClick={() => setActiveButton('Overview')}>Overview</button>
            <button className={`${activeButton === 'Activity'? 'active' : ''}`} onClick={() => setActiveButton('Activity')}>Activity</button>
          </div>
          {activeButton === 'Overview'? (
            <div>
              <div className='portfolio-summary-container'>
                <div className="Portfolio-summary-header">
                  <h2>Portfolio summary</h2>
                  <div className="Portfolio-summary-header-sub-header">
                    <h2>$0.00</h2>
                    <img src={usdc} width={20} height={20} alt="usdc"/>
                  </div>
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-item">
                    <div className='title-container'>
                      <FaCircle color='#cdc3e1' />
                      <span>Backer Positions</span>
                      <FaInfoCircle />
                    </div>
                    <div className='value-container'>
                      <p>$0.00</p>
                      <p>0.00%</p>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className='title-container'>
                      <FaCircle color='#e4b332' />
                      <span>LLP</span>
                      <FaInfoCircle />
                    </div>
                    <div className='value-container'>
                      <p>$0.00</p>
                      <p>0.00%</p>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className='title-container'>
                      <FaCircle color='#b2e1cb' />
                      <span>Senior Pool Position</span>
                      <FaInfoCircle />
                    </div>
                    <div className='value-container'>
                      <p>$0.00</p>
                      <p>0.00%</p>
                    </div>
                  </div>
                  <div className="portfolio-item">
                    <div className='title-container'>
                      <FaCircle color='#4f7676' />
                      <span>Curve LP Tokens</span>
                      <FaInfoCircle />
                    </div>
                    <div className='value-container'>
                      <p>$0.00</p>
                      <p>0.00%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="holdings-section">
                <div className='holding-section-header'>
                  <h2>Holdings</h2>
                  <button>Expand all</button>
                </div>
                <p>You have no holdings in Goldfinch yet</p>
              </div>
              <div className="activity-section">
                <div className='activity-section-header'>
                  <h2>Activity</h2>
                  <button onClick={() => setActiveButton('Activity')}>View all →</button>
                </div>
                <p>No recent activity</p>
              </div>
            </div>
          ) : (
            <div className="activity-section">
              <h2>Activity</h2>
              <p>No recent activity</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;