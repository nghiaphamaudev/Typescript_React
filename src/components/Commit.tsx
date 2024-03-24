const Commit = (props: { title: string; icon: string }) => {
  return (
    <div className="justify-center flex items-center p-4 gap-3 ">
      <span className="text-[#FFD333] text-3xl">
        <i className={`${props.icon}`}></i>
      </span>

      <span className="text-white text-xl font-normal">{props.title}</span>
    </div>
  );
};

export default Commit;
