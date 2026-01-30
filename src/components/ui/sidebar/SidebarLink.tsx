import Link from "next/link";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const SidebarLink = ({ href, icon, label, onClick }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
    >
      {icon}
      <span className="ml-3 text-lg">{label}</span>
    </Link>
  );
};
