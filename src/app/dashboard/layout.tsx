import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow py-4 px-2 md:overflow-y-auto md:py-4 ">
        <div className="flex h-full flex-col p-6 md:p-6 bg-gray-50  rounded-md">
          {children}
        </div>
        </div>
    </div>
  );
}