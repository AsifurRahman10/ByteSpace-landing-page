import CompanyBanner from '@/components/company/CompanyBanner'
import HeroPage from '../components/hero/HeroPage'
import SkillsPage from '@/components/skills/SkillsPage'
import { LearningPath } from '@/components/learingpath/LearningPath'

export default function Page() {
  return (
    <>
      <HeroPage />
      <CompanyBanner />
      <SkillsPage />
      <LearningPath />
    </>
  )
}
