

import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../Types/technology";
import { toast } from "react-toastify";
const TechnologyGrid = () => {


  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });

  }, []);


  const handleAdd = (technology: Technology) => {

    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
     toast.warning("This technology is already in your stack!");
      
      return;
    }

    setStack([...stack, technology]);
   toast.success(`${technology.name} added to stack!`);
  };


 
  


  if (loading) { 
    return (
      <div className="text-center py-20">
        <p className="text-black-500">
          Loading technologies...
        </p>
      </div>
    );
  }


  return (
   
 <div className="max-w-6xl mx-auto px-5">
    

      <div className="mb-8  ">

        <h2 className="text-3xl font-bold text-gray-900">
          <span>Explore the </span>
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>

      </div>


      

      

        

        <div className=" pd- 10 grid grid-cols-1 md:grid-cols-4 gap-4">

          {technologies.map((technology) => (

            <TechnologyCard
              key={technology.id}
              technology={technology}
              handleAdd={handleAdd}
              isAdded={stack.some(
                (item) => item.id === technology.id
              )}
            />

          ))}

        </div>


        



    </div>
  );
};

export default TechnologyGrid;
