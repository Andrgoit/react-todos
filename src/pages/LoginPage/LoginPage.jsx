import { LoginForm } from "@/components";

export default function LoginPage({ userLogination }) {
  return (
    <main className="flex w-full items-center justify-center bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
      <LoginForm userLogination={userLogination} />
    </main>
  );
}
