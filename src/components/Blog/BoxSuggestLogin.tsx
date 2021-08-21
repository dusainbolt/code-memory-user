import Box from "@Common/Box";
import ButtonCommon from "@Common/Button";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const BoxSuggesstLogin: FC<any> = () => {
  const { t } = useTranslation(["common"]);
  return (
    <Box className="card-blog box-suggest-login mb-20">
      <Box className="text-wrap">
        <Typography.Paragraph className="title-1">
          {t("home.txt_btn_login")}
        </Typography.Paragraph>
        <Typography.Paragraph>
          {t("blog.txt_suggest_login")}
        </Typography.Paragraph>
      </Box>
      <ButtonCommon
        href="/login"
        type="primary"
        shape="round"
        fontAWS={faSignInAlt}
        className="btn-login ml-20 mt-16 mb-8"
      >
        {t("blog.login_now")}
      </ButtonCommon>
    </Box>
  );
};

export default BoxSuggesstLogin;
