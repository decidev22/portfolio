import Image from "next/image";
const Main_Content = () => {
  return (
    <>
      <div className="grid grid-cols-3 mt-[300px]">
        <div className="col-span-2 relative">
          <p className="smallText absolute bottom-0 m-2">
            "A Software Engineer can articulate a narrative that goes
            beyond mere black boxes and complex technical
            terminologies."
          </p>
        </div>
        <div className="">
          <Image
            src="/profile_lightnoir.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
          />
        </div>
        <div className="h-[500px]">Some Empty Space</div>
      </div>
    </>
  );
};

export default Main_Content;
