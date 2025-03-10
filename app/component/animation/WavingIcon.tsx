import Image from "next/image";
import classes from "./WavingIcon.module.css";

interface WavingIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Should take in the src route of the image , ie) "@/public/logo.png"
const WavingIcon: React.FC<WavingIconProps> = ({ src, alt, width, height }) => {
  return (
    <div className={`${classes.container} ${classes.waveMotion}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default WavingIcon;
