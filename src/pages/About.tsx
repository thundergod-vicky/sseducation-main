import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { History, Target, ShieldCheck } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { apiRequest, resolveImageUrl } from "@/lib/api";

const About = () => {
  const [team, setTeam] = useState<any[]>([]);

  useSeo({
    title: "About Us | SS Educational Services",
    description: "Learn about SS Educational Services, East India's leading educational consultancy since 2010. We help students bridge the gap to their dream careers."
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await apiRequest("/team");
        setTeam(data || []);
      } catch (error) {
        console.log("Error loading Team list", error);
        setTeam([]);
      }
    };
    fetchTeam();
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-slate-50/50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-3"
          >
            Empowering <span className="text-primary">Aspirations</span> Since 2010
          </motion.h1>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed mt-2">
            SS Education is East India's most trusted educational consultancy, dedicated to bridging the gap between students and their dream careers.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary font-bold mb-3">
                <History className="h-4 w-4" />
                <span className="uppercase tracking-widest text-xs">Our History</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 leading-snug">A Decade of Excellence in Educational Consulting</h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Founded in 2010, SS Education started with a simple mission: to provide honest and transparent guidance to students from Bihar and West Bengal. Today, we have successfully placed over 10,000 students in top engineering and medical colleges across India.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-bold text-primary mb-0.5">15+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-bold text-primary mb-0.5">10k+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Students Placed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 text-slate-800"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-base font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                To provide accurate, timely, and unbiased information to students and parents, ensuring they make informed decisions about their higher education. We believe every student deserves a chance to study in the best possible institution based on their merit and potential.
              </p>
              <ul className="space-y-3">
                {[
                  "100% Transparency in Process",
                  "Personalized Career Counseling",
                  "Direct Coordination with Colleges",
                  "End-to-End Admission Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {team.length > 0 && (
        <section className="py-16 bg-slate-50/50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-base font-bold uppercase tracking-wider text-slate-400">Our Expert Team</h2>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">Experienced counselors dedicated to your educational success.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm text-center animate-fade-in"
                >
                  <div className="h-20 w-20 rounded-full bg-slate-100 mx-auto mb-4 overflow-hidden border border-slate-100 shadow-inner">
                    <img 
                      src={member.image ? resolveImageUrl(member.image) : `https://i.pravatar.cc/150?u=${idx}`} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-0.5">{member.name}</h3>
                  <div className="text-primary text-[10px] font-bold mb-3 uppercase tracking-wider">{member.role}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default About;
