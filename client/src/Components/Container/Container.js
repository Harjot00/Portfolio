function Container(props) {
  return (
    <div className=" px-4 md:px-12 lg:px-16 md:mx-8 lg:mx-24  space-y-6  flex flex-col justify-center">
      {props.children}
    </div>
  );
}

export default Container;
