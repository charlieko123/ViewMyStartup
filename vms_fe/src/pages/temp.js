import React, { useState } from "react";
import CompanyCard from "../components/CompanyCard.js";
import defaultLogo from "../assets/images/company_logo_1.svg";

const initialStartups = [
  {
    name: "코드잇",
    category: "에듀테크",
    logoSrc: defaultLogo,
  },
  {
    name: "코딩마스터",
    category: "에듀테크",
    logoSrc: defaultLogo,
  },
  {
    name: "러닝큐브",
    category: "에듀테크",
    logoSrc: defaultLogo,
  },
];

function CardTest() {
  const [startups, setStartups] = useState(initialStartups);

  const handleDelete = (name) => {
    const updatedStartups = startups.filter((startup) => startup.name !== name);
    setStartups(updatedStartups);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      {startups.map((startup, index) => (
        <CompanyCard
          key={index}
          name={startup.name}
          category={startup.category}
          logoSrc={startup.logoSrc}
          onDelete={() => handleDelete(startup.name)}
        />
      ))}
    </div>
  );
}

export default CardTest;
