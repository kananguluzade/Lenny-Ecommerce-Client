import { React, useState } from "react";
import MYButton from "src/components/Button/Button";
import Form from "src/components/Form/Form";
import axios from "axios";
import { modalContext } from "src/context/ModalProvider";
import { useContext } from "react";

const initialUser = { username: "", email: "", password: "" }

const SignUp = () => {

  const { setIsLogin } = useContext(modalContext);

  const [user, setUser] = useState(initialUser);  

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value
    }))
  };

  //! registerUser is handleSignup event
  const registerUser = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL
        }/api/auth/local/register`
      if (user.username && user.password && user.email) {
        const res = await axios.post(url, user);
        if (!!res) {
          setUser(initialUser);
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sign-up-container">
      <h5 className="modal-title">Sign Up</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          registerUser();
        }}
        className="sign-up-forms ">
        <Form
          label="Username"
          holder="Enter your Username"
          type="text"
          name="username"
          value={user.username}
          onChange={handleUserChange}
        />
        <Form
          label="Email"
          holder="Enter your Email"
          type="text"
          name="email"
          value={user.email}
          onChange={handleUserChange}
        />
        <Form
          label="Password"
          holder="Enter your password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleUserChange}
        />

        <a className="forgot-pswrd" href="#">
          Getting Trouble?
        </a>
        <div className="button-box">
          <MYButton type="submit" className="signup-button" text="Sign Up" variant="outline" size="xl" />
        </div>
      </form>

      <div className="other-method">
        <div className="line"></div>
        <p>Or using other method</p>
        <div className="line"></div>
      </div>
      <button className="sign-in-fb-btn">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1454 14.8745L17.5443 12.342H15.0868V10.6959C15.0868 10.0034 15.4299 9.32674 16.527 9.32674H17.66V7.17015C17.0002 7.06503 16.3335 7.00816 15.6653 7C13.6427 7 12.3221 8.21481 12.3221 10.411V12.342H10.0801V14.8745H12.3221V21H15.0868V14.8745H17.1454Z"
            fill="#337FFF"
          />
        </svg>
        Sign up with Facebook
      </button>
    </div>
  );
};

export default SignUp;
