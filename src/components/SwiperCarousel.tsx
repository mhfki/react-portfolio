import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

type Content = {
  headline: string
  timeline: string
  background: string
  logo: string
  src: string
  src2?: string
  responsibilities: string
  description: string
  jobDesc: string
  techStack: string[]
  siteAvailability: boolean
  site?: string
}

interface Props {
  content: Content[]
}

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: "spring",
  mass: 5,
  stiffness: 100,
  damping: 50,
}

const SwipeCarousel = ({ content }: Props) => {
  const [imgIndex, setImgIndex] = useState(0)
  const [imageWidth, setImageWidth] = useState(0)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const dragX = useMotionValue(0)
  const updateImageWidth = () => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.clientWidth)
    }
  }

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === content.length - 1) {
            return 0
          }
          return pv + 1
        })
      }
    }, AUTO_DELAY)

    // Initial width capture
    updateImageWidth()

    // Add resize event listener
    window.addEventListener("resize", updateImageWidth)

    // Clean up the event listener on component unmount
    return () => {
      clearInterval(intervalRef)
      window.removeEventListener("resize", updateImageWidth)
    }
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < content.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  return (
    <div className='relative overflow-hidden bg-black rounded-xl pb-10'>
      <div className='flex items-center'>
        {content.map((item, i) => {
          return (
            <motion.div
              key={i}
              ref={i === imgIndex ? imageRef : null} // Attach ref to the currently visible image
              onDragEnd={onDragEnd}
              drag='x'
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              transition={SPRING_OPTIONS}
              style={{
                x: dragX,
                backgroundImage: `url(${item.background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              animate={{
                scale: imgIndex === i ? 0.8 : 0.6,
                translateX: `-${imgIndex * imageWidth}px`,
              }}
              whileHover={{ scale: 0.9 }}
              className='w-[20rem] h-[45rem] md:w-[40rem] md:h-[50rem] lg:w-[50rem] lg:h-[45rem] xl:w-[64rem] 2xl:w-[80rem] shrink-0 rounded-xl bg-neutral-800 bg-opacity-100 '
            >
              <div className='bg-black grid w-full h-full bg-opacity-50 px-4 md:px-10 text-white rounded-xl gap-2'>
                <div className='header-card content-center mt-2 md:mt-10 relative w-full'>
                  <img className='w-16 lg:w-fit' src={item.logo} />
                  {item.siteAvailability && (
                    <a href={item.site} target='_blank' className='absolute top-0 right-0 rounded-full bg-white p-3'>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-secondary w-8 h-8' />
                    </a>
                  )}
                </div>
                <div className='container-card'>
                  <div className='flex flex-col-reverse gap-5 lg:flex-row xl:gap-0'>
                    <div className='flex-1'>
                      <div className='headline-card uppercase text-white opacity-60 font-semibold'>{item.responsibilities}</div>
                      <div className='description-card my-8 uppercase text-sm w-56 md:w-full lg:w-64 md:text-xl font-semibold'>
                        {item.description}
                      </div>
                      <div className='item-card w-56 text-sm md:w-full lg:w-64 mb-8'>{item.jobDesc}</div>
                      <div className='grid gap-2 [grid-template-columns:_repeat(2,_minmax(100px,_0px))] md:[grid-template-columns:_repeat(3,_minmax(150px,_0px))] lg:[grid-template-columns:_repeat(3,_minmax(100px,_0px))] xl:w-fit 2xl:grid-cols-4 items-center pr-10 lg:pr-5'>
                        {item.techStack.map((tech, i) => {
                          return (
                            <span key={i} className='bg-[#3e3e3e] py-1.5 px-2 rounded-lg text-primary'>
                              {tech}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                    <div className='flex-1 '>
                      <img src={item.src} className='w-[17rem] md:w-[50rem] rounded-xl object-cover' alt={item.src} />
                      <img
                        src={item.src2}
                        className='absolute top-36 right-0 md:bottom-5 md:-right-3.5 w-16 md:w-28 rounded-xl object-cover'
                        alt={item.src2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      <div className='flex w-full justify-center gap-2'>
        {content.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setImgIndex(i)}
              className={`h-3 w-3 rounded-full transition-colors ${i === imgIndex ? "bg-neutral-50" : "bg-neutral-500"}`}
            />
          )
        })}
      </div>

      <div className='absolute bottom-0 left-0 md:left-[2%] top-0 flex items-center cursor-pointer'>
        <div
          className='rounded-full bg-white w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:bg-secondary text-primary transition duration-300'
          style={{ display: imgIndex === 0 ? "none" : "flex" }}
          onClick={() => {
            setImgIndex((pv) => {
              if (imgIndex == 0) {
                return 0
              }
              return pv - 1
            })
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} className='w-[50%] h-[50%]' />
        </div>
      </div>
      <div className='absolute bottom-0 right-0 md:right-[2%] top-0  flex items-center cursor-pointer'>
        <div
          className='rounded-full bg-white w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:bg-secondary text-primary transition duration-300'
          style={{ display: imgIndex === content.length ? "none" : "flex" }}
          onClick={() => {
            setImgIndex((pv) => {
              if (pv === content.length - 1) {
                return 0
              }
              return pv + 1
            })
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} className='w-[50%] h-[50%]' />
        </div>
      </div>
    </div>
  )
}

export default SwipeCarousel
