import { Routes, Route } from "react-router-dom";

import { Home } from "@/components/pages/home";
export const RouterConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
