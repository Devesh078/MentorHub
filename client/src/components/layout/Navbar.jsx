import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(10,12,16,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #232733",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >

        {/* Logo */}
        <Link
          to="/"
          style={{ fontFamily: "'Fraunces', serif" }}
          className="text-2xl font-bold text-[#F3EFE6]"
        >
          Port<span className="text-[#C9A24B]">Folio</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-5 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          {LINKS.map((link) => {
            const isActive = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="relative px-5 py-2.5 rounded-full text-base transition-all duration-300"
                  style={{
                    color: isActive ? "#F3EFE6" : "#9AA1B2",
                    backgroundColor: isActive ? "rgba(201,162,75,0.12)" : "transparent",
                    boxShadow: isActive ? "0 0 20px rgba(201,162,75,0.25)" : "none",
                    border: isActive ? "1px solid rgba(201,162,75,0.35)" : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#F3EFE6";
                      e.currentTarget.style.backgroundColor = "rgba(201,162,75,0.08)";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(201,162,75,0.18)";
                      e.currentTarget.style.borderColor = "rgba(201,162,75,0.25)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#9AA1B2";
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="px-6 py-3 rounded-xl font-semibold text-sm transition hover:brightness-105"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "linear-gradient(to bottom, #E3C77A, #C9A24B)",
            color: "#14151A",
            boxShadow: "0 8px 24px rgba(201,162,75,0.25)",
          }}
        >
          Book Session
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;