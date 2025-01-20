import { motion, MotionConfig } from "framer-motion"
import { Dispatch, SetStateAction, useState, useEffect } from "react"

const Navbar = () => {
  const [selected, setSelected] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const handleScroll = () => {
      let current = "" // Default tab
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || current
        }
      })
      setSelected(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='fixed top-6 right-2 z-10'>
      <HamburgerButton toggle={setIsOpen} />
      <div
        className={`fixed top-0 left-0 px-4 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md transform transition-all duration-300 md:top-0 md:left-1/2 md:-translate-x-1/2 md:w-fit md:rounded-full md:flex md:flex-row md:justify-center md:items-center md:gap-6 md:py-2 md:opacity-100 ${
          isOpen ? "top-24 translate-y-0" : "-translate-y-full md:translate-y-4"
        }`}
      >
        <Tab name='Home' route='' selected={selected === ""} setSelected={setSelected} />
        <Tab name='Experience' route='experience' selected={selected === "experience"} setSelected={setSelected} />
        <Tab name='Projects' route='projects' selected={selected === "projects"} setSelected={setSelected} />
        <Tab name='Skill' route='skill' selected={selected === "skill"} setSelected={setSelected} />
        <Tab name='Contact' route='contact' selected={selected === "contact"} setSelected={setSelected} />
      </div>
    </motion.div>
  )
}

const Tab = ({
  name,
  route,
  selected,
  setSelected,
}: {
  name: string
  route: string
  selected: boolean
  setSelected: Dispatch<SetStateAction<string>>
}) => {
  return (
    <a
      href={`#${route}`}
      onClick={() => {
        setSelected(route)
      }}
      className={`${
        selected ? "text-white" : "text-primary hover:text-slate-200 hover:bg-primary"
      } text-lg transition-colors px-4 py-1 rounded-md relative`}
    >
      <span className='relative z-10 capitalize'>{name}</span>
      {selected && (
        <motion.span
          layoutId='pill-tab'
          transition={{ type: "spring", duration: 1 }}
          className='absolute inset-0 z-0 rounded-md bg-primary'
        ></motion.span>
      )}
    </a>
  )
}

const HamburgerButton = ({ toggle }: { toggle: (item: boolean) => void }) => {
  const [active, setActive] = useState(false)

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => {
          const newState = !active
          setActive(newState)
          toggle(newState)
        }}
        className='relative w-16 h-16 rounded-full transition-colors bg-white md:hidden'
      >
        <motion.span variants={VARIANTS.top} className='absolute h-1 w-10 bg-primary' style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }} />
        <motion.span variants={VARIANTS.middle} className='absolute h-1 w-10 bg-primary' style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }} />
        <motion.span
          variants={VARIANTS.bottom}
          className='absolute h-1 w-5 bg-primary'
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  )
}

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
}

export default Navbar
