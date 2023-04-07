import Link from "next/link";

export default function Home() {
  return (
    <main>
      <button className="border border-gray-600 p-1 m-1 hover:border-dashed">
        login
      </button>
      <Link href="/signup">
        <button className="border border-gray-600 p-1 m-1 hover:border-dashed">
          sign up
        </button>
      </Link>
    </main>
  );
}
