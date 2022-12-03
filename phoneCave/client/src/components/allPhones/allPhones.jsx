import React, { useState, useEffect } from "react";

// import Loading from "../Loading/Loading";

import axios from "axios";

const AllPhones = () => {
  const [phoneList, setPhoneList] = useState();
  console.log(`phoneList:`, phoneList);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("http://localhost:5005/phones")
      .then((result) => {
        setPhoneList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   if (isLoading) {
  //     return <Loading />;
  //   }

  return (
    <div>
      <h2>allPhones</h2>
      {phoneList &&
        phoneList.map((phone) => {
          return (
            <div key={phone.id}>
              <h3>Name: {phone.name}</h3>
              <img src={`/images/${phone.imageFileName}`} alt="phone img" />
            </div>
          );
        })}
    </div>
  );
};

export default AllPhones;
