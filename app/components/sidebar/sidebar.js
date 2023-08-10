import "./sidebar.css";
import Link from "next/link";
import Image from 'next/image';
import formlayout from '/public/layout.svg';
import input from '/public/input.svg';
import product from '/public/product.svg';
import invalid from '/public/invalid.svg';
import button from '/public/button.svg';
import table from '/public/table.svg';
import list from '/public/list.svg';
import login from '/public/login.svg';
import invoice from '/public/invoice.svg';
import help from '/public/help.svg';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-info">
          <div className="profile-content">
            <div className="image-content" >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtcO4YmGkZhf8rEs8DdPZYnLlPCpOF1pTMZMYf1lDHzaQFAqjUKPzRFdZaqDRuBuYKHo&usqp=CAU"
                height="30px"
                width="50px"
              />
            </div>
            <div className="profile-details">
              <span className="user-name">Isabel Oliviera</span>
              <br />
              <span className="profile-tag">Marketing</span>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="profile-option">
            <div>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                />
              </svg>
            </div>
            <div className="inner-profile">Profile</div>
          </div>
          <div className="profile-option2">
            <div>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                />
              </svg>
            </div>
            <div className="inner-profile">Privacy</div>
          </div>
          <div className="profile-option2">
            <div>
              <svg
                class="w-[23px] h-[23px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <g
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z" />
                  <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </g>
              </svg>
            </div>
            <div className="inner-profile">Setting</div>
          </div>
          <div className="profile-option2">
            <div>
              <svg
                class="w-[23px] h-[23px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                />
              </svg>
            </div>
            <div className="inner-profile">Logout</div>
          </div>
        </div>
      </div>
      <div className="head-tag">FAVORITES</div>
      <div>
        <div className="dashboard">
          <div className="dashboard-info">
            <svg
              class="w-[17px] h-[17px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
              />
            </svg>
            <div className="dashboard-title">Dashboards</div>
          </div>
          <div className="dropdown">
            <div>
              <svg
                class="w-[17px] h-[17px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                />
              </svg>
              <div className="inner-dashboards">
                <Link href="/components/dashboard">Generic</Link>
              </div>
            </div>
            <div className="banking">
              <svg
                class="w-[17px] h-[17px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 9h2m3 0h5M1 5h18M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                />
              </svg>
              <div className="inner-dashboards2">Banking</div>
            </div>
          </div>
        </div>
      </div>
      <div className="head-tag">UI KIT</div>
      <br />
      <Image src={formlayout} alt="layout"/>
      <Link className="link-tag" href="/components/formlayout">
        Form Layout
      </Link>
      <br />
      <Image src={input} alt="input"/>
      <Link className="link-tag" href="/components/dashboard">Input</Link>
      <br />
      <Image src={product} alt="product"/>
      <Link className="link-tag" href="/components/product">Products</Link>
      <br />
      <Image src={invalid} alt="invalid"/>
      <Link className="link-tag" href="/formlayout">Invalid State</Link>
      <br />
      <Image src={button} alt="button"/>
      <Link className="link-tag" href="/button">Button</Link>
      <br />
      <Image src={table} alt="table"/>
      <Link className="link-tag" href="/table">Table</Link>
      <br />
      <Image src={list} alt="list"/>
      <Link className="link-tag" href="/components/list">List</Link>
      <br />
      <Image src={login} alt="login"/>
      <Link className="link-tag" href="/components/login">Login</Link>
      <br />
      <Image src={invoice} alt="invoice"/>
      <Link className="link-tag" href="/components/invoice">Invoice</Link><br/>
      <Image src={help} alt='help'/>
      <Link className="link-tag" href="/panel">Help</Link>
    </div>
  );
};
export default Sidebar;
