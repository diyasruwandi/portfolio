const BtnDownload = () => {
  return (
    <a
      href="/CV - Diyas Ruwandi.pdf"
      download
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
        bg-neutral-100 text-neutral-900 border border-black 
        dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 
        hover:bg-green-600 hover:text-white hover:border-green-600 dark:hover:bg-green-600 dark:hover:text-white dark:hover:border-green-600
        shadow-xs h-9 px-4 py-2 text-sm transition-all duration-300 rounded-full cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 23 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce lucide lucide-download-icon lucide-download"
      >
        <path d="M12 15V3" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
      </svg>
      <span>Download Resume</span>
    </a>
  );
};

export default BtnDownload;
