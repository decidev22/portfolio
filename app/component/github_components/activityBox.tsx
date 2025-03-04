type ActivityType = "PullRequestEvent" | "PushEvent" | "WatchEvent" | "CreateEvent";

const ActivityBox = (type: ActivityType) => {
  return <div>Some box</div>;
};

export default ActivityBox;
