import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Certificate } from "../data/certificate";

type Props = {
  certificate: Certificate;
  index: number;
};

const CertificateCard = ({ certificate, index }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden aspect-video bg-neutral-950">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-medium text-neutral-200 truncate">
          {certificate.title}
        </span>
        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${certificate.title}`}
          className="ml-3 flex-shrink-0 text-neutral-500 hover:text-white transition-colors duration-200"
        >
          <ExternalLink size={15} />
        </a>
      </div>
    </motion.article>
  );
};

export default CertificateCard;
