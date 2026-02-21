const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
