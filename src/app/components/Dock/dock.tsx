import Image from "next/image";
import dockList from "../../data/socials";

const Dock = () => {
  let cols = dockList.length;
  return (
    <div
      className={`dock-container pt-4 grid grid-flow-col grid-cols-${cols} gap-5`}
    >
      {dockList &&
        dockList.map((item: any, index) => (
          <a
            href={item.url}
            key={index}
            target="blank"
            className="opacity-50 cursor-pointer hover:scale-110 hover:opacity-75"
          >
            <Image src={item.icon} alt={item.alt_text} height={30} width={30} />
          </a>
        ))}
    </div>
  );
};

export default Dock;
