import { Container } from '../../../components/global/Container'
import Navbar from '../../../components/global/navbar'
import React from 'react'
import Image from 'next/image'
import heroImg from '../../../public/assets/projectHero.png'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ProjectHero from '../../../components/our works/ProjectHero'
import { GetStaticPaths } from 'next/types'

// export async function getStaticPaths(id:string) {
//   return {
//     paths: [
//       // String variant:
//       '/our-works/[id]',
//       // Object variant:
//       { params: { id: 'second-post' } },
//     ],
//     fallback: true,
//   }
// }

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
const page = () => {

  return (
    <div>
      <ProjectHero/>
    </div>
  )
}

export default page