import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  exact?: boolean;
  children: ReactNode;
  activeLinkStyle: string;
  normalLinkStyle: string;
  backgroundColor: string;
  onClick: () => void;
}

export default function NavLink({
  href,
  exact = true,
  children,
  activeLinkStyle,
  normalLinkStyle,
  backgroundColor,
  onClick,
}: Props) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={isActive ? activeLinkStyle : normalLinkStyle}
        style={{ backgroundColor: isActive ? backgroundColor : "" }}
      >
        {children}
      </a>
    </Link>
  );
}
