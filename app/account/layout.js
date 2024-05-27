function Layout({ children }) {
  //layoyt created inside account folder, doing so will make this layout display only on pages inside this folder
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] gap-12">
      <div>Navigation</div>
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
