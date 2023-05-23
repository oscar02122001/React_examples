import React, { useState } from "react";

const AddData = () => {
  const [data, setData] = useState({
    address: "sdcsdc",
    attachments: [
      {
        imgPath: "string",
      },
    ],
    categoryId: 0,
    city: "sdcsdc",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "sdcsdcd",
    description: "string",
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: 234,
      bath: 34,
      beds: 3,
      garage: 5,
      room: 54,
      yearBuilt: 2013,
    },
    locations: {
      latitude: 34,
      longitude: 54,
    },
    name: "dvdfv",
    price: 3434,
    region: "dfvdfv",
    salePrice: 343,
    status: true,
    zipCode: "34343",
  });

  const add = () => {
    return fetch(`http://localhost:8081/api/v1/houses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <button onClick={add}>add Home</button>
    </div>
  );
};

export default AddData;
