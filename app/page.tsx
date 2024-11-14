import { LoginForm } from "@/components/login-form";
import { NavigationMenuDemo } from "@/components/navbar";

export default function Home ()
{
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <LoginForm />
      </main>
    </div>
  );
}
