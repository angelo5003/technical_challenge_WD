import React, { useState, useEffect } from "react";

import axios from "axios";

const AllPhones = () => {
  const [phoneList, setPhoneList] = useState();
  const [showPhoneDetails, setShowPhoneDetails] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5005/phones")
      .then((result) => {
        setPhoneList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>allPhones</h2>
      {phoneList &&
        phoneList.map((phone) => {
          return (
            <div key={phone.id}>
              {showPhoneDetails ? (
                <div>
                  <p>details</p>
                </div>
              ) : null}
              <h3>Name: {phone.name}</h3>
              <img
                onClick={() => setShowPhoneDetails(!showPhoneDetails)}
                src={`/images/${phone.imageFileName}`}
                alt="phone img"
              />
            </div>
          );
        })}
    </div>
  );
};

export default AllPhones;
