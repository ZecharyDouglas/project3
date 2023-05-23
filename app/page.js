import { getLatestUsers } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { success, data, error } = await getLatestUsers();

  console.log(data, "End of the data         1 ");

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data.length === 0) {
    return <p>No users have signed up yet</p>;
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl mb-5">See some of our current users lists</h1>
        <table className=" flex flex-col justify-center items-center w-1/3 bg-slate-400 rounded-lg shadow-lg">
          <thead></thead>
          <tbody>
            {data.map(({ name, slug }) => (
              <tr key={slug}>
                <td>
                  {
                    <Link
                      key={slug}
                      href={`/user/${slug}`}
                      className="block my-5 p-2 button small bg-slate-500 text-center rounded-lg hover:text-white"
                    >
                      {name}
                    </Link>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );

  return <main></main>;
}
