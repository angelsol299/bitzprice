import Link from "next/link";

const Index = () => (
  <div>
    {" "}
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <h1>welcome to bitzprice</h1>
  </div>
);

export default Index;
