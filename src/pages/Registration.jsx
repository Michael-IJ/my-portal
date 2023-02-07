import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import COURSES from "../Courses.json";
import { useNavigate } from "react-router-dom";

const YEARS = [
  "-----Please-select-----",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
];

const Registration = () => {
  // error message
  let [error, setError] = useState("");

  // for button
  const navigate = useNavigate();

  //   usestate for faculty and courses
  let [courses, setCourses] = useState([]);
  let [faculty, setFaculty] = useState([]);

  useEffect(() => {
    init();
  }, []);
  const init = () => {
    setFaculty(COURSES.map((course) => course.dept));
  };
  // local storage stuff
  let [myUserRegister, setMyUserRegister] = useState([]);
  let [register, setRegister] = useState({
    sessionTitle: "",
    semester: "",
    startYear: "",
    endYear: "",
    faculty: "",
    courses: "",
  });

  function newRegister(e) {
    e.preventDefault();
    setMyUserRegister((myUserRegister = [...myUserRegister, register]));
    localStorage.setItem("Reg", JSON.stringify(myUserRegister));

    // conditions statment
    {
      if (register.startYear === "") {
        setError((error = "Start year is required"));
        return;
      } else if (register.endYear === "") {
        setError((error = "End year is required"));
        return;
      } else if (register.sessionTitle < 3) {
        setError((error = "Must be 2022/2023 For sessionTitle"));
        return;
      } else if (register.semester === "") {
        setError((error = "Semester is required"));
        return;
      } else if (register.faculty === "") {
        setError((error = "Faculty is required"));
        return;
      } else if (register.courses === "") {
        setError((error = "Courses is required"));
        return;
      }

      //   for button and moving to a new page
      // setLnk("/DashBoard");
      navigate("/DashBoard");
    }
  }

  // outputting list

  const startYr = YEARS;
  const endYr = YEARS;

  return (
    <form className="container1">
      <div className="users_info">
        <div className="details2">
          <p className="err-msg">{error}</p>
          <div className="input_block">
            <div className="fg">
              <label htmlFor="">Start Year</label>
              <select
                name=""
                id="start_year"
                onChange={(e) =>
                  setRegister({ ...register, startYear: e.target.value })
                }
              >
                {startYr.map((startYr) => (
                  <option key={startYr} value={startYr}>
                    {startYr}
                  </option>
                ))}
              </select>
            </div>
            <div className="fg">
              <label htmlFor="">End Year</label>
              <select
                name=""
                id="end_year"
                onChange={(e) =>
                  setRegister({ ...register, endYear: e.target.value })
                }
              >
                {endYr.map((endYr) => (
                  <option key={endYr} value={endYr}>
                    {endYr}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input_block">
            <div className="fg">
              <label htmlFor="">Session Title</label>
              <input
                type="text"
                placeholder="2022/2023"
                onChange={(e) =>
                  setRegister({ ...register, sessionTitle: e.target.value })
                }
              ></input>
            </div>
            <div className="fg">
              <label htmlFor="">Semester</label>
              <select
                name=""
                id="semester"
                value={register.semester}
                onChange={(e) =>
                  setRegister({ ...register, semester: e.target.value })
                }
              >
                <option value="1">-----select-----</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="input_block">
            <div className="fg">
              <label htmlFor="">Faculty</label>
              <select
                name=""
                id=""
                value={register.faculty}
                onChange={(e) => {
                  setRegister({ ...register, faculty: e.target.value });
                  setCourses(
                    COURSES.find((course) => course.dept === e.target.value)
                      .courses
                  );
                }}
              >
                {faculty.map((faculty) => (
                  <option key={faculty} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
            </div>
            <div className="fg">
              <label htmlFor="">Courses</label>
              <select
                name=""
                id=""
                value={register.courses}
                onChange={(e) =>
                  setRegister({ ...register, courses: e.target.value })
                }
              >
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" onClick={newRegister}>
            Sumbit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Registration;
