import { getUserBySlug } from "@/utils/data";
import { notFound } from "next/navigation";

export const revalidate = 30;

const Page = async ({ params: { slug } }) => {
  const { data, error } = await getUserBySlug(slug);
  console.log(slug);
  console.log(data);
  if (!!error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    notFound();
  }

  const { user_id } = data;

  return <></>;
};

export default Page;
