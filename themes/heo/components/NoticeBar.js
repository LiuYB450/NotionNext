import { ArrowRightCircle } from '@/components/HeroIcons'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import Swipe from './Swipe'

/**
 * 通知横幅
 * 目标：
 * 1. 保留原有滚动通知逻辑
 * 2. 去掉 heo 默认的 indigo / yellow hover 色
 * 3. 与整站灰蓝主题一致
 */
export function NoticeBar() {
  let notices = siteConfig('HEO_NOTICE_BAR', null, CONFIG)
  const { locale } = useGlobal()

  if (typeof notices === 'string') {
    notices = JSON.parse(notices)
  }

  if (!notices || notices?.length === 0) {
    return <></>
  }

  return (
    <>
      <style jsx>{`
        .notice-shell {
          transition: all 0.2s ease;
        }

        .notice-shell:hover {
          border-color: #7f8d98 !important;
          box-shadow: 0 8px 24px rgba(38, 34, 29, 0.06);
        }

        .notice-center {
          transition: color 0.2s ease;
        }

        .notice-shell:hover .notice-center {
          color: #5f6f7a !important;
        }

        .dark .notice-shell:hover {
          border-color: #8ea0b0 !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.20);
        }

        .dark .notice-shell:hover .notice-center {
          color: #d1a478 !important;
        }
      `}</style>

      <div className='max-w-[86rem] w-full mx-auto flex h-12 mb-4 px-5 font-bold'>
        <div className='notice-shell animate__animated animate__fadeIn animate__fast group cursor-pointer bg-white dark:bg-[#1e1e1e] dark:text-white border dark:border-gray-700 duration-200 transition-all rounded-xl w-full h-full flex items-center justify-between px-5'>
          <span className='whitespace-nowrap'>{locale.COMMON.NOW}</span>

          <div className='notice-center w-full h-full flex justify-center items-center'>
            <Swipe items={notices} />
          </div>

          <div>
            <ArrowRightCircle className='w-5 h-5' />
          </div>
        </div>
      </div>
    </>
  )
}
