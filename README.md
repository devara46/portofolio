# Home

## Representing rural economies as they actually are

Rural economies are structurally heterogeneous in ways that neither satellite imagery nor official statistics can describe on their own. I build spatial representations that hold both, so that the physical structure of a landscape and the administrative record of the people living in it can be reasoned about inside a single model.

<figure>
  <img src="assets/graph-schematic.png" alt="Hierarchical heterogeneous spatial graph schematic">
  <figcaption>Hierarchical heterogeneous spatial graph: parcel, village, and district nodes joined by vertical containment edges and lateral geographic, transportation, environmental, and economic edges.</figcaption>
</figure>

<!--
FIGURE BRIEF (graph-schematic.png)
Forward-looking, not retrospective. Should show, at minimum:
  - three stacked node tiers: parcel (many, small), village (fewer), district (fewest)
  - vertical containment edges between tiers, drawn differently from lateral edges
  - at least two visibly distinct lateral edge types at the village tier
  - EO modalities entering from the left as node features
  - official statistics entering from the right, touching an evaluation box, NOT the model
The last point is the one the figure must not get wrong. Statistics must visually
sit outside the learning path.
-->

Earth observation gives dense, physically-sensed, spatially continuous measurement. Official statistics give sparse, administratively-collected, semantically rich measurement that is organized hierarchically rather than by pixel. My work treats these as two genuinely different kinds of knowledge about the same territory, and asks how a single representation can carry both without flattening either one.

The current direction is a hierarchical heterogeneous spatial graph over agricultural parcels, villages, and districts, learned primarily from Earth observation and infrastructure data, and evaluated against official statistics held out as an independent signal. The intent is a general representation that supports several downstream questions, including welfare and productivity conversion, and disaster impact and recovery.

---

### Where to go next

| | |
|---|---|
| [**Research Vision**](research-vision.md) | The full argument: what problem this addresses, how the framework is structured, and why statistics belong outside the training loop. |
| [**Research Themes**](research/themes/README.md) | Four open scientific questions, each with current approach and unresolved parts. |
| [**Publications**](publications.md) | Published and submitted work, in chronological order. |
