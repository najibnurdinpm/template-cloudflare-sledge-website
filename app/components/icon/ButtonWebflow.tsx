type IButtonWebflow = {
  width?: string;
  height?: string;
  className?: string;
  [key: string]: any;
  type?: "img" | "svg";
};

export default function ButtonWebflow({
  width = "20",
  height = "20",
  className = "",
  type = "img",
  ...props
}: IButtonWebflow) {
  return (
    <>
      {type === "img" && (
        <img
          src="/assets/images/ButtonWebflow.png"
          width={width}
          height={height}
          className={className}
          alt="webflow icon"
          {...props}
        />
      )}
      {type === "svg" && (
        <svg
          {...props}
          className={className}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2526_7488)">
            <path
              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
              fill="#FFF"
            />
            <path
              d="M12.9379 8.8125L12.0316 11.6687C12.0316 11.45 11.4066 6.7125 11.4066 6.7125C9.96914 6.7125 9.20664 7.73125 8.80664 8.8125L7.70039 11.675C7.70039 11.4688 7.54414 8.8375 7.54414 8.8375C7.49078 8.26789 7.23038 7.73763 6.81225 7.34715C6.39413 6.95666 5.84732 6.73308 5.27539 6.71875L6.45039 13.8938C7.95039 13.8938 8.76289 12.875 9.18164 11.7937L10.1191 9.35625C10.1191 9.45625 10.7441 13.8938 10.7441 13.8938C11.3575 13.893 11.9547 13.6969 12.4491 13.3339C12.9436 12.9709 13.3096 12.4599 13.4941 11.875L15.6191 6.7125C14.1191 6.7125 13.3316 7.73125 12.9316 8.8125H12.9379Z"
              fill="#151515"
            />
          </g>
          <defs>
            <clipPath id="clip0_2526_7488">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
}
