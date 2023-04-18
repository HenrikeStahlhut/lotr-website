import Link from "next/link";
import Head from "next/head.js";
import { introduction } from "../resources/lib/data.js";
import { volumes } from "../resources/lib/data.js";

export default function LOTRVolumes() {
  return (
    <div>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>🧙‍♂️ Lord of the Rings 🧙‍♂️</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
