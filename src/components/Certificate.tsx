import { ShieldCheck } from "lucide-react";
import { certificateData } from "../data/certificate";
import CertificateCard from "./CertificateCard";
const Certificate = () => {
  return (
    <section className="space-y-4 mb-10 mt-15">
      <div className="border-b border-neutral-800 pb-4 mb-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
          <ShieldCheck size={24} className="text-green-500" /> Certificates
        </h2>
        <p className="text-neutral-400 text-sm mt-2">What I have learned</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {certificateData.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificate;
