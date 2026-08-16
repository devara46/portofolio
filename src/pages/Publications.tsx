export function Publications() {
  return (
    <div className="prose">
      <p className="eyebrow">Publications</p>
      <h1>Publications</h1>
      <p>
        Full record on{" "}
        <a
          href="https://scholar.google.com/citations?user=BtBtAecAAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
        </a>
        .
      </p>
      <p className="text-muted">
        <em>
          Listed chronologically to show progression toward the current research direction,
          see Research Evolution on the Research Vision page.
        </em>
      </p>

      <ol className="pub-list">
        <li>
          <strong>Rice production area detection</strong> using Sentinel-2 and Landsat-8
          multispectral imagery and machine learning, Nganjuk, East Java.
          <span className="pub-venue">International Journal of Remote Sensing and Earth Sciences.</span>
        </li>
        <li>
          Conceptual paper on remote sensing and geospatial accessibility.
          <span className="pub-venue">Proceedings.</span>
        </li>
        <li>
          <strong>School distance mapping</strong> (Dijkstra's algorithm) and{" "}
          <strong>ML-based job classification</strong>, West Nusa Tenggara (concurrent
          studies).
          <span className="pub-venue">Seminar Nasional Official Statistics 2024.</span>
        </li>
        <li>
          <strong>Intermodal logistics and regional competitiveness</strong>, Central Java.
          <span className="pub-venue">Jurnal Dinamika Ekonomi Pembangunan.</span>
        </li>
        <li>
          <strong>
            "High Yield, Limited Prosperity: Diagnosing the Food System Gap Between
            Agricultural Productivity and Village Economic Activation in East Java."
          </strong>{" "}
          Submitted.
          <span className="pub-venue">East Java Economic Journal. Full text available on request.</span>
        </li>
        <li>
          <strong>Southeast Sulawesi extension</strong> — generalizing the conversion-gap
          framework across rice, cocoa, and cashew agriculture, and maritime and mining
          sub-economies. Submitted.
        </li>
      </ol>

      <p className="text-muted">
        <em>Placeholder — replace with full citation strings once finalized.</em>
      </p>
    </div>
  );
}
