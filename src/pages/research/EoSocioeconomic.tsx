import { Link } from "react-router-dom";

export function EoSocioeconomic() {
  return (
    <div className="prose">
      <p className="eyebrow">Research Theme</p>
      <h1>EO for Socioeconomic Systems</h1>

      <p className="question">
        <strong>Scientific question.</strong> Can Earth-Observation-derived indicators explain
        socioeconomic outcomes independently of survey data, and where do they fail to?
      </p>

      <h2>Current Approach</h2>
      <p>
        A village-level typology combining NDVI (agricultural productivity) and nighttime
        lights (economic activation) into four quadrants, revealing that roughly a quarter of
        villages in East Java are productive but economically unconverted, a pattern invisible
        to conventional single-indicator welfare metrics such as the Farmer Terms of Trade
        (NTP). See <Link to="/research/current-research">Current Research</Link> for the full
        study.
      </p>

      <h2>Open Question</h2>
      <p>
        Whether the conversion-gap mechanism identified in East Java's rice-dominated economy
        generalizes to structurally different rural economies (maritime, mining, tree-crop),
        currently being tested in an ongoing Southeast Sulawesi extension.
      </p>
    </div>
  );
}
