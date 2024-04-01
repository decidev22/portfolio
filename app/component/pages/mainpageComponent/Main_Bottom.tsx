import TextSpring from "../../animation/TextSpting";

const MainBottom = () => {
  return (
    <>
      <div className="w-full h-[500px]">
        <p>Bottom</p>
        <TextSpring text={["Hi", "Bye"]} />
      </div>
    </>
  );
};

export default MainBottom;
