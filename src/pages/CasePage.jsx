import { useParams } from "react-router-dom";
import './CasePage.css';

function CasePage() {
  const { caseTitle } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{caseTitle}</h1>
      <p>Here will be all the items for {caseTitle}.</p>
    </div>
  );
}

export default CasePage;
