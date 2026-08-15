# AI for Official Statistics

## Scientific question

How can administratively-collected data be integrated with sensor data without collapsing the properties that make it distinct: sparsity, hierarchical organization, and semantic richness?

## Where the field stands

Official statistics usually enter machine learning pipelines as labels. A survey value becomes a training target, and the modelling problem becomes regression from imagery onto that target. This works, and it is the basis of most Earth observation poverty mapping.

It also throws away most of what the statistic is. A household survey response is not a scalar attached to a coordinate. It is a structured record, collected under a defined methodology, aggregated into a unit that has legal and administrative meaning, carrying known uncertainty, and situated in a hierarchy where district figures are constructed from village figures rather than existing independently of them. Reducing that to a regression target discards the structure and keeps only the number.

I came to this question from the production side. My earlier work applying machine learning and transfer learning to standardized job classification was an exercise in using AI inside statistical production, and it made the structural properties of statistical data unavoidable. Classification systems are hierarchical by design, categories are semantically defined rather than numerically defined, and errors at one level propagate in ways that a flat treatment does not anticipate.

## Approach

**Statistics as an independent evaluation signal, not a training input.**

The representation is learned from Earth observation and infrastructure data. Official statistics are held out and used to evaluate whether the learned representation corresponds to anything socioeconomically real.

Three reasons:

1. **Non-circularity.** If statistics supervise the representation, agreement with statistics is not evidence. Holding them out makes agreement informative.
2. **Coverage.** Village-level statistical collection in Indonesia is periodic and uneven. A representation that requires it for supervision cannot be produced where the collection did not happen, which is where it is most needed.
3. **Structural preservation.** Used as evaluation, a statistic keeps its own form. It can be compared at the level it was collected, with its own uncertainty, without being flattened into a per-unit scalar to make it trainable.

This is the clearest point of separation between my direction and the standard socioeconomic prediction setup, and it is a constraint I impose deliberately rather than a limitation I am working around.

## Open questions

**Self-supervised or weakly-supervised?** This is the question I most want to work on, and I do not have an answer.

The strong position is that a representation learned purely self-supervised from physical and infrastructural observation will capture welfare-relevant structure, because the physical world genuinely carries socioeconomic information. If that holds, the evaluation-only constraint is fully satisfiable.

The weaker position is that some socioeconomic structure has no physical signature at all, and no amount of self-supervised learning on imagery will recover it. In that case weak supervision is unavoidable, and the real question becomes what form of weak signal can be admitted without reintroducing circularity or destroying transferability to places where the signal does not exist.

I do not think this is settled in the literature, and I do not think it can be settled by argument. It is an empirical question about how much socioeconomic structure is physically legible.

**What counts as a fair evaluation?** If statistics are the evaluation signal, the evaluation protocol carries weight that would otherwise sit in the loss function. Comparing a learned representation against a survey aggregate requires deciding what agreement means when the two describe the same unit through different instruments, at different times, with different error structures.

**Timing.** Statistical collection lags. A representation can be produced from imagery acquired last month; the corresponding official figure may arrive next year. Evaluation designs have to accommodate a moving gap between the two.
