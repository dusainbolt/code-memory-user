import Box from "@Common/Box";
import SwiperSlideNewsItem from "@Common/Card/CardNewsSwiper";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

// interface _NewsWrap {}

const NewsWrap: React.FC<any> = ({}) => {
  const { t } = useTranslation(["common"]);
  return (
    <Box container className="home-news__container">
      <Typography.Text className="home--title title txt-center">
        {t("home.title_new_wrap")}
      </Typography.Text>
      <SwiperSlideNewsItem />
    </Box>
  );
};

export default NewsWrap;
