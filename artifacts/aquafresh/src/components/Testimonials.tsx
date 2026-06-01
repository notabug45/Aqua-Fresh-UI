import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Fitness Instructor",
    content: "The difference in taste is actually remarkable. It's so crisp and clean, I find myself naturally drinking more water throughout the day.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Executive Chef",
    content: "We serve AquaFresh at our restaurant exclusively. The mineral balance complements our dishes perfectly without overpowering the palate.",
    initials: "MC"
  },
  {
    name: "Elena Rodriguez",
    role: "Wellness Coach",
    content: "Finally, a water brand that takes purity as seriously as I do. The glass packaging is beautiful and sustainable.",
    initials: "ER"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Word of Mouth</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass-card border-none hover:bg-secondary/5 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground font-serif italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center text-primary font-serif font-semibold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
