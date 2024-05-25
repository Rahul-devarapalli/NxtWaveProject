import styled from "styled-components";

const Cards = styled.div`
  width: 360px;
  height: 192px;
  top: 262px;
  left: 148px;
  background: #ffffff;
  margin: 16px;
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  margin: 24px;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  border: 2px;
  background: #ffffff;
  border: 2px solid #d7dfe9;
`;

const Img = styled.img`
  width: 24px;
  height: 20.39px;
  top: 12px;
  left: 10px;
  margin: 12px 10px;
`;

const Title = styled.h5`
  width: 99px;
  height: 24px;
  margin-top: 30px;
  font-family: HK Grotesk;
  font-size: 16px;
  font-weight: 500;
`;

const Catagory = styled.span`
  width: 82px;
  height: 16px;
  top: 52px;
  left: 84px;

  font-family: HK Grotesk;
  font-size: 12px;
  font-weight: 400;
`;
export const Card = () => {
  return (
    <Cards>
      <div>
        <Icon>
          <Img src="http://loremflickr.com/640/480" alt="logo" />
        </Icon>
        <div>
          <Title>Dropbox, Inc.</Title>
          <Catagory>cloud services</Catagory>
        </div>
      </div>
    </Cards>
  );
};
