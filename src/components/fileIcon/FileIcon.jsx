import * as React from "react";
const FileIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={20}
    height={20}
    viewBox="0 0 64 64"
    {...props}
  >
    <g fill="#fff">
      <path d="M46 3.414V14h10.586z" />
      <path d="M45 16a1 1 0 0 1-1-1V2H8a2 2 0 0 0-2 2v56a2 2 0 0 0 2 2h48a2 2 0 0 0 2-2V16H45z" />
    </g>
    <path
      fill="#fff394240"
      d="M14 26a1 1 0 0 0 1 1h34a1 1 0 1 0 0-2H15a1 1 0 0 0-1 1zM49 37H15a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM49 43H15a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM49 49H15a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM49 31H15a1 1 0 1 0 0 2h34a1 1 0 1 0 0-2zM15 20h16a1 1 0 1 0 0-2H15a1 1 0 1 0 0 2z"
    />
    <path
      fill="#fff394240"
      d="M59.706 14.292 45.708.294A.994.994 0 0 0 45 0H8C5.789 0 4 1.789 4 4v56c0 2.211 1.789 4 4 4h48c2.211 0 4-1.789 4-4V15a.994.994 0 0 0-.294-.708zM46 3.414 56.586 14H46V3.414zM58 60a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h36v13a1 1 0 0 0 1 1h13v44z"
    />
    <path fill="#fff231F20" d="M46 3.414 56.586 14H46z" opacity={0.15} />
  </svg>
);
export default FileIcon;
