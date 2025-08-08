import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="images/catnft.jpg" alt="gidycatnft" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Gideon Okorie</h1>
      <p>
        A web developer and blockchain security researcher and engineer with a
        passion for creating beautiful and functional full-stack and blockchain
        applications.
      </p>
      <p>Skills: HTML, CSS, JavaScript/Typescript, React, Rust</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML & CSS" emoji="💪" color="darkorange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Typescript" emoji="💪" color="darkblue" />
      <Skill skill="React" emoji="💪" color="skyblue" />
      <Skill skill="Rust" emoji="📚🔥" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
