import NavigationBar from "./components/bars/NavigationBar";
import AddStudentForm from "./components/pages/non-static-pages/AddStudentForm";

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <NavigationBar></NavigationBar>
      <AddStudentForm></AddStudentForm>
    </div>
  );
}

export default App;
