import Cards from "./Cards";
const Content = () => {
  return (
    <div className="px-96 mb-10 mt-10 ">
      <h2 className="text-2xl font-medium">Tuyến đường phổ biến</h2>
      <div className=" flex flex-row gap-5 mt-9">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Content;
