import { auth } from "@/auth";
import LogOut from "@/components/LogOut";
import Image from "next/image";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <main className="flex justify-center items-center flex-col gap-4 m-4">
      <h1 className="text-2xl font-semibold">{session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        height={72}
        width={72}
        className="rounded-full"
      />
      <LogOut />
    </main>
  );
};

export default HomePage;
