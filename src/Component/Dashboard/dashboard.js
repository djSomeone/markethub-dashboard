import React, { useState } from 'react';
import MainDashboard from '../DashboardMain/maindashboard.js';
import SpotPrice from '../SpotPrice/spotprice.js';
import VerifyUsers from '../VerifyUsers/verifyuser.js';
import FreeTrial from '../FreeTrial/freetrial.js';
import NewsPage from '../News/news.js';
import ExpiredTrial from '../ExpiredTrail/expiredtrial.js';
import RejectedUserTrial from '../RejectedUser/rejecteduser.js';
import Sidebar from '../Sidebar/Sidebar.js';
import "./dashboard.css"; // Your CSS file for styling
import UserList from '../FreeUser/freeuser.js';
import SelfNews from '../SelfNews/selfnews.js';
import CashManagement from '../CashManagement/cashmanagement.js';
import AdminDashboard from '../AddAdmin/addadmin.js';
import CircularNews from '../AddCircular/addcircular.js'


const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <MainDashboard />;
      case 1:
        return <UserList />;
      case 2:
        return <FreeTrial />;
      case 3:
        return <VerifyUsers />;
      case 4:
        return <SpotPrice />;
      case 5:
        return <NewsPage />;
        case 6:
          return <SelfNews />;
          case 7:
            return <CashManagement />;
            case 8:
              return <AdminDashboard />;
              case 9:
                return < CircularNews />;
                
                return <ExpiredTrial />;
      // You can add more cases for additional components
      default:
        return null;
    }
  };

  return (
    <div className='home-dash'>
      <Sidebar activeIndex={activeIndex} onTabClick={handleTabClick} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
