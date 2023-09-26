import { Link } from 'react-router-dom';
import logo from '../assets/mouse-logo.png';

const MobileHeading = () => {

  return (
    <section className='bg-bkg border-b-2 w-full sticky top-0 border-accent-1'>
      <div className='max-w-screen-xl flex-end mx-auto py-2 pl-5 flex-col'>
        <h1 className='flex'>
          <Link to='/'><img src={logo} alt='Squeek' className='w-12 h-12' /></Link>
          <span className='text-content inline-block align-bottom text-2xl pt-3 pl-3'>Squeek</span>
          {/* <i className='bi-envelope text-accent-1 inline-block pt-4 mr-0'></i> */}
        </h1>
      </div>
    </section>
  )
}

export default MobileHeading