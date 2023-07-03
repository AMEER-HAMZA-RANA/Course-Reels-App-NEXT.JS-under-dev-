import Link from 'next/link'

interface NavItemProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, isActive, children }) => {
  return (
    <li>
      <Link href={href} className={isActive ? 'flex flex-col items-center justify-center py-3 bg-gradient-to-br from-blue-900 to-purple-800' : 'flex flex-col items-center justify-center py-3 bg-gradient-to-br hover:from-blue-900 hover:to-purple-800'}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem