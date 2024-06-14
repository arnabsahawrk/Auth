import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col gap-4 m-4">
      <h1 className="text-2xl font-semibold">Hey, Time To Sign In</h1>
      <LoginForm />
    </main>
  );
}
