# Current Research

Two connected studies form the empirical basis for the graph framework. The first established a finding. The second is testing whether that finding survives a change of region.

---

## High Yield, Limited Prosperity

*Diagnosing the Food System Gap Between Agricultural Productivity and Village Economic Activation in East Java*

**Status:** under review. No public preprint. Available on request, see [About](../about.md).

**Problem.** Agricultural productivity is routinely used as a proxy for rural economic wellbeing. In practice the two come apart. Villages with strong and stable agricultural output do not necessarily show corresponding economic activation, and the standard indicator set does not make the divergence visible.

**Method.** I constructed a village-level typology across East Java using two Earth observation signals with different interpretations. NDVI from Sentinel-2 captures vegetation vigour and the agricultural production cycle. Night-time lights capture economic activity and the presence of non-agricultural activity in the built environment. Crossing them produces a typology in which the interesting cell is high production combined with low activation. Official statistics were used to characterize and validate the resulting types, not to define them.

**Key finding.** The productivity to prosperity conversion is uneven and spatially structured. The villages where conversion fails are not randomly distributed, which implies the failure is a property of local structure rather than of local agriculture.

<!-- PLACEHOLDER: replace the sentence above with the actual quantitative headline result once you are comfortable stating it publicly, e.g. share of villages in the high-yield low-activation cell. -->

---

## Southeast Sulawesi extension

**Status:** submitted.

<!-- VERIFY: earlier notes recorded this as in progress. Confirm current status before publishing. -->

**Purpose.** The East Java study was built on a single dominant commodity in a region with relatively uniform economic character. That is a favourable case. This extension asks whether the same framing holds where those conditions do not apply.

**What changes.** Land use expands from rice alone to rice, cocoa, and cashew, which differ in growing cycle, canopy signature, and market structure, so a single vegetation index no longer maps cleanly onto one production system. The regional economy is also split rather than uniform, with maritime and mining sub-economies that generate economic activity with no agricultural origin at all. Night-time lights therefore mean something different in Southeast Sulawesi than they do in East Java.

**Why this matters.** If the typology transfers, the framing is more general than one province. If it does not, the failure is informative, because it identifies exactly which assumption was doing the work. Either result is useful.

<!-- PLACEHOLDER: add working title, target venue, and outcome once known. -->

---

## How this connects to the graph framework

Both studies use a fixed indicator pipeline: chosen inputs, chosen index, chosen thresholds. That design is transparent and it is defensible for one region, but it does not travel well, and the Sulawesi extension is where the cost of that becomes visible. Every structural difference between the two regions has to be handled by changing the pipeline by hand.

The hierarchical heterogeneous spatial graph is the response to that limitation. Instead of committing in advance to which indicators represent a village, the representation is learned from the observations available, with the administrative structure and the relationships between units built into the model rather than imposed afterward. The empirical work established that the productivity to prosperity gap is real and structurally patterned. The graph framework is an attempt to represent that structure directly rather than approximate it through a fixed set of proxies.
