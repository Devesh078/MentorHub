import { motion } from "framer-motion";
import {
  FaDatabase,
  FaCloud,
  FaPython,
  FaLaptopCode,
  FaStar,
  FaCheck,
  FaCogs,
  FaServer,
  FaShareAlt,
} from "react-icons/fa";

const ICONS = { database: FaDatabase, cloud: FaCloud, python: FaPython, laptop: FaLaptopCode };

const PIPELINE_STAGES = [
  { label: "Extract", icon: FaDatabase },
  { label: "Transform", icon: FaCogs },
  { label: "Load", icon: FaServer },
  { label: "Serve", icon: FaShareAlt },
];

function FeaturedCourse({ course, onEnroll }) {
  if (!course) return null;
  const Icon = ICONS[course.icon] || FaDatabase;
  const discount = Math.round(((course.mrp - course.price) / course.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-2xl border overflow-hidden"
      style={{
        borderColor: "rgba(201,162,75,0.3)",
        backgroundColor: "#0F1116",
        boxShadow: "0 30px 90px rgba(201,162,75,0.06), 0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      <div className="grid lg:grid-cols-[0.7fr_1.3fr]" style={{ alignItems: "stretch" }}>

        {/* LEFT — tinted panel so it reads as designed, not empty; line fills the
            full height so there's no dead space regardless of right column height */}
        <div
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 44px",
            backgroundColor: "#0C0E13",
            borderRight: "1px solid #1D212B",
            minHeight: "420px",
          }}
        >
          {/* Connecting line spans the full panel height */}
          <div
            style={{
              position: "absolute",
              left: "65px",
              top: "56px",
              bottom: "56px",
              width: "1px",
              backgroundColor: "#232733",
            }}
          />
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: "62px",
              height: "7px",
              width: "7px",
              borderRadius: "9999px",
              backgroundColor: "#C9A24B",
              boxShadow: "0 0 14px 3px rgba(201,162,75,0.5)",
            }}
          />

          {PIPELINE_STAGES.map((stage) => {
            const StageIcon = stage.icon;
            return (
              <div key={stage.label} style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(201,162,75,0.12)",
                    flexShrink: 0,
                  }}
                >
                  <StageIcon size={15} className="text-[#C9A24B]" />
                </div>
                <span className="font-mono text-sm tracking-[2px] text-[#D6DAE3]">{stage.label}</span>
              </div>
            );
          })}
        </div>

        {/* RIGHT — content, vertically centered so it fills the card height
            (matching the left panel) instead of top-aligning and leaving a gap below */}
        <div
          className="p-10 lg:p-14"
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "420px" }}
        >
          <p className="font-mono text-[11px] tracking-[3px] text-[#C9A24B]">MOST POPULAR COURSE</p>

          <h3 className="font-display mt-4 text-4xl lg:text-[42px] font-black text-[#F3EFE6] leading-[1.05]">
            {course.title}
          </h3>
          <p className="font-body mt-3 text-lg text-[#9AA1B2]">{course.subtitle}</p>

          <div className="font-body flex items-center gap-2 mt-7 text-sm text-[#8B93A6]">
            <FaStar size={12} className="text-[#C9A24B]" />
            <span>{course.rating}</span>
            <span>·</span>
            <span>{course.students} students</span>
            <span>·</span>
            <span>{course.duration}</span>
          </div>

          {course.features && (
            <div className="mt-10" style={{ borderTop: "1px solid #1D212B" }}>
              {course.features.map((f) => (
                <div
                  key={f}
                  className="font-body flex items-center gap-3 py-4 text-[15px] text-[#D6DAE3]"
                  style={{ borderBottom: "1px solid #1D212B" }}
                >
                  <FaCheck size={11} className="text-[#C9A24B] shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-6 mt-12">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-4xl font-bold text-[#C9A24B]">
                  ₹{course.price.toLocaleString("en-IN")}
                </span>
                <span className="font-mono text-lg text-[#5A6070] line-through">
                  ₹{course.mrp.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="font-body text-xs text-[#5A6070] mt-1.5">{discount}% off</p>
            </div>
            <button
              onClick={() => onEnroll && onEnroll(course)}
              className="font-body px-8 py-4 rounded-xl bg-gradient-to-b from-[#E3C77A] to-[#C9A24B] text-[#14151A] font-semibold hover:brightness-105 transition"
            >
              Enroll Now →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedCourse;