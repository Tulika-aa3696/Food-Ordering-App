import { CDN_URL } from "../../utils/constant";
const Restaurant = ({ resData }) => {
    const {cloudinaryImageId,
        name,
        avgRating,
        slaString,
        cuisines,
        areaName
    }=resData?.info;
    return (
        <div className="res-card">
            <img src={ CDN_URL +cloudinaryImageId} alt="Image not rendered!" />
            <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <h3>{slaString}</h3>
            <h3>{cuisines.join(" ")}</h3>
            <h3>{areaName}</h3>
        </div>
    );
}

export default Restaurant;