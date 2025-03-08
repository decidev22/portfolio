type ActivityType = "PullRequestEvent" | "PushEvent" | "WatchEvent" | "CreateEvent";

// expects IGithubActivity[] from be api, but just process it as string on repo title here.
interface ActivityBoxInterface {
  type: ActivityType;
  content: string;
}

const ActivityBox: React.FC<ActivityBoxInterface> = ({ type, content }) => {
  return (
    <div className="flex">
      <div className="text-white border border-1 border-white">
        <div>{type}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ActivityBox;
