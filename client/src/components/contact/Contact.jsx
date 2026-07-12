import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0C10] py-28 flex items-center">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[650px] w-[650px] rounded-full bg-[#C9A24B]/10 blur-[180px]" />

      {/* Outer container — centering hardened with inline styles, same fix
          applied across every other section on the site */}
      <div
        className="relative mx-auto w-full max-w-7xl px-6"
        style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto" }}
      >

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ maxWidth: "896px", marginLeft: "auto", marginRight: "auto" }}
        >

          <p className="text-sm uppercase tracking-[7px] text-[#C9A24B]">
            Let's Connect
          </p>

          <h1 className="mt-5 text-6xl font-black text-white">
            Get In Touch
          </h1>

          <p
            className="mt-6 text-lg leading-8 text-slate-400"
            style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            Have questions about mentorship or courses?
            Reach out anytime and I'll be happy to help you.
          </p>

        </motion.div>

        {/* Main Section */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-3xl border border-[#2A2E39] bg-[#12141B] p-12"
          >

            <h2 className="text-4xl font-bold text-white">
              Let's Build Your Career Together 🚀
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">
              Whether you're preparing for Data Engineering,
              Cloud Computing, Interview Preparation or Career Guidance,
              feel free to connect with me.
            </p>

            <p className="mt-6 text-slate-500">
              Follow me on social media.
            </p>

            <div className="mt-10 flex justify-center gap-6" style={{ justifyContent: "center" }}>

              <a
                href="https://www.linkedin.com/in/ajinkya-kapadane-a25748128/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2A2E39] bg-[#1A1D26] text-3xl text-[#C9A24B] transition duration-300 hover:scale-110 hover:border-[#C9A24B]"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/ajinkya_kapadane/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#2A2E39] bg-[#1A1D26] text-3xl text-[#C9A24B] transition duration-300 hover:scale-110 hover:border-[#C9A24B]"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#2A2E39] bg-[#12141B] p-10"
          >

            <h2 className="text-3xl font-bold text-white">
              Send a Message
            </h2>

            <div className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#2A2E39] bg-[#181B22] p-4 text-white outline-none transition focus:border-[#C9A24B]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#2A2E39] bg-[#181B22] p-4 text-white outline-none transition focus:border-[#C9A24B]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-[#2A2E39] bg-[#181B22] p-4 text-white outline-none transition focus:border-[#C9A24B]"
              />

              <textarea
                rows="7"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-[#2A2E39] bg-[#181B22] p-4 text-white outline-none transition focus:border-[#C9A24B]"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#C9A24B] py-4 text-lg font-bold text-black transition hover:scale-[1.02]"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;