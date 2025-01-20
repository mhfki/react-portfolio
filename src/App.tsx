import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skill from "./components/Skill"
import Profile from "./components/Profile"
import Experience from "./components/Experience"
import "react-vertical-timeline-component/style.min.css"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className='fixed left-0 top-0 -z-10 h-full w-full'>
        <div className='relative h-full w-full bg-slate-950'>
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        </div>
      </div>
      <Navbar />
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className='relative w-[20rem] md:w-[40rem] lg:w-[50rem] xl:w-[64rem] 2xl:w-[80rem] mx-auto'
      >
        <Profile />
        <Experience />
        <Projects />
        <Skill />
        <Contact />
      </motion.div>
      <Footer />
    </>
  )
}

export default App
