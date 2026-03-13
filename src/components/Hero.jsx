import { motion } from "framer-motion";

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center text-center">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
    >
      Software Engineer | Full-Stack Developer | AI/ML
    </motion.h1>

    <p className="mt-6 max-w-xl">
      Building scalable applications using Java, Python, React & intelligent systems.
    </p>

  <a
  href="/Punit_Yadav_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 px-6 py-3 bg-cyan-500 rounded-xl hover:scale-105 transition"
>
  View Resume
</a>

  </section>
);

export default Hero;