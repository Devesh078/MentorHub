import {
  FaArrowLeft,
  FaShoppingBag,
  FaStar,
  FaUsers,
  FaClock,
  FaBook,
  FaCheck,
  FaDatabase,
  FaCloud,
  FaPython,
  FaLaptopCode,
} from "react-icons/fa";

const ICONS = { database: FaDatabase, cloud: FaCloud, python: FaPython, laptop: FaLaptopCode };

const fonts = {
  display: { fontFamily: "'Fraunces', serif" },
  body: { fontFamily: "'Inter', sans-serif" },
  mono: { fontFamily: "'IBM Plex Mono', monospace" },
};

function CourseDetailModal({ course, onClose, onEnroll }) {
  if (!course) return null;
  const Icon = ICONS[course.icon] || FaDatabase;
  const discount = course.mrp ? Math.round(((course.mrp - course.price) / course.mrp) * 100) : null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(4,5,8,0.86)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "560px",
          maxHeight: "90vh",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#15171E", // noticeably lighter than the page bg (#0A0C10) — real surface separation
          border: "1px solid #2C303B",
          boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,162,75,0.05), 0 20px 60px rgba(201,162,75,0.06)",
        }}
      >
        <div style={{ height: "3px", width: "100%", background: "linear-gradient(to right, #E3C77A, #C9A24B)" }} />

        {/* Sticky header */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 24px",
            borderBottom: "1px solid #2C303B",
            backgroundColor: "#15171E",
          }}
        >
          <button
            onClick={onClose}
            aria-label="Back"
            style={{ background: "none", border: "none", color: "#D6DAE3", cursor: "pointer", display: "flex" }}
          >
            <FaArrowLeft size={16} />
          </button>
          <div
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 600,
              color: "#14151A",
              backgroundColor: "#C9A24B",
              ...fonts.mono,
            }}
          >
            AK
          </div>
          <span style={{ color: "#F3EFE6", fontWeight: 500, ...fonts.body }}>Ajinkya Kapadane</span>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", padding: "28px 24px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
            <div>
              <h2 style={{ fontSize: "30px", fontWeight: 900, color: "#F3EFE6", lineHeight: 1.15, ...fonts.display }}>
                {course.title}
              </h2>
              <p style={{ marginTop: "10px", color: "#D6DAE3", ...fonts.body }}>{course.subtitle}</p>
            </div>
            <div
              style={{
                height: "48px",
                width: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                backgroundColor: "#C9A24B",
              }}
            >
              <Icon size={20} color="#14151A" />
            </div>
          </div>

          {/* Digital Product tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", fontSize: "14px", color: "#9AA1B2", ...fonts.body }}>
            <FaShoppingBag size={14} color="#C9A24B" />
            Digital Product
          </div>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "6px",
              marginTop: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #2C303B",
              fontSize: "14px",
              color: "#9AA1B2",
              ...fonts.body,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#C9A24B" }}>
              <FaStar size={12} /> {course.rating}
            </span>
            <span style={{ color: "#3A3F4C", padding: "0 8px" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaUsers size={12} /> {course.students} students
            </span>
            <span style={{ color: "#3A3F4C", padding: "0 8px" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaClock size={12} /> {course.duration}
            </span>
            <span style={{ color: "#3A3F4C", padding: "0 8px" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaBook size={12} /> {course.lessons} lessons
            </span>
          </div>

          {/* About card — lighter still, so it lifts off the modal surface too */}
          {course.description && (
            <div
              style={{
                borderRadius: "16px",
                padding: "22px",
                marginTop: "24px",
                backgroundColor: "#1B1E27",
                border: "1px solid #333847",
              }}
            >
              <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#C9A24B", marginBottom: "12px", ...fonts.mono }}>
                ABOUT THIS COURSE
              </p>
              <p style={{ color: "#EAEAEA", lineHeight: 1.7, ...fonts.body }}>{course.description}</p>
            </div>
          )}

          {/* Topics */}
          {course.topics && (
            <div style={{ marginTop: "28px" }}>
              <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#7A8194", marginBottom: "12px", ...fonts.mono }}>
                CORE TOPICS
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {course.topics.map((t) => (
                  <span
                    key={t}
                    style={{
                      borderRadius: "9999px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      color: "#D6DAE3",
                      backgroundColor: "#22262F",
                      border: "1px solid #383E4A",
                      ...fonts.body,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {course.features && (
            <div style={{ marginTop: "28px" }}>
              <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#7A8194", marginBottom: "12px", ...fonts.mono }}>
                WHAT'S INCLUDED
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
                {course.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#EAEAEA",
                      borderRadius: "12px",
                      padding: "10px 14px",
                      backgroundColor: "#1B1E27",
                      border: "1px solid #333847",
                      ...fonts.body,
                    }}
                  >
                    <span
                      style={{
                        height: "16px",
                        width: "16px",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        backgroundColor: "#C9A24B",
                      }}
                    >
                      <FaCheck size={8} color="#14151A" />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          <div
            style={{
              marginTop: "28px",
              borderRadius: "16px",
              padding: "22px",
              backgroundColor: "#1B1E27",
              border: "1px solid #333847",
            }}
          >
            <p style={{ fontSize: "10px", letterSpacing: "2px", color: "#7A8194", marginBottom: "12px", ...fonts.mono }}>
              WHAT STUDENTS ARE SAYING
            </p>
            <p style={{ color: "#D6DAE3", lineHeight: 1.7, fontStyle: "italic", ...fonts.body }}>
              "This course gave me the structure I needed — went from feeling
              overwhelmed to landing interviews within two months."
            </p>
            <p style={{ fontSize: "12px", color: "#7A8194", marginTop: "16px", ...fonts.mono }}>— Verified student</p>
          </div>
        </div>

        {/* Sticky footer */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "20px 24px",
            borderTop: "1px solid #2C303B",
            backgroundColor: "#15171E",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#C9A24B", ...fonts.mono }}>
                ₹{course.price.toLocaleString("en-IN")}
              </span>
              {course.mrp && (
                <span style={{ fontSize: "14px", color: "#7A8194", textDecoration: "line-through", ...fonts.mono }}>
                  ₹{course.mrp.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {discount && (
              <p style={{ fontSize: "12px", color: "#7A8194", marginTop: "2px", ...fonts.body }}>{discount}% off</p>
            )}
          </div>
          <button
            onClick={() => onEnroll(course)}
            style={{
              padding: "14px 28px",
              borderRadius: "12px",
              background: "linear-gradient(to bottom, #E3C77A, #C9A24B)",
              color: "#14151A",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
              ...fonts.body,
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailModal;