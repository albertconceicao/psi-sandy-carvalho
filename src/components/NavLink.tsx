import Link from 'next/link';
import { ReactComponentElement } from 'react';

interface NavLinkProps {
  url: string;
  children: ReactComponentElement<any> | string;
}

export function NavLink({ children, url }: NavLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.querySelector(url);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Link href={url} passHref onClick={handleClick}>
      {children}
    </Link>
  );
}
