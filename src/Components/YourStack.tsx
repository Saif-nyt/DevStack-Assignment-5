import type { Technology } from "../Types/technology";

type Props = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({ stack, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Your Stack</h2>
      <p className="mt-1 text-sm text-gray-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-gray-200 py-8 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="mb-2 flex items-center justify-between rounded-lg border border-gray-200 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7"
                />
                <div>
                  <h3 className="text-sm font-semibold">{technology.name}</h3>
                  <p className="text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                className="text-xl text-gray-400"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-md border border-red-300 py-2 text-sm text-red-500"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
