import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import SpoonStory from "@/pages/stories/SpoonStory";
import MirrorStory from "@/pages/stories/MirrorStory";
import StarStory from "@/pages/stories/StarStory";
import MurdererStory from "@/pages/stories/MurdererStory";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stories/spoon" element={<SpoonStory />} />
          <Route path="/stories/mirror" element={<MirrorStory />} />
          <Route path="/stories/star" element={<StarStory />} />
          <Route path="/stories/murderer" element={<MurdererStory />} />
        </Routes>
        <Toaster />
        <SonnerToaster />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;