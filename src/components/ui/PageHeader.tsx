export default function PageHeader({ title, description }: {
  title: string;
  description: string;
}) {
  return <div className="pageTitle">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>;
}
