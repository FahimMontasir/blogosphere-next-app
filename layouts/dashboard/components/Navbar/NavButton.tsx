import React from "react";

interface Props {
  title?: string;
  customFunc: () => void;
  icon: React.ReactElement | null;
  color: string;
  dotColor?: string;
}

export const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: Props) => {
  return (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <>
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </>
    </button>
  );
};
