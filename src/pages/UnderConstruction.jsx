import MainLayout from '../layouts/MainLayout';
import UnderConstructionImg from '../assets/img/under construction.webp';
import GoBackButton from '../components/GoBackButton';

const UnderConstuction = () => {
  return (
    <MainLayout>
      <h2>Under Construction</h2>
      <p>Thank you for your patience</p>
      <p>This page is under active construction and should be available soon.</p>
      <img src={UnderConstructionImg} alt="" id='heroImg'/>
      <p>You can check out my other accounts in the mean time:</p>
      <GoBackButton/> 
    </MainLayout>
  );
};

export default UnderConstuction;