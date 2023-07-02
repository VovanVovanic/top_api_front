"use client";
import classes from "./Auth.module.scss";
import cn from "classnames";
import { IAuth, IAuthForm, IAuthVariant } from "./AuthTypes";
import { Buttons, Htag, Input } from "@/app/components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Auth: React.FC<IAuth> = ({ variant, className, ...props }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAuthForm>();

  const getTitle = () => {
    switch (variant) {
      case IAuthVariant.Login:
        return "Login";
      case IAuthVariant.Register:
        return "Register";
      case IAuthVariant.PasswordRecover:
        return "Recover Password";
      default:
        return "";
    }
  };

  const submitHandler = (data: IAuthForm) => {
    switch (variant) {
      case IAuthVariant.Login:
        console.log("Login", data);
      case IAuthVariant.Register:
        console.log("Register", data);
      case IAuthVariant.PasswordRecover:
        console.log("Recover Password", data);
      default:
        console.log("", data);
    }
  };

  const authRoute = variant === IAuthVariant.Login ? "/register" : "/login";
  const authTitle = variant === IAuthVariant.Login ? "Register" : "Login";
  return (
    <>
      <Htag tag="h2" className={classes.title}>
        {getTitle()}
      </Htag>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={cn(classes.authForm, className)}
        {...props}
      >
        <div className={classes.inputWrap}>
          <Htag tag="h3" className={classes.authInputTitle}>
            Email
          </Htag>
          <Input
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
            error={errors.email}
            placeholder="Enter Email"
            className={classes.email}
          />
        </div>
        {variant !== IAuthVariant.PasswordRecover ? (
          <div className={classes.inputWrap}>
            <Htag tag="h3" className={classes.authInputTitle}>
              Password
            </Htag>
            <Input
              {...register("password", {
                required: { value: true, message: "Password is required" },
              })}
              error={errors.password}
              placeholder="Enter Password"
              className={classes.password}
            />
          </div>
        ) : (
          ""
        )}
        <Buttons appearance="primary" tabIndex={0} onAction={() => {}}>
          Send
        </Buttons>

        {variant !== IAuthVariant.PasswordRecover ? (
          <Link href={authRoute} className={classes.authLink}>
            {authTitle}
          </Link>
        ) : (
          ""
        )}

        {variant !== IAuthVariant.PasswordRecover ? (
          <Link href={"/password_recover"} className={classes.authLink}>
            Forgot Password?
          </Link>
        ) : (
          ""
        )}

        {variant === IAuthVariant.PasswordRecover ? (
          <Link href={"/login"} className={cn(classes.authLink, classes.back)}>
            To Login
          </Link>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default Auth;
