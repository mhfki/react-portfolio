import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { experiences } from "../lib/Experience"
import { motion, useTransform, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

interface Experience {
  company: string
  date: string
  responsibilities: string
  jobDesc: string
  companyLogo: string
}

const Experience = () => {
  return (
    <section className='h-full -scroll-mt-32 overflow-x-hidden' id='experience'>
      <h1 className='text-primary mb-20'> Work Experience</h1>
      <VerticalTimeline className='!mt-20 '>
        {experiences.map((item, i) => {
          return <ExperienceDiv item={item} index={i} key={i} />
        })}
      </VerticalTimeline>
    </section>
  )
}

const ExperienceDiv = ({ item, index }: { item: Experience; index: number }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 500px", "end 600px"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  })

  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <motion.div ref={targetRef} style={{ scale, opacity }} className='project_card'>
      <VerticalTimelineElement
        dateClassName='ml-5'
        className='vertical-timeline-element--work !mb-20 md:!mb-0'
        contentStyle={{
          background: "#040818",
          color: "white",
          border: "2px",
          borderColor: "white",
          animation: "none",
          float: index % 2 === 0 ? "left" : "right",
        }}
        contentArrowStyle={{ left: index % 2 === 0 ? "100%" : "auto", transform: index % 2 === 0 ? "rotate(180)" : "rotate(0)" }}
        iconStyle={{ background: "white", color: "#040818" }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <div className='flex justify-between'>
          <div className='content-center'>
            <h2 className='vertical-timeline-element-title !text-white font-bold !mb-5'>{item.company}</h2>
            <span className='vertical-timeline-element-subtitle text-gray-600 block'>{item.date}</span>
            <span className='vertical-timeline-element-subtitle text-gray-600'>{item.responsibilities}</span>
          </div>

          <img alt={item.company} src={item.companyLogo} className='object-cover w-20 h-20 rounded-full ' />
        </div>

        <p>{item.jobDesc}</p>
      </VerticalTimelineElement>
    </motion.div>
  )
}

export default Experience
