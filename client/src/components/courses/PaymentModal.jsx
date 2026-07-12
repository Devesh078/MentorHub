import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";
import { FaTimes, FaQrcode, FaCreditCard, FaUniversity, FaWallet } from "react-icons/fa";

const METHODS = [
  { id: "upi", label: "UPI / QR", icon: FaQrcode },
  { id: "card", label: "Card", icon: FaCreditCard },
  { id: "netbanking", label: "Net Banking", icon: FaUniversity },
  { id: "wallet", label: "Wallet", icon: FaWallet },
];

function PaymentModal({ course, onClose }) {
  const [method, setMethod] = useState("upi");

  return (
    <AnimatePresence>
      {course && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(5,6,9,0.8)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#0F1116", border: "1px solid #232733" }}
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#E3C77A] to-[#C9A24B]" />

            <div className="relative p-8">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-[#9AA1B2] hover:text-[#F3EFE6] transition"
                aria-label="Close"
              >
                <FaTimes size={18} />
              </button>

              <p className="font-mono text-[11px] tracking-[3px] text-[#C9A24B]">
                COMPLETE PAYMENT
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold text-[#F3EFE6] pr-8">
                {course.title}
              </h3>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="font-mono text-3xl font-bold text-[#C9A24B]">
                  ₹{course.price.toLocaleString("en-IN")}
                </span>
                {course.mrp && (
                  <span className="font-mono text-sm text-[#5A6070] line-through">
                    ₹{course.mrp.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              {/* Method tabs */}
              <div className="grid grid-cols-4 gap-2 mt-7">
                {METHODS.map((m) => {
                  const MIcon = m.icon;
                  const active = method === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className="flex flex-col items-center gap-2 rounded-xl py-3 transition"
                      style={{
                        border: active ? "1px solid rgba(201,162,75,0.5)" : "1px solid #232733",
                        backgroundColor: active ? "#181B23" : "transparent",
                      }}
                    >
                      <MIcon size={16} className={active ? "text-[#C9A24B]" : "text-[#5A6070]"} />
                      <span
                        className="font-body text-[10px] text-center leading-tight"
                        style={{ color: active ? "#F3EFE6" : "#5A6070" }}
                      >
                        {m.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Method content */}
              <div className="mt-8 min-h-[190px]">
                {method === "upi" && (
                  <div className="flex flex-col items-center">
                    <div className="rounded-2xl p-5" style={{ backgroundColor: "#F3EFE6" }}>
                      <QRCode
                        value={`upi://pay?pa=mentorhub@upi&pn=MentorHub&am=${course.price}&cu=INR&tn=${encodeURIComponent(
                          course.title
                        )}`}
                        size={170}
                        fgColor="#0A0C10"
                        bgColor="#F3EFE6"
                      />
                    </div>
                    <p className="font-body text-sm text-[#9AA1B2] mt-4 text-center">
                      Scan with any UPI app — Google Pay, PhonePe, Paytm
                    </p>
                  </div>
                )}

                {method === "card" && (
                  <div className="space-y-3">
                    <input
                      placeholder="Card number"
                      className="w-full rounded-lg px-4 py-3 font-body text-sm text-[#F3EFE6] bg-transparent placeholder:text-[#5A6070]"
                      style={{ border: "1px solid #232733" }}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        placeholder="MM/YY"
                        className="rounded-lg px-4 py-3 font-body text-sm text-[#F3EFE6] bg-transparent placeholder:text-[#5A6070]"
                        style={{ border: "1px solid #232733" }}
                      />
                      <input
                        placeholder="CVV"
                        className="rounded-lg px-4 py-3 font-body text-sm text-[#F3EFE6] bg-transparent placeholder:text-[#5A6070]"
                        style={{ border: "1px solid #232733" }}
                      />
                    </div>
                    <input
                      placeholder="Name on card"
                      className="w-full rounded-lg px-4 py-3 font-body text-sm text-[#F3EFE6] bg-transparent placeholder:text-[#5A6070]"
                      style={{ border: "1px solid #232733" }}
                    />
                  </div>
                )}

                {method === "netbanking" && (
                  <select
                    className="w-full rounded-lg px-4 py-3 font-body text-sm text-[#F3EFE6] bg-[#0F1116]"
                    style={{ border: "1px solid #232733" }}
                  >
                    <option>Select your bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                  </select>
                )}

                {method === "wallet" && (
                  <select
                    className="w-full rounded-lg px-4 py-3 font-body text-sm text-[#F3EFE6] bg-[#0F1116]"
                    style={{ border: "1px solid #232733" }}
                  >
                    <option>Select wallet</option>
                    <option>Paytm</option>
                    <option>Amazon Pay</option>
                    <option>Mobikwik</option>
                  </select>
                )}
              </div>

              <button
                className="w-full mt-8 py-4 rounded-xl font-body font-semibold text-[#14151A] hover:brightness-105 transition"
                style={{
                  background: "linear-gradient(to bottom, #E3C77A, #C9A24B)",
                  boxShadow: "0 12px 30px rgba(201,162,75,0.25)",
                }}
              >
                Pay ₹{course.price.toLocaleString("en-IN")}
              </button>
              <p className="font-body text-xs text-[#5A6070] text-center mt-4">
                UI demo only — connect a payment gateway (Razorpay, Stripe, etc.) to process real payments
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PaymentModal;