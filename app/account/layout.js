import SideNavigation from "./../_components/SideNavigation";

function Layout({ children }) {
  //layoyt created inside account folder, doing so will make this layout display only on pages inside this folder
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
