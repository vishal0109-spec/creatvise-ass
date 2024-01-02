import { useMemo } from "react";

const Property1Group6981 = ({
  property1Group698Position,
  property1Group698Top,
  property1Group698Left,
}) => {
  const property1Group6981Style = useMemo(() => {
    return {
      position: property1Group698Position,
      top: property1Group698Top,
      left: property1Group698Left,
    };
  }, [property1Group698Position, property1Group698Top, property1Group698Left]);

  return (
    <div
      className="w-[198px] text-center text-3xl text-white font-montserrat"
      style={property1Group6981Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl bg-slateblue" />
      <div className="absolute top-[23.81%] left-[20.2%] tracking-[-0.05em] leading-[150%] font-semibold">
        Get Started
      </div>
    </div>
  );
};

export default Property1Group6981;
