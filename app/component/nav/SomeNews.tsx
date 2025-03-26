import { ReactNode } from "react";
import TextFlip from "../animation/text-animation/TextFlip";

interface SomwNewsInterface {
  news: string[];
  reactComponent?: ReactNode;
}

const SomeNews: React.FC<SomwNewsInterface> = ({ news, reactComponent }) => {
  return (
    <div className="flex place-items-center">
      {reactComponent && <div className="mr-1">{reactComponent}</div>}
      <TextFlip text={news} size={"nav"} loadingMessage="Loading news..." />
    </div>
  );
};

export default SomeNews;
