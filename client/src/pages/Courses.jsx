import { useState } from "react";
import { motion } from "framer-motion";
import FeaturedCourse from "../components/courses/FeaturedCourse";
import CourseCard from "../components/courses/CourseCard";
import CourseDetailModal from "../components/courses/CourseDetailModal";
import CheckoutModal from "../components/courses/CheckoutModal";
import { courses } from "../data/courseData";

function Courses() {
  const featuredCourse = courses.find((course) => course.featured);
  const otherCourses = courses.filter((course) => !course.featured);

  const [viewingCourse, setViewingCourse] = useState(null);
  const [payingCourse, setPayingCourse] = useState(null);

  const handleEnroll = (course) => {
    setViewingCourse(null);
    setPayingCourse(course);
  };

  return (
    <section className="relative bg-[#0A0C10] py-24">
      <style>{`
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Background — one fine grid + one restrained glow, no full-screen forcing */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#F3EFE6 1px,transparent 1px),linear-gradient(to bottom,#F3EFE6 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#C9A24B]/[0.05] blur-[160px] pointer-events-none" />

      <div
        className="relative w-full max-w-7xl mx-auto px-6"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
          style={{ maxWidth: "672px", marginLeft: "auto", marginRight: "auto" }}
        >
          <p className="font-mono uppercase tracking-[5px] text-[#C9A24B] text-xs">
            Learn from industry experts
          </p>
          <h1 className="font-display mt-5 text-5xl lg:text-6xl font-black text-[#F3EFE6]">
            Premium Courses
          </h1>
          <p className="font-body mt-6 text-lg leading-8 text-[#9AA1B2]">
            Learn Data Engineering, Cloud Computing and crack product company
            interviews with live mentorship, real-world projects and career
            guidance.
          </p>
        </motion.div>

        {/* Featured course */}
        <div className="mt-16">
          <FeaturedCourse course={featuredCourse} onEnroll={handleEnroll} />
        </div>

        {/* Divider — modest, not a competing headline */}
        <div className="flex items-center gap-6 my-20">
          <div className="flex-1 h-px bg-[#232733]" />
          <h2 className="font-display text-2xl font-bold text-[#F3EFE6] whitespace-nowrap">
            More Courses
          </h2>
          <div className="flex-1 h-px bg-[#232733]" />
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {otherCourses.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
              onView={setViewingCourse}
            />
          ))}
        </div>
      </div>

      <CourseDetailModal
        course={viewingCourse}
        onClose={() => setViewingCourse(null)}
        onEnroll={handleEnroll}
      />
      <CheckoutModal course={payingCourse} onClose={() => setPayingCourse(null)} />
    </section>
  );
}

export default Courses;