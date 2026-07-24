import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-[#FAF9F6] dark:bg-[#1B1612] py-32 relative border-t border-stone-200/50 dark:border-[#3f3129]/40 transition-colors duration-500">
      {/* Toast Notifications Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3129_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-200 dark:border-[#3f3129] pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-amber-800 dark:bg-amber-500"></div>
              <h4 className="text-amber-800 dark:text-amber-500 font-bold uppercase tracking-[0.2em] text-xs">Get In Touch</h4>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4] tracking-tight">Let's Collaborate.</h2>
          </div>
          <p className="text-stone-500 dark:text-stone-400 max-w-sm text-lg md:text-right italic">Ready to start a new project or looking to discuss opportunities? I'm here to help.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-extrabold text-[#4A3528] dark:text-[#F4E7D4]">Direct Contact</h3>
            <div className="space-y-6">
              {[
                { icon: FaEnvelope, title: "Email", value: import.meta.env.VITE_EMAIL?.replace("mailto:", "") || "email@example.com", link: import.meta.env.VITE_EMAIL || "#" },
                { icon: FaPhoneAlt, title: "Phone", value: import.meta.env.VITE_PHONE || "+91 00000 00000", link: `tel:${import.meta.env.VITE_PHONE}` },
                { icon: FaMapMarkerAlt, title: "Location", value: "Gujarat, India", link: "#" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 bg-white dark:bg-[#2A211B] p-5 rounded-2xl border border-stone-200 dark:border-[#3f3129] shadow-sm">
                  <div className="bg-amber-50 dark:bg-amber-900/40 p-4 rounded-xl text-amber-800 dark:text-amber-500"><item.icon className="text-xl" /></div>
                  <div>
                    <h4 className="text-[#4A3528] dark:text-[#F4E7D4] font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                    <a href={item.link} className="text-stone-600 dark:text-stone-400 hover:text-amber-800 dark:hover:text-amber-500 transition font-medium">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              {[ { icon: FaGithub, link: import.meta.env.VITE_GITHUB || "#" }, { icon: FaLinkedin, link: import.meta.env.VITE_LINKEDIN || "#" } ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" className="bg-white dark:bg-[#2A211B] border border-stone-200 dark:border-[#3f3129] hover:border-amber-800 dark:hover:border-amber-700 p-4 rounded-full text-[#4A3528] dark:text-[#F4E7D4] hover:text-amber-800 dark:hover:text-amber-500 transition">
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#2A211B] rounded-[2rem] p-8 md:p-10 border border-stone-200 dark:border-[#3f3129] shadow-lg shadow-stone-200/50 dark:shadow-black">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="text-[#4A3528] dark:text-[#F4E7D4] font-bold block mb-2 text-sm">Full Name</label>
                <input type="text" name="from_name" required placeholder="ABC" className="w-full bg-stone-50 dark:bg-[#1B1612] border border-stone-200 dark:border-[#3f3129] text-[#4A3528] dark:text-white rounded-xl px-5 py-4 outline-none focus:border-amber-800 dark:focus:border-amber-500 transition" />
              </div>
              <div>
                <label className="text-[#4A3528] dark:text-[#F4E7D4] font-bold block mb-2 text-sm">Email Address</label>
                <input type="email" name="from_email" required placeholder="abc@example.com" className="w-full bg-stone-50 dark:bg-[#1B1612] border border-stone-200 dark:border-[#3f3129] text-[#4A3528] dark:text-white rounded-xl px-5 py-4 outline-none focus:border-amber-800 dark:focus:border-amber-500 transition" />
              </div>
              <div>
                <label className="text-[#4A3528] dark:text-[#F4E7D4] font-bold block mb-2 text-sm">Message</label>
                <textarea rows="4" name="message" required placeholder="Tell me about your project..." className="w-full bg-stone-50 dark:bg-[#1B1612] border border-stone-200 dark:border-[#3f3129] text-[#4A3528] dark:text-white rounded-xl px-5 py-4 outline-none focus:border-amber-800 dark:focus:border-amber-500 transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 dark:bg-[#F4E7D4] hover:bg-amber-800 dark:hover:bg-amber-500 text-white dark:text-[#1B1612] py-4 rounded-xl font-bold flex justify-center items-center gap-3 transition duration-300">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;