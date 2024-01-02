import { useMemo } from "react";

const Property1Group698 = ({
  property1Group698Position,
  property1Group698Top,
  property1Group698Left,
}) => {
  const property1Group698Style = useMemo(() => {
    return {
      position: property1Group698Position,
      top: property1Group698Top,
      left: property1Group698Left,
    };
  }, [property1Group698Position, property1Group698Top, property1Group698Left]);

  return (
    <div
      className="w-[183px] h-[35px] text-left text-3xl text-white font-montserrat"
      style={property1Group698Style}
    >
      <div className="absolute top-[0%] left-[0%] tracking-[-0.05em] p-1 m-1 bg-slateblue leading-[159%] font-semibold">
        Explore Now
      </div>
      {/* <img
        className="absolute h-[49.43%] w-[21.86%] top-[54.29%] right-[0%] bottom-[-3.71%] left-[78.14%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/line-81@2x.png"
      /> */}
    </div>
  );
};

export default Property1Group698;
