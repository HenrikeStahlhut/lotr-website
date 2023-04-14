import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";

export default function VolumeOne() {
  const findVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <p>
        <Link href="/volumes"> ⬅ All Volumes </Link>
      </p>
      <h1>{findVolume.title}</h1>
      <p>{findVolume.description}</p>
      <ul>
        <li>
          {findVolume.books[0].ordinal} - {findVolume.books[0].title}
        </li>
        <li>
          {findVolume.books[1].ordinal} - {findVolume.books[1].title}
        </li>
      </ul>
    </>
  );
}
