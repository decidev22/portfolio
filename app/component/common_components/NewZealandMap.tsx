import classes from "./NewZealandMap.module.css";

const NewZealandMap = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${classes[`mapContainer`]} ${className}`}>
      <svg width="320" height="600" viewBox="80 30 320 870" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="map1"
          className={`${classes[`map1-path`]}`}
          d="M244.4 35.5158C246.647 35.7967 246.015 44.0112 246.72 45.5968C247.949 48.3629 249.089 51.3019 250.52 53.8775C255.664 63.1357 262.268 71.3862 269.962 79.0798C276.952 86.07 281.506 94.4389 286.523 102.802C290.146 108.839 292.98 115.228 296.404 121.364C299.719 127.303 300.974 134.682 304.565 140.325C306.846 143.91 307.747 149.138 308.806 153.207C310.404 159.347 312.148 165.457 313.686 171.608C315.351 178.267 314.966 185.125 314.966 192.05C314.966 198.538 313.796 203.812 311.526 209.772C310.757 211.789 310.871 214.17 310.606 216.292C310.089 220.424 308.566 224.776 307.405 228.773C305.559 235.133 301.592 241.243 296.244 245.215C291.38 248.829 288.373 253.938 283.643 257.616C277.369 262.496 282.166 268.509 286.003 273.537C290.923 279.984 298.317 282.521 305.565 285.058C313.565 287.858 322.226 290.072 330.447 291.899C334.76 292.857 333.138 305.427 332.808 307.701C331.853 314.264 328.709 319.502 324.727 324.622C322.896 326.976 321.294 330.945 320.727 333.783C318.919 342.821 316.058 351.604 314.246 360.665C313.737 363.212 312.276 366.72 313.886 368.866C315.948 371.615 321.087 369.862 323.687 369.626C327.336 369.294 331.02 369.064 334.648 368.546C335.77 368.386 337.584 367.804 338.728 368.346C340.015 368.955 345.445 374.795 345.769 374.507C348.735 371.87 351.528 368.567 354.25 365.586C357.729 361.775 359.331 356.671 362.53 352.745C364.679 350.107 366.384 347.84 368.251 344.984C370.482 341.572 372.086 337.946 375.052 335.063C378.521 331.69 380.691 327.787 383.012 323.502C385.027 319.782 385.668 315.105 388.053 311.661C391.907 306.093 391.557 297.737 394.653 291.619C397.171 286.643 400.409 281.334 403.974 277.018C406.984 273.375 408.22 268.968 410.775 265.137C412.914 261.928 413.673 258.929 416.815 256.416C419.322 254.411 423.832 250.415 427.296 250.415C428.839 250.415 431.877 256.39 432.657 257.616C433.837 259.47 434.203 261.682 435.217 263.456C437.232 266.983 447.167 265.69 448.338 262.176C450.472 255.775 446.018 250.076 446.018 243.975C446.018 241.429 445.449 240.431 446.738 237.854C448.304 234.722 451.657 232.215 454.099 229.773C462.879 220.993 459.355 207.92 465.46 197.891C466.942 195.456 468.88 192.807 469.62 190.01C470.787 185.601 464.981 185.929 461.379 186.009C457.546 186.095 455.035 188.341 451.778 189.97C449.89 190.914 447.514 193.348 445.618 193.89C440.713 195.291 436.323 198.833 431.457 200.571C427.959 201.82 424.624 203.857 421.256 205.411C419.292 206.318 417.374 208.441 415.375 209.012C410.683 210.352 408.796 211.581 404.414 208.892C399.693 205.994 397.921 200.043 393.453 197.17C391.214 195.731 388.361 194.65 385.692 194.65C383.36 194.65 381.054 192.927 378.732 192.33C376.642 191.793 370.072 191.136 368.971 189.21C363.401 179.462 368.044 165.148 366.851 154.407C365.539 142.602 363.636 131.154 359.61 120.084C358.762 117.752 354.752 108.962 351.689 108.962C346.381 108.962 350.492 117.435 350.929 119.403C351.772 123.194 354.57 126.529 354.57 130.604C354.57 136.958 353.606 142.932 353.13 149.126C352.696 154.761 340.817 158.567 336.728 154.887C334.17 152.584 333.614 149.245 330.447 147.486C327.687 145.952 323.616 145.549 321.287 143.686C320.267 142.87 318.568 142.946 319.646 141.005C320.924 138.707 322.396 136.596 324.007 134.525C326.073 131.869 330.294 129.247 330.087 125.524C329.796 120.273 322.751 117.557 320.727 113.003C318.719 108.487 317.648 103.361 315.526 98.8816C312.679 92.8709 312.985 86.2828 312.126 79.8399C311.494 75.0987 314.568 68.3379 309.046 66.6387C306.853 65.9641 303.985 66.2168 301.685 65.7986C297.38 65.0159 293.264 64.3184 288.804 64.3184C286.734 64.3184 284.63 64.4218 282.563 64.3184C279.071 64.1438 275.536 61.6963 271.922 61.4382C269.299 61.2508 264.807 57.4589 263.081 55.5177C260.48 52.5908 258.778 48.634 256.281 45.6368C253.611 42.4332 251.249 41.1008 247.28 39.1162"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1139.7591552734375 1139.7591552734375"
          strokeDashoffset="10"
        />
        <path
          id="map2"
          className={`${classes[`map2-path`]}`}
          d="M286.163 334.343C282.41 338.514 280.22 344.117 276.083 348.024C273.664 350.308 269.811 351.609 268.002 354.505C266.361 357.13 263.008 358.34 260.801 360.105C258.667 361.813 252.031 356.079 250.52 354.905C243.663 349.571 261.481 336.335 252 332.343C250.282 331.619 249.289 332.555 248.68 330.423C248.2 328.743 248 327.414 248 325.542C248 320.323 242.846 320.902 240.359 323.942C236.62 328.512 236.37 334.662 234.639 340.103C233.158 344.757 232.72 349.655 232.119 354.465C231.687 357.913 226.979 362.92 224.278 364.946C219.244 368.721 215.243 373.729 209.997 377.227C206.888 379.299 203.528 381.381 201.756 384.747C200.781 386.6 199.651 388.391 198.676 390.148C197.465 392.327 197.884 396.629 197.195 399.189C194.417 409.508 187.3 420.965 179.754 428.511C175.526 432.74 170.948 438.158 165.593 440.913C162.883 442.306 160.339 443.808 157.632 445.233C155.804 446.195 153.87 446.795 152.391 448.273C148.813 451.851 144.91 451.784 144.311 457.474C143.924 461.146 138.449 468.105 134.95 469.355C127.474 472.025 122.963 480.021 115.908 483.716C111.788 485.875 108.31 487.876 103.827 489.317C100.571 490.363 96.3252 490.37 93.506 492.437C90.1993 494.862 86.3955 495.91 82.545 497.238C77.1346 499.103 73.6743 505.981 75.5844 511.439C78.6963 520.33 73.9881 527.721 68.7438 534.801C65.9699 538.546 62.1227 541.102 58.8629 544.362C55.0951 548.13 51.589 551.778 47.9819 555.643C45.2459 558.574 42.1655 561.254 39.6211 564.364C37.4643 567 36.0625 570.253 33.9806 573.005C30.9514 577.007 22.4836 585.689 25.8599 591.766C28.9754 597.374 34.257 593.566 39.1811 593.566C46.3896 593.566 40.696 601.017 39.0211 604.367C37.8602 606.689 38.8093 605.807 41.4613 605.807C45.6385 605.807 50.1138 606.27 54.1424 604.927C55.8381 604.362 58.9214 603.131 60.063 601.847C64.2142 597.177 74.6969 597.102 80.5448 596.487C83.7315 596.151 87.5654 597.172 90.6257 598.047C93.3506 598.825 94.2454 601.114 96.4663 602.527C103.037 606.709 110.419 609.406 117.988 611.208C123.062 612.416 134.27 615.314 138.63 611.888C144.951 606.922 150.27 600.939 153.351 593.326C155.303 588.506 157.613 583.648 161.272 579.885C164.489 576.577 167.721 573.756 170.993 570.484C174.345 567.133 179.594 563.593 179.594 558.283C179.594 553.927 178.715 549.77 178.874 545.482C179.045 540.865 183.39 536.852 186.954 534.521C192.011 531.215 194.606 525.656 195.275 519.8C195.855 514.725 194.478 512.068 193.275 507.559C192.741 505.557 192.017 502.933 192.715 500.838C194.662 494.996 199.605 491.352 204.796 488.757C209.901 486.204 216.205 484.228 220.277 480.156C223.424 477.01 231.218 480.898 235.359 482.116C240.343 483.582 244.823 485.557 250.32 485.557C252.728 485.557 255.554 485.68 257.721 484.477C260.463 482.953 258.114 481.575 255.561 480.156C248.553 476.263 245.269 470.708 242.6 463.235C241.172 459.237 245.199 454.501 248.36 452.394C252.269 449.787 252.836 442.494 256.641 440.032C258.289 438.966 259.171 436.756 260.921 435.552C263.567 433.733 266.468 432.873 269.282 431.392C273.111 429.376 274.642 425.719 274.642 421.751C274.642 416.688 268.025 416.778 268.922 410.95C269.649 406.224 276.411 401.979 279.123 398.589C282.484 394.388 282.563 390.937 282.563 385.468C282.563 383.473 283.511 382.33 285.523 381.547C289.043 380.178 294.221 379.542 298.085 379.027C300.8 378.665 306.835 378.253 303.765 374.307C299.551 368.888 293.533 366.824 287.044 365.466C285.657 365.175 281.123 365.037 281.123 363.506C281.123 360.742 282.451 360.308 284.003 358.265C285.908 355.759 291.011 355.523 292.644 352.665C295.361 347.91 295.618 339.43 289.764 336.503"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1017.0259399414062 1017.0259399414062"
          strokeDashoffset="10"
        />
      </svg>
    </div>
  );
};

export default NewZealandMap;
