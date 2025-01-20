import SwipeCarousel from "./SwiperCarousel"
import { projects } from "../lib/Projects"

const Projects = () => {
  return (
    <section className='h-full my-20 scroll-mt-20' id='projects'>
      <h1 className='text-primary mb-10'>Featured projects</h1>
      <SwipeCarousel  content={projects}></SwipeCarousel>
    </section>
  )
}

export default Projects
