import { motion } from "framer-motion";

export default function SummaryCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
    >
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </motion.div>
  );
}
