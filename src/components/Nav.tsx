const Navbar = (props: { title: string }) => {
  return (
    <li className="">
      <a
        className="text-white font-medium transition hover:text-current"
        href="#"
      >
        {props.title}
      </a>
    </li>
  );
};

export default Navbar;
