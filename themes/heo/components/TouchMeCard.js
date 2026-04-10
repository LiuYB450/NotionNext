import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

/**
 * 交流频道卡片
 * 目标：与上方 InfoCard 完全复用同一套底色覆盖规则
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }

  return (
    <>
      <style jsx>{`
        .touch-card-pattern {
          position: absolute;
          inset: 0;
          background: url(https://bu.dusays.com/2023/05/16/64633c4cd36a9.png)
            center center / cover no-repeat;
          opacity: 0.12;
          pointer-events: none;
        }

        .touch-card-front,
        .touch-card-back {
          position: relative;
          z-index: 1;
          height: 100%;
        }

        .touch-card-back {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 1.25rem;
          font-weight: 1000;
          color: #ffffff;
        }
      `}</style>

      <div className='relative h-28 text-white flex flex-col'>
        <FlipCard
          className='card cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#4f65f0] dark:bg-yellow-600 text-white overflow-hidden relative dark:border-gray-600'
          frontContent={
            <div className='touch-card-front'>
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
