import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 */
export default function LatestPostsGroupMini({ latestPosts, siteInfo }) {
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()
  const SUB_PATH = siteConfig('SUB_PATH', '')

  return latestPosts ? (
    <>
      <style jsx>{`
        .latest-post-item {
          color: #4f4a43;
          transition: color 0.2s ease;
        }

        .latest-post-item:hover {
          color: #5f6f7a;
        }

        .latest-post-item.selected {
          color: #7f8d98;
        }

        .latest-post-date {
          color: #a29a90;
        }

        .dark .latest-post-item {
          color: #e8e1d8;
        }

        .dark .latest-post-item:hover {
          color: #d1a478;
        }

        .dark .latest-post-item.selected {
          color: #d1a478;
        }

        .dark .latest-post-date {
          color: #9f988f;
        }
      `}</style>

      <div className='mb-2 px-1 flex flex-nowrap justify-between'>
        <div>
          <i className='mr-2 fas fas fa-history' />
          {locale.COMMON.LATEST_POSTS}
        </div>
      </div>

      {latestPosts.map(post => {
        const selected = currentPath === `${SUB_PATH}/${post.slug}`
        const headerImage = post?.pageCoverThumbnail
          ? post.pageCoverThumbnail
          : siteInfo?.pageCover

        return (
          <SmartLink
            key={post.id}
            title={post.title}
            href={post?.href}
            passHref
            className='my-3 flex'
          >
            <div className='w-20 h-14 overflow-hidden relative'>
              <LazyImage
                src={`${headerImage}`}
                className='object-cover w-full h-full rounded-lg'
              />
            </div>

            <div
              className={`latest-post-item ${
                selected ? 'selected' : ''
              } text-sm overflow-x-hidden px-2 duration-200 w-full rounded cursor-pointer items-center flex`}
            >
              <div>
                <div className='line-clamp-2 menu-link'>{post.title}</div>
                <div className='latest-post-date'>{post.lastEditedDay}</div>
              </div>
            </div>
          </SmartLink>
        )
      })}
    </>
  ) : null
}
