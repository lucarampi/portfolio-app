import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
  defaultClassName: string;
}

export default function ActiveLink({
  children,
  activeClassName,
  defaultClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const className = `${asPath === rest.href? activeClassName : (defaultClassName+" hover:"+activeClassName)} + transition-all`
   
  return (
  <Link {...rest}>
    {cloneElement(children,{
      className
    }) }
    </Link>
    );
}
