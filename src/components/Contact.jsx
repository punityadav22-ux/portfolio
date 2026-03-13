import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">

      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <p className="text-gray-400 mb-10">
        I am open to Software Development, Full-Stack, AI/ML and Data-driven opportunities.
      </p>

      <div className="flex flex-col items-center gap-6 text-lg">

        {/* Email */}
        <a
          href="mailto:punit.yadav.22cse@bmu.edu.in"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <FaEnvelope />
          punit.yadav.22cse@bmu.edu.in
        </a>

        {/* Phone */}
        <a
          href="tel:+919454539276"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <FaPhone />
          +91 9454539276
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/punit-yadav-78aaa4298/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <FaLinkedin />
          LinkedIn Profile
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/punityadav22-ux"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 hover:text-cyan-400 transition"
        >
          <FaGithub />
          GitHub Profile
        </a>

        {/* Location */}
        <div className="flex items-center gap-3 text-gray-400">
          <FaMapMarkerAlt />
          Gurugram, India
        </div>

      </div>

    </section>
  );
};

export default Contact;