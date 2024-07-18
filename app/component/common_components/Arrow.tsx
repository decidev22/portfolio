import classes from "./Arrow.module.css";

const Arrow = (className: { className?: string }) => {
  const input = JSON.stringify(className);
  return (
    <div className={`${classes[`arrowContainer`]}`}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 150 150"
        xmlSpace="preserve"
        stroke="white"
        strokeWidth="4"
        fill="none"
      >
        <path
          className={`${classes[`arrow-path`]}`}
          d="M131.404 42.7216C123.113 82.5207 91.2113 83.7269 70.8412 79.783C65.8454 78.8158 61.8707 75.1836 59.8855 70.4983V70.4983C55.5679 60.3089 66.5183 50.3851 76.2349 55.6817L84.2878 60.0713C87.7678 61.9682 90.3473 65.1751 91.4544 68.9808L92.0168 70.9142C95.7438 83.7267 87.2503 96.8674 74.0375 98.7308L20.5201 106.278 M28.4515 111.616L20.1792 106.32L26.1678 100.522"
          strokeDasharray="240 240"
          strokeDashoffset="10"
        />
      </svg>
    </div>
  );
};

export default Arrow;
