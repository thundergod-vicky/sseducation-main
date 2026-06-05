import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, User, PhoneCall, Mail, MapPin, Stethoscope, ChevronDown } from "lucide-react";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  state: z.string().min(1, "Select your state"),
  neet: z.string().min(1, "Select NEET score range"),
});

type Props = {
  collegeShort: string;
};

const InputField = ({
  id, name, type = "text", placeholder, icon: Icon, error, maxLength,
}: {
  id: string; name: string; type?: string; placeholder: string;
  icon: typeof User; error?: string; maxLength?: number;
}) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-400 transition-colors z-10">
      <Icon className="h-4 w-4" />
    </div>
    <input
      id={id} name={name} type={type} placeholder={placeholder} maxLength={maxLength}
      className={`w-full bg-slate-800/60 border rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/60 focus:bg-slate-800/80 ${error ? "border-red-500/60 bg-red-500/5" : "border-slate-700/60 hover:border-slate-600"}`}
    />
    {error && <p className="text-xs text-red-400 mt-1.5 pl-1">{error}</p>}
  </div>
);

const SelectField = ({
  id, name, options, icon: Icon, error,
}: {
  id: string; name: string; options: { value: string; label: string }[];
  icon: typeof MapPin; error?: string;
}) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-400 transition-colors z-10 pointer-events-none">
      <Icon className="h-4 w-4" />
    </div>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10">
      <ChevronDown className="h-4 w-4" />
    </div>
    <select
      id={id} name={name}
      className={`w-full appearance-none bg-slate-800/60 border rounded-xl pl-11 pr-10 py-3.5 text-sm text-white outline-none transition-all focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/60 focus:bg-slate-800/80 ${error ? "border-red-500/60 bg-red-500/5" : "border-slate-700/60 hover:border-slate-600"}`}
    >
      <option value="" className="bg-slate-900 text-slate-400">Select…</option>
      {options.map(o => (
        <option key={o.value} value={o.value} className="bg-slate-900 text-white">{o.label}</option>
      ))}
    </select>
    {error && <p className="text-xs text-red-400 mt-1.5 pl-1">{error}</p>}
  </div>
);

export function MBBSLeadForm({ collegeShort }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const parsed = leadSchema.safeParse(data);
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
    googleFormData.append("entry.267493369", parsed.data.email || "");
    googleFormData.append("entry.921865976", parsed.data.state);
    googleFormData.append("entry.85122333", `MBBS Page (${collegeShort}) - NEET Score: ${parsed.data.neet}`);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData
      });
      setSubmitting(false);
      setSubmitted(true);
      toast.success(`Thank you! Our MBBS counsellor will call you within 30 minutes.`);
    } catch (error) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-slate-900/80 border border-white/10 p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/15 ring-8 ring-emerald-500/10"
        >
          <CheckCircle2 className="h-12 w-12 text-emerald-400" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white">Request Received!</h3>
        <p className="mt-3 text-slate-400">
          Our {collegeShort} admission counsellor will call you within 30 minutes.
        </p>
        <a
          href="tel:+919933085333"
          className="mt-6 inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
        >
          <Phone className="h-4 w-4" /> Or call now: +91 99330 85333
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {/* Header */}
      <div className="text-center pb-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Free Counselling — 2026
        </div>
        <h3 className="text-xl font-black text-white leading-tight">
          Book Your MBBS Seat
        </h3>
        <p className="text-sm text-slate-500 mt-1">Expert guidance for NEET qualified students</p>
      </div>

      <InputField
        id={`${collegeShort}-name`} name="name"
        placeholder="Your full name" icon={User} error={errors.name}
      />

      <InputField
        id={`${collegeShort}-phone`} name="phone" type="tel"
        placeholder="10-digit mobile number" icon={PhoneCall}
        error={errors.phone} maxLength={10}
      />

      <InputField
        id={`${collegeShort}-email`} name="email" type="email"
        placeholder="Email (optional)" icon={Mail} error={errors.email}
      />

      <div className="grid grid-cols-2 gap-3">
        <SelectField
          id={`${collegeShort}-state`} name="state" icon={MapPin} error={errors.state}
          options={[
            { value: "Bihar", label: "Bihar" },
            { value: "Jharkhand", label: "Jharkhand" },
            { value: "West Bengal", label: "West Bengal" },
            { value: "Odisha", label: "Odisha" },
            { value: "UP", label: "Uttar Pradesh" },
            { value: "Other", label: "Other" },
          ]}
        />
        <SelectField
          id={`${collegeShort}-neet`} name="neet" icon={Stethoscope} error={errors.neet}
          options={[
            { value: "600+", label: "600+ NEET" },
            { value: "550-600", label: "550–600" },
            { value: "500-550", label: "500–550" },
            { value: "450-500", label: "450–500" },
            { value: "below-450", label: "Below 450" },
          ]}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-black py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center gap-2 text-[15px] mt-2"
      >
        {submitting ? (
          <>
            <div className="h-4 w-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <PhoneCall className="h-5 w-5" />
            Get Free MBBS Guidance →
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-600 pt-1">
        🔒 100% confidential · No spam · Counsellor call only
      </p>
    </form>
  );
}
