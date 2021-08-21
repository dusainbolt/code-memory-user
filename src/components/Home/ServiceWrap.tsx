import ButtonCommon from "@Common/Button";
import AntImage from "@Common/Image";
import Box from "@Common/Box";
import { staticPath } from "@Utils/func";
import { Col, Divider, Row, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";

// interface _ServiceWrap {}

const ServiceWrap: React.FC<any> = ({}) => {
  const { t } = useTranslation(["common"]);

  const DATA_SERVICE = [
    {
      title: t("menu.txt_blog"),
      description: t("home.service_blog_description"),
      link: "",
      labelButton: t("home.txt_btn_view_blog"),
      urlImage: "/images/service_blog.webp",
      imageAlignLeft: true,
    },
    {
      title: t("home.txt_title_course_service"),
      description: t("home.service_course_service_description"),
      link: "",
      labelButton: t("home.txt_btn_view_course"),
      urlImage: "/images/service_course.webp",
      imageAlignLeft: false,
    },
    {
      title: t("home.txt_title_forum_service"),
      description: t("home.service_talk_description"),
      link: "",
      labelButton: t("home.txt_btn_view_forum"),
      urlImage: "/images/service_forum.webp",
      imageAlignLeft: true,
    },
    {
      title: t("home.txt_title_develop_service"),
      description: t("home.service_develop_service_description"),
      link: "",
      labelButton: t("home.txt_btn_view_develop"),
      urlImage: "/images/service_develop.webp",
      imageAlignLeft: false,
    },
  ];

  return (
    <Box className="home-service__container" container>
      <Typography.Text className="home--title title txt-center">
        {t("home.title_service")}
      </Typography.Text>
      {DATA_SERVICE.map((item, index) => {
        return (
          <Row
            gutter={[40, 40]}
            key={index}
            className="home-service--row m-tb-30"
          >
            <Divider />
            <Col
              xs={{ span: 24, order: 1 }}
              lg={{ span: 12, order: item.imageAlignLeft ? 1 : 2 }}
            >
              <AntImage alt={item.title} src={staticPath(item.urlImage)} />
            </Col>
            <Col
              className="home-service--content"
              xs={{ span: 24, order: 2 }}
              lg={{ span: 12, order: item.imageAlignLeft ? 2 : 1 }}
            >
              <Space direction="vertical">
                <Typography.Title className="title-1 mt-20 mb-26" level={2}>
                  {item.title}
                </Typography.Title>
                <Typography.Paragraph className="txt-dec-1 mb-26 mt-2">
                  {item.description}
                </Typography.Paragraph>
              </Space>
              <Typography.Link
                className="home-service--button-link"
                href={item.link}
              >
                <ButtonCommon
                  className="home-service--button"
                  type="primary"
                  shape="round"
                >
                  {item.labelButton}
                </ButtonCommon>
              </Typography.Link>
            </Col>
          </Row>
        );
      })}
      <Divider />
    </Box>
  );
};

export default ServiceWrap;
