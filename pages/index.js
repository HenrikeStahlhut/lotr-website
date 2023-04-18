import Link from "next/link";
import Head from "next/head.js";
import { introduction } from "../resources/lib/data.js";

export default function HomePage() {
  return (
    <div>
      <head>
        <title>Lord of the Rings</title>
      </head>
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
