import TextFlip from "../animation/TextFlip";

interface SomwNewsInterface {
  news: string[];
}

const SomeNews: React.FC<SomwNewsInterface> = ({ news }) => {
  return <TextFlip text={news} size={"nav"} loadingMessage="Loading news..." />;
};

export default SomeNews;
