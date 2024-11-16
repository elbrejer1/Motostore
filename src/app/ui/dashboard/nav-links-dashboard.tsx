'use client';

import { DocumentDuplicateIcon, HomeIcon, ShoppingBagIcon, UsersIcon, UserIcon, WrenchScrewdriverIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";


  const links = [
    {
      name: 'Web',
      href: '/',
      icon: GlobeAltIcon
    },
    {
      name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon
    },
    {
      name: 'Reportes',
      href: '/dashboard/reports',
      icon: DocumentDuplicateIcon
    },
    {
        name: 'Compras',
        href: '/dashboard/purchases',
        icon: ShoppingBagIcon
    },
    {
        name: 'Perfil',
        href: '/dashboard/profile',
        icon: UserIcon

    },
    {
        name: 'Usuarios',
        href: '/dashboard/users',
        icon: UsersIcon
    },
    {
      name: 'Configuración',
      href: '/dashboard/settings',
      icon: WrenchScrewdriverIcon
  },
];

  export default function NavLinksDashboard() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
