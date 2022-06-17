import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react";
import {
  Container,
  BtnLogin,
  ContainerBtn,
  ContainerForgotPass,
  ContainerLogoMedias,
  BtnClosed,
} from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { api } from "../../Services/api";
import { useHistory } from "react-router-dom";
import { useUsers } from "../../Providers/Users";

const FormLogin = ({ closeModalLogin, handleChange, openModalRegister }) => {
  const { loginUser } = useUsers();
  const formLoginSchema = yup.object().shape({
    email: yup.string().required("E-mail required *"),
    password: yup.string().required("Password required *"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });

  const onSubmitFunction = (data) => {
    loginUser(data, handleChange, closeModalLogin);
    reset();
  };

  return (
    <Container>
      <BtnClosed>
        <button onClick={closeModalLogin}>X</button>
      </BtnClosed>
      <ContainerLogoMedias>
        <span>Login Directly With</span>
        <div>
          <a href="a" alt="Facebook">
            <FacebookLogo size={32} />
          </a>
          <a href="a" alt="Twitter">
            <TwitterLogo size={32} />
          </a>
          <a href="a" alt="Linkedin">
            <LinkedinLogo size={32} />
          </a>
          <a href="a" alt="Instagram">
            <InstagramLogo size={32} />
          </a>
        </div>
      </ContainerLogoMedias>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          value="email"
          type="text"
          placeholder="Email"
          error={errors.email?.message}
          name="Email"
        />
        <Input
          register={register}
          value="password"
          type="password"
          placeholder="Password"
          error={errors.password?.message}
          name="Password"
        />
        <div className="forgotPassword">
          <a href="*" alt="Reference">
            Forgot Password
          </a>
        </div>
        <ContainerBtn>
          <BtnLogin type="submit">LOGIN</BtnLogin>
        </ContainerBtn>
      </form>
      <ContainerForgotPass>
        <span>
          Not a member?ㅤ
          <label
            htmlFor="Register"
            onClick={() => {
              closeModalLogin();
              openModalRegister();
            }}
          >
            Register
          </label>
        </span>
      </ContainerForgotPass>
    </Container>
  );
};

export default FormLogin;
