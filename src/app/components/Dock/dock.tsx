import dockList from "../../data/socials";
interface DockTheme {
  theme?: boolean;
}

interface DockListType {
  key: number;
  path?: string;
  url: string;
  alt_text: string;
}

const Dock = ({ theme }: DockTheme) => {
  const cols = dockList.length;
  return (
    <div
      className={`dock-container  mt-3 py-4 px-2 rounded-2xl items-center  grid grid-flow-col grid-cols-${cols} gap-5`}
    >
      {dockList &&
        dockList.map((item: DockListType, index: number) => (
          <a
            href={item.url}
            key={index}
            target="blank"
            className="opacity-100 cursor-pointer mx-3 hover:scale-110 hover:opacity-75 duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme ? `#ededed` : `#141414`}
              viewBox="0 0 24 24"
              width="25"
              height="25"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d={item.path} />
            </svg>
          </a>
        ))}
    </div>
  );
};

export default Dock;
