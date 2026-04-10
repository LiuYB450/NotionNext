import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  if (!link || !link.show) {
    return null
  }

  return (
    <>
      <style jsx>{`
        .submenu-panel {
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .submenu-item {
          color: #2f2b26;
          transition: all 0.2s ease;
        }

        .submenu-item:hover {
          background: #7f8d98;
          color: #ffffff;
        }

        .dark .submenu-item {
          color: #f3eee7;
        }

        .dark .submenu-item:hover {
          background: #d1a478;
          color: #ffffff;
        }
      `}</style>

      <div
        onMouseOver={() => changeShow(true)}
        onMouseOut={() => changeShow(false)}
      >
        {/* 不含子菜单 */}
        {!hasSubMenu && (
          <SmartLink
            target={link?.target}
            href={link?.href}
            className='hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest'
          >
            {link?.icon && <i className={link?.icon} />} {link?.name}
          </SmartLink>
        )}

        {/* 含子菜单的按钮 */}
        {hasSubMenu && (
          <>
            <div className='cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-2xl flex justify-center items-center px-3 py-1 no-underline tracking-widest relative'>
              {link?.icon && <i className={link?.icon} />} {link?.name}
              {show && (
                <div className='absolute w-full h-4 -bottom-4 left-0 bg-transparent z-30'></div>
              )}
            </div>
          </>
        )}

        {/* 子菜单 */}
        {hasSubMenu && (
          <ul
            className={`submenu-panel ${
              show
                ? 'visible opacity-100 top-14 pointer-events-auto'
                : 'invisible opacity-0 top-20 pointer-events-none'
            } drop-shadow-md overflow-hidden rounded-xl bg-white dark:bg-[#1e1e1e] transition-all duration-300 z-20 absolute`}
          >
            {link.subMenus.map((sLink, index) => {
              return (
                <li
                  key={index}
                  className='submenu-item cursor-pointer tracking-widest py-1 pr-6 pl-3'
                >
                  <SmartLink href={sLink.href} target={link?.target}>
                    <span className='text-sm text-nowrap font-extralight'>
                      {sLink?.icon && <i className={sLink.icon}> &nbsp; </i>}
                      {sLink.title}
                    </span>
                  </SmartLink>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}
