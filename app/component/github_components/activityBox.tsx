import { DateTime } from "luxon";

import BranchIcon from "@/public/gitIcons/branch.svg";
import CommitIcon from "@/public/gitIcons/commit.svg";
import PullRequestIcon from "@/public/gitIcons/pullrequest.svg";
import WatchingIcon from "@/public/gitIcons/watching.svg";
import classes from "./activityBox.module.css";

type ActivityType = "PullRequestEvent" | "PushEvent" | "WatchEvent" | "CreateEvent";

type Author = {
  email: string;
  name: string;
};

type Payload = {
  ref?: string;
  commits?: [{ author: Author; message: String; url: String }];
  message?: string;
  url?: string;
  action?: string;
};

// expects IGithubActivity[] from be api, but just process it as string on repo title here.
interface ActivityBoxInterface {
  type: ActivityType;
  repo: string;
  repo_url: string;
  payload: Payload;
  date: string;
}

const activityStyles: Record<ActivityType, string> = {
  PullRequestEvent: "bg-green-600 border-green-300",
  PushEvent: "bg-blue-600 border-blue-300",
  WatchEvent: "bg-yellow-600 border-yellow-300",
  CreateEvent: "bg-purple-600 border-purple-300",
};

const ActivityBox: React.FC<ActivityBoxInterface> = ({ type, repo, repo_url, payload, date }) => {
  return (
    <div className={`flex w-min max-w-[600px]`}>
      {type === "CreateEvent" && (
        <>
          <BranchIcon className="mr-3" style={{ width: 25, fill: "#8200db" }} />
        </>
      )}
      {type === "PushEvent" && (
        <>
          <CommitIcon className="mr-3" style={{ width: 25, fill: "#0763e7" }} />
        </>
      )}
      {type === "WatchEvent" && (
        <>
          <WatchingIcon className="mr-3" style={{ width: 25, fill: "#ce8a21" }} />
        </>
      )}
      {type === "PullRequestEvent" && (
        <>
          <PullRequestIcon className="mr-3" style={{ width: 25, fill: "#00a34f" }} />
        </>
      )}
      <div
        className={`flex border border-1 border-white rounded-lg w-min ${activityStyles[type]} p-2 mt-2 ${classes.activityContainer}`}
        onClick={() => (window.location.href = "https://www.github.com/" + repo_url)}
      >
        <div className={`text-white ${classes.activityContainerInner}`}>
          <div className="max-w-[300px] min-w-[250px] flex-1 font-bold">Repository: {repo}</div>
          {Array.isArray(payload?.commits) && payload.commits.length > 0 && (
            <div className="flex flex-col w-full">
              <div className="max-w-[250px] px-1">{payload.commits[0].message}</div>
              <div className="ml-auto flex items-center justify-center border border-1 border-white rounded-2xl w-[17px] h-[17px] font-light text-[12px]">
                {payload.commits.length}
              </div>
            </div>
          )}
          {payload?.action && type != "WatchEvent" && <div className="max-w-[250px] px-1">Branch {payload.action}</div>}
          {payload?.action && type === "WatchEvent" && (
            <div className="max-w-[250px] px-1">
              {payload.action === "started" ? "Started woatching branch" : "No longer watching branch"}
            </div>
          )}
        </div>
      </div>
      <div className="ml-2 flex min-w-max items-end">{DateTime.fromISO(date).toFormat("dd-MM-yyyy")}</div>
    </div>
  );
};

export default ActivityBox;
