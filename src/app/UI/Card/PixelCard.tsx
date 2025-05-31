import Image from "next/image";

export interface PixelCardType {
  key: number;
  // eslint-disable-next-line
  asset: any;
  title: string;
  desc: string;
  created_on: string;
}

const PixelCard = ({ asset, title, desc, created_on }: PixelCardType) => {
  return (
    <div className="card-container size-fit mx-auto relative cursor-pointer">
      <div className="img-container size-[12rem] lg:size-[25rem] overflow-hidden rounded-4xl">
        <Image
          className="object-fill"
          src={asset}
          alt={desc}
          height={400}
          width={400}
          unoptimized={true}
        />
      </div>

      <div className="desc-container absolute inset-0 lg:size-[25rem] text-white rounded-4xl opacity-0 bg-black/50 backdrop-blur-md hover:opacity-100">
        <div className="relative  mx-5 my-20 grid grid-flow-col grid-rows-3 ">
          <h2 className="text-5xl font-jersey-sm">{title}</h2>
          <p className="h-24 font-jersey-sm text-2xl">
            {desc ? desc : "No description added."}
          </p>
          <span className="flex gap-2 items-center font-jersey-sm text-xl">
            <h3>Created on : </h3>
            <p>{created_on ? created_on : "--/--/--"}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PixelCard;
