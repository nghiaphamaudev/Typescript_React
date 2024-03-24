const Contact = (props: { title: string }) => {
  return (
    <li className="mb-4 ">
      <a href="#" className="underline decoration-solid">
        {props.title}
      </a>
    </li>
  );
};

export default Contact;
