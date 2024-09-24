import React, { useState } from 'react';



import Sidebar from '../Sidebar/Sidebar.js';
import "./dashboard.css" // Your CSS file for styling
import VerifyUsers from '../VerifyUsers/verifyuser.js';
import FreeTrial from '../FreeTrial/freetrial.js';
import NewsPage from '../News/news.js';


const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    const renderContent = () => {
      switch (activeIndex) {
        case 0:
          return <NewsPage />;
        case 1:
          return <VerifyUsers />;
        case 2:
          return < FreeTrial/>;
        default:
          return null;
      }
    };
  
    return (
      <div className='-dashboard'>
        <Sidebar activeIndex={activeIndex} onTabClick={handleTabClick} />
        <div className="content">
          {renderContent()}
        </div>
      </div>
    );
};

export default Dashboard;