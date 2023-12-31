import NoImage from '../assets/images/no-image-placeholder.webp'

export function getCroppedImageUrl(url: string) {
  if (!url) return NoImage

  const target = 'media/'

  const index = url.indexOf(target) + target.length

  if (index === -1) return NoImage

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}
