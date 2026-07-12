import { motion } from "framer-motion";
import {
  FaCloud,
  FaDatabase,
  FaUserTie,
  FaFileAlt,
  FaLaptopCode,
  FaRoad,
} from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaDatabase size={26} />,
    title: "Data Engineering",
    desc: "Learn Spark, Kafka, Airflow, SQL, Databricks and build production-ready data pipelines.",
  },
  {
    icon: <FaCloud size={26} />,
    title: "Cloud Architecture",
    desc: "Master AWS, Azure & GCP with real-world deployments and cloud-native projects.",
  },
  {
    icon: <FaLaptopCode size={26} />,
    title: "Mock Interviews",
    desc: "Practice FAANG & product company interviews with detailed feedback.",
  },
  {
    icon: <FaFileAlt size={26} />,
    title: "Resume Review",
    desc: "ATS-friendly resume optimization and LinkedIn profile improvements.",
  },
  {
    icon: <FaRoad size={26} />,
    title: "Career Roadmap",
    desc: "Step-by-step roadmap to become a Data Engineer from beginner to advanced.",
  },
  {
    icon: <FaUserTie size={26} />,
    title: "1:1 Mentorship",
    desc: "Weekly mentoring sessions, doubt solving and personalized guidance.",
  },
];

function Services() {
  return (
    <section className="relative w-full bg-[#0A0C10] py-32">
      <style>{`
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Background — one fine grid, no radial color wash */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#F3EFE6 1px,transparent 1px),linear-gradient(to bottom,#F3EFE6 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Centering hardened with inline style as a fallback in case Tailwind's
          max-w-7xl / mx-auto utilities aren't being generated (see Courses.jsx note) */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
          style={{ maxWidth: "768px", marginLeft: "auto", marginRight: "auto" }}
        >
          <p className="font-mono uppercase tracking-[5px] text-[#C9A24B] text-xs">
            What I offer
          </p>
          <h2 className="font-display mt-6 text-5xl lg:text-6xl font-black text-[#F3EFE6] leading-tight">
            Premium mentorship services
          </h2>
          <p
            className="font-body mt-7 text-lg leading-8 text-[#9AA1B2]"
            style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            Everything you need to crack Data Engineering, Cloud, AI and
            product company interviews through personalized, industry-level
            mentorship.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative rounded-2xl border border-[#232733] bg-[#0F1116] p-9 min-h-[300px] flex flex-col transition-colors duration-300 hover:border-[#C9A24B]/35"
            >
              <div className="h-12 w-12 rounded-xl border border-[#232733] flex items-center justify-center text-[#C9A24B] group-hover:border-[#C9A24B]/50 transition-colors">
                {service.icon}
              </div>

              <h3 className="font-display mt-7 text-2xl font-bold text-[#F3EFE6]">
                {service.title}
              </h3>

              <p className="font-body mt-3.5 text-[15px] leading-7 text-[#9AA1B2] max-w-[280px]">
                {service.desc}
              </p>

              <button className="font-body mt-auto pt-8 text-left text-[#C9A24B] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;