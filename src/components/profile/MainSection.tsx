import React from 'react'

const MainSection = () => {
  return (
    <section className="mt-3 py-6 md:py-8 lg:py-10 px-5 md:px-6 relative">
        <div className="text-center uppercase  text-darkPrimary dark:text-darkSecondary text-xl md:text-4xl font-light  leading-[21px] md:pt-2">
          Highlights
        </div>
        <p className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/10 dark:text-white/10 -z-10 text-6xl md:text-9xl">
          Showcase
        </p>
      </section>
  )
}

export default MainSection