const Button_Search = (props: { title: string; color: string; bg: string }) => {
  return (
    <button
      className={`rounded-md bg-[${props.bg}] px-5 py-2.5 text-sm font-medium text-[${props.color}]`}
    >
      {props.title}
    </button>
  );
};

export default Button_Search;
