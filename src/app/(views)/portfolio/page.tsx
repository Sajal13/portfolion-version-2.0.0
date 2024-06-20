'use client'

import Intro from '@/components/profile/Intro'
import ProjectItems from '@/components/profile/ProjectItems'
import MainSection from '@/components/profile/MainSection'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <main className='container mx-auto mb-6 md:mb-10 lg:mb-14'>
      <MainSection />
      <Intro />
      <ProjectItems />
    </main>
  )
}

export default Page