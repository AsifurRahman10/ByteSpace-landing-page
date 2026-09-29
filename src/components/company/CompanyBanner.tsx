import Image from 'next/image'
import company1 from '../../../public/images/company/company1.png'
import company2 from '../../../public/images/company/company2.png'
import company3 from '../../../public/images/company/company3.png'
import company4 from '../../../public/images/company/company4.png'
import company5 from '../../../public/images/company/company5.png'

const CompanyBanner = () => {
  return (
    <div className='min-h-48 bg-neutral-50 py-5 sm:py-0 grid grid-cols-2 place-items-center gap-6 px-6 lg:flex lg:flex-row lg:justify-center lg:gap-16 lg:px-0'>
      <Image
        src={company1}
        alt='demo-company-1'
        width={167}
        height={41}
      />
      <Image
        src={company2}
        alt='demo-company-1'
        width={167}
        height={41}
      />
      <Image
        src={company3}
        alt='demo-company-1'
        width={167}
        height={41}
      />
      <Image
        src={company4}
        alt='demo-company-1'
        width={167}
        height={41}
      />
      <Image
        src={company5}
        alt='demo-company-1'
        width={167}
        height={41}
        className='col-span-2 lg:col-span-auto'
      />
    </div>
  )
}

export default CompanyBanner
