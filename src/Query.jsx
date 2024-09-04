import React from "react";
import Shadow from "./Images/Home.png";
import { FaArrowCircleUp } from "react-icons/fa";

const Query = () => {
  return (
    <div
      className="query-con"
      style={{
        backgroundImage: `url(${Shadow})`,
      }}
    >
      <section>
        <form action="">
          <input type="text" placeholder="Search" />
          <button>
            <FaArrowCircleUp />
          </button>
        </form>
        <p>Educating the world through justice!</p>
      </section>
    </div>
  );
};

export default Query;
