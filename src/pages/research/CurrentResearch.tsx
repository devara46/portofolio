export function CurrentResearch() {
  return (
    <div className="prose">
      <p className="eyebrow">Research</p>
      <h1>Current Research</h1>
      <p>
        The empirical foundation this project generalizes from is a pair of studies on rural
        welfare and agricultural productivity in East Java, Indonesia, integrating Earth
        Observation with official statistics for the first time in that regional context.
      </p>

      <h2>Diagnosing the Agriculture-to-Welfare Conversion Gap (East Java)</h2>
      <p>
        <em>
          "High Yield, Limited Prosperity: Diagnosing the Food System Gap Between
          Agricultural Productivity and Village Economic Activation in East Java"
        </em>{" "}
        — under review, <em>East Java Economic Journal</em>.
      </p>
      <p>
        Using Sentinel-2 NDVI and VIIRS nighttime lights across 7,654 villages, this study
        shows that agricultural productivity and local economic activation are driven by
        substantially different institutional determinants (R&sup2; = 0.032 vs. R&sup2; =
        0.461), and validates the resulting village typology against SUSENAS household
        welfare data collected entirely independently of the satellite-derived classification.
      </p>
      <p>
        This paper establishes the core epistemic move the broader framework builds on:{" "}
        <strong>
          EO-derived spatial patterns should be validated against official statistics as an
          independent signal, not assumed to align with them by construction.
        </strong>
      </p>

      <h2>Generalizing the Framework (Southeast Sulawesi, in progress)</h2>
      <p>
        An in-progress extension tests whether the conversion-gap framework generalizes
        beyond rice-dominated East Java to a province with a more heterogeneous economic
        base, rice, cocoa, and cashew agriculture alongside maritime and mining sub-economies.
        This work directly tests the generalizability claim that motivates the graph-based
        framework: if the mechanism holds across structurally different rural economies, it
        strengthens the case for a representation designed to transfer across contexts rather
        than being tuned to one region.
      </p>
    </div>
  );
}
