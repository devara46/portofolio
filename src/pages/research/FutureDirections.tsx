import { Link } from "react-router-dom";

export function FutureDirections() {
  return (
    <div className="prose">
      <p className="eyebrow">Research</p>
      <h1>Future Directions</h1>

      <h2>Staged Data Expansion</h2>
      <p>
        The framework's data integration is staged deliberately rather than proposed all at
        once:
      </p>
      <ol>
        <li>
          <strong>First working pipeline</strong> <em>(current)</em>: Sentinel-2 + SAR +
          PODES/SUSENAS, the tested pipeline behind the East Java and Sulawesi studies.
        </li>
        <li>
          <strong>Planned extension</strong>: LiDAR, for parcel-level height and structural
          detail beyond what optical/SAR alone provide.
        </li>
        <li>
          <strong>Planned, explicitly scoped extension</strong>: Sentinel-5P, at{" "}
          <strong>province/district level only</strong>. Sentinel-5P's native resolution
          (roughly 5.5 × 3.5 km) is far coarser than a village or parcel node, so it is scoped
          as a province-level environmental externality feature (air quality, industrial
          emissions signal), not treated as village-level detail.
        </li>
      </ol>

      <h2>Open Methodological Question</h2>
      <p>
        Whether the graph representation should be learned purely self-supervised or with weak
        socioeconomic supervision injected during training, see{" "}
        <Link to="/research/ai-official-statistics">AI for Official Statistics</Link> for the
        full framing.
      </p>

      <h2>Scope Note</h2>
      <p>
        The Master's-level phase of this work targets a well-specified first experiment, most
        likely the self-supervised vs. weakly-supervised comparison on the existing
        Sentinel-2 + SAR + PODES/SUSENAS pipeline, rather than the full four-modality,
        two-flagship-task system described across this site. The additional modalities and
        the disaster resilience case study are stated here as the longer-term research
        direction.
      </p>
    </div>
  );
}
