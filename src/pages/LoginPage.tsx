import styled from "styled-components";
import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 400px;
`;

const FormHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const FieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d7dfe9;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0b69ff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #085ec1;
  }
`;



const LoginPage = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
      navigate("/resources");
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>Login</FormHeader>

        <FieldWrapper>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
          />
          {errors.email && <p>Email is required</p>}
        </FieldWrapper>

        <FieldWrapper>
          <Label>Password</Label>
          <Input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your password"
          />
          {errors.password && <p>Password is required"</p>}
        </FieldWrapper>

        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
