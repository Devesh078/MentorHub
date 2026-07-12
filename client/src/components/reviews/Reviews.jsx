import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../data/reviewData";

function Reviews() {
  return (
    <section className="relative bg-[#0A0C10] py-28 overflow-hidden">

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
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#C9A24B]/10 blur-[170px]" />

      {/* Container */}
      <div
        className="relative mx-auto w-full max-w-[1400px] px-6"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >

        {/* Heading — centering hardened with inline styles, same fix as every
            other section on the site (mx-auto alone wasn't taking effect) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ maxWidth: "896px", marginLeft: "auto", marginRight: "auto" }}
        >

          <p className="uppercase tracking-[7px] text-[#C9A24B] text-sm">
            Success Stories
          </p>

          <h2 className="mt-5 text-6xl font-black text-white">
            Student Reviews
          </h2>

          <p
            className="mt-7 text-lg leading-8 text-slate-400"
            style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
          >
            Hundreds of engineers have transformed their careers through
            mentorship, live projects and interview preparation.
          </p>

        </motion.div>

        {/* Reviews */}
        <div className="mt-20 flex justify-center">
          <div className="grid w-full max-w-[1250px] gap-8 md:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Reviews;