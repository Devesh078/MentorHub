import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

function ReviewCard({ review }) {
  const Icon = review.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[600px] mx-auto rounded-3xl border border-[#2A2E39] bg-[#12141B] shadow-xl"
    >
      <div className="p-8 pb-10">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />

            <div>
              <h3 className="text-xl font-bold text-white">
                {review.name}
              </h3>
              <p className="text-slate-400">
                {review.role}
              </p>
            </div>

          </div>

          <Icon className="text-3xl text-[#C9A24B] shrink-0" />

        </div>

        <div className="flex mt-6 gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <FaStar key={i} className="text-[#C9A24B]" />
          ))}
        </div>

        <FaQuoteLeft className="mt-8 text-4xl text-[#C9A24B]" />

        <p className="mt-5 leading-8 text-slate-400">
          {review.review}
        </p>

        {/* pt-2 on this row's text gives descenders (g, y, p) room instead of
            sitting flush against the card's bottom edge */}
        <div className="mt-8 flex justify-between items-start gap-6">

          <div className="min-w-0">
            <p className="text-slate-500">Company</p>
            <h3 className="text-white font-semibold leading-relaxed break-words">
              {review.company}
            </h3>
          </div>

          <div className="text-right shrink-0">
            <p className="text-slate-500">Package</p>
            <h3 className="text-[#C9A24B] font-bold text-xl leading-relaxed">
              {review.package}
            </h3>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default ReviewCard;