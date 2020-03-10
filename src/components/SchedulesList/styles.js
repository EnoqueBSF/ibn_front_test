import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, #00516f, #0883b1);
  padding: 2% 8% 5% 8%;
  align-items: center;
`;

export const Header = styled.div`
  padding: 3% 0 3% 0;

  > p {
    color: #00516f;
    font-size: 18px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    text-align: center;
  }
`;
export const Footer = styled.div`
  padding: 3% 0 3% 0;
`;
export const List = styled.ul`
  padding-top: 2%;
  display: flex;
  flex-direction: row;
  background: none;
  justify-content: space-between;
  width: 100%;

  li {
    display: flex;
    background: #fff;
    padding: 2%;
    border-radius: 10px;
    flex-direction: column;
    width: 22%;
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
