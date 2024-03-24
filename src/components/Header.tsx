import Navbar from "./Nav";
import Button_Register from "./Button-Register";
const Header = () => {
  return (
    <>
      <header className="bg-[#2474E5]">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img width={150} src="./logo.png" alt="" />
              </a>
            </div>
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm text-white">
                  <Navbar title="Quản lí đơn hàng" />
                  <Navbar title="Mở bán vé xe trên vexere" />
                  <Navbar title="Trở thành đối tác" />
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <Button_Register
                  title="Hotline 24/7"
                  bg="white"
                  color="#0D2E59"
                />
                <Button_Register title="Đăng Nhập" bg="white" color="#0D2E59" />
              </div>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
