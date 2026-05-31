import { useState, useEffect } from "react"; // 1. Tambah import ini
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "@/components/LoadingScreen"; // 2. Pastikan import ini sudah ada
import { AnimatePresence } from "framer-motion"; // 3. Tambah import ini

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true); // 4. Tambah state loading

  useEffect(() => {
    // 5. Efek untuk menghilangkan loading setelah 2 detik
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 6. AnimatePresence agar LoadingScreen punya animasi saat hilang */}
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        {/* 7. Konten utama hanya tampil kalau loading selesai */}
        {!loading && (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;