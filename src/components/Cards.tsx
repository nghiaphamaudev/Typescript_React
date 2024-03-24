const Cards = () => {
  return (
    <div className="basis-1/4">
      <a href="#" className="block rounded-lg p-0 shadow-sm shadow-indigo-100">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-28 w-full rounded-t-lg object-cover"
        />
        <div className=" h-24 0 bg-[#9E947C] rounded-b-lg text-white">
          <dl>
            <div>
              <dt className="sr-only">Address</dt>
              <dd className="font-medium ml-2">Nha Trang - Sài Gòn</dd>
            </div>
            <div>
              <dt className="sr-only">Price</dt>
              <dd className="text-sm font-normal  ml-2">
                Từ 240.000đ - <del>250.000đ</del>
              </dd>
            </div>
          </dl>
        </div>
      </a>
    </div>
  );
};

export default Cards;
