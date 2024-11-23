import type { PropsWithChildren } from 'react'
import Header from './header'

function Layout({children}: PropsWithChildren) {
  return (
    <div className='bg-gradient-to-br from-background to-muted'>

        <Header/> 
        <main className='min-h-screen container mx-auto px-4 py-8'>
        {children}

        </main>
        <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto px-4 text-center text-gray-400'>
                <p>Made with ❤️ by codercastor</p>
            </div>
            <div className='flex justify-center items-center gap-3 mt-3'>
              <a className='' href="https://www.linkedin.com/in/coder-castor/"><img className='h-8' src="/linkedin.png" alt="" /></a>
              <a href="https://github.com/codercastor"><img className='h-12' src="/github.png" alt="" /></a>
              <a href=""><img className='h-10' src="/insta.png" alt="" /></a>
            </div>
        </footer>
    </div>
  )
}

export default Layout