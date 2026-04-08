import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const Logo = props => {
  const { siteInfo } = props

  return (
    <>
      <style jsx>{`
        .logo-home-pill {
          background: rgba(95, 111, 122, 0.96);
          color: #ffffff;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .dark .logo-home-pill {
          background: rgba(142, 160, 176, 0.92);
          color: #ffffff;
        }
      `}</style>

      <SmartLink href='/' passHref legacyBehavior>
        <div className='flex flex-nowrap items-center cursor-pointer font-extrabold'>
          <LazyImage
            src={siteInfo?.icon}
            width={24}
            height={24}
            alt={siteConfig('AUTHOR')}
            className='mr-4 hidden md:block'
          />

          <div id='logo-text' className='group rounded-2xl flex-none relative'>
            {/* 默认显示站点标题 */}
            <div className='logo group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200'>
              {siteConfig('TITLE')}
            </div>

            {/* hover 后显示主页图标胶囊 */}
            <div className='logo-home-pill flex justify-center rounded-2xl w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
              <Home className='w-6 h-6 stroke-white stroke-2' />
            </div>
          </div>
        </div>
      </SmartLink>
    </>
  )
}

export default Logo
