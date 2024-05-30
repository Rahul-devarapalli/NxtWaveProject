import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeroWrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: row;
`;

const HeroImg = styled.img`
  width: 100%;
  max-width: 45rem; 
  height: auto;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 52.6875rem; 
  align-items: center;
`;

const FormHeader = styled.h1`
  width: 11.125rem; 
  margin-top: 9.5rem; 
  font-family: Rubik;
  font-size: 2rem; 
  font-weight: 400;
`;

const FieldWrapper = styled.div`
  text-align: left;
  width: 20rem; 
  height: 4rem; 
  border-radius: 0.125rem 0 0 0; 
  border: 1px solid transparent;
  margin-top: 2rem; 
`;

const Label = styled.label`
  font-family: HK Grotesk;
  font-size: 0.75rem; 
  font-weight: 600;
  line-height: 1rem; 
  letter-spacing: 0.01em;
  color: #7e858e;
`;

const Input = styled.input<{ Height?: string; Width?: string; color?: string }>`
  background: #ffffff;
  width: ${(props) => props.Width || "20rem"};
  height: ${(props) => props.Height || "2.5rem"}; 
  margin-top: 0.5rem;
  gap: 0;
  border-radius: 0.125rem; 
  border: 1px solid #d7dfe9;
  &::placeholder {
    font-family: HK Grotesk;
    font-size: 0.875rem; 
    font-weight: 400;
    padding-left: 0.625rem; 
    color: ${(props) => props.color};
  }
`;

const Button = styled.button`
  width: 5.8125rem; 
  height: 2.5rem;
  padding: 0.5rem 1.25rem; 
  border-radius: 0.25rem; 
  background: #0b69ff;
  border: none;
  color: #ffffff;
  margin-top: 6.25rem; 
`;

const TextArea = styled.textarea`
  width: 19.5rem; 
  height: 5rem; 
  margin-top: 2rem; 
  gap: 0;
  border-radius: 0.125rem 0 0 0; 
  border: 1px solid transparent;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  &::placeholder {
    font-family: HK Grotesk;
    font-size: 0.875rem; 
    font-weight: 400;
    padding-left: 0.625rem; 
    padding-top: 0.625rem;
  }
`;

const Dropdown = styled.select`
  background: #ffffff;
  width: 20rem; 
  height: 2.5rem; 
  margin-top: 0.5rem; 
  gap: 0;
  border-radius: 0.125rem; 
  border: 1px solid #d7dfe9;
`;

interface FormData {
  title: string;
  link: string;
  icon_url: string;
  tag: string;
  category: string;
  description: string;
}

export const Hero = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      link: "",
      icon_url: "",
      tag: "",
      category: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async () => {
    try {
      // await addResources(data);
      navigate("/resources");
    } catch (error) {
      console.error("Failed to add resources", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HeroWrapper>
        <FormWrapper>
          <FormHeader>Item Details</FormHeader>
          <FieldWrapper>
            <Label>ITEM TITLE</Label>
            <Input
              {...register("title", { required: true, maxLength: 50 })}
              placeholder="iB studio trainees"
            />
            {errors.title && <p>This field is required</p>}
          </FieldWrapper>

          <FieldWrapper>
            <Label>LINK</Label>
            <Input
              {...register("link")}
              color="#0B69FF"
              placeholder="www.slack.iB studio trainees.com"
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label>ICON URL</Label>
            <Input
              {...register("icon_url")}
              color="#0B69FF"
              placeholder="www.slack.iB studio trainees.com"
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label>TAG NAME</Label>
            <Dropdown {...register("tag")}>
              <option value="user">user</option>
              <option value="request">request</option>
            </Dropdown>
          </FieldWrapper>

          <FieldWrapper>
            <Label>CATEGORY</Label>
            <Input {...register("category")} placeholder="slack" />
          </FieldWrapper>

          <FieldWrapper>
            <Label>DESCRIPTION</Label>
            <TextArea
              {...register("description")}
              placeholder="This channel is for iB studio trainees team."
            />
          </FieldWrapper>

          <Button type="submit">CREATE</Button>
        </FormWrapper>
        <HeroImg src="/src/assets/hero.jpg" alt="Hero" />
      </HeroWrapper>
    </form>
  );
};
 