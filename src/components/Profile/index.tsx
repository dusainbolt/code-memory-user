/** @format */

import Box from "@Common/Box";
import { FC } from "react";
import { Row, Col, Avatar, Typography, Divider } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Work } from "./Work";
import { Learn } from "./Learn";
import { Skills } from "./Skills";
import { DataBase } from "./Database";
import { AttendedProjects } from "./AttendedProjects";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

const ProfileComponent: FC<any> = () => {
  const { t } = useTranslation(["common"]);

  const INFO_DATA = [
    {
      text: "profile.birthday",
      icon: <CalendarOutlined />,
      col: { xs: 24, md: 8 },
    },
    {
      text: "profile.village",
      icon: <EnvironmentOutlined />,
      col: { xs: 24, md: 8 },
    },
    {
      text: "0328111597",
      icon: <PhoneOutlined />,
      col: { xs: 24, md: 8 },
    },
    {
      text: "profile.email",
      icon: <MailOutlined />,
      col: { xs: 24, md: 8 },
    },
    {
      text: "http://du-sainbolt.web.app/",
      icon: <GlobalOutlined />,
      link: "http://du-sainbolt.web.app/",
      col: { xs: 16 },
    },
  ];

  return (
    <Box container className="profile__container">
      <Fade cascade>
        <Row className="profile__wrap mt-32">
          <Col xs={24} md={8}>
            <Avatar
              className="avatar-profile"
              size={250}
              src="https://appdu-storage.s3-ap-southeast-1.amazonaws.com/118005360_928999227584443_8060562362571425079_o.png"
            />
          </Col>
          <Col md={16} xs={24}>
            <Box className="mb-20 position-box">
              <Typography.Title level={1}>
                {t("profile.my_name")}
              </Typography.Title>
              <Typography.Paragraph className="title-3 position">
                {t("profile.position")}
              </Typography.Paragraph>
            </Box>
            <Row gutter={[8, 16]}>
              {INFO_DATA.map((item, index) => (
                <Col key={index} {...item.col}>
                  {item.icon}{" "}
                  {item?.link ? (
                    <Typography.Link target="_blank" href={item.link}>
                      {item?.link}
                    </Typography.Link>
                  ) : (
                    <Typography.Text>{t(item.text)}</Typography.Text>
                  )}
                </Col>
              ))}
            </Row>
            <Typography.Paragraph className="mt-12 profile__dec">
              {t("profile.dec")}
            </Typography.Paragraph>
          </Col>
        </Row>
      </Fade>
      <Divider />
      <Learn />
      <Divider />
      <Work />
      <Divider />
      <Skills />
      <Divider />
      <Fade cascade>
        <DataBase />
      </Fade>
      <Divider />
      <AttendedProjects />
    </Box>
  );
};

export default ProfileComponent;
