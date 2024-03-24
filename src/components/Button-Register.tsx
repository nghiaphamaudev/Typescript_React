const Button_Register = (props: {
  title: string;
  color: string;
  bg: string;
}) => {
  return (
    <div className="hidden sm:flex">
      <a
        className={`rounded-md bg-[${props.bg}] px-5 py-2.5 text-sm font-medium text-[${props.color}]`}
        href="#"
      >
        {props.title}
      </a>
    </div>
  );
};

export default Button_Register;
