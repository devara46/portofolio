# Spatial Intelligence

## Scientific question

How should heterogeneous spatial units at different administrative levels be represented jointly, so that both their containment relationships and their lateral interactions are part of the representation rather than post-processing?

## Where the field stands

Multi-scale representation in Earth observation is normally handled through resolution: pyramids, multi-scale encoders, models that reconstruct across ground sample distances. That handles physical scale well. It does not handle administrative structure, because administrative units are not a resolution ladder. A village is not a downsampled parcel. It is a different kind of object, with attributes, such as population and services, that have no parcel-level equivalent.

Graph neural networks are an obvious tool for relational spatial data, and there is prior work applying graph-structured learning in remote sensing contexts. Most of it uses graphs over homogeneous units, typically pixels, patches, or superpixels, with a single implicit relation type.

<!--
POSITIONING NOTE, kept deliberately narrow and factual.
CGSL is cited here as prior art in the wider collaborative network, NOT as lab precedent.
Do not expand this. Do not describe it as a lab direction.
-->

Graph-structured learning also appears in the collaborative network around the lab I am interested in, for example in CGSL, though as a co-authored contribution rather than a core lab direction. I note it because it establishes that graph methods are not foreign to the environment, not because it is the precedent my proposal builds on.

## Approach

**Hierarchical heterogeneous spatial graph.** Three node types drawn from real units:

| Node type | What it is | Feature sources |
|---|---|---|
| Parcel | Agricultural plot or field unit | High-resolution optical, SAR, planned LiDAR for height and structure |
| Village | Smallest administrative unit with population and service attributes | Aggregated EO signals, infrastructure presence, accessibility measures |
| District | Administrative aggregate used for policy and reporting | Coarse EO, regional environmental and economic context |

**Two edge families.**

*Vertical containment edges* encode nesting: parcel in village, village in district. This makes the administrative hierarchy explicit and directional, rather than something recovered by spatial pooling. It also means information can flow up and down the hierarchy through a defined path.

*Lateral edges* connect units at the same level and are typed:

- **Geographic**, spatial adjacency and proximity
- **Transportation**, connectivity through the road and intermodal network, drawing on the accessibility and logistics work in my earlier publications
- **Environmental**, shared exposure such as a common watershed, slope regime, or hazard zone
- **Economic**, market and trade interaction between units

Typing matters because two units can be adjacent without being connected, connected without trading, and exposed to the same hazard without either. Collapsing these into one generic edge discards the distinctions that carry the socioeconomic signal.

## Open questions

**Node feature design across levels.** What belongs on a parcel node, a village node, and a district node is not settled. Aggregating parcel features into village features is the easy answer and probably the wrong one, since it makes the village node a summary rather than an entity with its own attributes. The village has properties that no amount of parcel aggregation produces.

**How much of the hierarchy should be learned rather than imposed.** Administrative boundaries are real and consequential, but they are also arbitrary in places, and functional economic units do not always respect them. A representation that treats the hierarchy as fixed may be encoding an administrative artifact. One that learns it may lose the interpretability that makes the framework useful for policy.

**Edge construction and sparsity.** Economic interaction edges in particular are not directly observed. Constructing them from proxies risks putting assumptions into the graph structure itself, where they are harder to audit than assumptions in the feature set.

I want to be clear that these are problem specifications, not architectural commitments. The hierarchical heterogeneous graph is my current best answer to the representation question. Whether a message-passing architecture, an attention-based one, or something else is the right implementation is downstream of the problem, and I would rather keep those separate.
