import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Statistics() {
  const stats = [
    { value: 10, suffix: "M+", label: "Bottles Delivered" },
    { value: 5000, suffix: "+", label: "Corporate Clients" },
    { value: 99, suffix: ".99%", label: "Purity Level" },
    { value: 50, suffix: "+", label: "Cities Served" }
  ];

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2 drop-shadow-sm">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
