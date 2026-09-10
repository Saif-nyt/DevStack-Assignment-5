import type { Technology } from "../Types/technology";

type Props = {
  technology: Technology;
  handleAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({ technology, handleAdd, isAdded }: Props) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4 container mx-auto">
      <div className="flex justify-between ">
        <img src={technology.icon} alt={technology.name} className="w-8 h-8" />

        {technology.badge && (
          <span
            className={`text-xs px-2 py-1 rounded-full item-center ${
              technology.badge === "Popular"
                ? "bg-blue-50 text-blue-500"
                : technology.badge === "Versatile"
                  ? "bg-green-50 text-green-500"
                  : technology.badge === "Fast"
                    ? "bg-red-50 text-red-500"
                    : technology.badge === "Standard"
                      ? "bg-indigo-50 text-indigo-500"
                      : technology.badge === "Top SQL"
                        ? "bg-cyan-50 text-cyan-500"
                        : technology.badge === "Cache"
                          ? "bg-orange-50 text-orange-500"
                          : technology.badge === "Ubiquitous"
                            ? "bg-yellow-50 text-yellow-600"
                            : technology.badge === "Essential"
                              ? "bg-violet-50 text-violet-500"
                              : technology.badge === "Robust"
                                ? "bg-slate-100 text-slate-600"
                                : technology.badge === "Modern"
                                  ? "bg-pink-50 text-pink-500"
                                  : technology.badge === "Containers"
                                    ? "bg-teal-50 text-teal-500"
                                    : ""
            }`}
          >
            {technology.badge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mt-4">
        {technology.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2 min-h-[65px]">
        {technology.description}
      </p>

      <div className="flex justify-between items-center mt-4 text-xs">
        <span className="bg-gray-100 px-2 py-1 rounded">
          {technology.category}
        </span>

        <span className="text-gray-500">{technology.difficulty}</span>

        <span className="text-gray-600">⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => handleAdd(technology)}
        disabled={isAdded}
        className={`w-full mt-4 py-2 rounded-md text-sm ${
          isAdded
            ? "bg-green-100 text-green-600"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
