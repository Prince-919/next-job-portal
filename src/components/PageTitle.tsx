import Divider from "./Divider";

export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="my-3">
      <h1 className="text-xl my-1">
        <strong>{title}</strong>
      </h1>
      <Divider />
    </div>
  );
}
