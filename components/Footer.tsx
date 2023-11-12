import { BiCopyright } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <div className="pt-16 pb-4 flex-center flex-col gap-2">
      <div className='flex-center gap-5'>
        <a href="https://github.com/vorxsaken" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a href="https://twitter.com/vorxsaken" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/v0rxsak3n" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="flex-center gap-1">
        <span>2023 Alfahmi</span>
        <BiCopyright className='text-base' />
      </div>
    </div>
  )
}

export default Footer