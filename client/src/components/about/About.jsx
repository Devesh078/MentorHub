import { motion } from "framer-motion";
import ajinkya from "../../assets/ajinkya.png";

const CARDS = [
  { title: "10+ Years Experience", desc: "Building enterprise cloud & data solutions." },
  { title: "500+ Students", desc: "Mentored professionals across top companies." },
  { title: "Real Projects", desc: "Hands-on pipelines, Spark, Kafka & Cloud." },
  { title: "Interview Prep", desc: "Resume reviews, mock interviews & guidance." },
];

const SKILLS = [
  ["AWS", 95],
  ["Azure", 98],
  ["GCP", 90],
  ["Python", 96],
];

function About() {
  return (
    <section className="relative bg-[#0A0C10] py-32">
      <style>{`
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Background glow — isolated to its own layer so it never clips foreground badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#C9A24B]/[0.05] blur-[160px]" />
      </div>

      <div
        className="relative max-w-7xl mx-auto px-8"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="font-mono uppercase tracking-[5px] text-[#C9A24B] text-xs">
            About the mentor
          </p>
          <h2 className="font-display mt-5 text-5xl font-black text-[#F3EFE6]">
            Learn from industry experience
          </h2>
          <p
            className="font-body mt-6 text-[#9AA1B2] text-lg leading-8"
            style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            Industry mentor helping engineers build real-world cloud, data
            engineering and AI skills that companies actually hire for.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24 items-center">

          {/* LEFT — photo, with room reserved so badges never overflow the section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-[420px] pt-6 pb-8"
          >
            <div className="rounded-[28px] border border-[#C9A24B]/25 bg-[#0F1116] p-4">
              <img
                src={ajinkya}
                alt="Ajinkya Kapadane"
                className="w-full rounded-[20px] object-cover grayscale-[15%]"
              />
            </div>

            {/* Experience badge — inset within the frame's own bounds, not hanging past the section edge */}
            <div className="absolute left-4 bottom-2 rounded-2xl border border-[#232733] bg-[#0F1116]/95 backdrop-blur-xl px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <h3 className="font-mono text-4xl font-semibold text-[#C9A24B]">10+</h3>
              <p className="font-body text-sm text-[#9AA1B2] mt-1">Years Experience</p>
            </div>

            {/* Mentor badge */}
            <div className="absolute right-4 -top-2 rounded-2xl border border-[#232733] bg-[#0F1116]/95 backdrop-blur-xl px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <p className="font-mono text-[10px] tracking-[2px] text-[#5A6070]">CERTIFIED</p>
              <h3 className="font-display mt-1 font-semibold text-[#F3EFE6]">Cloud Mentor</h3>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-4">
              {CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#232733] bg-[#0F1116] px-8 py-7 hover:border-[#C9A24B]/30 transition"
                >
                  <h3 className="font-display text-[28px] lg:text-[30px] font-bold leading-tight text-[#F3EFE6]">
                    {card.title}
                  </h3>
                  <p className="font-body text-[#9AA1B2] mt-2.5">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-16">
              <h3 className="font-display text-3xl font-bold text-[#F3EFE6] mb-9">
                Core expertise
              </h3>

              {SKILLS.map(([skill, value]) => (
                <div key={skill} className="mb-6">
                  <div className="flex justify-between mb-2 font-body">
                    <span className="text-[#D6DAE3]">{skill}</span>
                    <span className="font-mono text-[#C9A24B]">{value}%</span>
                  </div>
                  <div className="h-[3px] bg-[#232733] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-[#C9A24B] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;