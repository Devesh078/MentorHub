import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Oracle",
  "IBM",
  "Deloitte",
  "Accenture",
  "JP Morgan",
  "Walmart",
  "Infosys",
  "TCS",
];

function TrustedCompanies() {
  return (
    <section className="relative overflow-hidden bg-[#0A0C10] pt-32 pb-24">
      <style>{`
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Top divider — brass instead of cyan */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,162,75,0.3), transparent)" }}
      />

      <div
        className="max-w-7xl mx-auto px-8"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono uppercase tracking-[5px] text-[#C9A24B] text-xs">
            Trusted by
          </p>

          <h2 className="font-display mt-5 text-5xl font-black text-[#F3EFE6]">
            Engineers working at
          </h2>

          <p
            className="font-body mt-5 text-[#9AA1B2] text-lg leading-8"
            style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            Professionals from top product companies have learned,
            upskilled and cracked interviews through personalized mentorship.
          </p>
        </motion.div>

        {/* Infinite scroll — direction unchanged (already right-to-left) */}
        <div className="relative mt-20 overflow-hidden">
          {/* Edge fades so logos don't clip abruptly */}
          <div
            className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0A0C10, transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0A0C10, transparent)" }}
          />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 w-max"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="w-[240px] rounded-2xl px-9 py-7 flex justify-center items-center transition-colors duration-300"
                style={{ border: "1px solid #232733", backgroundColor: "#0F1116" }}
              >
                <span className="font-display text-2xl font-bold text-[#D6DAE3]">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;