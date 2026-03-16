import BLOG from "@/blog.config"

export default function getAllPageIds(collectionQuery, collectionId, collectionView, viewIds) {
  if (!collectionQuery && !collectionView) {
    return []
  }
  let pageIds = []
  try {
    // Notion数据库中的第几个视图用于站点展示和排序：
    const groupIndex = BLOG.NOTION_INDEX || 0
    if (viewIds && viewIds.length > 0) {
      const ids = collectionQuery[collectionId][viewIds[groupIndex]]?.collection_group_results?.blockIds || []
      // 修复：只添加合法的字符串ID，过滤空值/无效值
      for (const id of ids) {
        if (typeof id === 'string' && id.trim()) {
          pageIds.push(id)
        }
      }
    }
  } catch (error) {
    // 修复：删除访问不到的ids变量，避免二次报错
    console.error('Error fetching page IDs:', error);
    return [];
  }

  // 否则按照数据库原始排序
  if (pageIds.length === 0 && collectionQuery && Object.values(collectionQuery).length > 0) {
    const pageSet = new Set()
    Object.values(collectionQuery[collectionId]).forEach(view => {
      // 修复：增加ID合法性校验
      view?.blockIds?.forEach(id => typeof id === 'string' && id.trim() && pageSet.add(id))
      view?.collection_group_results?.blockIds?.forEach(id => typeof id === 'string' && id.trim() && pageSet.add(id))
    })
    pageIds = [...pageSet]
  }
  return pageIds
}
