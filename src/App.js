import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//Pages import
//Error handling
import ErrorPage from './pages/Error';

//Landing section
import RootLayout from './layouts/Root';
import HomePage from './pages/Landing/Home';
import AboutUs from './pages/Landing/AboutUs';
import ContactUs from './pages/Landing/ContactUs';
import BugReport from './pages/Landing/BugReport';

//professor section
import ProfessorRootLayout from './layouts/ProfessorRoot';
import ProfessorsPage from './pages/Professor/Professors';
import LecturesPage from './pages/Professor/Lectures';
import ExercisesPage from './pages/Professor/Exercises';
import ExamsPage from './pages/Professor/Exams';
import StudentsPage from './pages/Professor/Students';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'aboutus', element: <AboutUs /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'bugreport', element: <BugReport /> },
    ],
  },
  {
    path: 'professor',
    element: <ProfessorRootLayout />,
    children: [
      { index: true, element: <ProfessorsPage /> },
      { path: 'lectures', element: <LecturesPage /> },
      { path: 'exercises', element: <ExercisesPage /> },
      { path: 'exams', element: <ExamsPage /> },
      { path: 'students', element: <StudentsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
