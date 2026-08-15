# Research Vision

## The problem

A village is not a pixel, and a district is not a large pixel. Rural economies are organized into administrative units that contain each other, that trade with each other, and that share environmental exposure with each other. The measurements we have about them come from two very different places. Satellites produce dense, continuous, physically-sensed observation of land surface. Statistical offices produce sparse, periodic, administratively-collected records of the people on that land, already aggregated into the units that policy actually operates on.

Most work that connects these two either uses imagery to predict a statistic, or uses statistics to label imagery. Both directions treat one source as the answer key for the other. My interest is in the case where neither is subordinate: where the representation itself has to be structured enough to hold physical and administrative information at the same time, at more than one spatial level, without collapsing the differences between them.

---

## Research evolution

<figure>
  <img src="assets/research-evolution.png" alt="Research evolution diagram">
  <figcaption>Chronological progression from single-commodity detection to a general spatial representation framework.</figcaption>
</figure>

<!--
FIGURE BRIEF (research-evolution.png)
Retrospective. Its job is to show the trajectory was directional, not scattered.
Suggested spine (left to right or top to bottom):

  Rice production detection (Nganjuk)
      -> understanding agricultural land from EO
  Accessibility and geospatial data, conceptual paper
      -> reframing EO as a tool for social outcomes
  School distance mapping (Dijkstra) + ML job classification (concurrent)
      -> two parallel entries: spatial network reasoning, and AI applied to
         official statistics production
  Intermodal logistics and regional competitiveness (Central Java)
      -> connectivity as an economic property of regions
  Farmer welfare typology, NDVI and NTL (East Java)
      -> EO and statistics combined to explain a socioeconomic outcome
  Southeast Sulawesi extension
      -> testing whether that combination generalizes across sub-economies
  Hierarchical heterogeneous spatial graph
      -> generalizing from a fixed indicator pipeline to a learned representation

Annotate the arrows with what each step ADDED, not with paper titles.
The reader should be able to see the accumulation without reading the labels.
-->

Each step added one capability that the next step needed. Detection established that land use can be read reliably from open imagery. Accessibility work forced the question of how spatial units relate to each other rather than how they look. The job classification work was my first sustained attempt at applying machine learning inside official statistics production, which is where the concern about statistical structure comes from. Logistics extended relational reasoning from access to economic connectivity. The East Java welfare study brought these together, and the Southeast Sulawesi extension is testing whether the result holds in a structurally different regional economy.

The graph framework is not a change of direction. It is what happens when the indicator pipeline used in East Java is asked to generalize, and the fixed choice of indicators becomes the limiting factor.

---

## Core framing: cross-domain multimodal representation learning

Multimodal learning in Earth observation usually means combining sensing modalities. Optical with SAR, imagery with elevation, spectral with spatial. These modalities differ in physics, but they agree on geometry: they all describe the same surface, sampled on a grid.

The extension I am interested in is a modality that does not share that geometry. Official statistics are collected administratively, not sensed physically. They are attached to units rather than to coordinates, they are sparse in time, they are hierarchically nested by construction, and they carry semantic content that has no pixel-level counterpart. A framework that can integrate a physically-sensed and an administratively-collected view of the same territory is doing something structurally different from fusing two sensors.

This is the sense in which my direction extends rather than repeats current work in multimodal Earth observation. Recent work has begun moving toward social and economic interpretation of urban scenes, but the socioeconomic content is still derived from what is visible in the image. My interest is in the case where part of the socioeconomic content is not visible at all, and arrives from a separate collection system with its own structure.

---

## Structural extension: hierarchical heterogeneous spatial graph

The proposed representation is a graph with three node types corresponding to real administrative and physical units: agricultural parcels, villages, and districts.

Two edge families connect them:

- **Vertical containment edges** encode that a parcel sits inside a village, and a village inside a district. This makes the administrative hierarchy an explicit part of the structure rather than something recovered by pooling.
- **Lateral edges** connect units at the same level, and are typed rather than generic: geographic adjacency, transportation connectivity, shared environmental exposure, and economic interaction. Two villages that are adjacent but not connected by road are a different relationship from two villages linked by a trunk route, and the representation should be able to tell them apart.

Node features come primarily from Earth observation and infrastructure data, at the resolution appropriate to each level. What belongs on a parcel node is not what belongs on a district node, and that assignment is itself an open design question rather than a settled one.

Detail on node and edge design is in [Spatial Intelligence](research/themes/spatial-intelligence.md).

---

## Evaluation principle: statistics as an independent signal

Official statistics are used as an evaluation signal, not as a training target.

The reason is straightforward. If survey-derived welfare indicators are used to supervise the representation, then any agreement between the learned representation and those indicators is partly circular, and the representation inherits the coverage gaps and timing lags of the survey. Holding the statistics out preserves their value as an external check: if a representation learned only from physical and infrastructural observation nevertheless aligns with independently collected socioeconomic records, that alignment is informative. If it aligns because it was trained to, it is not.

This is also a practical position. In Indonesia, village-level statistical collection is periodic and uneven. A representation that depends on it for supervision cannot be produced for periods or places where the collection did not happen. A representation evaluated against it can.

Whether this constraint is fully achievable, or whether some form of weak supervision is unavoidable, is stated as an open question rather than a solved one. See [AI for Official Statistics](research/themes/ai-for-official-statistics.md).

---

## Two case studies

The framework targets a general representation, and these two applications are the tests of whether generality was actually achieved. They are not the objective.

**Welfare and productivity conversion.** High agricultural output does not reliably translate into village economic activation. My East Java work identified this gap empirically using a fixed set of indicators. The graph framework asks whether the same gap can be characterized from a learned representation, and whether the structural conditions that make conversion succeed or fail become legible. See [EO for Socioeconomic Systems](research/themes/eo-for-socioeconomic-systems.md).

**Disaster impact and recovery.** Damage assessment from imagery captures what was physically destroyed. It does not capture a village that was untouched but became economically isolated because the road connecting it was cut. A structural representation should be able to express that as edge severance and impact propagation. See [Disaster Resilience and Recovery](research/themes/disaster-resilience-and-recovery.md).

---

## Motivation

I work at a statistical office, which means I spend a lot of time looking at numbers that describe rural life from a distance, collected at intervals, and arriving too late to act on. The gap between what those numbers say and what is actually happening in a village is the thing that keeps pulling me back to this problem.

Earth observation offers something statistics cannot: continuous coverage of places that surveys reach rarely. Statistics offer something Earth observation cannot: a record of people rather than land. I want to build methods that use both honestly, so that decisions affecting rural communities can be made with a fuller picture than either source gives alone.

That is the whole reason I moved from producing indicators toward learning representations. Better representations of rural systems are not an end in themselves. They are how the improvement reaches the people the numbers are supposed to be about.
