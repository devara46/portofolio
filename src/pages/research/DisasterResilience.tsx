import { Link } from "react-router-dom";

export function DisasterResilience() {
  return (
    <div className="prose">
      <p className="eyebrow">Research Theme</p>
      <h1>Disaster Resilience and Recovery</h1>

      <p className="question">
        <strong>Scientific question.</strong> Can a general spatial representation capture not
        only direct, localized damage, but <em>propagated</em> impact transmitted through
        severed structural connections to places that were never physically affected?
      </p>

      <h2>Mechanism</h2>
      <p>
        The same Hierarchical Heterogeneous Spatial Graph is evaluated at two time points, a
        pre-disaster baseline and a post-event snapshot built primarily from SAR (which
        remains usable under the cloud and smoke cover that typically follows a disaster,
        unlike optical imagery). The disaster signal is read from the <em>shift</em> between
        the two graph states, including edges that are severed or degraded, not only from
        per-pixel damage classification.
      </p>
      <p>
        This distinguishes the framework from standard bi-temporal change detection: a village
        can register zero physical damage yet still show meaningful representation shift if a
        road edge connecting it to a market, or an upstream watershed edge, is disrupted.
      </p>

      <h2>Candidate Downstream Tasks</h2>
      <ul>
        <li>
          <strong>Direct damage assessment</strong> at parcel/village level (standard
          bi-temporal change detection, as one representation output among several)
        </li>
        <li>
          <strong>Secondary/indirect impact prediction</strong> for villages functionally
          isolated or economically disrupted through edge severance, without direct physical
          damage
        </li>
        <li>
          <strong>Recovery trajectory monitoring</strong>, tracking how quickly node
          embeddings return to baseline, and whether recovery speed relates to structural
          connectivity
        </li>
        <li>
          <strong>Resource allocation prioritization</strong> by structural isolation, not
          damage severity alone
        </li>
      </ul>

      <h2>Validation</h2>
      <p>
        Post-disaster official statistics and damage assessments (BPS/BNPB, where available)
        serve as an independent evaluation signal, mirroring the statistics-as-evaluation
        principle in{" "}
        <Link to="/research/ai-official-statistics">AI for Official Statistics</Link>. This
        validation loop is inherently slower than the physical damage task, since
        economic-loss statistics typically lag events by weeks to months, a known constraint
        rather than an oversight.
      </p>
    </div>
  );
}
