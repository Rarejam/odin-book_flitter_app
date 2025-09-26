import { Outlet } from "react-router-dom";

const CenterNav = () => {
  return (
    <div className="center-nav">
      <Outlet />
    </div>
  );
};

export default CenterNav;
