import { Link } from "react-router-dom";

import HomeSlideItem from './HomeSlideItem'

import ham from '../../../public/assets/img/slide/ham.png'
import sri from '../../../public/assets/img/slide/sri.png'
import indian from '../../../public/assets/img/slide/indian.png'
import italian from '../../../public/assets/img/slide/italian.png'
 
const OfferList = () => {

    return (
        <>
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="Sri Lankan" image={sri} />
            <HomeSlideItem title="italian " image={italian} />
            <HomeSlideItem title="indian" image={indian} />
            
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="italian " image={italian} />
            <HomeSlideItem title="indian" image={indian} />
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="Sri Lankan" image={sri} />
            <HomeSlideItem title="indian" image={indian} />
            
            <HomeSlideItem title="Offers" image={ham} />
            <HomeSlideItem title="italian " image={italian} />
            <HomeSlideItem title="indian" image={indian} />
        </>
    );
};

export default OfferList;
