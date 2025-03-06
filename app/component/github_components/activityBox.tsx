type ActivityType = "PullRequestEvent" | "PushEvent" | "WatchEvent" | "CreateEvent";

interface ActivityBoxInterface {
  type: ActivityType;
}

const ActivityBox: React.FC<ActivityBoxInterface> = ({ type }) => {
  return (
    <div className="flex">
      <div className="text-white">Event Type : {type}</div>
    </div>
  );
};

export default ActivityBox;
