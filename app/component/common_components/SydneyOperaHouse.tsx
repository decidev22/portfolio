import Image from "next/image";
import classes from "./SydneyOperaHouse.module.css";

const SydneyOperaHouse = ({ className = "" }: { className?: string }) => {
  // return <Image src={"/SydneyOperaHouse.svg"} alt="Sydney Opera House" width={70} height={50} className={`${classes.mapContainer}`} />;
  return (
    <svg width="100" height="75" viewBox="0 0 395 381" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="operaPathId"
        className={`${classes[`operaPath`]}`}
        d="M266.5 194C245.923 138.819 222.697 116.905 161 93.5L175.078 151M266.5 194L284.5 263M266.5 194L229 263M266.5 194L327.5 263M266.5 194C266.5 194 289.915 177.296 307 173C324.085 168.704 354 172 354 172C345.882 208.92 340.086 228.848 327.5 263M284.5 263H327.5M284.5 263H229M202.5 263C194.492 219.001 188.46 194.479 175.078 151M202.5 263L132.5 241M202.5 263H229M202.5 263H362.5V298H7L13.5 289H28M202.5 263L162.75 276M202.5 263C202.5 263 181.561 222.324 166.5 197C151.439 171.676 125.368 133.309 125.368 133.309M124.5 133L125.368 133.309M175.078 151C156.708 142.332 145.808 138.49 125.368 133.309M125.368 133.309L127.136 160M132.5 241L127.136 160M132.5 241L85 227M132.5 241C132.5 241 113.645 211.464 99 193.5C84.3553 175.536 57.5 149 57.5 149M57.5 149C86.0941 148.712 101.349 151.116 127.136 160M57.5 149L85 227M85 227L48 248.5M123 289H28M123 289L162.75 276M123 289L97.5 273H35.9012M48 248.5L28 289M48 248.5H97.5L162.75 276"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2644.357421875"
        strokeDashoffset="10"
      />
    </svg>
  );
};

export default SydneyOperaHouse;
