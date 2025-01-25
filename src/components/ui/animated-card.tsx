import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedCard = ({
  children,
  className,
  isLarge = false,
}: {
  children: React.ReactNode;
  className?: string;
  isLarge?: boolean;
}) => {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.02 },
      }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-white/[0.01] p-4 group",
        isLarge ? "md:col-span-2 md:row-span-2" : "",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background via-primary/10 to-background opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
