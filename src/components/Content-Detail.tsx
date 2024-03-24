import BoxSearch from "../components/BoxSearch";
import Button_Radio from "../components/Button-Radio";
import Card_Detail from "../components/Card-Detail";

const Content_Detail = () => {
  return (
    <div className="w-full bg-[#F2F2F2]">
      <div className="px-64 p-10">
        <BoxSearch />
        <div className="grid grid-cols-5 gap-4 py-6">
          <div className="bg-white rounded-lg col-span-1 max-h-80 ">
            <h2 className="font-medium text-2xl ml-5 mt-5">Sắp xếp</h2>
            <div className="ml-5 mt-5">
              <Button_Radio title="Mặc định" />
              <Button_Radio title="Giờ đi sớm nhất" />
              <Button_Radio title="Giờ đi muộn nhất" />
              <Button_Radio title="Đánh giá cao nhất" />
              <Button_Radio title="Giá tăng dần" />
              <Button_Radio title="Giá giảm dần" />
            </div>
          </div>
          <div className="col-span-4 min-w-[0]">
            <Card_Detail />
            <Card_Detail />
            <Card_Detail />
            <Card_Detail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content_Detail;
