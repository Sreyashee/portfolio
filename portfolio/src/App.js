import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import TechStack from "./pages/TechStack/TechStack";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Contact from "./pages/Contact/Contact";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";



function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <ToastContainer/>
      <MobileNav/>
      <Layout/>
      <About/>
      <Education/>
      <TechStack/>
      <WorkExperience/>
      <Contact/>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center">Made by Sreyashee Sarkar</h4>
      </div>
      </div>
    </>
  );
}

export default App;
