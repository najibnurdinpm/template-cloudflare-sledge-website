type IButtonLiquid = {
  width?: string;
  height?: string;
  className?: string;
  [key: string]: any;
  type?: "img" | "svg";
};

export default function ButtonHydrogen({
  width = "18",
  height = "18",
  className = "",
  type = "img",
  ...props
}: IButtonLiquid) {
  return (
    <>
      {type === "img" && (
        <img
          width={width}
          height={height}
          className={className}
          src="/assets/images/ButtonHydrogen.png"
          alt="hydrogen icon"
          {...props}
        />
      )}
      {type === "svg" && (
        <svg
          className={className}
          {...props}
          width={21}
          height={20}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2526_7499)">
            <path
              d="M7.61171 1.65167L11.3295 3.58131L8.24606 5.21149L4.276 3.26306L0.91748 4.99396L11.0116 10.0269L14.286 8.29596L10.5896 6.44555L13.8426 4.81402L17.5376 6.74366L20.9175 4.97381L11.0116 0L7.61171 1.65167Z"
              fill="#677386"
            />
            <path
              d="M7.61171 11.6248L11.3295 13.5545L8.24606 15.186L4.276 13.2362L0.91748 14.9671L11.0116 20L14.286 18.2704L10.5896 16.42L13.8426 14.7885L17.5376 16.7181L20.9175 14.947L11.0116 9.97449L7.61171 11.6248Z"
              fill="#677386"
            />
          </g>
          <defs>
            <clipPath id="clip0_2526_7499">
              <rect
                width={20}
                height={20}
                fill="white"
                transform="translate(0.91748)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
}
