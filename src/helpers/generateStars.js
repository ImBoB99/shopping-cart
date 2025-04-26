export default function generateStars(rating) {
  const maxRating = 5;
  const emptyStars = maxRating - Math.floor(rating);
  const fullStars = Math.floor(rating);

  return "★".repeat(fullStars) + "☆".repeat(emptyStars);
}