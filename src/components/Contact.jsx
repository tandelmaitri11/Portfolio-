import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Contact Me
            <span className="text-cyan-400">.</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Have a project in mind or want to work together? Feel free to
            contact me anytime. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
                <div className="bg-cyan-500 p-4 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <a
                    href={import.meta.env.VITE_EMAIL}
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    {import.meta.env.VITE_EMAIL.replace("mailto:", "")}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
                <div className="bg-cyan-500 p-4 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <a
                    href={`tel:${import.meta.env.VITE_PHONE}`}
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    {import.meta.env.VITE_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">
                <div className="bg-cyan-500 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Gujarat, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-10">

              <a
                href={import.meta.env.VITE_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 p-4 rounded-full text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={import.meta.env.VITE_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-cyan-500 p-4 rounded-full text-white transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-slate-800 rounded-3xl p-8">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <div>
                <label className="text-white block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-white block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-white block mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-white block mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;