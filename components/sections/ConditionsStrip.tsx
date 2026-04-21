"use client";

import { motion } from "framer-motion";
import {
  Bone,
  Activity,
  Brain,
  HandHelping,
  Heart,
  Footprints,
  Hand,
  Flame,
} from "lucide-react";

const conditions = [
  { icon: Bone,        label: "Bel ağrısı",           short: "Lumbar" },
  { icon: Activity,    label: "Boyun ağrısı",         short: "Servikal" },
  { icon: Brain,       label: "Baş ağrısı",           short: "Migren" },
  { icon: HandHelping, label: "Diz ağrısı",           short: "Artrit" },
  { icon: Heart,       label: "Xərçəng ağrısı",       short: "Palliativ" },
  { icon: Footprints,  label: "Siatalgiya",           short: "Sinir" },
  { icon: Hand,        label: "Çiyin ağrısı",         short: "Frozen" },
  { icon: Flame,       label: "Kəskin ağrılar",       short: "Acute" },
];

export function ConditionsStrip() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "#f9f8f6" }}
      aria-labelledby="conditions-heading"
    >
      <div className="container-site relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(212,96,58,0.1)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#d4603a", boxShadow: "0 0 6px #d4603a" }}
            />
            <span
              className="text-xs font-semibold uppercase"
              style={{ color: "#d4603a", letterSpacing: "0.1em" }}
            >
              Müalicə etdiyimiz
            </span>
          </div>
          <h2
            id="conditions-heading"
            className="font-serif text-balance"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1a1714",
            }}
          >
            Həyat keyfiyyətinizi məhdudlaşdıran{" "}
            <span style={{ fontStyle: "italic", color: "#d4603a", fontWeight: 400 }}>
              xroniki ağrılar
            </span>
          </h2>
        </div>

        {/* Conditions grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {conditions.map(({ icon: Icon, label, short }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative bg-white rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid rgba(230,225,217,0.8)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none -z-10"
                style={{ boxShadow: "0 12px 30px -10px rgba(11,107,122,0.25)" }}
                aria-hidden="true"
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #e0f6f9 0%, #eaf5f0 100%)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "#0b6b7a" }} aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold mb-0.5" style={{ color: "#1a1714" }}>
                {label}
              </p>
              <p className="text-[10px] uppercase tracking-wide" style={{ color: "#aba49a" }}>
                {short}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer nudge */}
        <p className="text-center text-sm mt-10" style={{ color: "#645e57" }}>
          Əgər siyahıda ağrınızı tapmırsınızsa,{" "}
          <a
            href="tel:+994554607170"
            className="font-semibold underline-offset-4 hover:underline"
            style={{ color: "#d4603a" }}
          >
            bizimlə əlaqə saxlayın →
          </a>
        </p>
      </div>
    </section>
  );
}
