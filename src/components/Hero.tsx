import styled from "styled-components";

const HeroWrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: row;
`;

const HeroImg = styled.img`
  width: 720px;
  height: 1058px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 843px;
  align-items: center;
`;
const FromHeader = styled.h1`
  width: 178px;
  height: 0px;
  margin-top: 152px;
  font-family: Rubik;
  font-size: 32px;
  font-weight: 400;
`;
const FieldWrapper = styled.div`
  text-align: left;
  width: 320px;
  height: 64px;
  border-radius: 2px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  margin-top: 32px;
`;
const Label = styled.label`
  width: 65px;
  height: 16px;
  font-family: HK Grotesk;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #7e858e;
`;

const Input = styled.input<{ Height?: string; Width?: string }>`
  background: #ffffff;
  width: ${(props) => props.Width || 320}px;
  height: ${(props) => props.Height || 40}px;
  margin-top: 8px;
  gap: 0px;
  border-radius: 2px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  border: 1px solid #d7dfe9;
`;

const Button = styled.button`
  width: Hug (93px) px;
  height: Hug (40px) px;
  padding: 8px 20px 8px 20px;
  border-radius: 4px;
  background: #0b69ff;
  border: none;
  color: #ffffff;
  margin-top: 100px;
`;
const TextArea = styled.textarea``;

export const Hero = () => {
  return (
    <HeroWrapper>
      <FormWrapper>
        <FromHeader>Item Details</FromHeader>
        <FieldWrapper>
          <Label>ITEM TITLE</Label>
          <Input value={"iB studio trainees"}></Input>
        </FieldWrapper>

        <FieldWrapper>
          <Label>LINK</Label>
          <Input placeholder={"www.slack.iB studio trainees.com"}></Input>
        </FieldWrapper>

        <FieldWrapper>
          <Label>ICON URL</Label>
          <Input placeholder={"www.slack.iB studio trainees.com"}></Input>
        </FieldWrapper>
        <FieldWrapper>
          <Label>TAG NAME</Label>
          <Input placeholder={"User"}></Input>
        </FieldWrapper>
        <FieldWrapper>
          <Label>CATEGORY</Label>
          <Input placeholder={"slack"}></Input>
        </FieldWrapper>

        <FieldWrapper>
          <Label>DESCRIPTION</Label>
          <Input Height="80" Width="312"></Input>
        </FieldWrapper>

        <Button>CREATE</Button>
      </FormWrapper>

      <HeroImg src="src\assets\hero.jpg" alt="" />
    </HeroWrapper>
  );
};