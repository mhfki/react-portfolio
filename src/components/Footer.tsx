const Footer = () => {
  return (
    <footer className='flex justify-center items-center text-center py-5 px-10 bg-white text-secondary'>
      <p>
        © {new Date().getFullYear()} Designed and developed by Muhammad Fikri. Built with React | &nbsp;
        <a href='mailto:mfikri1689@gmail.com' className='text-primary'>
          Contact Me
        </a>
      </p>
    </footer>
  )
}

export default Footer
