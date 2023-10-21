import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>

        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.svg" alt='Car Logo' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>Find best and reliable <br />car in the world!</p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => {
            return (
              <div key={link.title} className='footer__link'>
                <h3 className='font-bold'>{link.title}</h3>
                {link.links.map((item) => {
                  return (
                    <Link href={item.url} key={item.title}
                      className='text-gray-500'
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex justify-between item-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 CarHub. All Right Reserved</p>
        <div className='footer__copyrights-link'>
          <Link href="/" className='text-gary-500'>
            Privacy Policy
          </Link>
          <Link href="/" className='text-gary-500'>
            Term of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer