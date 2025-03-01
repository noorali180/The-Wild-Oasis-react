import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "nooralib180@gmail.com",
      password: "Noorali123",
    },
  });

  function onSubmit(data) {
    const { email, password } = data;

    login(
      { email, password },
      {
        onSettled: () => {
          setValue("email", "");
          setValue("password", "");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          disabled={isLoading}
          {...register("email", { required: "Please provide an email" })}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isLoading}
          {...register("password", {
            required: "Please provide a password",
            minLength: {
              value: 6,
              message: "Password must be greater than six letters",
            },
            pattern: {
              value: /^\S+$/,
              message: "Password should not contain spaces",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" type="submit" x>
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
