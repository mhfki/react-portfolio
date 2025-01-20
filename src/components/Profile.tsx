import { motion } from "framer-motion"

const Profile = () => {
  return (
    <section className='h-full mb-20 mt-20 md:mt-0' id=''>
      <div className='flex justify-center items-center h-screen flex-col-reverse md:flex-row gap-10 xl:gap-0'>
        <div className='w-full text-white'>
          <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.1 }}>
            Hi, my name is
          </motion.h2>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className='mb-10 text-primary'
          >
            Muhammad Fikri
          </motion.h1>
          <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.1 }} className=''>
            I'm a Full Stack Developer. Proficient in front-end and back-end technologies with a strong understanding of RESTful API development and
            integration. Passionate about producing high-quality software that meets user needs. Committed to continuous learning and optimizing
            performance to ensure the system functions properly.
          </motion.span>
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.1 }}
            href='#contact'
            className='bg-transparent text-primary py-3 px-5 mt-10 border-2 border-primary rounded-xl hover:bg-white block w-36'
          >
            Contact Me
          </motion.a>
        </div>
        <div className='flex justify-center md:justify-end w-full content-center'>
          <img src='/assets/img/profile.jpg' id='profile' alt='profile' className='object-cover rounded-xl w-full md:w-96 md:h-96' />
        </div>
      </div>
    </section>
  )
}

export default Profile
