import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Image />
      <Data />
      <SkillListSmallCards />
    </div>
  );
}

function Image() {
  return (
    <div className="avatar">
      <img src="img/catnft.jpg" alt="cat-nft" />
    </div>
  );
}

function Data() {
  return (
    <div>
      <div>
        <h2>Jonas Catman</h2>
      </div>
      <div>
        <p>
          Here is a sample full-stack developer resume summary: “Highly skilled
          full-stack developer with over six years of experience designing and
          implementing scalable web applications using front-end and back-end
          technologies. Proficient in HTML, CSS, JavaScript (React, Angular),
          Node.6 Nov 2024
        </p>
      </div>
    </div>
  );
}

function SkillListSmallCards() {
  return (
    <div className="skillList">
      <div className="blue">HTML & CSS</div>
      <div className="yellow">Javascript/Typescript</div>
      <div className="skyBlue">Solana</div>
      <div className="navy">Rust</div>
      <div className="red">Git & GitHub</div>
      <div className="red">Frontend frameworks</div>
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
