interface TextSpringProps {
  text: string[];
}

const TextSpring: React.FC<TextSpringProps> = ({ text }) => {
  return (
    <>
      <div>{text}</div>
    </>
  );
};

export default TextSpring;
