import TextSpring from "../../animation/TextSpring";

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
