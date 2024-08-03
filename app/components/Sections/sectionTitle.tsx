interface SectionTitleProps {
  label: string;
  isCenter?: boolean;
}

const SectionTitle = ({ label, isCenter }: SectionTitleProps) => {
  return (
    <h2 className={`text-3xl font-bold${isCenter ? " text-center" : ""}`}>
      {label}
    </h2>
  );
};

export default SectionTitle;
