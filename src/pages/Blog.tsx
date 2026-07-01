import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import { apiRequest, resolveImageUrl } from "@/lib/api";

const STATIC_BLOG_POSTS = [
  {
    slug: "direct-btech-admission-bangalore-2026",
    title: "Direct B.Tech Admission in Bangalore 2026: A Complete Guide",
    excerpt: "Everything you need to know about securing a B.Tech seat in Bangalore's top colleges like RVCE, Ramaiah, and BMSCE for the 2026 academic session.",
    date: "May 10, 2024",
    author: "S.K. Basu",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800",
    category: "Engineering"
  },
  {
    slug: "mbbs-admission-india-neet-score",
    title: "How to Get MBBS Admission in India with Low NEET Score",
    excerpt: "Exploring options for medical aspirants who couldn't score high in NEET. Private and deemed medical colleges guidance and fee structure details.",
    date: "May 08, 2024",
    author: "Anita Sharma",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    category: "Medical"
  },
  {
    slug: "kiit-university-placements-2024",
    title: "KIIT University Placements 2024: Record Breaking Packages",
    excerpt: "An in-depth analysis of the recent placement trends at KIIT University Bhubaneswar and why it's a top choice for students from Bihar & Jharkhand.",
    date: "May 05, 2024",
    author: "Rahul Verma",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    category: "College Review"
  },
  {
    slug: "top-mba-colleges-india-without-cat",
    title: "Top MBA Colleges in India Offering Admission Without CAT",
    excerpt: "Looking for management admissions but missed the CAT deadline? Check out these prestigious B-schools accepting MAT, CMAT, and XAT scores.",
    date: "May 02, 2024",
    author: "S.K. Basu",
    image: "https://images.unsplash.com/photo-1523240715639-96030800b651?auto=format&fit=crop&q=80&w=800",
    category: "Management"
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<any[]>(STATIC_BLOG_POSTS);
  const [searchQuery, setSearchQuery] = useState("");

  useSeo({
    title: "SS Education Insights - Admissions Blog & News 2026",
    description: "Read our latest news, admission guides, and expert advice for students and parents looking for colleges and universities in India."
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await apiRequest("/blogs");
        if (data) {
          setPosts(data);
        }
      } catch (error) {
        console.log("Using static blog fallback data.", error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="pt-24 min-h-screen bg-slate-50/30">
      {/* Header */}
      <section className="bg-slate-50/50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-3"
            >
              SS Education <span className="text-primary">Insights</span>
            </motion.h1>
            <p className="text-sm text-slate-500 mb-6">
              Latest news, admission guides, and expert advice for students and parents.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:border-slate-400 text-xs shadow-sm transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured & Latest Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            {/* Posts Horizontal Feed */}
            <div className="space-y-6">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col sm:flex-row gap-5 bg-white border border-slate-200/60 rounded-xl p-4 hover:border-slate-300 transition-colors shadow-sm"
                >
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="block relative w-full sm:w-48 h-32 rounded-lg overflow-hidden shrink-0 bg-slate-50 border border-slate-100"
                  >
                    <img 
                      src={resolveImageUrl(post.image)} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" 
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 bg-white/90 border border-slate-100 rounded text-[10px] font-bold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="flex-grow flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-primary" /> {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-primary" /> {post.author}
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-1.5 transition-all mt-auto"
                    >
                      Read Article <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
              {filteredPosts.length === 0 && (
                <div className="py-12 text-center text-slate-400 text-sm font-semibold bg-white border border-slate-200/60 rounded-xl shadow-sm">
                  No articles found.
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Popular Posts */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" /> Popular Now
                </h4>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post, i) => (
                    <Link key={i} to={`/blog/${post.slug}`} className="flex gap-3 group items-center">
                      <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0 bg-slate-50 border border-slate-100">
                        <img src={resolveImageUrl(post.image)} alt="" className="w-full h-full object-cover group-hover:scale-102 transition-transform" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 line-clamp-2 text-xs leading-snug group-hover:text-primary transition-colors">{post.title}</h5>
                        <div className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{post.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-900 rounded-xl p-6 text-white shadow-sm border border-slate-800">
                <h4 className="text-xs font-bold mb-1">Stay Updated</h4>
                <p className="text-slate-400 text-xs mb-4 leading-relaxed">Get the latest admission news and guides directly in your inbox.</p>
                <div className="space-y-2">
                  <input type="email" placeholder="Your Email" className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-slate-500" />
                  <button className="w-full py-2 bg-white text-slate-900 rounded-lg font-bold text-xs hover:bg-slate-50 transition-colors">Subscribe</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
