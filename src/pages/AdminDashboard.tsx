import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, FileText, LogOut, Search, Plus, Trash2, Edit3, 
  CheckCircle2, Clock, Eye, Save, X, Upload, Settings, Briefcase, GraduationCap 
} from "lucide-react";
import { cn } from "@/lib/utils";
import mainLogo from "@/assets/main logo.png";
import { apiRequest, resolveImageUrl } from "@/lib/api";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("leads");

  // Data lists
  const [leads, setLeads] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [stories, setStories] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);
  const [colleges, setColleges] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Blog modal & editing
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Engineering",
    author: "SS Education",
    date: "",
  });
  const [blogImageFile, setBlogImageFile] = useState<File | null>(null);

  // Success story modal & editing
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<any>(null);
  const [storyFormData, setStoryFormData] = useState({
    studentName: "",
    college: "",
    course: "",
    package: "",
    year: new Date().getFullYear().toString(),
    testimonial: "",
  });
  const [storyImageFile, setStoryImageFile] = useState<File | null>(null);

  // Team Member modal & editing
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [editingTeamMember, setEditingTeamMember] = useState<any>(null);
  const [teamFormData, setTeamFormData] = useState({
    name: "",
    role: "",
    bio: "",
  });
  const [teamImageFile, setTeamImageFile] = useState<File | null>(null);

  // College modal & editing
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [editingCollege, setEditingCollege] = useState<any>(null);
  const [collegeFormData, setCollegeFormData] = useState({
    name: "",
    href: "",
    category: "btech-karnataka",
    state: "",
    isVisible: true
  });

  // Profile Settings Form states
  const [profileFormData, setProfileFormData] = useState({
    displayName: "",
    bio: "",
    password: "",
    confirmPassword: ""
  });
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [currentProfilePic, setCurrentProfilePic] = useState("");

  // Lead notes editing
  const [editingLeadNotesId, setEditingLeadNotesId] = useState<string | null>(null);
  const [leadNotesValue, setLeadNotesValue] = useState("");

  // Check auth session
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const leadsData = await apiRequest("/leads");
      setLeads(leadsData);

      const blogsData = await apiRequest("/blogs");
      setBlogs(blogsData);

      const storiesData = await apiRequest("/stories");
      setStories(storiesData);

      const teamData = await apiRequest("/team");
      setTeam(teamData);

      const collegesData = await apiRequest("/colleges");
      setColleges(collegesData);

      const profileData = await apiRequest("/auth/profile");
      setProfileFormData(prev => ({
        ...prev,
        displayName: profileData.displayName || "",
        bio: profileData.bio || "",
        password: "",
        confirmPassword: ""
      }));
      setCurrentProfilePic(profileData.profilePic || "");
    } catch (error: any) {
      console.error("Data load failed", error);
      if (error.message.includes("401") || error.message.includes("authorized")) {
        handleLogout();
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", data.username);
      setIsAuthenticated(true);
      toast.success("Successfully logged in!");
      fetchData();
    } catch (error: any) {
      toast.error(error.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };

  // --- Lead Handlers ---
  const handleLeadStatusChange = async (leadId: string, newStatus: string) => {
    try {
      await apiRequest(`/leads/${leadId}`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      setLeads(leads.map(l => l._id === leadId ? { ...l, status: newStatus } : l));
      toast.success("Lead status updated!");
    } catch (error: any) {
      toast.error("Failed to update status");
    }
  };

  const handleStartEditingNotes = (lead: any) => {
    setEditingLeadNotesId(lead._id);
    setLeadNotesValue(lead.notes || "");
  };

  const handleSaveLeadNotes = async (leadId: string) => {
    try {
      await apiRequest(`/leads/${leadId}`, {
        method: "PUT",
        body: JSON.stringify({ notes: leadNotesValue }),
      });
      setLeads(leads.map(l => l._id === leadId ? { ...l, notes: leadNotesValue } : l));
      setEditingLeadNotesId(null);
      toast.success("Lead notes updated!");
    } catch (error: any) {
      toast.error("Failed to save notes");
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      await apiRequest(`/leads/${leadId}`, {
        method: "DELETE",
      });
      setLeads(leads.filter(l => l._id !== leadId));
      toast.success("Lead removed successfully");
    } catch (error: any) {
      toast.error("Failed to delete lead");
    }
  };

  // --- Blog Handlers ---
  const handleOpenBlogModal = (blog: any = null) => {
    if (blog) {
      setEditingBlog(blog);
      setBlogFormData({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        author: blog.author,
        date: blog.date || "",
      });
    } else {
      setEditingBlog(null);
      setBlogFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category: "Engineering",
        author: "SS Education",
        date: "",
      });
    }
    setBlogImageFile(null);
    setIsBlogModalOpen(true);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blogFormData.title);
    formData.append("slug", blogFormData.slug);
    formData.append("excerpt", blogFormData.excerpt);
    formData.append("content", blogFormData.content);
    formData.append("category", blogFormData.category);
    formData.append("author", blogFormData.author);
    if (blogFormData.date) formData.append("date", blogFormData.date);
    if (blogImageFile) formData.append("image", blogImageFile);

    try {
      if (editingBlog) {
        const updated = await apiRequest(`/blogs/${editingBlog._id}`, {
          method: "PUT",
          body: formData,
        });
        setBlogs(blogs.map(b => b._id === editingBlog._id ? updated : b));
        toast.success("Blog updated successfully!");
      } else {
        const created = await apiRequest("/blogs", {
          method: "POST",
          body: formData,
        });
        setBlogs([created, ...blogs]);
        toast.success("Blog post created!");
      }
      setIsBlogModalOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to save blog");
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;
    try {
      await apiRequest(`/blogs/${blogId}`, {
        method: "DELETE",
      });
      setBlogs(blogs.filter(b => b._id !== blogId));
      toast.success("Blog post deleted");
    } catch (error: any) {
      toast.error("Failed to delete blog");
    }
  };

  // --- Story Handlers ---
  const handleOpenStoryModal = (story: any = null) => {
    if (story) {
      setEditingStory(story);
      setStoryFormData({
        studentName: story.studentName,
        college: story.college,
        course: story.course,
        package: story.package,
        year: story.year,
        testimonial: story.testimonial,
      });
    } else {
      setEditingStory(null);
      setStoryFormData({
        studentName: "",
        college: "",
        course: "",
        package: "",
        year: new Date().getFullYear().toString(),
        testimonial: "",
      });
    }
    setStoryImageFile(null);
    setIsStoryModalOpen(true);
  };

  const handleStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("studentName", storyFormData.studentName);
    formData.append("college", storyFormData.college);
    formData.append("course", storyFormData.course);
    formData.append("package", storyFormData.package);
    formData.append("year", storyFormData.year);
    formData.append("testimonial", storyFormData.testimonial);
    if (storyImageFile) formData.append("image", storyImageFile);

    try {
      if (editingStory) {
        const updated = await apiRequest(`/stories/${editingStory._id}`, {
          method: "PUT",
          body: formData,
        });
        setStories(stories.map(s => s._id === editingStory._id ? updated : s));
        toast.success("Success story updated!");
      } else {
        const created = await apiRequest("/stories", {
          method: "POST",
          body: formData,
        });
        setStories([created, ...stories]);
        toast.success("Success story created!");
      }
      setIsStoryModalOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to save story");
    }
  };

  const handleDeleteStory = async (storyId: string) => {
    if (!window.confirm("Are you sure you want to delete this success story?")) return;
    try {
      await apiRequest(`/stories/${storyId}`, {
        method: "DELETE",
      });
      setStories(stories.filter(s => s._id !== storyId));
      toast.success("Success story deleted");
    } catch (error: any) {
      toast.error("Failed to delete story");
    }
  };

  // --- Team Member Handlers ---
  const handleOpenTeamModal = (member: any = null) => {
    if (member) {
      setEditingTeamMember(member);
      setTeamFormData({
        name: member.name,
        role: member.role,
        bio: member.bio,
      });
    } else {
      setEditingTeamMember(null);
      setTeamFormData({
        name: "",
        role: "",
        bio: "",
      });
    }
    setTeamImageFile(null);
    setIsTeamModalOpen(true);
  };

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", teamFormData.name);
    formData.append("role", teamFormData.role);
    formData.append("bio", teamFormData.bio);
    if (teamImageFile) formData.append("image", teamImageFile);

    try {
      if (editingTeamMember) {
        const updated = await apiRequest(`/team/${editingTeamMember._id}`, {
          method: "PUT",
          body: formData,
        });
        setTeam(team.map(t => t._id === editingTeamMember._id ? updated : t));
        toast.success("Team member updated successfully!");
      } else {
        const created = await apiRequest("/team", {
          method: "POST",
          body: formData,
        });
        setTeam([...team, created]);
        toast.success("Team member added successfully!");
      }
      setIsTeamModalOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to save team member");
    }
  };

  const handleDeleteTeamMember = async (memberId: string) => {
    if (!window.confirm("Are you sure you want to delete this team member?")) return;
    try {
      await apiRequest(`/team/${memberId}`, {
        method: "DELETE",
      });
      setTeam(team.filter(t => t._id !== memberId));
      toast.success("Team member deleted successfully");
    } catch (error: any) {
      toast.error("Failed to delete team member");
    }
  };

  // --- College Handlers ---
  const handleOpenCollegeModal = (college: any = null) => {
    if (college) {
      setEditingCollege(college);
      setCollegeFormData({
        name: college.name,
        href: college.href,
        category: college.category,
        state: college.state || "",
        isVisible: college.isVisible !== undefined ? college.isVisible : true
      });
    } else {
      setEditingCollege(null);
      setCollegeFormData({
        name: "",
        href: "",
        category: "btech-karnataka",
        state: "",
        isVisible: true
      });
    }
    setIsCollegeModalOpen(true);
  };

  const handleCollegeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCollege) {
        const updated = await apiRequest(`/colleges/${editingCollege._id}`, {
          method: "PUT",
          body: JSON.stringify(collegeFormData),
        });
        setColleges(colleges.map(c => c._id === editingCollege._id ? updated : c));
        toast.success("College updated successfully!");
      } else {
        const created = await apiRequest("/colleges", {
          method: "POST",
          body: JSON.stringify(collegeFormData),
        });
        setColleges([created, ...colleges]);
        toast.success("College added successfully!");
      }
      setIsCollegeModalOpen(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to save college");
    }
  };

  const handleToggleCollegeVisibility = async (college: any) => {
    const nextVisibility = !college.isVisible;
    try {
      const updated = await apiRequest(`/colleges/${college._id}`, {
        method: "PUT",
        body: JSON.stringify({ isVisible: nextVisibility }),
      });
      setColleges(colleges.map(c => c._id === college._id ? updated : c));
      toast.success(`${college.name} is now ${nextVisibility ? 'visible' : 'hidden'}!`);
    } catch (error: any) {
      toast.error("Failed to toggle visibility");
    }
  };

  const handleDeleteCollege = async (collegeId: string) => {
    if (!window.confirm("Are you sure you want to delete this college?")) return;
    try {
      await apiRequest(`/colleges/${collegeId}`, {
        method: "DELETE",
      });
      setColleges(colleges.filter(c => c._id !== collegeId));
      toast.success("College deleted successfully");
    } catch (error: any) {
      toast.error("Failed to delete college");
    }
  };

  // --- CSV Bulk Import Handler ---
  const handleCSVImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (evt) => {
      const text = evt.target?.result as string;
      if (!text) return;
      try {
        const rows = text.split(/\r?\n/).map(row => {
          const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || row.split(",");
          return matches.map(val => val.replace(/^"|"$/g, '').trim());
        });

        if (rows.length < 2) {
          toast.error("CSV is empty or invalid");
          return;
        }

        const headers = rows[0].map(h => h.toLowerCase());
        const leadsData: any[] = [];

        const getColIndex = (keywords: string[]) => {
          return headers.findIndex(h => keywords.some(k => h.includes(k)));
        };

        const nameIdx = getColIndex(["name", "student", "full name"]);
        const phoneIdx = getColIndex(["phone", "mobile", "contact", "number"]);
        const emailIdx = getColIndex(["email", "mail"]);
        const stateIdx = getColIndex(["state", "region", "location"]);
        const branchIdx = getColIndex(["branch", "course", "program", "specialis", "specializ"]);
        const collegeIdx = getColIndex(["college", "university", "institute"]);
        const sourceIdx = getColIndex(["source", "page", "origin"]);
        const notesIdx = getColIndex(["notes", "remark", "comment"]);
        const statusIdx = getColIndex(["status", "stage"]);

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          if (row.length < 2 || !row[nameIdx] || !row[phoneIdx]) continue;

          leadsData.push({
            name: row[nameIdx],
            phone: row[phoneIdx],
            email: emailIdx !== -1 ? row[emailIdx] : "",
            state: stateIdx !== -1 ? row[stateIdx] : "",
            branch: branchIdx !== -1 ? row[branchIdx] : "",
            college: collegeIdx !== -1 ? row[collegeIdx] : "",
            sourcePage: sourceIdx !== -1 ? row[sourceIdx] : "",
            notes: notesIdx !== -1 ? row[notesIdx] : "",
            status: statusIdx !== -1 ? row[statusIdx] : "New"
          });
        }

        if (leadsData.length === 0) {
          toast.error("No valid leads found in CSV. Make sure you have 'Name' and 'Phone' columns.");
          return;
        }

        const response = await apiRequest("/leads/import", {
          method: "POST",
          body: JSON.stringify({ leads: leadsData }),
        });

        toast.success(response.message || "Import completed successfully!");
        fetchData();
      } catch (err: any) {
        toast.error("Failed to parse or import CSV: " + err.message);
      }
    };

    reader.readAsText(file);
    e.target.value = "";
  };

  // --- Profile Settings Handlers ---
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileFormData.password && profileFormData.password !== profileFormData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("displayName", profileFormData.displayName);
    formData.append("bio", profileFormData.bio);
    if (profileFormData.password) {
      formData.append("password", profileFormData.password);
    }
    if (profileImageFile) {
      formData.append("profilePic", profileImageFile);
    }

    try {
      const data = await apiRequest("/auth/profile", {
        method: "PUT",
        body: formData
      });
      setCurrentProfilePic(data.profilePic || "");
      setProfileFormData(prev => ({
        ...prev,
        password: "",
        confirmPassword: ""
      }));
      setProfileImageFile(null);
      toast.success("Profile settings updated!");
      fetchData();
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile settings");
    }
  };

  // --- Filtering ---
  const filteredLeads = leads.filter(lead => 
    lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.phone?.includes(searchQuery) ||
    lead.college?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.branch?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBlogs = blogs.filter(blog => 
    blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStories = stories.filter(story => 
    story.studentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.college?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.course?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTeam = team.filter(member => 
    member.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredColleges = colleges.filter(college => 
    college.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.state?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="h-12 w-auto flex items-center justify-center mb-4">
              <img src={mainLogo} alt="SS Education" className="h-full w-auto object-contain" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Admin Portal</h1>
            <p className="text-xs text-slate-400 mt-1">Log in with credentials to access</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                placeholder="admin"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50 mt-2"
            >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 hidden lg:flex flex-col shrink-0">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-auto flex items-center justify-center">
            <img src={mainLogo} alt="SS Education" className="h-full w-auto object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-xs text-slate-800 tracking-tight">SS EDUCATION</span>
            <span className="text-[8px] uppercase tracking-widest font-semibold text-slate-400">Admin</span>
          </div>
        </div>

        <nav className="space-y-1 flex-grow">
          {[
            { id: "leads", label: "Lead Management", icon: Users },
            { id: "blogs", label: "Blog Posts", icon: FileText },
            { id: "stories", label: "Success Stories", icon: CheckCircle2 },
            { id: "team", label: "Team Members", icon: Briefcase },
            { id: "colleges", label: "Colleges Dropdown", icon: GraduationCap },
            { id: "settings", label: "Profile Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSearchQuery("");
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all",
                activeTab === item.id 
                  ? "bg-slate-900 text-white shadow-sm" 
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold text-red-500 hover:bg-red-50 transition-colors mt-auto"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-10 overflow-y-auto max-h-screen">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-800 capitalize leading-tight">{activeTab.replace("-", " ")}</h2>
            <p className="text-xs text-slate-400 mt-1">Manage website content and incoming leads.</p>
            
            {/* Mobile Tab Selector dropdown (Visible only on mobile/tablet) */}
            <div className="lg:hidden w-full mt-3">
              <select
                value={activeTab}
                onChange={(e) => {
                  setActiveTab(e.target.value);
                  setSearchQuery("");
                }}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:border-slate-400 shadow-sm"
              >
                <option value="leads">Lead Management</option>
                <option value="blogs">Blog Posts</option>
                <option value="stories">Success Stories</option>
                <option value="team">Team Members</option>
                <option value="colleges">Colleges Dropdown</option>
                <option value="settings">Profile Settings</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 rounded-lg bg-white border border-slate-200 text-xs focus:outline-none focus:border-slate-400 w-52"
              />
            </div>
            <button 
              onClick={fetchData}
              className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              title="Refresh Data"
            >
              <Clock className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </header>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "leads" && (
            <motion.div
              key="leads"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold text-slate-800">Lead Listings</h3>
                <label className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer">
                  <Upload className="h-3.5 w-3.5" /> Import Google Sheets CSV
                  <input 
                    type="file"
                    accept=".csv"
                    onChange={handleCSVImport}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total Leads", value: leads.length.toString(), color: "text-blue-600 border-blue-100" },
                  { label: "New Leads", value: leads.filter(l => l.status === "New").length.toString(), color: "text-primary border-slate-100" },
                  { label: "Follow-up Leads", value: leads.filter(l => l.status === "Follow-up").length.toString(), color: "text-amber-600 border-amber-100" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className={cn("text-2xl font-bold", stat.color)}>{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Preferences</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Admin Notes</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-slate-50/30 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="font-semibold text-xs text-slate-800">{lead.name}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{lead.phone}</div>
                            {lead.email && <div className="text-[10px] text-slate-400">{lead.email}</div>}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-xs font-semibold text-slate-700">{lead.branch || "N/A"}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{lead.college || "N/A"} • {lead.state || "N/A"}</div>
                            {lead.sourcePage && <div className="text-[9px] text-slate-300 italic mt-0.5">Source: {lead.sourcePage}</div>}
                          </td>
                          <td className="px-6 py-4">
                            <select 
                              value={lead.status}
                              onChange={(e) => handleLeadStatusChange(lead._id, e.target.value)}
                              className={cn(
                                "px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider border border-slate-200 bg-white focus:outline-none",
                                lead.status === "New" ? "text-primary border-slate-200 bg-slate-50" : 
                                lead.status === "Follow-up" ? "text-amber-600 border-amber-200 bg-amber-50" : 
                                "text-emerald-600 border-emerald-200 bg-emerald-50"
                              )}
                            >
                              <option value="New">New</option>
                              <option value="Follow-up">Follow-up</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 max-w-xs">
                            {editingLeadNotesId === lead._id ? (
                              <div className="flex items-center gap-1.5">
                                <input 
                                  type="text"
                                  value={leadNotesValue}
                                  onChange={(e) => setLeadNotesValue(e.target.value)}
                                  className="w-full px-2 py-1 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-slate-400"
                                />
                                <button 
                                  onClick={() => handleSaveLeadNotes(lead._id)}
                                  className="p-1.5 bg-slate-900 text-white rounded-md hover:bg-slate-800"
                                >
                                  <Save className="h-3 w-3" />
                                </button>
                                <button 
                                  onClick={() => setEditingLeadNotesId(null)}
                                  className="p-1.5 bg-slate-100 text-slate-500 rounded-md hover:bg-slate-200"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ) : (
                              <div 
                                onClick={() => handleStartEditingNotes(lead)}
                                className="text-xs text-slate-500 cursor-pointer hover:bg-slate-50 p-1.5 rounded-md italic min-h-[30px] flex items-center"
                              >
                                {lead.notes || "Click to add notes..."}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => handleDeleteLead(lead._id)}
                              className="p-1.5 hover:bg-red-50 rounded-md text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Delete Lead"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredLeads.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-slate-400 text-xs font-medium">
                            No leads found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "blogs" && (
            <motion.div
              key="blogs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-slate-800">Articles</h3>
                <button 
                  onClick={() => handleOpenBlogModal()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" /> New Post
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredBlogs.map((blog) => (
                  <div key={blog._id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm group flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                          {blog.category}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 text-[10px] font-medium">
                          <Eye className="h-3 w-3" /> {blog.views} views
                        </div>
                      </div>
                      <div className="flex gap-3 mb-3">
                        {blog.image && (
                          <img 
                            src={resolveImageUrl(blog.image)} 
                            alt={blog.title} 
                            className="h-14 w-20 object-cover rounded-lg border border-slate-100" 
                          />
                        )}
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                            {blog.title}
                          </h4>
                          <span className="text-[9px] text-slate-400 mt-1 block">By {blog.author} • {blog.date}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-4 line-clamp-2">{blog.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <button 
                        onClick={() => handleOpenBlogModal(blog)}
                        className="flex-1 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-md font-bold text-slate-600 text-xs transition-colors"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="p-1.5 bg-red-50 hover:bg-red-100 rounded-md text-red-500 transition-colors border border-red-100"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
                {filteredBlogs.length === 0 && (
                  <div className="col-span-2 py-8 text-center text-slate-400 text-xs font-medium bg-white rounded-xl border border-slate-200 shadow-sm">
                    No articles found.
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "stories" && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-slate-800">Success Stories</h3>
                <button 
                  onClick={() => handleOpenStoryModal()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Student
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredStories.map((story) => (
                  <div key={story._id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm group flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <div>
                      <div className="flex gap-3 mb-3">
                        {story.image && (
                          <img 
                            src={resolveImageUrl(story.image)} 
                            alt={story.studentName} 
                            className="h-10 w-10 object-cover rounded-full border border-slate-100 shrink-0" 
                          />
                        )}
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 leading-snug">
                            {story.studentName}
                          </h4>
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            {story.course} — {story.college}
                          </span>
                          <div className="flex gap-1.5 mt-1">
                            <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-bold">
                              {story.package}
                            </span>
                            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-bold">
                              {story.year}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[11px] italic text-slate-500 mb-4 line-clamp-2">"{story.testimonial}"</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <button 
                        onClick={() => handleOpenStoryModal(story)}
                        className="flex-1 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-md font-bold text-slate-600 text-xs transition-colors"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteStory(story._id)}
                        className="p-1.5 bg-red-50 hover:bg-red-100 rounded-md text-red-500 transition-colors border border-red-100"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
                {filteredStories.length === 0 && (
                  <div className="col-span-2 py-8 text-center text-slate-400 text-xs font-medium bg-white rounded-xl border border-slate-200 shadow-sm">
                    No success stories found.
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-slate-800">Expert Team Members</h3>
                <button 
                  onClick={() => handleOpenTeamModal()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Member
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredTeam.map((member) => (
                  <div key={member._id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm group flex flex-col justify-between hover:border-slate-300 transition-colors">
                    <div>
                      <div className="flex gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                          {member.image ? (
                            <img 
                              src={resolveImageUrl(member.image)} 
                              alt={member.name} 
                              className="h-full w-full object-cover" 
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center text-slate-400 text-[10px]">No Pic</div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 leading-snug">
                            {member.name}
                          </h4>
                          <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mt-0.5">
                            {member.role}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-4 line-clamp-2">{member.bio}</p>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <button 
                        onClick={() => handleOpenTeamModal(member)}
                        className="flex-1 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-md font-bold text-slate-600 text-xs transition-colors"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDeleteTeamMember(member._id)}
                        className="p-1.5 bg-red-50 hover:bg-red-100 rounded-md text-red-500 transition-colors border border-red-100"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
                {filteredTeam.length === 0 && (
                  <div className="col-span-2 py-8 text-center text-slate-400 text-xs font-medium bg-white rounded-xl border border-slate-200 shadow-sm">
                    No team members found.
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "colleges" && (
            <motion.div
              key="colleges"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-slate-800">Colleges Dropdown Menu</h3>
                <button 
                  onClick={() => handleOpenCollegeModal()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" /> Add College
                </button>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">College Name</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">State (MBBS Only)</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Link / URL</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Show Menu</th>
                        <th className="px-6 py-3.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredColleges.map((college) => (
                        <tr key={college._id} className="hover:bg-slate-50/30 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="font-semibold text-xs text-slate-800">{college.name}</div>
                          </td>
                          <td className="px-6 py-4 capitalize text-xs text-slate-500">
                            {college.category.replace(/-/g, " ")}
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-500">
                            {college.state || "—"}
                          </td>
                          <td className="px-6 py-4 text-xs text-slate-400 truncate max-w-xs font-mono">
                            {college.href}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => handleToggleCollegeVisibility(college)}
                              className={cn(
                                "px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider border transition-colors",
                                college.isVisible 
                                  ? "text-emerald-600 border-emerald-200 bg-emerald-50 hover:bg-emerald-100" 
                                  : "text-slate-400 border-slate-200 bg-slate-50 hover:bg-slate-100"
                              )}
                            >
                              {college.isVisible ? "Visible" : "Hidden"}
                            </button>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => handleOpenCollegeModal(college)}
                                className="p-1.5 hover:bg-slate-100 rounded-md text-slate-500"
                                title="Edit"
                              >
                                <Edit3 className="h-3.5 w-3.5" />
                              </button>
                              <button 
                                onClick={() => handleDeleteCollege(college._id)}
                                className="p-1.5 hover:bg-red-50 rounded-md text-red-500"
                                title="Delete"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredColleges.length === 0 && (
                        <tr>
                          <td colSpan={6} className="px-6 py-8 text-center text-slate-400 text-xs font-medium">
                            No colleges found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="max-w-xl bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xs font-bold text-slate-800 mb-6">Profile & Account Settings</h3>
              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
                    {profileImageFile ? (
                      <img src={URL.createObjectURL(profileImageFile)} alt="Preview" className="h-full w-full object-cover" />
                    ) : currentProfilePic ? (
                      <img src={resolveImageUrl(currentProfilePic)} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-slate-400 text-[10px]">No Pic</div>
                    )}
                  </div>
                  <div>
                    <label className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200/60 rounded-md cursor-pointer text-[10px] font-bold text-slate-600 transition-colors">
                      <Upload className="h-3 w-3" />
                      <span>Upload New Picture</span>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setProfileImageFile(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[9px] text-slate-400 mt-1">Recommended: Square format, PNG or JPEG</p>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Display Name</label>
                  <input 
                    type="text"
                    value={profileFormData.displayName}
                    onChange={(e) => setProfileFormData({ ...profileFormData, displayName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Author Bio</label>
                  <textarea 
                    rows={3}
                    value={profileFormData.bio}
                    onChange={(e) => setProfileFormData({ ...profileFormData, bio: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <h4 className="text-[11px] font-bold text-slate-700">Change Password (optional)</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">New Password</label>
                      <input 
                        type="password"
                        value={profileFormData.password}
                        onChange={(e) => setProfileFormData({ ...profileFormData, password: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Confirm Password</label>
                      <input 
                        type="password"
                        value={profileFormData.confirmPassword}
                        onChange={(e) => setProfileFormData({ ...profileFormData, confirmPassword: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors mt-4 shadow-sm"
                >
                  Save Settings
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- Blog CRUD Modal --- */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-xl w-full border border-slate-200 shadow-xl relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setIsBlogModalOpen(false)}
              className="absolute right-5 top-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-bold text-slate-800 mb-6">
              {editingBlog ? "Edit Blog Article" : "Create New Blog Article"}
            </h3>
            <form onSubmit={handleBlogSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Title *</label>
                  <input 
                    type="text"
                    required
                    value={blogFormData.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                      setBlogFormData({ ...blogFormData, title, slug });
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Slug (URL) *</label>
                  <input 
                    type="text"
                    required
                    value={blogFormData.slug}
                    onChange={(e) => setBlogFormData({ ...blogFormData, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Excerpt *</label>
                <textarea 
                  required
                  rows={2}
                  value={blogFormData.excerpt}
                  onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors resize-none"
                  placeholder="Short description of the post..."
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Content (HTML / Text) *</label>
                <textarea 
                  required
                  rows={5}
                  value={blogFormData.content}
                  onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  placeholder="Detailed blog post content here..."
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Category *</label>
                  <select 
                    value={blogFormData.category}
                    onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Management">Management</option>
                    <option value="College Review">College Review</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Author *</label>
                  <input 
                    type="text"
                    required
                    value={blogFormData.author}
                    onChange={(e) => setBlogFormData({ ...blogFormData, author: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Date override</label>
                  <input 
                    type="text"
                    value={blogFormData.date}
                    onChange={(e) => setBlogFormData({ ...blogFormData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                    placeholder="e.g. May 10, 2026"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Cover Image</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer text-[11px] font-bold text-slate-600 transition-colors border border-slate-200/60">
                    <Upload className="h-3.5 w-3.5" />
                    <span>Choose File</span>
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setBlogImageFile(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  <span className="text-[10px] text-slate-400 truncate max-w-xs">
                    {blogImageFile ? blogImageFile.name : editingBlog?.image ? "Keep current image" : "No file chosen"}
                  </span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors mt-4"
              >
                {editingBlog ? "Save Changes" : "Publish Article"}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- Success Story CRUD Modal --- */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full border border-slate-200 shadow-xl relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute right-5 top-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-bold text-slate-800 mb-6">
              {editingStory ? "Edit Success Story" : "Add Success Story"}
            </h3>
            <form onSubmit={handleStorySubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Student Name *</label>
                <input 
                  type="text"
                  required
                  value={storyFormData.studentName}
                  onChange={(e) => setStoryFormData({ ...storyFormData, studentName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">College *</label>
                  <input 
                    type="text"
                    required
                    value={storyFormData.college}
                    onChange={(e) => setStoryFormData({ ...storyFormData, college: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                    placeholder="e.g. RVCE"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Course *</label>
                  <input 
                    type="text"
                    required
                    value={storyFormData.course}
                    onChange={(e) => setStoryFormData({ ...storyFormData, course: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                    placeholder="e.g. B.Tech CSE"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Package *</label>
                  <input 
                    type="text"
                    required
                    value={storyFormData.package}
                    onChange={(e) => setStoryFormData({ ...storyFormData, package: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                    placeholder="e.g. 15 LPA"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Year *</label>
                  <input 
                    type="text"
                    required
                    value={storyFormData.year}
                    onChange={(e) => setStoryFormData({ ...storyFormData, year: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Testimonial *</label>
                <textarea 
                  required
                  rows={3}
                  value={storyFormData.testimonial}
                  onChange={(e) => setStoryFormData({ ...storyFormData, testimonial: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors resize-none"
                  placeholder="Describe their experience..."
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Student Photo</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer text-[11px] font-bold text-slate-600 transition-colors border border-slate-200/60">
                    <Upload className="h-3.5 w-3.5" />
                    <span>Choose Photo</span>
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setStoryImageFile(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  <span className="text-[10px] text-slate-400 truncate max-w-xs">
                    {storyImageFile ? storyImageFile.name : editingStory?.image ? "Keep current photo" : "No file chosen"}
                  </span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors mt-4"
              >
                {editingStory ? "Save Changes" : "Save Student Story"}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- Team Member CRUD Modal --- */}
      {isTeamModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full border border-slate-200 shadow-xl relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setIsTeamModalOpen(false)}
              className="absolute right-5 top-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-bold text-slate-800 mb-6">
              {editingTeamMember ? "Edit Team Member" : "Add New Team Member"}
            </h3>
            <form onSubmit={handleTeamSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Name *</label>
                <input 
                  type="text"
                  required
                  value={teamFormData.name}
                  onChange={(e) => setTeamFormData({ ...teamFormData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Role / Designation *</label>
                <input 
                  type="text"
                  required
                  value={teamFormData.role}
                  onChange={(e) => setTeamFormData({ ...teamFormData, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  placeholder="e.g. Founder & Director"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Bio / Profile Description *</label>
                <textarea 
                  required
                  rows={3}
                  value={teamFormData.bio}
                  onChange={(e) => setTeamFormData({ ...teamFormData, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors resize-none"
                  placeholder="Describe their experience and expertise..."
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Profile Photo</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer text-[11px] font-bold text-slate-600 transition-colors border border-slate-200/60">
                    <Upload className="h-3.5 w-3.5" />
                    <span>Choose Photo</span>
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setTeamImageFile(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                  <span className="text-[10px] text-slate-400 truncate max-w-xs">
                    {teamImageFile ? teamImageFile.name : editingTeamMember?.image ? "Keep current photo" : "No file chosen"}
                  </span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors mt-4"
              >
                {editingTeamMember ? "Save Changes" : "Add Team Member"}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* --- College CRUD Modal --- */}
      {isCollegeModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 max-w-md w-full border border-slate-200 shadow-xl relative max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setIsCollegeModalOpen(false)}
              className="absolute right-5 top-5 p-1.5 rounded-full hover:bg-slate-50 text-slate-400"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-base font-bold text-slate-800 mb-6">
              {editingCollege ? "Edit College Details" : "Add New College"}
            </h3>
            <form onSubmit={handleCollegeSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">College Name *</label>
                <input 
                  type="text"
                  required
                  value={collegeFormData.name}
                  onChange={(e) => setCollegeFormData({ ...collegeFormData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                  placeholder="e.g. RVCE Bangalore"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Target Link / URL (href) *</label>
                <input 
                  type="text"
                  required
                  value={collegeFormData.href}
                  onChange={(e) => setCollegeFormData({ ...collegeFormData, href: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors font-mono"
                  placeholder="e.g. /rv-college-btech-admission-2026 or /contact"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Category *</label>
                <select 
                  value={collegeFormData.category}
                  onChange={(e) => setCollegeFormData({ ...collegeFormData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                >
                  <option value="btech-karnataka">B.Tech Karnataka</option>
                  <option value="btech-other-states">B.Tech Other States</option>
                  <option value="mbbs-admission-india">MBBS Admission India</option>
                  <option value="management-other-courses">Management & Others</option>
                </select>
              </div>

              {collegeFormData.category === "mbbs-admission-india" && (
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">State (MBBS Only) *</label>
                  <input 
                    type="text"
                    required
                    value={collegeFormData.state}
                    onChange={(e) => setCollegeFormData({ ...collegeFormData, state: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:bg-white focus:border-slate-400 transition-colors"
                    placeholder="e.g. Rajasthan, Karnataka, West Bengal"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 py-2">
                <input 
                  type="checkbox"
                  id="college-visibility-checkbox"
                  checked={collegeFormData.isVisible}
                  onChange={(e) => setCollegeFormData({ ...collegeFormData, isVisible: e.target.checked })}
                  className="h-4 w-4 text-primary border-slate-200 focus:ring-0 rounded"
                />
                <label htmlFor="college-visibility-checkbox" className="text-xs font-bold text-slate-600 select-none">
                  Show in colleges dropdown menu
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors mt-4"
              >
                {editingCollege ? "Save Changes" : "Add College"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
