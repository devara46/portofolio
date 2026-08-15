# Disaster Resilience and Recovery

## Scientific question

Can a general spatial representation capture not only direct physical damage, but propagated impact transmitted through severed structural connections?

## Where the field stands

Remote sensing damage assessment is mature and effective at what it does. Bi-temporal change detection, building damage classification, and increasingly vision-language systems for damage description all answer a well-posed question: what at this location was physically altered.

The gap is not in that answer. It is in what the question excludes. A village that sustained no structural damage, but whose only road to a market town was cut, has been severely affected. Nothing in the imagery of that village shows it. The impact is located in a relationship, not in a place, and a pixel-level or object-level representation has no object corresponding to a relationship.

Official disaster loss statistics do eventually capture some of this, because economic disruption shows up in later collection rounds. They arrive weeks to months after the event, which is well past the point where the information would change the response.

## Approach

**Bi-temporal graph rather than bi-temporal imagery.**

The same hierarchical heterogeneous graph is constructed for a pre-event and a post-event state. Comparing the two produces two distinct kinds of change:

- **Node-level change**, which corresponds to conventional damage assessment. Parcel and village node features change because the physical surface changed.
- **Edge-level change**, which is the part conventional assessment does not represent. Transportation edges are severed when a road or bridge is destroyed. Economic edges are disrupted when a market node becomes unreachable. Environmental edges change when a hazard alters the exposure regime.

**Impact propagation.** Once severance is representable, the second-order question becomes tractable: which nodes lost function without losing structure. This is what I mean by propagated impact. A village three hops from the damage zone can be more affected than one adjacent to it, if the three-hop path was its only connection to services.

**Data.** Post-event acquisition is dominated by SAR, because cloud cover and timing make optical unreliable in exactly the conditions where the assessment is needed. This makes SAR the primary post-event modality rather than a supplement.

This case study is a test of generality. If a representation built for socioeconomic structure can also express disaster impact without being redesigned, then it is a general spatial representation. If it needs redesigning, it was a socioeconomic model that happened to work once.

## Open questions

**Validation timing.** Official disaster loss statistics lag events by weeks to months. Under the evaluation-signal principle, this is the honest constraint: validation is retrospective by construction, even though the representation itself can be produced quickly. Whether earlier proxies can support interim validation without becoming de facto training signal is unresolved.

**What counts as a severed edge.** A road is not binary. Reduced capacity, temporary closure, and detour availability all sit between intact and severed, and the representation has to decide how much of that gradation to carry.

**Recovery, not only impact.** Recovery is the reconstruction of edges over time, and it is arguably the more policy-relevant question. It is also harder, because it requires a temporal sequence of graph states rather than two, and because the relevant statistics are collected even less frequently. I regard this as a direction rather than a current capability.
