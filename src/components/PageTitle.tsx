export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="my-2">
      <h1 className="text-xl my-1">
        <strong>{title}</strong>
      </h1>
      <hr style={{ opacity: 0.3 }} />
    </div>
  );
}
