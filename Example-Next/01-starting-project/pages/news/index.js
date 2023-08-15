import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1> The news Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs is a great framework
          </Link>
        </li>
        <li>More news</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
