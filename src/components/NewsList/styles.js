import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 0 8% 0 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    width: 200px;
    border: 1px solid #b5b3b3;

    img {
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
