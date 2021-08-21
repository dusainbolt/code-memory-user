import Box from "@Common/Box";
import { FC } from "react";
import { Formik, Field } from "formik";
import { InputComponent } from "@Common/Input";
import ButtonCommon from "@Common/Button";
import * as Yup from "yup";
import { LoginInput } from "src/types/LoginModel";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

interface ILoginForm {
  submitLogin?: any;
}

export const LoginForm: FC<ILoginForm> = ({ submitLogin }) => {
  const { t } = useTranslation(["common"]);
  const initialValues = { credential: "", password: "" } as LoginInput;
  const validateLoginInput = Yup.object({
    credential: Yup.string().required(
      t("message.MSG_1", { fieldName: t("login.credential") })
    ),
    password: Yup.string().required(
      t("message.MSG_1", { fieldName: t("login.password") })
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitLogin}
      validationSchema={validateLoginInput}
    >
      {({ handleSubmit }) => (
        <Box className="login__form mt-30">
          {/* <GoogleLogin clientId={GOOGLE_CLIENT_ID} buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} /> */}
          <Box className="form__row">
            <Field
              name="credential"
              onPressEnter={handleSubmit}
              label={t("login.credential")}
              prefix={<UserOutlined />}
              placeholder={t("login.place_credential")}
              component={InputComponent}
            />
          </Box>
          <Box className="form__row">
            <Field
              name="password"
              passwordMode
              onPressEnter={handleSubmit}
              prefix={<LockOutlined />}
              label={t("login.password")}
              placeholder={t("login.place_password")}
              component={InputComponent}
            />
          </Box>
          <ButtonCommon
            actionTypeLoading="loginActionTypes/POST_LOGIN_REQUESTING"
            onClick={handleSubmit}
            className="btn-submit mt-20"
            type="primary"
            shape="round"
          >
            {t("home.txt_btn_login")}
          </ButtonCommon>
        </Box>
      )}
    </Formik>
  );
};
