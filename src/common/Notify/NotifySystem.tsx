import React, { useEffect } from 'react';
import { notification, Typography } from 'antd';
import { getLayoutSlice, setNotifySlice } from '../../redux/slices/layoutSlice';
import { useTranslation } from 'react-i18next';
import Box from '../Box';
import { useAppDispatch, useAppSelector } from '@Redux/store';
import { TIME_FORMAT } from '@Constants/constant';
import dayjs from 'dayjs';

export const NotifySystem = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const notify = useAppSelector(getLayoutSlice).notify;

  const openNotificationWithIcon = () => {
    notification[notify.typeNotify]({
      className: 'notify-sys',
      message: t(`message.title_${notify.typeNotify}`),
      key: `${notify.createTime}`,
      duration: 10,
      description: (
        <Box className="notify-sys-content">
          <Typography.Paragraph className="dec mb-0">{t(`message.${notify.messageNotify}`)}</Typography.Paragraph>
          <Typography.Paragraph className="time mb-0">{dayjs(notify.createTime).format(TIME_FORMAT.HH_MM)}</Typography.Paragraph>
        </Box>
      ),
    });
  };

  useEffect(() => {
    if (notify?.typeNotify && notify?.messageNotify) {
      openNotificationWithIcon();
      dispatch(setNotifySlice());
    }
  }, [notify]);

  return <></>;
};
