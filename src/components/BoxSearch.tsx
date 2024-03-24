import Select from "./Select";
import Option from "./Option";
import Button_Search from "./Button-Search";
const BoxSearch = () => {
  return (
    <>
      <div className="bg-white p-3  rounded-t-lg border-b border-inherit flex justify-center items-center gap-8">
        <Option icon="fa-solid fa-bus-simple" title="Xe Khách" />
        <Option icon="fa-solid fa-plane-up" title="Máy Bay" />
        <Option icon="fa-solid fa-train-subway" title="Tàu Hỏa" />
        <Option icon="fa-solid fa-motorcycle" title="Thuê xe" />
      </div>

      <form
        action=""
        className=" bg-white p-4 border-b-2 border-inherit rounded-b-lg"
      >
        <div className="grid grid-cols-5 gap-10 p-1 border-solid border border-inherit rounded">
          <Select
            title="Nơi xuất phát"
            icon="fa-solid fa-circle-dot"
            color="#2474E5"
          />
          <Select
            title="Nơi đến"
            icon="fa-solid fa-location-dot"
            color="#EB5757"
          />
          <Select
            title="Ngày đi"
            icon="fa-solid fa-calendar-days"
            color="#2474E5"
          />
          <span className="flex items-center justify-center">
            <a href="" className="text-[#2474E5] font-medium">
              + Thêm ngày về
            </a>
          </span>
          <Button_Search title="Tìm kiếm" bg="#FFD333" color="black" />
        </div>
      </form>
    </>
  );
};

export default BoxSearch;
