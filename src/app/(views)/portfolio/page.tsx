'use client'

import React from 'react'
import Intro from '@/components/profile/Intro'
import ProjectItems from '@/components/profile/ProjectItems'
import MainSection from '@/components/profile/MainSection'
import Layout from '@/layouts/Layout'

type Props = {}

const Page = (props: Props) => {
  return (
    <Layout pageTitle='Sajal Das || My Works'>
      <main className='container mx-auto mb-6 md:mb-10 lg:mb-14'>
      <MainSection />
      <Intro />
      <ProjectItems />
    </main>
    </Layout>
  )
}

export default Page