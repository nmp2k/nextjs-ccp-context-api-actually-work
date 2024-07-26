import { getVal } from "@/components/show";

export default function Consum() {
  const val = getVal();
  return (
    <>
      <h1>{val.name}</h1>
      <h1>{val.age}</h1>
    </>
  );
}
