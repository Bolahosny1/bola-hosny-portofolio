import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2, PartyPopper } from "lucide-react";

const SERVICE_ID = "service_n4afd9e";
const PUBLIC_KEY = "Cs2SYUixpRFkFIP30";

// Template IDs
const TEMPLATE_RECEIVE_MESSAGE = "template_15dvooc"; // for you
const TEMPLATE_AUTO_REPLY = "template_phv6wq9"; // for visitor

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1️⃣ Send message to YOU
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_RECEIVE_MESSAGE,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Bola Hosny",
          to_email: "bolahosny10@gmail.com",
        },
        PUBLIC_KEY
      );

      // 2️⃣ Auto reply to VISITOR
      // The template uses {{from_email}} for the "To Email" field
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_AUTO_REPLY,
          {
            from_name: formData.name,   // Template says "Hello {{from_name}}" -> "Hello Bola" (if name is Bola)
            from_email: formData.email, // Template sends email TO {{from_email}} -> TO "visitor@example.com"
            message: "Thanks for reaching out! I'll get back to you soon.",
          },
          PUBLIC_KEY
        );
      } catch (autoReplyError) {
        console.warn("Auto-reply failed:", autoReplyError);
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setIsSuccess(true);

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: error.text || error.message || "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <SectionTitle tag="contact" title="Get In Touch" subtitle="Let's connect and build something great together." />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Email</p>
                <a href="mailto:bolahosny10@gmail.com" className="text-foreground text-sm hover:text-primary transition-colors">
                  bolahosny10@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Phone</p>
                <p className="text-foreground text-sm">+201270964427</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Location</p>
                <p className="text-foreground text-sm">Cairo, Egypt</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/Bolahosny1" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bola-hosny/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center space-y-4 text-center p-6 glass rounded-xl border border-primary/20"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-2">
                <PartyPopper className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Thanks!</h3>
              <p className="text-muted-foreground">Thanks for emailing me. I'll get back to you soon!</p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs font-mono text-muted-foreground block mb-1">name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full glass rounded-lg px-4 py-2.5 text-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono text-muted-foreground block mb-1">email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full glass rounded-lg px-4 py-2.5 text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono text-muted-foreground block mb-1">message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full glass rounded-lg px-4 py-2.5 text-sm resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="btn-shimmer btn-glow inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg w-full justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
