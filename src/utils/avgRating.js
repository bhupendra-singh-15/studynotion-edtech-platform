export default function GetAvgRating(ratingArr) {
  if (!ratingArr || ratingArr.length === 0) return 0

  const totalReviewCount = ratingArr.reduce((acc, curr) => {
    return acc + (curr.rating || 0)
  }, 0)

  const avg = totalReviewCount / ratingArr.length

  return Math.round(avg * 10) / 10
}
