// import Footer from "../components/footer";
import yey from "../dash";
// import { useEffect } from "react";
// import { useState } from "react";

const DashBoard = () => {


  const list = Object.keys(yey[0]);

  function ThData() {
    return list.map((data) => {
      return <th key={data}>{data}</th>;
    });
  }

  const tdData = () => {
    return yey.map((data) => {
      return (
        <tr>
          {list.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <>
      {/* <h1 className="table_title">Course Registration</h1> */}
      <div className="table1">
        <table className="table">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>{tdData()}</tbody>
        </table>
      </div>
  
    </>
  );

};

export default DashBoard;
