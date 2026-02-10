import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Header Component
const Header = ({ surname }) => {
  return (
    <header>
      <h1>{surname}!</h1>
    </header>
  );
};

// Box Component
const Box = ({ subjectCode }) => {
  return (
    <div className="box">
      <p>{subjectCode}</p>
    </div>
  );
};

const App = () => {
  const surname = "Ken-zhin Simeon";
  const subjectCode = "CPEITEL3"; 

  return (
    <div>
      <Header surname={surname} />
      <Box subjectCode={subjectCode} />
    </div>
  );
};

export default App
