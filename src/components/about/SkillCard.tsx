'use client'

import React, {Fragment} from 'react';


type Props = {
  item: any
}

const SkillCard = ({item}: Props) => {
  return (
    <div className='mb-10 md:mb-14 lg:mb-28' >
      <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-lightSecondary dark:text-darkSecondary uppercase mb-7 sm:mb-8 md:mb-10 xl:mb-14 text-center'>
        {item.header}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 md:gap-12 xl:gap-14">
        {item.skillSet.map((skill: any) => (
          <div key={skill.id} className='text-center'>
            <div className='p-6 bg-lightPrimary dark:bg-tertiary rounded-full w-fit mx-auto transition-colors duration-300 ease-linear'>
              <i className='text-3xl md:text-5xl lg:text-6xl text-white'>
                {skill.icon}
              </i>
            </div>
            <div className='my-2 md:my-3 lg:my-4'>
              <h5 className='text-xl md:text-[22px] lg:text-2xl text-lightSecondary dark:text-darkSecondary font-medium'>
                {skill.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard