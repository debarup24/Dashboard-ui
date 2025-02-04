import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import SettingsPage from "./pages/SettingsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import OrdersPage from "./pages/OrdersPage";
import Sidebar from "./components/common/Sidebar";
import LoginPage from "./pages/LoginPage";
import { lazy, Suspense } from "react";
import Loading from "./components/LazyLoading/Loading";
import AiMail from "./components/AiMail/AiMail";

function App() {
  const LazyLoading = lazy(() =>
    import("./components/LazyLoading/LazyLoading")
  );

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />

      <Suspense fallback={<Loading />}>
        <Routes>
          {" "}
          <Route path="/ondemand-loading" element={<LazyLoading />} />{" "}
        </Routes>
      </Suspense>

      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ai-mail" element={<AiMail />} />
      </Routes>
    </div>
  );
}

export default App;
