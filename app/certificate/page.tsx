import CertificateCard from "@/components/CertificateCard";
import { certificates } from "@/components/data/certificateData";

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="py-10 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-700 dark:text-purple-400">
          🎓 My Certificates
        </h1>

         <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Each certificate below reflects a milestone in my steady learning journey — from
          school-level science exhibitions to college workshops, internships, and academic excellence.
          Every step represents effort, patience, and growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <CertificateCard
              key={idx}
              year={cert.year}
              title={cert.title}
              description={cert.description}
              imageUrl={cert.imageUrl}
              viewUrl={cert.viewUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
