"use client"; // Adicione esta linha para torná-lo um Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Atualize a importação para usar o `next/navigation`
import { useClerk } from "@clerk/nextjs"; // Importa o hook do Clerk
import Image from "next/image";
import { Button } from "@/components/ui/Button"; // Certifique-se de que este caminho está correto

export default function Home() {
  const router = useRouter();
  const { user } = useClerk(); // Obtém o usuário autenticado do Clerk

  useEffect(() => {
    // Redirecionar para o dashboard se o usuário estiver autenticado
    if (user) {
      router.push("/dashboard");
    }
  }, [router, user]);

  return (
    <div>
      <h2>Test</h2>
      <Button>Subscribe</Button>
    </div>
  );
}
