import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SectionCard = () => {
  return (
    <section className="absolute top-[2705px] left-[-38px] bg-slateblue w-[1806px] h-[610px] text-center text-3xl text-white font-montserrat">
      <div className="absolute top-[147px] left-[656px] tracking-[-0.05em] leading-[99.5%] font-semibold">
        Empowering Curators, Enriching Perspectives
      </div>
      <div className="absolute top-[349px] left-[779px] w-[216.3px] h-[22px] flex flex-row items-center justify-start gap-[30px]">
        <img
          className="relative w-[22px] h-[22px] object-cover"
          alt=""
          src="/group-557@2x.png"
        />
        <img
          className="relative w-[10.4px] h-5 object-cover"
          alt=""
          src="/group@2x.png"
        />
        <img
          className="relative w-[22px] h-[22px] object-cover"
          alt=""
          src="/group-558@2x.png"
        />
        <img
          className="relative w-[17.3px] h-[22px] object-cover"
          alt=""
          src="/group-560@2x.png"
        />
        <img
          className="relative w-[24.6px] h-5 object-cover"
          alt=""
          src="/group-559@2x.png"
        />
      </div>
      <div className="absolute top-[341px] left-[89px] w-[336px] h-[42.4px] flex flex-row items-center justify-start py-0 pr-[0.000091552734375px] pl-0 box-border text-left text-mini text-slateblue">
        <div className="rounded-31xl bg-white box-border w-[336px] h-[42.4px] flex flex-col items-start justify-end py-[10.449440002441406px] px-7 border-[0.2px] border-solid border-darkslateblue">
          <div className="relative tracking-[-0.02em] font-medium inline-block w-[49px] h-[19px] shrink-0 opacity-[0.3]">
            email
          </div>
        </div>
        <Button className="w-[90.6px] ml-[-90px]" variant="primary">
          notify me
        </Button>
      </div>
    </section>
  );
};

export default SectionCard;
