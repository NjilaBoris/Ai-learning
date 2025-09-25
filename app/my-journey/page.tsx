import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");
  return (
    <main className="min-lg:w-3/4">
      <section className="flex justify-between gap-4 max-sm:flex-col items-center"></section>
    </main>
  );
};

export default Profile;
