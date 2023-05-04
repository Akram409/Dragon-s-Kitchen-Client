import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { key } from "localforage";
import About from "./About";
import ClientReview from "./ClientReview";
import { useNavigation } from "react-router-dom";
import Spiner from "../Share/Spiner";

const Chef = () => {
  const navigation = useNavigation()
  const [item, setItem] = useState([]);

  
  if(navigation.state === 'loading')
  {
    return <Spiner />
  }

  useEffect(() => {
    fetch("https://dragons-kitchen-server-akram409.vercel.app/ChefData")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <>
      <div className="mt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Our Experts</h1>
          <p>
            Lacus lobortis nullam nam consectetur fermentum mattis pellentesque
            id nulla. Risus convallis iaculis risus ac aliquam sit ultricies.
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
      <About />
      <ClientReview />
    </>
  );
};

export default Chef;
