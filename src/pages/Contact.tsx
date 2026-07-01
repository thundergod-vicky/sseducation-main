import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  course: z.string().min(1, "Select interested course"),
  message: z.string().trim().min(5, "Message must be at least 5 characters"),
});

const OFFICES = [
  {
    city: "DURGAPUR BRANCH OFFICE",
    address: "1st Floorm UCP-004 Bengal Ambuja, city Centre, Durgapur, West Bengal - 713216",
    phone: "+91 99330 85333",
    email: "info@sseducationalservices.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117070.36839352758!2d87.21852026131495!3d23.51635392231267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9199347206121%3A0x67332c96c561b365!2sDurgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715768000000!5m2!1sen!2sin"
  },
  {
    city: "BANGLORE BRANCH",
    address: "Dwarkangar, Bagalur Main Road, Yelahanka Near Brindavan College of Engineering, Bangalore, Karnataka - 560063",
    phone: "+91 99330 85333",
    email: "info@sseducationalservices.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.641617441584!2d77.6258957!3d13.1224855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1946db5758cf%3A0xb35a0928f090d81!2sBagalur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715768000000!5m2!1sen!2sin"
  },
  {
    city: "Bhubaneswar BRANCH OFFICE",
    address: "1st Floor Jena Mansion, shanti Bihar , kiit Squar Bhubaneswar - 751024",
    phone: "+91 99330 85333",
    email: "info@sseducationalservices.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6729007604313!2d85.816666!3d20.354166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091807d9f783%3A0xf6b5b5eaef0a3bb2!2sKIIT%20Square%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1715768000000!5m2!1sen!2sin"
  }
];

const Contact = () => {
  useSeo({
    title: "Contact Us | SS Educational Services",
    description: "Get in touch with SS Educational Services. Visit our head office in Durgapur, or branches in Patna and Kolkata. Get 24/7 expert admission support."
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdLoigxaiQ05jssy6oUcVgENjCRBFjE1yFBmmCmB1EnPVZghw/formResponse";
    const googleFormData = new FormData();
    googleFormData.append("entry.1502716309", parsed.data.name);
    googleFormData.append("entry.1202722742", parsed.data.phone);
    googleFormData.append("entry.267493369", "No Email Provided");
    googleFormData.append("entry.921865976", "Other");
    googleFormData.append("entry.85122333", `Contact Page Inquiry - Course: ${parsed.data.course} - Message: ${parsed.data.message}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Thank you! Your message has been sent successfully.");
    } catch (error) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-slate-900 mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Have questions about admissions? Our expert counselors are ready to help you 24/7.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info & Offices */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Visit Our Offices</h2>
              <div className="space-y-8">
                {OFFICES.map((office, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{office.city}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-slate-600 text-sm leading-relaxed">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-slate-900 text-sm font-bold">{office.phone}</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-slate-600 text-sm">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-slate-600 text-sm">10:00 AM - 07:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white sticky top-28 shadow-2xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 ring-8 ring-emerald-500/10">
                      <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">Message Sent!</h3>
                    <p className="mt-4 text-slate-400 font-medium leading-relaxed text-sm">
                      Thank you! Your inquiry has been received. Our counselor will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="contact-name" className="text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                          <input id="contact-name" name="name" type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="contact-phone" className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone Number *</label>
                          <input id="contact-phone" name="phone" type="tel" maxLength={10} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors" placeholder="10-digit mobile" />
                          {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-course" className="text-sm font-bold text-slate-400 uppercase tracking-widest">Interested Course *</label>
                        <select id="contact-course" name="course" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                          <option value="" className="bg-slate-900">Select a Course</option>
                          <option value="B.Tech Engineering" className="bg-slate-900">B.Tech Engineering</option>
                          <option value="MBBS / Medical" className="bg-slate-900">MBBS / Medical</option>
                          <option value="MBA / Management" className="bg-slate-900">MBA / Management</option>
                          <option value="Law / BCA / Others" className="bg-slate-900">Law / BCA / Others</option>
                        </select>
                        {errors.course && <p className="text-xs text-red-400 mt-1">{errors.course}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-message" className="text-sm font-bold text-slate-400 uppercase tracking-widest">Message *</label>
                        <textarea id="contact-message" name="message" rows={4} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
                        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                      </div>
                      <button type="submit" disabled={submitting} className="w-full py-5 rounded-2xl bg-primary text-white font-extrabold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? "Sending..." : (<>Submit Inquiry <Send className="h-5 w-5" /></>)}
                      </button>
                    </form>
                  </>
                )}

                <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8">
                  <a href="https://wa.me/919933085333" className="flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors">
                    <MessageCircle className="h-6 w-6" /> WhatsApp
                  </a>
                  <a href="tel:+919933085333" className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
                    <Phone className="h-6 w-6" /> +91 99330 85333
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900">Our Locations</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {OFFICES.map((office, idx) => (
              <div key={idx} className="h-96 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <iframe
                  src={office.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
