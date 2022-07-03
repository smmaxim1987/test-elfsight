import * as React from "react"
import { SVGProps } from "react"

export const Male = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M10 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
      fill="#000"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="m21.707 4.707-7 7-1.414-1.414 7-7 1.414 1.414Z"
      fill="#000"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M16 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5h-3a1 1 0 0 1-1-1Z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
