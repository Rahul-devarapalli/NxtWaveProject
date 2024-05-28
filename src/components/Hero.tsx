import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { addResources } from "../api/resources";
import { useNavigate } from "react-router-dom";

const HeroWrapper = styled.div`
  background-color: #fbfbfb;
  display: flex;
  flex-direction: row;
`;

const HeroImg = styled.img`
  width: 100%;
  max-width: 45rem; /* 720px in rem */
  height: auto;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 52.6875rem; /* 843px in rem */
  align-items: center;
`;

const FormHeader = styled.h1`
  width: 11.125rem; /* 178px in rem */
  margin-top: 9.5rem; /* 152px in rem */
  font-family: Rubik;
  font-size: 2rem; /* 32px in rem */
  font-weight: 400;
`;

const FieldWrapper = styled.div`
  text-align: left;
  width: 20rem; /* 320px in rem */
  height: 4rem; /* 64px in rem */
  border-radius: 0.125rem 0 0 0; /* 2px in rem */
  border: 1px solid transparent;
  margin-top: 2rem; /* 32px in rem */
`;

const Label = styled.label`
  font-family: HK Grotesk;
  font-size: 0.75rem; /* 12px in rem */
  font-weight: 600;
  line-height: 1rem; /* 16px in rem */
  letter-spacing: 0.01em;
  color: #7e858e;
`;

const Input = styled.input<{ Height?: string; Width?: string; color?: string }>`
  background: #ffffff;
  width: ${(props) => props.Width || "20rem"}; /* 320px in rem */
  height: ${(props) => props.Height || "2.5rem"}; /* 40px in rem */
  margin-top: 0.5rem; /* 8px in rem */
  gap: 0;
  border-radius: 0.125rem; /* 2px in rem */
  border: 1px solid #d7dfe9;
  &::placeholder {
    font-family: HK Grotesk;
    font-size: 0.875rem; /* 14px in rem */
    font-weight: 400;
    padding-left: 0.625rem; /* 10px in rem */
    color: ${(props) => props.color};
  }
`;

const Button = styled.button`
  width: 5.8125rem; /* 93px in rem */
  height: 2.5rem; /* 40px in rem */
  padding: 0.5rem 1.25rem; /* 8px 20px in rem */
  border-radius: 0.25rem; /* 4px in rem */
  background: #0b69ff;
  border: none;
  color: #ffffff;
  margin-top: 6.25rem; /* 100px in rem */
`;

const TextArea = styled.textarea`
  width: 19.5rem; /* 312px in rem */
  height: 5rem; /* 80px in rem */
  margin-top: 2rem; /* 32px in rem */
  gap: 0;
  border-radius: 0.125rem 0 0 0; /* 2px in rem */
  border: 1px solid transparent;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  &::placeholder {
    font-family: HK Grotesk;
    font-size: 0.875rem; /* 14px in rem */
    font-weight: 400;
    padding-left: 0.625rem; /* 10px in rem */
    padding-top: 0.625rem; /* 10px in rem */
  }
`;

const Dropdown = styled.select`
  background: #ffffff;
  width: 20rem; /* 320px in rem */
  height: 2.5rem; /* 40px in rem */
  margin-top: 0.5rem; /* 8px in rem */
  gap: 0;
  border-radius: 0.125rem; /* 2px in rem */
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
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
 