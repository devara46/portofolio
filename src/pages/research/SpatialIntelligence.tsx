export function SpatialIntelligence() {
  return (
    <div className="prose">
      <p className="eyebrow">Research Theme</p>
      <h1>Spatial Intelligence</h1>

      <p className="question">
        <strong>Scientific question.</strong> How should heterogeneous spatial units at
        different administrative levels, and the physical, social, and economic relationships
        between them, be represented jointly in a single learned representation?
      </p>

      <h2>Proposed Structure: Hierarchical Heterogeneous Spatial Graph</h2>
      <p>
        <strong>Node types</strong>, each with distinct feature semantics:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Node type</th>
              <th>Representative features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agricultural parcel</td>
              <td>Sentinel-2 time series, SAR backscatter, LiDAR height, DEM/slope, land cover</td>
            </tr>
            <tr>
              <td>Village</td>
              <td>Aggregated EO embeddings, PODES infrastructure and institutional variables</td>
            </tr>
            <tr>
              <td>District</td>
              <td>SUSENAS-derived welfare composites, agricultural census, budget data</td>
            </tr>
            <tr>
              <td>Province <em>(planned)</em></td>
              <td>Sentinel-5P atmospheric/environmental variables, regional policy context</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Edge types:</strong>
      </p>
      <ul>
        <li>
          <em>Vertical (containment):</em> parcel → village → district → province
        </li>
        <li>
          <em>Lateral, geographic:</em> adjacency, k-nearest-neighbors, distance decay
        </li>
        <li>
          <em>Lateral, transportation:</em> road connectivity, estimated travel time
        </li>
        <li>
          <em>Lateral, environmental:</em> shared watershed, similar elevation/climate, shared
          irrigation
        </li>
        <li>
          <em>Lateral, economic:</em> shared market, commodity flow, statistical/EO-embedding
          similarity
        </li>
      </ul>
      <p>
        Node features are deliberately kept close to raw observations at the parcel level
        rather than pre-aggregated, allowing the graph itself, not a manual aggregation step,
        to learn how information should combine across levels.
      </p>

      <h2>Positioning Relative to Existing Graph Methods in Remote Sensing</h2>
      <p>
        Graph-structured representations are not unprecedented in multimodal remote sensing;
        methods such as Commonality Graph Structure Learning apply heterogeneous graphs to
        superpixel-level cross-modal (optical–SAR) change detection. This framework extends
        graph-based reasoning from the superpixel scale to an explicit administrative
        hierarchy (parcel → village → district), integrating a data domain, official
        statistics, not previously represented in graph-based Earth Observation methods.
      </p>

      <h2>Open Question</h2>
      <p>
        What is the right node-feature design across levels, particularly how much to
        aggregate versus preserve raw observational detail at each level, and how architecture
        choices here trade off interpretability against representational flexibility.
      </p>
    </div>
  );
}
