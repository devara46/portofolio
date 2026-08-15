# Future Directions

## Staged data expansion

The framework is designed for multiple modalities, but I do not intend to begin with all of them. The sequence below reflects what I think can be built and validated in order, rather than a wish list.

**First working pipeline.** Sentinel-2 for optical and vegetation signal, SAR for all-weather structural observation and post-event acquisition, and official statistics from PODES and SUSENAS as the held-out evaluation layer. This combination is sufficient to construct the parcel, village, and district node types with real features, build geographic and transportation lateral edges, and evaluate against independently collected village and household statistics. It is the minimum configuration that tests the central claim.

**Planned: LiDAR.** Height and vertical structure at parcel level. This addresses a specific weakness in the first pipeline, which is that optical and SAR describe surface extent well and vertical structure poorly. Structure carries information about crop type, built form, and infrastructure that spectral indices do not.

**Planned, explicitly scoped: Sentinel-5P.** Atmospheric and environmental externalities at province and district level only. The native resolution does not support village-level inference and I do not intend to pretend otherwise. Its role is to characterize environmental context on the coarse nodes, which is where environmental lateral edges are most defensible, and nowhere finer.

I state the scoping explicitly because scope creep in multimodal frameworks is easy and expensive. Adding a modality that cannot support the spatial level it is being used at degrades the whole representation while appearing to enrich it.

---

## Open methodological question

The core unresolved question is whether self-supervised representation learning on physical and infrastructural observation can capture socioeconomic structure, or whether weak supervision is required.

If self-supervision suffices, the statistics-as-evaluation principle is fully satisfiable and the representation transfers to regions with no statistical coverage at all. If it does not, the question becomes what minimal weak signal can be admitted without reintroducing circularity and without binding the representation to the places where that signal happens to exist.

I regard this as the substantive research question rather than a technical detail, and it is the main reason I want to work in a group with depth in representation learning for Earth observation. It is not a question I can resolve alone or by argument. It requires the empirical infrastructure to test both settings properly.

---

## Scope note

The full system described across this site is a research programme, not a Master's thesis.

What I would expect to complete at Master's level is a well-specified first experiment: the first working pipeline above, over a defined study region, constructing the three node types and at least geographic and transportation edge families, learned without socioeconomic supervision, and evaluated against held-out official statistics on one downstream task.

The multi-modality expansion, the disaster case study, and the recovery temporal sequence are directions the design accommodates. I would rather state that clearly than present the whole programme as a two-year plan. A first experiment that genuinely tests the central claim is more valuable than a broad implementation that tests nothing conclusively.
