import Link from 'next/link';
import { ReactComponentElement } from 'react';

interface NavLinkProps {
  url: string;
  children: ReactComponentElement<any> | string;
}

export function NavLink({ children, url }: NavLinkProps) {
  return <Link href={url}>{children}</Link>;
}
