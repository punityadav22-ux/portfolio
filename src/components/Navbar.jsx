import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    className="fixed w-full bg-white/10 backdrop-blur-lg flex justify-between px-10 py-4"
  >
    <h1 className="font-bold">Punit Yadav</h1>
    <div className="space-x-6">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </motion.nav>
);

export default Navbar;