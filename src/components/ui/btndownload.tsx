const BtnDownload = () => {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
          bg-neutral-800 shadow-sm h-9 px-4 py-2 text-neutral-500 transition-all duration-300 hover:text-white rounded-full border border-neutral-700 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 23 23"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="animate-bounce lucide lucide-download-icon lucide-download"
      >
        <path d="M12 15V3" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
      </svg>{" "}
      <a href="/CV - Diyas Ruwandi.pdf" download>
        Download Resume
      </a>
    </button>
  );
};

export default BtnDownload;
