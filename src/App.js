import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Header from './components/header';

export default function App() {
  return (
    <>
    <Wrapper>
      <Header/>
      <Spline className='spline-sc1' scene="https://prod.spline.design/M57U9ubdxKCmqtIF/scene.splinecode" />
    </Wrapper>
    
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  .spline-sc1{
    margin: 0 auto;
  }
`;