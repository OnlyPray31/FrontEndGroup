import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

export default function Home() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-[#9B5DE0]">Home</h2>
      <div className="flex flex-col gap-4">
        <Search placeholder="Search something..." />
        <CardInfo title="Card Info" />
      </div>
    </section>
  );
}
