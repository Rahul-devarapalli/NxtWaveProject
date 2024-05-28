import styled from "styled-components";

const Cards = styled.div`
  width: 360px;
  height: 192px;
  background: #ffffff;
  margin: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid #D7DFE9;
  border-radius: 4px;
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

const Title = styled.span`
  height: 24px;
  margin-top: 30px;
  font-family: HK Grotesk;
  font-size: 16px;
  font-weight: 500;
`;

const Catagory = styled.span`
  height: 16px;
  font-family: HK Grotesk;
  font-size: 12px;
  font-weight: 400;
`;

const Link = styled.a`
  height: 24px;
  margin-left: 24px;
  font-family: HK Grotesk;
  font-size: 14px;
  font-weight: 400;
  color: #0b69ff;
  cursor: pointer;
`;


const Description = styled.div`
  width: 312px;
  height: 24px;
  margin-left: 24px;
  font-family: HK Grotesk;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #7e858e;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export type CardDetails = {
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag: string;
  id?: string;
};

type CardProps = {
  data :CardDetails
}
export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <Cards>
      <Wrapper>
        <Icon>
          <Img src={data.icon_url} alt="logo" />
        </Icon>
        <Container>
          <Title>{data.title}</Title>
          <Catagory>{data.category}</Catagory>
        </Container>
      </Wrapper>
      <Link>{data.link}</Link>
      <Description>{data.description}</Description>
    </Cards>
  );
};
