import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";

export default async function InitialPage() {
  const session = await auth();

  if (session?.user) redirect("/home");

  return (
    <main className="flex justify-center items-center flex-col gap-4 m-4">
      <h1 className="text-2xl font-semibold">Hey, Time To Sign In</h1>
      <LoginForm />
    </main>
  );
}
