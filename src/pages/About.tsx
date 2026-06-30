import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { History, Target, Users, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { apiRequest, resolveImageUrl } from "@/lib/api";

const STATIC_TEAM = [
  { name: "S.K. Basu", role: "Founder & Director", bio: "15+ years of experience in educational consultancy.", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Anita Sharma", role: "Chief Counselor", bio: "Expert in MBBS and Medical admissions.", image: "https://i.pravatar.cc/150?u=2" },
  { name: "Rahul Verma", role: "Head of Operations", bio: "Specializes in Engineering college placements.", image: "https://i.pravatar.cc/150?u=3" },
];

const OFFICES = [
  {
    city: "Durgapur (H.O)",
    address: "City Centre, Durgapur, West Bengal - 713216",
    phone: "+91 99330 85333",
    email: "info@sseducation.co.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117070.36839352758!2d87.21852026131495!3d23.51635392231267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9199347206121%3A0x67332c96c561b365!2sDurgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715768000000!5m2!1sen!2sin"
  },
  {
    city: "Patna Office",
    address: "Boring Road, Patna, Bihar - 800001",
    phone: "+91 99330 85333",
    email: "patna@sseducation.co.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107231458!2d85.07340056976826!3d25.60817557116813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f013444850785f%3A0x92f0f49673550e50!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1715768000000!5m2!1sen!2sin"
  },
  {
    city: "Kolkata Office",
    address: "Salt Lake, Sector V, Kolkata, WB - 700091",
    phone: "+91 99330 85333",
    email: "kolkata@sseducation.co.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927513!2d88.2649511671239!3d22.53542730626352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sSalt%20Lake%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715768000000!5m2!1sen!2sin"
  }
];

const About = () => {
  const [team, setTeam] = useState<any[]>(STATIC_TEAM);

  useSeo({
    title: "About Us | SS Educational Services",
    description: "Learn about SS Educational Services, East India's leading educational consultancy since 2010. We help students bridge the gap to their dream careers."
  });

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await apiRequest("/team");
        if (data && data.length > 0) {
          setTeam(data);
        }
      } catch (error) {
        console.log("Using static fallback for Team list", error);
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

      {/* Offices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-400">Our Presence</h2>
            <p className="text-xs text-slate-500 mt-1">Visit any of our branch offices for a face-to-face consultation.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {OFFICES.map((office, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col"
              >
                <div className="h-40 overflow-hidden bg-slate-100 border-b border-slate-100">
                  <iframe
                    src={office.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-5 flex-grow">
                  <h3 className="text-sm font-bold text-slate-800 mb-3">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-xs leading-snug">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-slate-600 text-xs font-bold">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-slate-500 text-xs">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-slate-500 text-xs">Mon - Sat: 10AM - 7PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
