import {headerlogo} from '../assets/images';
import {hamburgur} from '../assets/icons';
import { navLinks } from '../constants';
const nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
               <img src="headerlogo" 
               alt="Logo"
               width={130}
               height={29}  />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max1g:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {item.label}
                        </a>

                    </li>
                ))}


            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburgur} 
                alt="Hamburgur" 
                width={25}
                height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default nav