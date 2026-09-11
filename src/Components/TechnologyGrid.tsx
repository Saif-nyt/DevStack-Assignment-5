import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../Types/technology";
import { toast } from "react-toastify";
import YourStack from "./YourStack";
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
    const alreadyAdded = stack.find((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");

      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const newStack = stack.filter((technology) => technology.id !== id);

    setStack(newStack);
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);
  };

  if (loading) {
    return (
      <div className="text-center py-20 ">
        <p className="text-black-500">Loading technologies...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1450px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 min-w-0">
        <div className="mb-8  ">
          <h2 className="text-3xl font-bold text-gray-900">
            <span>Explore the </span>
            <span
              className="text-transparent"
              style={{
                backgroundImage: "var(--brand-gradient)",
                backgroundClip: "text",
              
              }}
            >
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              handleAdd={handleAdd}
              isAdded={stack.some((item) => item.id === technology.id)}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default TechnologyGrid;
