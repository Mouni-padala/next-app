import './sidebar.css'
import Link from 'next/link';
const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="profile">
          <div className="profile-info">
            <div className="profile-content">
                <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtcO4YmGkZhf8rEs8DdPZYnLlPCpOF1pTMZMYf1lDHzaQFAqjUKPzRFdZaqDRuBuYKHo&usqp=CAU" height="30px" width="50px"/>
            </div>
            <div className="profile-details">
            Isabel Oliviera<br/>
            <span className="profile-tag">Marketing</span>
            </div>
            </div>
            </div>
          <div className="dropdown">
            <div>Profile</div>
            <div>Privacy</div>
            <div>Setting</div>
            <div>Logout</div>
          </div>
        </div>
        <div className="head-tag">FAVORITES</div>
        <div>
        <div className="dashboard">
          <div className="dashboard-info">Dashboard</div>
          <div className="dropdown">
            <div>Generic</div>
            <div>Banking</div>
          </div>
        </div>
        </div>
        <div className="head-tag">UI KIT</div><br/>
        <Link href="/formlayout">Form Layout</Link><br/>
        <Link href="/input">Input</Link><br/>
        <Link href="/floatlabel">Float Label</Link><br/>
        <Link href="/formlayout">Invalid State</Link><br/>
        <Link href="/button">Button</Link><br/>
        <Link href="/table">Table</Link><br/>
        <Link href="/list">List</Link><br/>
        <Link href="/tree">Tree</Link><br/>
        <Link href="/panel">Panel</Link><br/>

      </div>
    );
  };
  
  export default Sidebar;