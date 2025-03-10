import BranchIcon from "@/public/gitIcons/branch.svg";
import CommitIcon from "@/public/gitIcons/commit.svg";
import PullRequestIcon from "@/public/gitIcons/pullrequest.svg";

type ActivityType = "PullRequestEvent" | "PushEvent" | "WatchEvent" | "CreateEvent";

// expects IGithubActivity[] from be api, but just process it as string on repo title here.
interface ActivityBoxInterface {
  type: ActivityType;
  content: string;
}

const activityStyles: Record<ActivityType, string> = {
  PullRequestEvent: "bg-green-600 border-green-300",
  PushEvent: "bg-blue-600 border-blue-300",
  WatchEvent: "bg-yellow-600 border-yellow-300",
  CreateEvent: "bg-purple-600 border-purple-300",
};

const ActivityBox: React.FC<ActivityBoxInterface> = ({ type, content }) => {
  return (
    <div className="flex">
      {type === "CreateEvent" && (
        <>
          <BranchIcon className="mr-3" style={{ width: "6%", fill: "#8200db" }} />
        </>
      )}
      {type === "PushEvent" && (
        <>
          <CommitIcon className="mr-3" style={{ width: "6%", fill: "#0763e7" }} />
        </>
      )}
      {type === "WatchEvent" && (
        <>
          <CommitIcon className="mr-3" style={{ width: "6%", fill: "#0763e7" }} />
        </>
      )}
      {type === "PullRequestEvent" && (
        <>
          <PullRequestIcon className="mr-3" style={{ width: "6%", fill: "#00a34f" }} />
        </>
      )}
      <div className={`flex border border-1 border-white rounded-lg w-min ${activityStyles[type]} p-2 mt-2`}>
        <div className={`text-white`}>
          <div>{type}</div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
