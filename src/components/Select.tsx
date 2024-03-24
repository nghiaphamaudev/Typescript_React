const Select = (props: { title: string; icon: string; color: string }) => {
  return (
    <div className="p-1 grid gap-2 grid-rows-2 grid-flow-col border-r-2 border-inherit">
      <div className={`row-span-2 mt-3 text-2xl text-[${props.color}]`}>
        <i className={`${props.icon}`}></i>
      </div>
      <div className="row-span-2">
        <label
          htmlFor="HeadlineAct"
          className="block text-[#B8B8B8] font-normal text-left"
        >
          {props.title}
        </label>
        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 w-full focus:outline-none text-gray-700 "
        >
          <option value="">Hà Nội</option>
          <option value="JM">John Mayer</option>
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
