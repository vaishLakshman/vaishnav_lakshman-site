import BaseTemplate from "./baseTemplate";
import { PageType } from "./landingPage";

const RandomData = () => {
  return (
    <div>
      <div>hbejhb</div>
    </div>
  );
};

const Randoms = ({ theme }: PageType) => {
  return (
    <BaseTemplate
      theme={theme}
      peep1={undefined}
      peep2={undefined}
      peep1_position={undefined}
      peep2_position={undefined}
      data={RandomData()}
    />
  );
};

export default Randoms;
