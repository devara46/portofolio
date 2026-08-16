import { Link } from "react-router-dom";

export function AiOfficialStatistics() {
  return (
    <div className="prose">
      <p className="eyebrow">Research Theme</p>
      <h1>AI for Official Statistics</h1>

      <p className="question">
        <strong>Scientific question.</strong> How can administratively collected data, sparse,
        hierarchical, semantically rich, and structurally distinct from sensor data, be
        integrated into spatial representation learning without collapsing its distinct
        character into a generic tabular feature vector?
      </p>

      <h2>Approach</h2>
      <p>
        Official statistics (SUSENAS, PODES) are held out as an{" "}
        <strong>independent evaluation signal</strong> rather than a direct training input.
        The graph representation is learned primarily from EO, LiDAR, and infrastructure data;
        official statistics then test whether the resulting representation correlates with
        independently measured welfare outcomes, following the same discipline demonstrated
        in the <Link to="/research/current-research">East Java conversion-gap study</Link>,
        where SUSENAS validation was fully independent of the satellite-derived typology.
      </p>

      <h2>Open Question</h2>
      <p>
        Whether a purely self-supervised representation (no socioeconomic signal during
        training) can capture welfare-relevant structure at all, or whether meaningful
        integration requires injecting sparse socioeconomic signal during training, via weak
        supervision, multi-task learning, or contrastive alignment, without collapsing the
        representation's generality. This is treated as an open empirical question to resolve
        through comparison, not assumed in advance.
      </p>
    </div>
  );
}
