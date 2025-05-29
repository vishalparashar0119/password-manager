import React from 'react'

const Footer = () => {
    return (
        <div className='md:h-[40vh] bg-slate-800 text-white px-4 py-10 flex flex-col md:flex-row gap-5  lg:px-20 md:justify-between md:px-20 '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl'>About Us</h1>
                <a className='text-sm hover:text-green-400' href="">Our Mission</a>
                <a className='text-sm hover:text-green-400' href="">How It Works</a>
                <a className='text-sm hover:text-green-400' href="">Security Practices</a>
                <a className='text-sm hover:text-green-400' href="">Team / Careers</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl'>Contact & Social</h1>
                <a className='text-sm hover:text-green-400' href="mailto:support@yourdomain.com">Support</a>
                <a className='text-sm hover:text-green-400' href="https://twitter.com/yourhandle" target="_blank">Twitter</a>
                <a className='text-sm hover:text-green-400' href="https://linkedin.com/company/yourcompany" target="_blank">LinkedIn</a>
                <a className='text-sm hover:text-green-400' href="https://github.com/yourrepo" target="_blank">GitHub</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xl'>Legal</h1>
                <a className='text-sm hover:text-green-400' href="/privacy-policy">Privacy Policy</a>
                <a className='text-sm hover:text-green-400' href="/terms-and-conditions">Terms & Conditions</a>
                <a className='text-sm hover:text-green-400' href="/cookie-policy">Cookie Policy</a>
                <a className='text-sm hover:text-green-400' href="/responsible-disclosure">Responsible Disclosure</a>
            </div>


        </div>
    )
}

export default Footer