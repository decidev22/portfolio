import { useEffect, useState } from "react";
import ActivityBox from "../github_components/activityBox";
import classes from "./Main_Activities.module.css";

const MainActivities = () => {
  const [githubActivities, setGithubActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubActivities = async () => {
      const lambdaUrl = process.env.NEXT_PUBLIC_GET_GITHUB_ACTIVITIES_LAMBDA_URL;
      if (!lambdaUrl) {
        setError("Lambda URL is missing in environment variables.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(lambdaUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub activities");
        }

        const data = await response.json();
        setGithubActivities(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGithubActivities();
  }, []);

  return (
    <div className="mt-10 w-min 2xl:mt-0">
      <div
        className={`overflow-auto absolute ${classes.activityBoxContainer} ${classes.activityBoxContainerL} ${classes.activityBoxContainerXL} ${classes.activityBoxContainer2Xl}`}
      >
        <div>
          {loading ? <p>Loading...</p> : null}
          {error ? <p>Error loading :&lt;</p> : null}
          <p>My recent Activities</p>
          {githubActivities.length > 0 ? (
            githubActivities.map((activity: any, index: any) => (
              <ActivityBox
                key={index}
                type={activity.type}
                repo={activity.repo_name}
                repo_url={activity.repo_url.match(/repos\/([^/]+\/[^/]+)/)[1]}
                payload={activity.payload}
                date={activity.date}
              />
            ))
          ) : (
            <p>No recent activities.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainActivities;
