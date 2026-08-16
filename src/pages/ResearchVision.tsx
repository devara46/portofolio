import { Link } from "react-router-dom";
import { Placeholder } from "../components/Placeholder";
import { ZoomableImage } from "../components/ZoomableImage";
import researchEvolutionDiagram from "../assets/research-evolution-diagram.svg";

export function ResearchVision() {
  return (
    <div className="prose">
      <p className="eyebrow">Research Vision</p>
      <h1>Research Vision</h1>
      <p>
        Rural development is often diagnosed with a single lens: either satellite-derived
        measures of physical productivity, or officially collected measures of household
        welfare. Each lens is incomplete on its own. My research asks how these two
        fundamentally different kinds of knowledge, physically observed and administratively
        collected, can be integrated into a single, general spatial representation, and
        evaluated honestly against each other.
      </p>

      <h2>Research Evolution</h2>
      <figure>
        <ZoomableImage src={researchEvolutionDiagram} alt="Research Evolution Diagram" width={720} />
        <figcaption>Click to zoom in.</figcaption>
      </figure>
      <p className="text-muted">
        One of four Research Themes below unpacks the graph-based integration step shown above
        in full technical detail; see{" "}
        <Link to="/research/spatial-intelligence">Spatial Intelligence</Link>.
      </p>

      <h2>Core Framing: Cross-Domain Multimodal Representation Learning</h2>
      <p>
        Earth Observation and official statistics are not simply two more modalities to fuse,
        the way SAR and optical imagery are fused. They differ structurally: EO data is dense,
        continuously sensed, and physically grounded; official statistics are sparse,
        sample- or census-based, semantically rich, hierarchical, and administratively
        constrained. Integrating them requires treating this as a genuinely cross-domain
        representation learning problem, not a routine sensor-fusion one.
      </p>

      <h2>Structural Extension: A Hierarchical Heterogeneous Spatial Graph</h2>
      <p>
        The proposed framework represents rural spatial systems as a graph with multiple node
        types, agricultural parcels, villages, and districts, connected both{" "}
        <strong>vertically</strong> (containment: parcel belongs to village belongs to
        district) and <strong>laterally</strong> (geographic adjacency, transportation links,
        shared environmental conditions, and economic relationships between units at the same
        level). Full node and edge design is detailed in{" "}
        <Link to="/research/spatial-intelligence">Spatial Intelligence</Link>.
      </p>

      <h2>Evaluation Principle: Statistics as an Independent Signal</h2>
      <p>
        The graph representation is intended to be learned primarily from EO, LiDAR, and
        infrastructure data, without direct socioeconomic supervision. Official statistics are
        held out and used purely to evaluate whether the learned representation captures
        welfare-relevant structure, mirroring how foundation models are evaluated on downstream
        tasks rather than trained directly to produce them. This design choice is deliberate:
        it avoids the circularity of a model appearing to predict welfare because it was
        trained on welfare data, and instead asks whether independently collected evidence
        corroborates what the representation has learned.
      </p>

      <h2>Two Flagship Case Studies</h2>
      <p>
        The framework is designed to generalize across downstream tasks, not to be built
        around a single one. Two case studies are currently pursued:
      </p>
      <ul>
        <li>
          <strong>Welfare and Productivity Conversion</strong> — diagnosing where agricultural
          productivity fails to translate into local economic activation. See{" "}
          <Link to="/research/eo-socioeconomic">EO for Socioeconomic Systems</Link>.
        </li>
        <li>
          <strong>Disaster Impact and Recovery</strong> — extending the same representation to
          capture both direct damage and propagated, indirect impact through severed
          structural connections. See{" "}
          <Link to="/research/disaster-resilience">Disaster Resilience and Recovery</Link>.
        </li>
      </ul>

      <h2>Motivation</h2>
      <Placeholder label="Draft — needs to be revised into your own voice">
        <p style={{ margin: 0 }}>
          My interest in this direction comes from a consistent observation across my work at
          BPS: the data needed to understand a place well already exists, scattered across
          satellites and administrative records, but rarely integrated. I am drawn to building
          the structures that let those sources inform each other, because the resulting
          understanding scales to policy decisions in a way individual case studies cannot.
        </p>
      </Placeholder>
    </div>
  );
}
