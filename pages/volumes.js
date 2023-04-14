import Link from "next/link";
import { introduction } from "../resources/lib/data.js";

export default function LOTRVolumes() {
  return (
    <div>
      {/* Overview Page */}
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the King
          </Link>
        </li>
      </ul>
    </div>
  );
}
