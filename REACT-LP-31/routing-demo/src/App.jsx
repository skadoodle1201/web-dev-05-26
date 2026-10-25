import { Link, Route, Routes, useParams } from "react-router";

const Home = () => {
  return <h1>Home</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

const Contact = () => {
  return <h1>Contact</h1>;
};

const Student = () => {
  const { id } = useParams();
  return <h1>Student {id}</h1>;
};

const NotFound = () => {
  return <h1> Page Not Found</h1>;
};
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/contact">Contact</Link> <br />
        {[1, 2, 4, 5].map((id) => {
          return (
            <>
              <Link to={`/students/${id}`}>Student {id}</Link> <br />
            </>
          );
        })}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
