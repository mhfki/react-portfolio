import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <motion.section className='mt-20 h-[40rem] md:h-[45rem]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} id='contact'>
      <h1 className='text-primary mb-20'>Contact</h1>
      <div className='flex justify-center items-center text-center flex-col '>
        <div className=' bg-white border-2 border-secondary rounded-xl p-5 md:p-20'>
          <h2 className=' text-secondary '>Reach Me Here</h2>
          <a href='mailto:mfikri1689@gmail.com' className='flex justify-center mt-10 items-center rounded-lg bg-white text-primary'>
            <FontAwesomeIcon icon={faEnvelope} className=' w-8 h-8 mr-5' />
            <span>mfikri1689@gmail.com</span>
          </a>
          <a href='https://www.linkedin.com/in/muh-fikri/' target='_blank' className='flex justify-center mt-10 rounded-lg bg-white text-primary'>
            <FontAwesomeIcon icon={faLinkedinIn} className=' w-8 h-8 mr-5' />
            <span>Muhammad Fikri</span>
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
