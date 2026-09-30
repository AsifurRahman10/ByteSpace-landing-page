import CompanyBanner from '@/components/company/CompanyBanner'
import HeroPage from '../components/hero/HeroPage'
import SkillsPage from '@/components/skills/SkillsPage'
import { LearningPath } from '@/components/learingpath/LearningPath'
import FeaturePage from '@/components/hero/FeaturePage'
import CreatorBanner from '@/components/creatorBanner/CreatorBanner'
import Testimonial from '@/components/testimonial/Testimonial'

export default function Page() {
  return (
    <div>
      <HeroPage />
      <CompanyBanner />
      <SkillsPage />
      <LearningPath />
      <FeaturePage />
      <CreatorBanner />
      <Testimonial />
    </div>
  )
}
