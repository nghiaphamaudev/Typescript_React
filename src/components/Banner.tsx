import Commit from "./Commit";
import BoxSearch from "./BoxSearch";
const Banner = () => {
  return (
    <section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-[30rem] lg:flex lg:items-center lg:px-8">
        <div className="w-full text-center">
          <h2 className="text-white text-3xl">
            Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
          </h2>
          <div className="mt-5">
            <BoxSearch />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#00000080] flex items-center gap-10 justify-center p-4 ">
        <Commit icon="fa-solid fa-circle-check" title="Chắc chắn có chỗ" />
        <Commit icon="fa-solid fa-headset" title="Hỗ trợ 24/7" />
        <Commit icon="fa-solid fa-money-bill" title="Nhiều ưu đãi" />
        <Commit icon="fa-solid fa-sack-dollar" title="Thanh toán đa dạng" />
      </div>
    </section>
  );
};

export default Banner;
