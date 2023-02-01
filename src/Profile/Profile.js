<<<<<<< HEAD
import { useState } from 'react';
import axios from 'axios';
import classes from '../../styles/Profile.module.css';

function ProfilePage() {
  ///////////////////////////// state variables/////////////////////////////
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
=======
import { useState } from "react";
import axios from "axios";
import classes from "./Profile.module.css";

function ProfilePage() {
  ///////////////////////////// state variables/////////////////////////////
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
>>>>>>> main
  const [updateSuccess, setUpdateSuccess] = useState(false);
  //////////////////////////////// handle submit and axios put request to update database /////////////////////////////
  const handleSubmit = (event) => {
    event.preventDefault();
    // create a user object with the form data
    const user = { firstName, lastName, email, password, currentPassword };
    // send a PUT request to your server to update the user's information/
    axios
<<<<<<< HEAD
      .put('/api/interviewers/put', user)
=======
      .put("/api/interviewers/put", user)
>>>>>>> main
      .then((response) => {
        console.log(response);
        setUpdateSuccess(true);
        // handle the successful response here, e.g. show a message to the user
      })
      .catch((error) => {
        console.log(error);
        //handle the error here, e.g. show an error message to the user
      });
  };
  return (
<<<<<<< HEAD
    <>
      <div className={classes.edit_account}>Edit Account</div>

      <div className={classes.content}>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <div className={classes.form_inputs}>
            <label>First Name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.password_card}>
            <div className={classes.password_input}>
              <label>New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Enter your new password.</p>
            </div>
            <div className={classes.password_input}>
              <label>Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <p>In order to change your password enter your current password.</p>
            </div>
          </div>
          <div className="form_actions">
            <input
              type="submit"
              value="Update Account"
              className="btn btn-primary"
            />
          </div>
          {updateSuccess ? <p>Account Updated</p> : null}
        </form>
        <hr />
        <h3>Third Party Services</h3>
        <ul>
          <li>
            <a href="#">Link GitHub</a>
          </li>
        </ul>
      </div>
    </>
=======
    <div>
      <div className={classes.page}>
        <div className={classes.edit_account}>
          <h1 className={classes.title}>Edit Account</h1>
        </div>
        <div className={classes.content_container}>
          <div className={classes.content}>
            <form onSubmit={handleSubmit}>
              <div className={classes.form_inputs}>
                <label>First Name</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.password_card}>
                <div style={{ display: "flex" }}>
                  <div className={classes.password_input}>
                    <label> New Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>Enter your new password</p>
                  </div>
                  <div className={classes.password_input}>
                    <label>Current Password</label>
                    <input
                      type="password"
                      required
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <p>
                      In order to change your password enter your current
                      password
                    </p>
                  </div>
                </div>
              </div>
              <div className="form_actions">
                <input
                  type="submit"
                  value="Update Account"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#0d0f4ae3",
                    padding: "10px",
                    marginLeft: "669px",
                    marginTop: "50px",
                    marginBottom: "50px",
                  }}
                />
              </div>
              {updateSuccess ? <p>Account Updated</p> : null}
            </form>
            <hr />
            <h3>Third Party Services</h3>
            <ul>
              <li>
                <a href="#">Link GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
>>>>>>> main
  );
}

export default ProfilePage;
