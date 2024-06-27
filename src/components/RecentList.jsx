import { Link } from "react-router-dom";
import Footer from '../components/Footer'
 
import RecentItem from '../components/RecentItem'


// import barita from '../../../public/assets/img/recent/barita.png'
import barita from '../../public/assets/img/recent/barita.png'
import pizza from '../../public/assets/img/recent/pizza.png'
import rush from '../../public/assets/img/recent/rush.png'

const RecentList = () => {

  return (
    <>
      
      <RecentItem image = {pizza} title={'Mulberry Pizza by Josh'} rate={4.9} subtitle ={'Café'} product ={'Western Food'} />
      <RecentItem image = {barita} title={'Barita'} rate={4.9} subtitle ={'Café'} product ={'Coffee'}/>
      <RecentItem image = {rush} title={'Pizza Rush Hour'} rate={4.9} subtitle ={'Café'} product ={'Italian Food'}/>
    </>
  );
};

export default RecentList;
