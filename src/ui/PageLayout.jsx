function PageLayout({ children }) {
  return (
    <div className="bg-blue-50 h-screen grid grid-cols-[100px_1fr] sm:grid-cols-[200px_1fr] grid-rows-[auto_1fr]">
      {children}
    </div>
  );
}

export default PageLayout;
