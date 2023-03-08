import React from "react";
import "../styles/Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a User" />
      </div>
      <div className="userChat">
        <img id="searchImg"
          src="https://1.bp.blogspot.com/-mBoBIltF73U/WruDDr_BNHI/AAAAAAAAICw/ez51tiqwANw0hVkUjF80gTH0KEJMzVOiQCK4BGAYYCw/w0/edward_newgate_aka_whitebeard_by_bodskih-dc74zch.png"
          alt=""
        />
        <div className="userChatInfo">
          <span>Robin</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
