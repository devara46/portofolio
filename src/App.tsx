import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ResearchVision } from "./pages/ResearchVision";
import { CurrentResearch } from "./pages/research/CurrentResearch";
import { EoSocioeconomic } from "./pages/research/EoSocioeconomic";
import { SpatialIntelligence } from "./pages/research/SpatialIntelligence";
import { AiOfficialStatistics } from "./pages/research/AiOfficialStatistics";
import { DisasterResilience } from "./pages/research/DisasterResilience";
import { FutureDirections } from "./pages/research/FutureDirections";
import { Publications } from "./pages/Publications";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/research-vision" element={<ResearchVision />} />
        <Route path="/research/current-research" element={<CurrentResearch />} />
        <Route path="/research/eo-socioeconomic" element={<EoSocioeconomic />} />
        <Route path="/research/spatial-intelligence" element={<SpatialIntelligence />} />
        <Route path="/research/ai-official-statistics" element={<AiOfficialStatistics />} />
        <Route path="/research/disaster-resilience" element={<DisasterResilience />} />
        <Route path="/research/future-directions" element={<FutureDirections />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
