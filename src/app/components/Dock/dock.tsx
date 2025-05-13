import Image from "next/image";
import dockList from "../../data/socials";

interface DockType {
  key: number;
  // eslint-disable-next-line
  icon: any;
  url: string;
  alt_text: string;
}

const Dock = () => {
  const cols = dockList.length;
  return (
    <div
      className={`dock-container bg-gray-100 mt-3 py-4 px-2 rounded-2xl  grid grid-flow-col grid-cols-${cols} gap-5`}
    >
      {dockList &&
        dockList.map((item: DockType, index: number) => (
          <a
            href={item.url}
            key={index}
            target="blank"
            className="opacity-100 cursor-pointer mx-3 hover:scale-110 hover:opacity-75"
          >
            <Image src={item.icon} alt={item.alt_text} height={30} width={30} />
          </a>
        ))}
    </div>
  );
};

export default Dock;
