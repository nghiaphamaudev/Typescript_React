const Option = (props: { icon: string; title: string }) => {
  return (
    <a
      href=""
      className=" flex justify-center items-center gap-4  hover:text-blue-500"
    >
      <span className="text-2xl">
        <i className={`${props.icon}`}></i>
      </span>
      <span className="font-medium">{props.title}</span>
    </a>
  );
};
export default Option;
