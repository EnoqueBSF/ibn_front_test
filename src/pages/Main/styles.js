import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Box = styled.div``;

export const Space = styled.div`
  padding: 2% 0 2% 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;

  > p {
    color: #00516f;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    text-align: center;
  }
`;

export const TidingList = styled.ul`
  padding: 0 12% 0 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    border-radius: 15px;
    width: 200px;
    border: 1px solid #b5b3b3;

    img {
      border-radius: 15px 15px 0 0;
    }
  }
`;

export const Title = styled.p`
  color: #484848;
  padding: 5% 5% 0 5%;
  font-size: 14px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  text-align: justify;
`;

export const Time = styled.p`
  color: #4d4d4d;
  padding: 0 5% 5% 5%;
  font-size: 12px;
  font-family: Poppins, sans-serif;
`;

export const ScheduleList = styled.ul`
  display: flex;
  flex-direction: row;
  background: linear-gradient(90deg, #00516f, #0883b1);
  justify-content: space-between;
  padding: 5% 12% 5% 12%;

  li {
    display: flex;
    background: #fff;
    padding: 2%;
    border-radius: 10px;
    flex-direction: column;
    width: 20%;
    max-width: 206px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Bottom = styled.p`
  color: #484848;
  font-size: 20px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
`;
export const Box1 = styled.p`
  color: #484848;
  font-size: 45px;
  font-weight: 900;
  font-family: Poppins, sans-serif;
`;
export const Box2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    color: #00516f;
    font-size: 17px;
    width: 80%;
    line-height: 20px;
    font-weight: 600;
    font-family: Poppins, sans-serif;
  }
`;

export const IbnTV = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1% 0;
  background-color: #00516f;
  border-radius: 0 0 50px 50px;

  p {
    color: #fff;
    font-family: Poppins, sans-serif;
    font-weight: 900;
  }

  a {
    background-color: #0b8cbb;
    border-radius: 10px;
    padding: 0.5% 2%;
    color: #fff;
    font-weight: 500;
  }
`;
