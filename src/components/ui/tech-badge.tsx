import { motion } from "framer-motion";

export const TechBadge = ({ name, icon: Icon, delay = 0 }: { name: string; icon?: any; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10"
    >
      {Icon && <Icon className="h-4 w-4 text-primary" />}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};
