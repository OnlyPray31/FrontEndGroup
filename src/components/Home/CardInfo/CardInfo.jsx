import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

export default function CardInfo({ title }) {
  return (
    <div className="p-4 bg-[#9B5DE0] border rounded-lg shadow">
      <h3 className="font-semibold text-lg text-white mb-3">{title}</h3>
      <div className="flex gap-3">
        <Evolution text="Evolution Info" />
        <TypeEffect text="Type Effect Info" />
        <Logo text="Logo Here" />
      </div>
    </div>
  );
}
