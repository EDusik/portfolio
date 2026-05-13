export function Gutter({ lines }: { lines: number }) {
  return (
    <div className="gutter">
      {Array.from({ length: lines }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );
}
