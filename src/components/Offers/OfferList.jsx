import OffersItem from './OffersItem'

import CafeImage from '../../../public/assets/img/offers/cafe.png'
import IssoImage from '../../../public/assets/img/offers/isso.png'
import BeanImage from '../../../public/assets/img/offers/bean.png'

const OfferList = () => {

  return (
    <>
      <OffersItem image={CafeImage} title={'Café de Noires'} rate={4.9} subtitle={'(124 ratings) Café'} />
      <OffersItem image={IssoImage} title={'Isso'} rate={4.9} subtitle={'(124 ratings) Café'} />
      <OffersItem image={BeanImage} title={'Cafe Beans'} rate={4.9} subtitle={'(124 ratings) Café'} />
    </>
  );
};

export default OfferList;
