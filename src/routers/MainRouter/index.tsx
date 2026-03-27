import { SettingsPage } from "../../pages/SettingsPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { About } from "../../pages/About";
import { NotFound } from "../../pages/NotFound";
import { useEffect } from "react";
import { History } from "../../pages/History";
import { Home } from "../../pages/Home";

function ScrollToTop(){
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0});
  }, [pathname])

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history/" element={<History />} />
        <Route path="/settings/" element={<SettingsPage />} />
        <Route path="/about-pomodoro/" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
