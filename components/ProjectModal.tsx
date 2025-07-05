// components/ProjectModal.tsx
interface Props {
  title: string;
  description: string;
  onClose: () => void;
}

export default function ProjectModal({ title, description, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-60">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[90%] md:w-[600px] relative">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4 whitespace-pre-line">{description}</p>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-lg text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
