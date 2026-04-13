import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

/**
 * 标签组
 */
const TagGroups = ({ tags, className }) => {
  const router = useRouter()
  const { tag: currentTag } = router.query
  if (!tags) return <></>

  return (
    <>
      <style jsx>{`
        .tag-chip {
          color: #4f4a43;
          transition: all 0.15s ease;
        }

        .tag-chip:hover {
          background: #7f8d98;
          color: #ffffff;
          transform: scale(1.06);
        }

        .tag-chip.selected {
          background: #7f8d98;
          color: #ffffff;
        }

        .dark .tag-chip {
          color: #ece5db;
        }

        .dark .tag-chip:hover {
          background: #d1a478;
          color: #ffffff;
        }

        .dark .tag-chip.selected {
          background: #d1a478;
          color: #ffffff;
        }
      `}</style>

      <div id='tags-group' className='dark:border-gray-700 space-y-2'>
        {tags.map((tag, index) => {
          const selected = currentTag === tag.name
          return (
            <SmartLink
              passHref
              key={index}
              href={`/tag/${encodeURIComponent(tag.name)}`}
              className='cursor-pointer inline-block whitespace-nowrap'
            >
              <div
                className={`${className || ''} tag-chip ${
                  selected ? 'selected' : ''
                } flex items-center rounded-lg px-2 py-0.5 duration-150 transition-all`}
              >
                <div className='text-lg'>{tag.name}</div>
                {tag.count ? <sup className='relative ml-1'>{tag.count}</sup> : <></>}
              </div>
            </SmartLink>
          )
        })}
      </div>
    </>
  )
}

export default TagGroups
