import Image from "next/image";
import Img from "/public/imag11.PNG";
import  admin from '/public/admin.svg';
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div>
        <Image src={Img} alt="img" width="1200" height="500" />
      </div>
      <div className="redd">
       <br/>
            <div className="user-tag">
          <div>
            {/* <svg
              class="w-[42px] h-[42px] text-gray-800 dark:text-white" 
              style="color:#fff"
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
                d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg> */}
            <Image src={admin} height="50" width="50"/>
          </div>
          <div>
            <h1 className="title">Welcome Guest</h1>
            <p className="note-tag">Signin to alavon network</p>
          </div></div><br/><br/>
        <div>
            Username<br/>
            <input className="input-tag" type="text"  placeholder="username"/><br/><br/>
            Password<br/>
            <input className="input-tag" type="password" placeholder="password"/><br/><br/>
        </div>
        <div className="submit-login">
            <div>
        <button className="button">Signin</button>
            </div>
            <div>
forgotPassword?
            </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
