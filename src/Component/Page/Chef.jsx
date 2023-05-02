import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { key } from "localforage";

const Chef = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://dragons-kitchen-server-akram409.vercel.app/ChefData")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-3">Our Chef</h1>
        <p>
          Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id
          nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
          Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor
          egestas nam congue elit dolor.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {item.map((item) => (
          <ChefCard key={item.id} item={item}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chef;
