import Logo from "./Logo";
import Generations from "./Generations/Generations";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#D78FEE] shadow">
      <Logo text="FrontEnd" />
      <Generations title="Generations" />
    </header>
  );
}
