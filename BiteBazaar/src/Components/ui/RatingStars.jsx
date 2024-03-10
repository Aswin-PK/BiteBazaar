// eslint-disable-next-line react/prop-types
function RatingStars({currentRating}) {
    const stars = "★★★★★☆☆☆☆☆";
    const total = 5;
    const rating = stars.slice(total-currentRating, 2*total - currentRating);

    return rating
}

export default RatingStars