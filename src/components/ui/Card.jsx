export default function Card({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm ${className}`}
    >
      {title && (
        <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h3>
      )}
      <div className="text-gray-900 dark:text-gray-100">
        {children}
      </div>
    </div>
  );
}

