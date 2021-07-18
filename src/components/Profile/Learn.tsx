/** @format */

import Box from "@Common/Box";
import { FC } from "react";
import { Row, Col, Typography } from "antd";
import useTranslation from "@Common/LanguageProvider/useTranslation";
import AntImage from "@Common/Image";
import { staticPath } from "@Utils/func";

export const Learn: FC<any> = () => {
  const { t } = useTranslation();
  return (
    <Box className="profile__wrap mt-32">
      <Typography.Title className="title-wrap mb-16" level={3}>
        {t("profile.learn_time")}
      </Typography.Title>
      <Row gutter={[8, 32]}>
        <Col xs={24}>
          <Box className="profile__info-circle flx-center align-left">
            <Box className="profile__avatar-content mr-12">
              <AntImage
                src={staticPath("/images/profile/HVKTMM.png")}
                alt="Ảnh trường đại học của Lê Huy Du"
              />
            </Box>
            <Box className="profile__info-text-time flx-center">
              <Typography.Title className="profile__info-text" level={4}>
                {t("profile.university")}
              </Typography.Title>
              <Typography.Paragraph className="profile__info-job">
                {t("profile.university_job")}
              </Typography.Paragraph>

              <Typography.Paragraph className="profile__info-time">
                {t("profile.university_time")}
              </Typography.Paragraph>
            </Box>
          </Box>
        </Col>
      </Row>
    </Box>
  );
};
