import CenterNav from "../Layouts/CenterNav";
import LeftNav from "../Layouts/LeftNav";
import RightNav from "../Layouts/RightNav";

const App = () => {
  return (
    <div className="app-container">
      <LeftNav />

      <CenterNav />

      <RightNav />
    </div>
  );
};

export default App;
