import { useState } from "react";
import { RegisterForm } from "@/components";

export default function RegisterPage() {
  const [data, setData] = useState({});

  return (
    <main className="flex w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#000851]">
      <RegisterForm />
    </main>
  );
}
