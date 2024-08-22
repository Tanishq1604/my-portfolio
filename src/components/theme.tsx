"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function Theming({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Theming;
