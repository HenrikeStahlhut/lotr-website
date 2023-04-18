import { useRouter } from "next/router.js";
import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";

export default function VolumeOne() {
  const router = useRouter();
  const { slug } = router.query;

  const findVolume = volumes.find((volume) => volume.slug === slug);

  const { title, description } = findVolume;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {findVolume.books[0].ordinal} - {findVolume.books[0].title}
        </li>
        <li>
          {findVolume.books[1].ordinal} - {findVolume.books[1].title}
        </li>
      </ul>
      <p>
        <Link href="/volumes"> ⬅ Back to all Volumes </Link>
      </p>
    </>
  );
}
