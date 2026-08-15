# EO for Socioeconomic Systems

## Scientific question

Can Earth observation derived indicators explain socioeconomic outcomes independently of survey data, rather than merely predicting survey values?

The distinction matters. A model trained to predict a poverty rate from imagery has learned to reproduce a survey. That is useful for filling gaps, but it says nothing about mechanism, and its accuracy is bounded by the survey it imitates. The question here is whether physical observation carries socioeconomic information in its own right.

## Where the field stands

There is a substantial and successful literature on predicting welfare, consumption, and poverty from satellite imagery, largely built on supervised learning against survey ground truth. It works well where surveys are dense enough to train on, and it degrades where they are not, which tends to be exactly where the gap-filling is most needed. The dominant design also means the resulting models are difficult to interrogate: when a prediction and a survey disagree, there is no principled way to decide which one to trust.

Less attention has gone to the reverse framing, where Earth observation is used to characterize socioeconomic structure and the survey is retained as an independent check.

## Approach

My East Java work took the second framing. Two Earth observation signals with distinct interpretations, NDVI for agricultural production and night-time lights for economic activity, were crossed into a village-level typology. The cell of interest is high production combined with low economic activation, which I refer to as a conversion gap: agricultural output that does not become local prosperity.

Official statistics entered afterward, to characterize what the types contained and to check whether the typology corresponded to anything real. They did not define the types. The result is that agreement between the typology and the statistics is evidence, rather than an artifact of construction.

## Open questions

**Does the conversion gap framing generalize across sub-economies?** The Southeast Sulawesi extension is the direct test. Multiple commodities break the assumption that one vegetation signal tracks one production system, and the presence of maritime and mining activity breaks the assumption that night-time lights reflect agriculture-derived prosperity. See [Current Research](../current-research.md).

**How far can fixed indicators go before they have to be learned?** Every regional difference currently requires manual adjustment of the pipeline. There is a point at which hand-designed indicators stop being a modelling choice and start being a bottleneck. I think the Sulawesi work is close to that point, which is what motivates the move toward [learned representations](spatial-intelligence.md).

**What is the correct spatial level for a socioeconomic claim?** A parcel has production but no welfare. A district has welfare statistics but averages away the variation that matters. The village is the level where both exist, but only barely, and it is not obvious that it is the right level for every question.
