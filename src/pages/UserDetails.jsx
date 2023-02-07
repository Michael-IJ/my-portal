import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  let [errorMessage, setErrorMessage] = useState("");

  // for button
  let navigate = useNavigate();

  // local storage stuff
  let [myUserDetails, setMyUserDetails] = useState([]);
  let [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    state: "",
    dob: "",
    // active: false,
  });

  function newDetails(e) {
    e.preventDefault();

    setMyUserDetails((myUserDetails = [...myUserDetails, details]));
    localStorage.setItem("user", JSON.stringify(myUserDetails));


    // conditions statement
    console.log("I'm working");
    console.log(details)

    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (details.firstName.length < 3) {
      setErrorMessage("First Name Is Required");
      return false;
    } else if (details.lastName.length < 3) {
      setErrorMessage("Last Name Is Required");
      return false;
    } else if (!mailRegex.test(details.email)) {
      setErrorMessage("Invalid Email");
      return false;
    } else if (details.phoneNumber.length < 11) {
      setErrorMessage("Phone Number Is Required");
      return false;
    } else if (details.state === "") {
      setErrorMessage("State Is Required");
      return false;
    } else if (!details.dob) {
      setErrorMessage("Date Of Birth Is Required");
      return false;
    }
    let age = new Date().getFullYear() - new Date(details.dob).getFullYear();
    if (age < 17) {
      setErrorMessage("must be above 18");
      return false;
    }

    navigate("/Registration");
  }

  // outputting list  for state

  const state = [
    "---Please-select-state---",
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  return (
    <form onSubmit={newDetails}>
      <div className="users_info">
        <div className="details2">
          <p className="err-msg">{errorMessage}</p>
          <div className="input_block">
            <div className="fg">
              <label htmlFor="">FirstName</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={details.firstName}
                placeholder="firstname"
                onChange={(e) =>
                  setDetails({ ...details, firstName: e.target.value })
                }
              />
            </div>
            <div className="fg">
              <label htmlFor="">LastName</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={details.lastName}
                placeholder="last name"
                onChange={(e) =>
                  setDetails({ ...details, lastName: e.target.value })
                }
              />
            </div>
          </div>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          <div className="input_block">
            <div className="fg">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={details.email}
                placeholder="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </div>
            <div className="fg">
              <label htmlFor="">Number</label>
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                value={details.number}
                placeholder="Number"
                onChange={(e) =>
                  setDetails({ ...details, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input_block">
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            <div className="fg">
              <label htmlFor="">State</label>
              <select
                name=""
                id="select"
                value={details.state}
                onChange={(e) =>
                  setDetails({ ...details, state: e.target.value })
                }
              >
                {state.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="fg">
              <label htmlFor="">DOB</label>
              <input
                type="date"
                id="dob"
                value={details.dob}
                onChange={(e) =>
                  setDetails({ ...details, dob: e.target.value })
                }
              />
            </div>
          </div>
          <button type="submit" onClick={newDetails}>
            submit
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </form>
  );
};

export default UserDetail;
