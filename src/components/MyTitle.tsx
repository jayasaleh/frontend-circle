interface TitleProps {
  title: string;
  color: string;
  subtitle?: string;
}

function TitlePage({ title, color, subtitle }: TitleProps) {
  return (
    <div>
      <h1
        style={{
          color: color,
          paddingBottom: "40",
          backgroundColor: "#83ff9e",
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      <h3>{subtitle}</h3>
    </div>
  );
}
export default TitlePage;
