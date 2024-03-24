const Card_Detail = () => {
  return (
    <div className="flex justify-between flex-row bg-white rounded-lg py-10 px-5 mt-3 ">
      <div className="flex items-center ">
        <div className="h-40 w-40">
          <img src="/detail-product.jpeg" className=" h-full" alt="" />
        </div>

        <div className="grid grid-rows-2 grid-flow-col  h-40 w-60">
          <span className="ml-8 text-[#484848;] font-semibold">
            {" "}
            Hải Phòng Travel(Đất Cảng)
          </span>
          <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ml-10 ">
            <li className="mb-3 ms-6 mt-0">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <i className="fa-regular fa-circle" />
              </span>
              <h3 className="font-medium leading-tight pt-1">19:00 • Hà Nội</h3>
            </li>
            <li className="mb-1 ms-6 mt-2">
              <span className="">
                <h3 className="font-medium leading-tight">1h30m</h3>
              </span>
            </li>
            <li className="mb-10 ms-6 mt-0">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <i className="fa-solid fa-location-dot" />
              </span>
              <h3 className="font-medium leading-tight pt-1">
                20:00 • Hải Phòng
              </h3>
            </li>
          </ol>
        </div>
      </div>

      <div className="">
        <div className=" ">
          {" "}
          <span className="block text-[#2474E5] font-semibold mb-4 text-xl text-right">
            Từ 230.000đ
          </span>
          <div className="text-right">
            {" "}
            <span className="px-1 py-1 border border-2  rounded-lg text-yellow ">
              <i className="fa-solid fa-tag"></i> Giảm 10%
            </span>
          </div>
        </div>
        <div className="">
          <span className="block text-lg text-right pt-5 pb-3 ">
            Còn 10 chỗ trống
          </span>
          <button
            type="button"
            className="focus:outline-none w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Chọn chuyến
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card_Detail;
