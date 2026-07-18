import certifications from "../data/certifications";
import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaIdBadge,
  FaAward,
} from "react-icons/fa";

const Certificates = () => {
  return (
    <section id="certificates" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Verified Achievements
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Certifications
            <span className="text-cyan-400">.</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Professional certifications demonstrating my expertise in
            Data Analytics, Artificial Intelligence, Power BI,
            Software Development, and Modern Web Technologies.
          </p>

        </div>

        {/* Certificates */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {certifications.map((item) => (

            <div
              key={item.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
            >

              {/* Certificate Image */}

              <div className="bg-white h-[420px] flex items-center justify-center p-5">

                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain rounded-lg transition duration-500 hover:scale-105"
                />

              </div>

              {/* Certificate Details */}

              <div className="p-7">

                <div className="flex items-center gap-2 mb-3">

                  <FaAward className="text-cyan-400 text-xl" />

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                </div>

                <p className="text-cyan-400 uppercase tracking-wider font-semibold mb-6">
                  {item.provider}
                </p>

                {/* Date */}

                <div className="flex items-center gap-3 text-gray-300 mb-4">

                  <FaCalendarAlt className="text-cyan-400" />

                  <div>

                    <p className="text-sm text-gray-500">
                      Issued
                    </p>

                    <p>{item.date}</p>

                  </div>

                </div>

                {/* Credential */}

                <div className="flex items-start gap-3 text-gray-300">

                  <FaIdBadge className="text-cyan-400 mt-1" />

                  <div>

                    <p className="text-sm text-gray-500">
                      Credential ID
                    </p>

                    <p className="break-all">
                      {item.credentialId}
                    </p>

                  </div>

                </div>

                {/* Verify Button */}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full flex justify-center items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition duration-300"
                  >
                    Verify Certificate
                    <FaExternalLinkAlt />
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;