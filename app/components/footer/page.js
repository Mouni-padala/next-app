import './footer.css';
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import twittericon from "/public/twitter.svg";
import giticon from "/public/github.svg";
import Image from 'next/image';
const Footer=()=>{
return(
<div className="footer-tag">
        <div className="footer-title">AVALON</div>
        <div className="footer-icons">
          <div>
            <FacebookRoundedIcon />
          </div>
          <div>
            <Image className="twitter-img" src={twittericon} alt="twitter" />
          </div>
          <div>
            <Image className="git-img" src={giticon} alt="git" />
          </div>
        </div>
      </div>
      )
      }
      export default Footer;