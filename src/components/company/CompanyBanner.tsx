import Image from 'next/image'

const companies = [
  'company1.png',
  'company2.png',
  'company3.png',
  'company4.png',
  'company5.png'
]

const CompanyBanner = () => {
  return (
    <div className='grid min-h-48 grid-cols-2 place-items-center gap-3 bg-neutral-50 px-6 py-5 md:py-3 sm:py-0 lg:flex lg:justify-center lg:gap-16 lg:px-0'>
      {companies.map((company, index) => (
        <Image
          key={company}
          src={`/images/company/${company}`}
          alt={`Company ${index + 1}`}
          width={167}
          height={41}
          className={`h-auto w-30 sm:w-35 lg:w-41.75 ${
            index === companies.length - 1 ? 'col-span-2 lg:col-span-auto' : ''
          }`}
        />
      ))}
    </div>
  )
}

export default CompanyBanner
