import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { Placeholder } from "../components/Placeholder";

export function Home() {
  return (
    <div className="prose hero">
      <p className="hero__role">Statistician, BPS-Statistics Indonesia | Prospective MEXT Research Student</p>
      <h1>Terry Devara</h1>
      <p className="lede">
        Understanding rural spatial systems by integrating what satellites observe with what
        official statistics measure.
      </p>

      <Placeholder label="Home hero visual — not yet built">
        Recommended: a simplified schematic of the Hierarchical Heterogeneous Spatial Graph
        (parcel → village → district nodes, a few representative lateral edge types, small
        annotation showing "EO / LiDAR / SAR in" and "statistics as evaluation" out). Design
        this after the Research Vision copy is finalized.
      </Placeholder>

      <hr />

      <p>
        My research integrates Earth Observation (Sentinel-2, SAR, LiDAR) with official
        statistics (SUSENAS, PODES) through a hierarchical, heterogeneous spatial graph,
        learning representations that generalize across multiple downstream problems: rural
        welfare and productivity conversion, and disaster impact and recovery.
      </p>

      <div className="button-row">
        <ButtonLink to="/research-vision" variant="primary">
          Read the Research Vision →
        </ButtonLink>
        <ButtonLink to="/research/spatial-intelligence">Explore Research Themes →</ButtonLink>
        <ButtonLink to="/publications">See Publications →</ButtonLink>
      </div>

      <div className="section-divider" />

      <h2>Where to go next</h2>
      <div className="card-grid">
        <NavCard
          to="/research-vision"
          title="Research Vision"
          desc="The full argument: what problem this addresses, how the framework is structured, and why statistics belong outside the training loop."
        />
        <NavCard
          to="/research/spatial-intelligence"
          title="Research Themes"
          desc="Four open scientific questions, each with a current approach and unresolved parts."
        />
        <NavCard
          to="/publications"
          title="Publications"
          desc="Published and submitted work, in chronological order."
        />
        <NavCard
          to="/about"
          title="About"
          desc="Background, target graduate program, and contact details."
        />
      </div>
    </div>
  );
}

function NavCard({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link className="card" to={to}>
      <p className="card__title">{title}</p>
      <p className="card__desc">{desc}</p>
    </Link>
  );
}
