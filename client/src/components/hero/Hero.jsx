import { motion } from "framer-motion";
import ajinkya from "../../assets/ajinkya.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const PIPELINE_STAGES = ["EXTRACT", "TRANSFORM", "LOAD", "SERVE"];

const CREDENTIALS = ["AWS Certified", "Azure Expert", "Google Cloud", "Interview Mentor"];

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#0A0C10] text-[#F3EFE6]">
      <style>{`
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Background: fine grid + one restrained glow — no dual color-blob wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#F3EFE6 1px,transparent 1px),linear-gradient(to bottom,#F3EFE6 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-64 right-[-10%] w-[900px] h-[900px] rounded-full bg-[#C9A24B]/[0.06] blur-[160px]" />
      </div>

      <div
        className="relative max-w-[1400px] mx-auto px-8 lg:px-20 py-28"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", paddingLeft: "80px", paddingRight: "80px" }}
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center min-h-[88vh]">

          {/* LEFT */}
          <motion.div variants={container} initial="hidden" animate="show" className="relative">

            {/* Pipeline rail — fixed height near the top only, so it never spreads
                across dynamic-height content below it and overlaps unrelated text */}
            <div className="absolute left-0 top-1 h-[300px] w-px bg-[#232733]">
              <motion.div
                animate={{ y: [0, 260, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-[#C9A24B] shadow-[0_0_14px_3px_rgba(201,162,75,0.55)]"
              />
              {PIPELINE_STAGES.map((stage, i) => (
                <div
                  key={stage}
                  className="absolute -left-[3px] flex items-center gap-3"
                  style={{ top: `${i * 86}px` }}
                >
                  <span className="h-[7px] w-[7px] rounded-full bg-[#3A3F4C]" />
                  <span className="font-mono text-[10px] tracking-[3px] text-[#5A6070] whitespace-nowrap">
                    {stage}
                  </span>
                </div>
              ))}
            </div>

            <div className="pl-24">
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A24B]/25 bg-[#C9A24B]/[0.08] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[3px] text-[#D8B968]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24B]" />
                  Data Engineering · Cloud · AI
                </span>
              </motion.div>

              <motion.h3 variants={item} className="font-body mt-9 text-3xl lg:text-4xl font-medium leading-tight max-w-xl text-[#9AA1B2]">
                Helping engineers crack
                <span className="text-[#F3EFE6]"> product companies</span>
              </motion.h3>

              <motion.h1
                variants={item}
                className="font-display mt-7 text-7xl lg:text-[96px] leading-[0.9] font-black tracking-tight"
              >
                Ajinkya
                <br />
                <span className="italic font-light text-[#C9A24B]">Kapadane</span>
              </motion.h1>

              <motion.p variants={item} className="font-body mt-9 max-w-lg text-lg leading-8 text-[#9AA1B2]">
                Master data engineering, cloud and AI through industry-level
                mentorship, real-world projects, interview preparation and
                hands-on guidance.
              </motion.p>

              <motion.p variants={item} className="font-body mt-3 max-w-lg text-lg leading-8 text-[#9AA1B2]">
                Trusted by <span className="font-semibold text-[#F3EFE6]">500+</span> engineers
                working at top tech companies.
              </motion.p>

              {/* Stats */}
              <motion.div variants={item} className="grid grid-cols-3 gap-5 mt-14 max-w-xl">
                {[
                  ["10+", "Years"],
                  ["500+", "Students"],
                  ["1200+", "Sessions"],
                ].map(([number, label]) => (
                  <div key={label} className="border-t border-[#232733] pt-4">
                    <h2 className="font-mono text-4xl font-semibold text-[#F3EFE6]">{number}</h2>
                    <p className="font-body mt-1.5 text-[13px] tracking-wide text-[#5A6070]">{label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Company trust line — one quiet sentence, not a badge row */}
              <motion.p variants={item} className="font-body mt-7 text-sm text-[#5A6070]">
                Trusted by engineers from Amazon, Microsoft, Deloitte, Walmart
                Global Tech &amp; Accenture
              </motion.p>

              {/* CTAs */}
              <motion.div variants={item} className="flex flex-wrap gap-4 mt-11">
                <button className="font-body rounded-xl bg-gradient-to-b from-[#E3C77A] to-[#C9A24B] px-8 py-4 font-semibold text-[#14151A] shadow-[0_8px_30px_rgba(201,162,75,0.25)] hover:brightness-105 transition">
                  Book Free Strategy Call
                </button>
                <button className="font-body rounded-xl border border-[#2C303B] px-8 py-4 text-[#D6DAE3] hover:border-[#C9A24B]/50 hover:text-[#F3EFE6] transition">
                  Browse Courses →
                </button>
              </motion.div>

              {/* Credentials */}
              <motion.div variants={item} className="font-mono flex flex-wrap gap-x-6 gap-y-2 mt-10 text-[11px] tracking-wide text-[#5A6070]">
                {CREDENTIALS.map((c) => (
                  <span key={c}>{c.toUpperCase()}</span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Frame — hairline brass border, no gradient wash, no glow ring */}
            <div className="relative rounded-[28px] border border-[#C9A24B]/25 bg-[#0F1116] p-4">
              <img
                src={ajinkya}
                alt="Ajinkya Kapadane"
                className="w-[420px] h-[540px] rounded-[20px] object-cover grayscale-[15%]"
              />
            </div>

            {/* Credential card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 bottom-9 rounded-2xl border border-[#232733] bg-[#0F1116]/95 backdrop-blur-xl px-6 py-5"
            >
              <p className="font-mono text-[10px] tracking-[2px] text-[#5A6070]">STUDENTS_MENTORED</p>
              <h2 className="font-display mt-1.5 text-3xl font-bold text-[#C9A24B]">500+</h2>
            </motion.div>

            {/* Rating — with review count folded in, no five emoji stars */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-8 -right-6 rounded-2xl border border-[#232733] bg-[#0F1116]/95 backdrop-blur-xl px-5 py-4 font-body flex flex-col items-center gap-0.5"
            >
              <span className="flex items-center gap-1.5 text-sm font-medium">
                <span className="text-[#C9A24B]">★</span> 4.9 Rating
              </span>
              <span className="font-mono text-[11px] text-[#5A6070]">500 reviews</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue — thin, quiet, on-brand */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-[#2C303B] rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-[#C9A24B] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;