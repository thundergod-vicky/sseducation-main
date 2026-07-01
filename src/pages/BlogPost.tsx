import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Share2, Facebook, Twitter, Linkedin, MessageCircle, ArrowLeft, Clock } from "lucide-react";
import { useJsonLd } from "@/hooks/useJsonLd";
import { apiRequest, resolveImageUrl } from "@/lib/api";
import { toast } from "sonner";

const STATIC_POSTS: Record<string, any> = {
  "direct-btech-admission-bangalore-2026": {
    title: "Direct B.Tech Admission in Bangalore 2026: A Complete Guide",
    date: "May 10, 2024",
    author: "S.K. Basu",
    readTime: "8 min read",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="text-slate-700 leading-relaxed mb-6">
        Bangalore, often hailed as the "Silicon Valley of India," remains the most sought-after destination for engineering aspirants across the country. With the 2026 academic session approaching, students from Bihar, Jharkhand, and West Bengal are increasingly looking for direct admission opportunities in Bangalore's premier institutions.
      </p>
      
      <h2 class="text-2xl font-bold text-slate-800 mb-3 mt-8">Why Choose Bangalore for Engineering?</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        The city is home to over 100 engineering colleges, ranging from top-ranked government institutions to prestigious private universities. The biggest advantage of studying in Bangalore is the unparalleled industry exposure. Being close to major IT hubs and global tech giants like Google, Microsoft, and Amazon means students have access to better internships and high-paying placement opportunities.
      </p>

      <h2 class="text-2xl font-bold text-slate-800 mb-3 mt-8">Top Engineering Colleges in Bangalore</h2>
      <ul class="list-disc pl-5 mb-6 text-slate-700 space-y-2">
        <li><strong>R.V. College of Engineering (RVCE):</strong> Consistently ranked among the top 50 in India, known for its rigorous academics and ₹1.15 Cr highest package.</li>
        <li><strong>M.S. Ramaiah Institute of Technology (MSRIT):</strong> A legacy institution with over 60 years of excellence and strong industry ties.</li>
        <li><strong>BMS College of Engineering:</strong> One of the oldest private engineering colleges in India with a vast alumni network.</li>
        <li><strong>PES University:</strong> Famous for its research-driven curriculum and modern campus life.</li>
      </ul>

      <h2 class="text-2xl font-bold text-slate-800 mb-3 mt-8">Understanding the Direct Admission Process</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Direct admission, often referred to as Management Quota admission, is a legitimate process where students can secure seats in private engineering colleges based on their 12th-grade marks and entrance exam qualification. While entrance exams like KCET or COMEDK are standard, many institutions reserve a portion of their seats for management quota to encourage diversity and support out-of-state students.
      </p>

      <blockquote class="border-l-2 border-primary pl-4 py-2 my-6 bg-slate-50 italic text-slate-700 text-sm">
        "Choosing the right college and branch is a critical decision. At SS Education, we ensure that students get the best possible guidance without any hidden costs or complications."
      </blockquote>

      <h2 class="text-2xl font-bold text-slate-800 mb-3 mt-8">How SS Education Can Help</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        We specialize in helping students navigate the complexities of Bangalore admissions. Our team provides end-to-end support, including eligibility checks, document preparation, and direct coordination with college admission offices.
      </p>
    `
  },
  "mbbs-admission-india-neet-score": {
    title: "How to Get MBBS Admission in India with Low NEET Score",
    date: "May 08, 2024",
    author: "Anita Sharma",
    readTime: "6 min read",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="text-slate-700 leading-relaxed mb-6">
        Securing an MBBS seat in India is highly competitive. For medical aspirants who did not score exceptionally high in the NEET exam, options can seem limited. However, private medical colleges and deemed universities offer direct paths for qualified candidates.
      </p>
      <h2 class="text-2xl font-bold text-slate-800 mb-3 mt-8">Exploring Deemed University Options</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        Deemed medical universities across India have their own counseling process through MCC. Even with average NEET scores, candidates who can support the fee structures can secure seats in reputed institutes like KIMS Bhubaneswar, Ramachandra Medical College Chennai, or DY Patil Pune.
      </p>
    `
  },
  "kiit-university-placements-2024": {
    title: "KIIT University Placements 2024: Record Breaking Packages",
    date: "May 05, 2024",
    author: "Rahul Verma",
    readTime: "5 min read",
    category: "College Review",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="text-slate-700 leading-relaxed mb-6">
        KIIT University, Bhubaneswar has completed another remarkable placement drive for the 2024 batch. The university continues to be a premier choice for technical education in Eastern India, drawing massive recruitment from global giants.
      </p>
      <h2 class="text-2xl font-bold text-slate-800 mb-3 mt-8">Highlights of 2024 Placement Drive</h2>
      <p class="text-slate-700 leading-relaxed mb-6">
        With over 90% of students placed in leading tech firms and an average package touching 8.2 LPA, KIIT remains a top preference for students in Eastern India, particularly from Bihar and Jharkhand.
      </p>
    `
  },
  "top-mba-colleges-india-without-cat": {
    title: "Top MBA Colleges in India Offering Admission Without CAT",
    date: "May 02, 2024",
    author: "S.K. Basu",
    readTime: "7 min read",
    category: "Management",
    image: "https://images.unsplash.com/photo-1523240715639-96030800b651?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="text-slate-700 leading-relaxed mb-6">
        An MBA degree opens vast executive career paths. If you missed the CAT registration or exam date, there are highly accredited business institutions that admit students via MAT, CMAT, ATMA, or direct management quotas.
      </p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [adminProfile, setAdminProfile] = useState<any>({
    displayName: "SS Education",
    bio: "Dedicated contributor at SS Education, bringing years of experience in career guidance, entrance exams, and academic admissions services.",
    profilePic: ""
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiRequest("/auth/profile");
        if (data) {
          setAdminProfile(data);
        }
      } catch (error) {
        console.log("Failed to fetch admin profile, using default details");
      }
    };
    fetchProfile();
  }, []);

  const handleShare = (platform: string) => {
    const shareUrl = window.location.href;
    const shareTitle = post?.title || "SS Education";
    let url = "";

    if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Article link copied to clipboard!");
      return;
    }

    if (url) {
      window.open(url, "_blank", "width=600,height=450,resizable=yes,scrollbars=yes");
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) return;
        const data = await apiRequest(`/blogs/${slug}`);
        if (data) {
          setPost(data);
        }
      } catch (error) {
        console.log("Using static blog fallback for single post:", slug);
        if (slug && STATIC_POSTS[slug]) {
          setPost(STATIC_POSTS[slug]);
        } else {
          setPost(STATIC_POSTS["direct-btech-admission-bangalore-2026"]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  // Dynamic Schema Injection
  useJsonLd({
    "@context": "https://schema.org",
    "@graph": post ? [
      {
        "@type": "BlogPosting",
        "@id": `https://ssadmission.in/blog/${slug}/#article`,
        "headline": post.title,
        "datePublished": "2024-05-10T08:00:00+05:30",
        "dateModified": "2026-06-03T11:36:11+05:30",
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@id": "https://ssadmission.in/#organization"
        },
        "description": post.excerpt || "Expert admissions counselors blog post.",
        "image": resolveImageUrl(post.image),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ssadmission.in/blog/${slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://ssadmission.in/blog/${slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ssadmission.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://ssadmission.in/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://ssadmission.in/blog/${slug}`
          }
        ]
      }
    ] : []
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-400 text-sm font-semibold">Loading Article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-base font-bold text-slate-800 mb-4">Article Not Found</h2>
        <Link to="/blog" className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold">
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      {/* Article Header */}
      <header className="container mx-auto px-4 pt-8 pb-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Insights
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-slate-400 text-xs font-bold tracking-wider uppercase ml-3">
              <Clock className="h-3.5 w-3.5" /> {post.readTime || "5 min read"}
            </div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-950 leading-snug tracking-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between py-4 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-100 overflow-hidden border border-slate-100">
                <img 
                  src={adminProfile.profilePic ? resolveImageUrl(adminProfile.profilePic) : `https://i.pravatar.cc/150?u=${post.author}`} 
                  alt={adminProfile.displayName} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">
                  {post.author === "SS Education" || post.author === "admin" ? adminProfile.displayName : post.author}
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase mt-0.5 flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {post.date}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Share</span>
              <div className="flex gap-1.5">
                <button 
                  onClick={() => handleShare("facebook")} 
                  className="h-8 w-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                  title="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleShare("twitter")} 
                  className="h-8 w-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                  title="Share on X"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleShare("linkedin")} 
                  className="h-8 w-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleShare("copy")} 
                  className="h-8 w-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                  title="Copy Link"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Two Column Layout (Featured Image on Left, Content on Right) */}
      <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-[280px_1fr] gap-8 mt-6 items-start">
        {/* Left Side: Featured Image Column */}
        <div className="md:sticky md:top-28">
          {post.image ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl overflow-hidden border border-slate-100 shadow-sm aspect-video sm:aspect-square w-full"
            >
              <img src={resolveImageUrl(post.image)} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>
          ) : (
            <div className="rounded-xl bg-slate-50 border border-slate-100 aspect-square w-full flex items-center justify-center text-slate-300 text-xs">
              No Image
            </div>
          )}
        </div>

        {/* Right Side: Article Content & Bio Column */}
        <article className="min-w-0">
          <div 
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author Bio */}
          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200/50 flex flex-col sm:flex-row items-start gap-4 text-left">
            <div className="h-12 w-12 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
              <img 
                src={adminProfile.profilePic ? resolveImageUrl(adminProfile.profilePic) : `https://i.pravatar.cc/150?u=${post.author}`} 
                alt="" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-800">
                Written by {post.author === "SS Education" || post.author === "admin" ? adminProfile.displayName : post.author}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-1">
                {post.author === "SS Education" || post.author === "admin" ? adminProfile.bio : (post.bio || adminProfile.bio)}
              </p>
              <div className="flex gap-3 mt-3">
                <Link to="/about" className="text-primary font-bold text-xs uppercase hover:underline">View Profile</Link>
                <a 
                  href={`https://wa.me/919933085333?text=Hi!%20I%27m%20interested%20in%20the%20admissions%20topic%20%22${encodeURIComponent(post.title)}%22.%20Can%20you%20help%20me%20with%20it%3F`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-xs uppercase hover:underline"
                >
                  Contact Author
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* WhatsApp CTA Fixed (Shifted to bottom-left to avoid bottom-right chatbot overlaps) */}
      <a 
        href="https://wa.me/919933085333" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 h-12 w-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-all group"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white rounded-md text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
          Chat with an Expert
        </span>
      </a>
    </main>
  );
};

export default BlogPost;
