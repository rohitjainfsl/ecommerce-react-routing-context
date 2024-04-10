import { useState } from "react";
import "./multiLevelForm.css";
function Main() {
  const [status, setStatus] = useState(1);
  return (
    <form>
      <div className={`form-group ${status === 1 ? 'active': ''}`}>
        <label htmlFor="fname">First Name</label>
        <input type="text" placeholder="Enter First Name" /> <br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" placeholder="Enter Last Name" /> <br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email" /> <br />
      </div>

      <div className={`form-group ${status === 2 ? 'active': ''}`}>
        <label htmlFor="">Gender</label>
        <input type="radio" value="male" />
        <span>Male</span>
        <input type="radio" value="female" />
        <span>Female</span> <br />
        <label htmlFor="">Hometown</label>
        <input type="text" placeholder="Enter your hometown" />
        <br />
      </div>

      <div className={`form-group ${status === 3 ? 'active': ''}`}>
        <label htmlFor="">Course</label>
        <select name="" id="">
          <option value="">Java</option>
          <option value="">PHP</option>
          <option value="">Python</option>
          <option value="">Javascript</option>
        </select>
      </div>

      <div className={`form-group ${status === 4 ? 'active': ''}`}>
        <label htmlFor="">Who Referred you?</label>
        <label htmlFor="">
          <input type="radio" value="google" />
          <span>Google</span>
          <input type="radio" value="facebook" />
          <span>Facebook</span>
          <input type="radio" value="college" />
          <span>College TPO</span>
        </label>
      </div>

      <div className="buttons">
        <a
          href=""
          className={status === 4 ? "inactive next" : "next"}
          onClick={(e) => {
            e.preventDefault();
            setStatus(status + 1);
          }}
        >
          Next
        </a>
        <button type="submit" className={status === 4 ? "active" : ""}>Submit</button>
      </div>
    </form>
  );
}

export default Main;
