import { motion } from "framer-motion";

const projectData = [
  {
    title: "AI Resume Screening System",
    desc: "Built an NLP-based intelligent system using BERT, TF-IDF and NER to rank resumes based on job description matching and automate candidate filtering.",
    tech: "Python • NLP • Machine Learning",
  },
  {
    title: "Human Emotion Recognition",
    desc: "Developed a CNN-based deep learning model for real-time facial emotion detection using OpenCV with optimized preprocessing techniques.",
    tech: "Python • CNN • OpenCV",
  },
  {
    title: "GenAI Business Idea Generator",
    desc: "Created a Generative AI system that produces domain-specific startup ideas using prompt engineering and NLP pipeline.",
    tech: "Python • Generative AI • NLP",
  },
  {
    title: "Bank Management System (Java)",
    desc: "Console-based banking application using Core Java and OOP with features like account creation, deposit, withdrawal and balance inquiry.",
    tech: "Java • OOP",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 text-center">

    <h2 className="text-3xl font-bold mb-10">Projects</h2>

    <div className="grid md:grid-cols-3 gap-8 px-10">

      {projectData.map((project, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-xl text-left"
        >
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

          <p className="text-sm text-gray-300 mb-3">
            {project.desc}
          </p>

          <p className="text-cyan-400 text-sm">
            {project.tech}
          </p>
        </motion.div>
      ))}

    </div>

  </section>
);

export default Projects;