"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Img from "/public/imag5.PNG";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Img1 from "/public/imag6.PNG";
import Img2 from "/public/imag9.PNG";
import Img3 from "/public/imag7.PNG";
import "./dashboard.css";
import Pagination from '/app/components/pagination/page';
import Footer from '/app/components/footer/page';
import  productData from '/app/components/data.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import moment from "moment";
// import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js'
import { Bar } from 'react-chartjs-2';
// import '/app/components/dashboard/secondhalf/secondhalf.css';
Chart.register(...registerables)
const options = [
  { label: "Add New", icon: <AddIcon /> },
  { label: "Search", icon: <SearchIcon /> },
];

const ITEM_HEIGHT = 48;
const Dashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const chartData = {
    labels: productData.products.map(product => product.product_name),
    datasets: [
      {
        label: 'Product Prices',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 1,
        data: productData.products.map(product => product.product_price),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div className="graph-page">
      <div className="four-dashboardhighlights">
        <div className="unread-msgs">
          <div>Unread Messages</div>
          <br />
          <h1>
            150 <ArrowUpwardIcon />
          </h1>
        </div>
        <div className="check-ins">
          <div>Check-ins</div>
          <br />
          <h1>
            532 <ArrowUpwardIcon />
          </h1>
        </div>
        <div className="files">
          <div>Files</div>
          <br />
          <h1>
            450 <ArrowUpwardIcon />
          </h1>
        </div>
        <div className="users">
          <div>Users</div>
          <br />
          <h1>
            532
            <ArrowUpwardIcon />
          </h1>
        </div>
      </div>
      <div className="main-block-wrap">
      <div className="ui_kit-inner">
        <div className="graph-title">
          {' '}
          <span className="graph-head">Product Prices</span>
          <Bar data={chartData} options={chartOptions} height="300px" width="500px" />
        </div>
      </div>

        <div className="quarter-goals">
          <div className="memu-icon">
            <div className="quarter-text-div">
              <h1 className="text-blue">Quarter Goals</h1>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.label} onClick={handleClose}>
                    {option.icon} {option.label}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className="color">
              85%<span className="num">(2125/2500)</span>
              <div>
                <Image className="line-img" src={Img} alt="image" />
              </div>
            </div>
            <div>
              <ul className="list-tags-main">
                <li className="list-tags1">
                  T-shirt<span className="list-count1">89</span>
                </li>
                <li className="list-tags2">
                  CricketKit<span className="list-count2">23</span>
                </li>
                <li className="list-tags3">
                  Mouse<span className="list-count3">134</span>
                </li>
                <li className="list-tags4">
                  Shoes<span className="list-count4">42</span>
                </li>
                <li className="list-tags5">
                  Flute<span className="list-count5">63</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="main-dashboard-content-block">
          <div className="reviews">
            <div>
              <h1>450</h1>
              <br />
              <span className="name-tag"> Reviews Received </span>
            </div>
            <Image className="img" src={Img1} />
          </div>
          <div className="unique">
            <div>
              <h1>71K</h1>
              <br />
              <span className="name-tag"> Unique Visitors </span>
            </div>
            <Image className="img2" src={Img2} />
          </div>
          <div className="payments">
            <div>
              <h1>757</h1>
              <br />
              <span className="name-tag">
               
                Payments <br />
                processed
              </span>
            </div>
            <Image className="img3" src={Img3} />
          </div>
        </div><br/>
      </div>
      <div className="pagination-wrap">
      <div className="pagination">
      Products
      <Pagination/>
      </div>
      <div>
        <h1>hello</h1>
      </div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default Dashboard;
