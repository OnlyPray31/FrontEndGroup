import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

export default function Generations({ title }) {
  return (
    <div className="p-3 bg-[#9B5DE0] rounded-lg shadow">
      <h2 className="font-semibold text-lg text-white mb-2">{title}</h2>
      <div className="flex gap-3">
        <Gen1 text="Gen 1" />
        <Gen2 text="Gen 2" />
        <Gen3 text="Gen 3" />
        <Gen4 text="Gen 4" />
      </div>
    </div>
  );
}
