import {footerLogo, } from '../assets/images'
import {copyrightSign} from '../assets/icons'
import {socialMedia, footerLinks} from '../constants'
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-center items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
            <p className="leading-7 text-base mt-6 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards </p>
          </a>
          <div className="flex items-center gap-5 my-8">
            {socialMedia.map((icon) => {
              return (
                <div key={icon.alt} className="flex justify-center w-12 h-12 items-center bg-white rounded-full">
                  <img  src={icon.src} alt={icon.alt} width={24} height={24}/>
                </div>
              );
            })}
           </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => {
              return (
                <div key={section}>
                   <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                   <ul>
                       {section.links.map((link) => {
                        return (
                          <li key={link.name} className='text-white-400 mt-3 text-base font-monteserrat hover:text-slate-gray cursor-pointer'>
                             <a>{link.name}</a>
                          </li>
                        );
                       })}
                   </ul>
                </div>
              );
            })}

        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-monteserrat cursor-pointer ">
          <img 
             src={copyrightSign}
             alt="copy right sign"
             width={20}
             height={20}
             className='rounded-full m-0'
            />
            <p>Copyright. All rishts reserved</p>
        </div>
        <p className="font-monteserrat text-white-400 cursor-pointer">Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer