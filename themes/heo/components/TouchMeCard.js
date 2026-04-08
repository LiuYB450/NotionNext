import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 交流频道卡片
 * 改造目标：
 * 1. 与整站“灰蓝 + 暖白”主题一致
 * 2. 保留翻转交互
 * 3. 保留原有装饰背景，但降低高饱和感
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }

  return (
    <>
      <style jsx>{`
        .touch-card-surface {
          background: linear-gradient(135deg, #5f6f7a 0%, #70808b 55%, #8c98a1 100%);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.06);
          overflow: hidden;
          position: relative;
        }

        .touch-card-surface::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.04);
          pointer-events: none;
        }

        .touch-card-pattern {
          position: absolute;
          inset: 0;
          background: url(https://bu.dusays.com/2023/05/16/64633c4cd36a9.png)
            center center / cover no-repeat;
          opacity: 0.16;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .touch-card-back {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-weight: 1000;
          font-size: 1.25rem;
          color: #ffffff;
        }

        .dark .touch-card-surface {
          background: linear-gradient(135deg, #23282f 0%, #2d343d 55%, #3a424c 100%);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.06);
        }

        .dark .touch-card-pattern {
          opacity: 0.12;
        }
      `}</style>

      <div className='relative h-28 text-white flex flex-col'>
        <FlipCard
          className='touch-card-surface cursor-pointer lg:p-6 p-4 border rounded-xl dark:border-gray-600'
          frontContent={
            <div className='relative h-full z-10'>
              <h2 className='font-[1000] text-3xl'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_1', null, CONFIG)}
              </h2>
              <h3 className='pt-2'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_2', null, CONFIG)}
              </h3>
              <div className='touch-card-pattern'></div>
            </div>
          }
          backContent={
            <SmartLink
              href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}
              className='w-full h-full'
            >
              <div className='touch-card-back'>
                {siteConfig('HEO_SOCIAL_CARD_TITLE_3', null, CONFIG)}
              </div>
            </SmartLink>
          }
        />
      </div>
    </>
  )
}
