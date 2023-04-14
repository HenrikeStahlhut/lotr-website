import Link from "next/link";
import { introduction } from "../resources/lib/data.js";

export default function HomePage() {
  return (
    <div>
      {/* Overview Page */}
      <h2>Volume Overview - the Homepage</h2>
      <ul>
        <li>
          <Link href="/volumes">Klick here for the Volume Overview</Link>
        </li>
      </ul>
    </div>
  );
}
