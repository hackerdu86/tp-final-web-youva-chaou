import NavigationBar from "./components/bars/NavigationBar";
import FooterBar from "./components/bars/FooterBar";
import MainMenuPage from "./components/pages/static-pages/MainMenuPage";
import InternshipsProceduresEmployers from "./components/pages/static-pages/InternshipsProceduresEmployers";
import InternshipsProceduresStudents from "./components/pages/static-pages/InternshipsProceduresStudents";
import StudentNeededSkills from "./components/pages/static-pages/StudentNeededSkills";
import FAQPage from "./components/pages/static-pages/FAQPage";
import AddStudentForm from "./components/pages/non-static-pages/AddStudentForm";
import RegisteredStudents from "./components/pages/non-static-pages/RegisteredStudents";
import AddInternshipForm from "./components/pages/non-static-pages/AddInternshipForm";
import AvailableInternships from "./components/pages/non-static-pages/AvailableInternships";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route
          path="/internship-procedures-employers"
          element={<InternshipsProceduresEmployers />}
        />
        <Route
          path="/internship-procedures-students"
          element={<InternshipsProceduresStudents />}
        />
        <Route path="/profiles-and-skills" element={<StudentNeededSkills />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/students/add-student-form" element={<AddStudentForm />} />
        <Route
          path="/students/registered-students"
          element={<RegisteredStudents />}
        />
        <Route
          path="/internships/add-internship-form"
          element={<AddInternshipForm />}
        />
        <Route
          path="/internships/available-internships"
          element={<AvailableInternships />}
        />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
