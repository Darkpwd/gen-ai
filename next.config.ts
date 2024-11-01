import type { NextConfig } from "next";
import autoCert from "anchor-pki/auto-cert/integrations/next";

// Configuração do AutoCert
const withAutoCert = autoCert({
  enabledEnv: "development",
});

// Configuração do Next.js
const nextConfig: NextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
};

// Exportar a configuração combinada
export default withAutoCert(nextConfig);
