import Box from '@Common/Box';
import { FC } from 'react';
import { Row, Col, Typography, Progress } from 'antd';
import useTranslation from '@Common/LanguageProvider/useTranslation';
import AntImage from '@Common/Image';
import { staticPath } from '@Utils/func';
import { Zoom } from 'react-reveal';
interface ISkill {
  title: string;
  percent: number;
  logo: string;
}

export const Skills: FC<any> = () => {
  const { t } = useTranslation();
  const SKILLS: ISkill[] = [
    {
      title: 'HTML',
      percent: 90,
      logo: '/images/profile/html.png',
    },
    {
      title: 'SCSS',
      percent: 90,
      logo: '/images/profile/scss.png',
    },
    {
      title: 'JavaScript',
      percent: 90,
      logo: '/images/profile/javasrcipt.jpg',
    },
    {
      title: 'Ant Design',
      percent: 90,
      logo: '/images/profile/antdesign.jpg',
    },
    {
      title: 'JQuery',
      percent: 60,
      logo: '/images/profile/jquery.png',
    },
    {
      title: 'Angular',
      percent: 60,
      logo: '/images/profile/angularjs.jpg',
    },
    {
      title: 'ReactJS',
      percent: 90,
      logo: '/images/profile/reactjs.jpg',
    },
    {
      title: 'NextJS',
      percent: 90,
      logo: '/images/profile/nextjs.jpg',
    },
    {
      title: 'VueJS',
      percent: 60,
      logo: '/images/profile/vuejs.jpg',
    },
    {
      title: 'NodeJS',
      percent: 80,
      logo: '/images/profile/nodejs.jpg',
    },
    {
      title: 'NestJS',
      percent: 90,
      logo: '/images/profile/nestjs.png',
    },
    {
      title: 'PHP',
      percent: 80,
      logo: '/images/profile/php.png',
    },
    {
      title: 'PHP',
      percent: 80,
      logo: '/images/profile/laravel.jpg',
    },
    {
      title: 'Socket.io',
      percent: 80,
      logo: '/images/profile/socket.io.png',
    },
    {
      title: 'GraphQL',
      percent: 90,
      logo: '/images/profile/graphql.png',
    },
  ];
  return (
    <Box className="profile__wrap mt-32">
      <Typography.Title className="title-wrap mb-16" level={3}>
        {t('profile.professional_skills')}
      </Typography.Title>
      <Row gutter={[14, 24]}>
        {SKILLS.map((item, index) => (
          <Col key={index} xs={24} md={12} lg={8}>
            <Zoom>
              <Box className="flx-center profile__skill-info align-left">
                <AntImage className="img-skill mr-12" src={staticPath(item?.logo ? item.logo : '/images/profile/ekoios.png')} />
                <Box className="skill-info">
                  <Typography.Paragraph>{item.title}</Typography.Paragraph>
                  <Progress percent={item.percent} />
                </Box>
              </Box>
            </Zoom>
          </Col>
        ))}
      </Row>
    </Box>
  );
};
