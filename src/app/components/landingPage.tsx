import BaseTemplate from "./baseTemplate";
import peep1 from "../../../public/assets/peeps/peep1.svg";
import peep2 from "../../../public/assets/peeps/peep2.svg";

export interface PageType {
  theme: boolean;
}

const LandingPageData = () => {
  return (
    <div className="landing-container relative overflow-auto h-full">
      <div className="mx-7 my-26">
        <h1 className="font-jersey-lg text-8xl">
          Vaishnav Lakshman
        </h1>
        <div className="flex gap-2 font-jersey-lg ml-2 text-sub-head text-lg">
          <p>&gt;</p>
          <p>
            analyse_Data // think_Creatively // build_Websites // design_Visuals
            // solve_Problems
          </p>
        </div>
      </div>
      <div className="writeup-container font-body-text text-dark-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        dignissimos commodi unde dolore sunt. Nam illo iste laudantium delectus
        nemo. Blanditiis, temporibus. Quos earum perspiciatis aspernatur vel
        laboriosam assumenda! Beatae! Magnam accusantium itaque voluptatum iure,
        in aperiam atque blanditiis debitis ipsum consequatur ad unde fugiat
        nostrum earum pariatur minus eius ex tempore soluta hic esse id neque
        tempora? Unde, voluptatibus. Totam accusamus modi distinctio temporibus
        deserunt delectus obcaecati error blanditiis dicta. Quaerat placeat
        dicta quasi sed alias laudantium! Tempora, consectetur. Voluptatum
        inventore, voluptate dignissimos consequatur reprehenderit facilis
        repellendus aliquam similique?
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem
          doloribus nam explicabo laboriosam quibusdam velit expedita omnis amet
          recusandae corrupti, nulla voluptatum dolore aut. Laboriosam placeat
          recusandae incidunt ut? Repellat sint saepe atque recusandae
          reprehenderit laborum consectetur vitae exercitationem maxime
          accusantium eius ex veritatis totam inventore provident asperiores
          ipsum quidem aliquam, soluta id omnis. Quia eveniet ipsa adipisci
          suscipit? Minus error nisi aut quis libero quam facilis doloribus
          atque velit alias soluta enim illum dolorum, exercitationem delectus
          odit sint cupiditate quos possimus! Quas ab dolorum ad facilis
          voluptas aperiam!
        </p>
      </div>
    </div>
  );
};

const LandingPage = ({ theme }: PageType) => {
  return (
    <BaseTemplate
      theme={theme}
      peep1={peep1}
      peep2={peep2}
      data={LandingPageData()}
    />
  );
};

export default LandingPage;
