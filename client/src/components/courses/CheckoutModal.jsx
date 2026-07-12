import { useState } from "react";
import { FaArrowLeft, FaChevronUp, FaChevronDown, FaLock } from "react-icons/fa";

const fonts = {
  display: { fontFamily: "'Fraunces', serif" },
  body: { fontFamily: "'Inter', sans-serif" },
  mono: { fontFamily: "'IBM Plex Mono', monospace" },
};

const inputStyle = {
  width: "100%",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#F3EFE6",
  backgroundColor: "#0F1116",
  border: "1px solid #2C303B",
  outline: "none",
  boxSizing: "border-box",
  ...fonts.body,
};

function CheckoutModal({ course, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notifyPhone, setNotifyPhone] = useState(true);
  const [showDiscount, setShowDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [summaryOpen, setSummaryOpen] = useState(true);

  if (!course) return null;

  const platformFee = 10;

  const handleConfirm = (e) => {
    e.preventDefault();
    // Integration point: create an order on your backend, then open your
    // payment gateway's checkout (e.g. Razorpay) — its UI already includes
    // UPI/QR, cards, netbanking and wallets, so nothing further is needed here.
    alert("Connect a payment gateway (e.g. Razorpay) here to process the order.");
  };

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
          maxWidth: "520px",
          maxHeight: "90vh",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#15171E",
          border: "1px solid #2C303B",
          boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 20px 60px rgba(201,162,75,0.06)",
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
        <form onSubmit={handleConfirm} style={{ overflowY: "auto", padding: "28px 24px", flex: 1 }}>
          <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#F3EFE6", lineHeight: 1.2, ...fonts.display }}>
            {course.title}
          </h2>
          <p style={{ marginTop: "8px", fontSize: "13px", color: "#7A8194", ...fonts.body }}>Digital Product</p>

          {/* Form fields */}
          <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "14px", color: "#D6DAE3", marginBottom: "8px", ...fonts.body }}>
                Name
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", color: "#D6DAE3", marginBottom: "8px", ...fonts.body }}>
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", color: "#D6DAE3", marginBottom: "8px", ...fonts.body }}>
                Phone number
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #2C303B",
                  backgroundColor: "#0F1116",
                }}
              >
                <span
                  style={{
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "#9AA1B2",
                    borderRight: "1px solid #2C303B",
                    ...fonts.body,
                  }}
                >
                  🇮🇳 +91
                </span>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98765 43210"
                  style={{ ...inputStyle, border: "none", borderRadius: 0 }}
                />
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#D6DAE3", cursor: "pointer", ...fonts.body }}>
              <input
                type="checkbox"
                checked={notifyPhone}
                onChange={(e) => setNotifyPhone(e.target.checked)}
                style={{ height: "16px", width: "16px", accentColor: "#C9A24B" }}
              />
              Receive booking details on phone
            </label>
          </div>

          {/* Discount code */}
          <button
            type="button"
            onClick={() => setShowDiscount((s) => !s)}
            style={{
              marginTop: "24px",
              borderRadius: "9999px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#F3EFE6",
              backgroundColor: "#1B1E27",
              border: "1px solid #333847",
              cursor: "pointer",
              ...fonts.body,
            }}
          >
            Add Discount Code
          </button>
          {showDiscount && (
            <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
              <input
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Enter code"
                style={{ ...inputStyle, flex: 1, padding: "10px 16px" }}
              />
              <button
                type="button"
                style={{
                  padding: "0 20px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#14151A",
                  backgroundColor: "#C9A24B",
                  border: "none",
                  cursor: "pointer",
                  ...fonts.body,
                }}
              >
                Apply
              </button>
            </div>
          )}

          {/* Order summary */}
          <div style={{ marginTop: "28px", borderRadius: "16px", overflow: "hidden", border: "1px solid #333847" }}>
            <button
              type="button"
              onClick={() => setSummaryOpen((s) => !s)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                backgroundColor: "#1B1E27",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontWeight: 600, color: "#F3EFE6", ...fonts.body }}>Order Summary</span>
              <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#F3EFE6", ...fonts.mono }}>₹{course.price.toLocaleString("en-IN")}</span>
                {summaryOpen ? <FaChevronUp size={12} color="#9AA1B2" /> : <FaChevronDown size={12} color="#9AA1B2" />}
              </span>
            </button>

            {summaryOpen && (
              <div style={{ padding: "0 20px", backgroundColor: "#15171E" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom: "1px solid #2C303B",
                    fontSize: "14px",
                    color: "#D6DAE3",
                    ...fonts.body,
                  }}
                >
                  <span>1 x {course.title}</span>
                  <span style={fonts.mono}>₹{course.price.toLocaleString("en-IN")}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom: "1px solid #2C303B",
                    fontSize: "14px",
                    color: "#D6DAE3",
                    ...fonts.body,
                  }}
                >
                  <span>Platform fee</span>
                  <span style={fonts.mono}>
                    <span style={{ color: "#7A8194", textDecoration: "line-through", marginRight: "8px" }}>
                      ₹{platformFee}
                    </span>
                    <span style={{ color: "#C9A24B" }}>FREE</span>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#F3EFE6",
                    ...fonts.body,
                  }}
                >
                  <span>Total</span>
                  <span style={fonts.mono}>₹{course.price.toLocaleString("en-IN")}</span>
                </div>
              </div>
            )}
          </div>

          {/* Terms */}
          <p style={{ fontSize: "12px", color: "#7A8194", marginTop: "24px", lineHeight: 1.7, ...fonts.body }}>
            By clicking Confirm & Pay, I agree to the{" "}
            <span style={{ textDecoration: "underline", color: "#9AA1B2" }}>Terms &amp; Refund Policies</span>
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "16px",
              borderRadius: "12px",
              padding: "12px 16px",
              fontSize: "12px",
              color: "#9AA1B2",
              backgroundColor: "#1B1E27",
              border: "1px solid #333847",
              ...fonts.body,
            }}
          >
            <FaLock size={11} color="#7A8194" />
            Payments are 100% secure &amp; encrypted
          </div>

          <p style={{ textAlign: "center", fontSize: "12px", color: "#7A8194", marginTop: "24px", ...fonts.body }}>
            Powered by MentorHub
          </p>
        </form>

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
          <button
            onClick={handleConfirm}
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
            Confirm &amp; Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;