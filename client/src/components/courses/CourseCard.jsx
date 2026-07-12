import { motion } from "framer-motion";
import { FaDatabase, FaCloud, FaPython, FaLaptopCode, FaStar } from "react-icons/fa";

const ICONS = { database: FaDatabase, cloud: FaCloud, python: FaPython, laptop: FaLaptopCode };

function CourseCard({ course, index, onView }) {
  const Icon = ICONS[course.icon] || FaDatabase;
  const discount = Math.round(((course.mrp - course.price) / course.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col rounded-2xl overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "#0F1116",
        border: "1px solid #232733",
        boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ height: "3px", width: "100%", background: "linear-gradient(to right, #E3C77A, #C9A24B)" }} />

      <div className="p-9 flex flex-col flex-1">
        <div
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(201,162,75,0.12)",
          }}
        >
          <Icon size={20} className="text-[#C9A24B]" />
        </div>

        <h3 className="font-display mt-6 text-2xl font-bold text-[#F3EFE6] leading-snug">
          {course.title}
        </h3>
        <p className="font-body mt-2.5 text-[#9AA1B2] text-[15px]">{course.subtitle}</p>

        <div className="font-body flex items-center gap-1.5 mt-4 text-sm text-[#8B93A6]">
          <FaStar size={11} className="text-[#C9A24B]" />
          <span>{course.rating}</span>
          <span className="mx-1">·</span>
          <span>{course.students} students</span>
        </div>

        <div className="mt-auto pt-8">
          <div style={{ borderTop: "1px solid #232733" }} className="pt-7 flex items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xl font-semibold text-[#C9A24B]">
                  ₹{course.price.toLocaleString("en-IN")}
                </span>
                <span className="font-mono text-xs text-[#5A6070] line-through">
                  ₹{course.mrp.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="font-body text-[11px] text-[#5A6070] mt-0.5">{discount}% off</p>
            </div>
            <button
              onClick={() => onView && onView(course)}
              className="font-body text-sm font-medium text-[#C9A24B] hover:text-[#E3C77A] transition"
            >
              View Course →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseCard;