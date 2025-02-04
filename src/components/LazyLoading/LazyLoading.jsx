import Header from "../common/Header";

const LazyLoading = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="On Demand Load" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8"></main>
    </div>
  );
};

export default LazyLoading;
