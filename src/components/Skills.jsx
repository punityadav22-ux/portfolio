const skills = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Generative AI",
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Git & GitHub"
];

const Skills = () => (
  <section className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-10">Skills</h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
      {skills.map((s, i) => (
        <div key={i} className="bg-white/10 p-6 rounded-xl hover:bg-cyan-500 transition">
          {s}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;