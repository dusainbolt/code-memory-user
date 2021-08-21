import Box from '@Common/Box';
import { FC } from 'react';
import SiderBarLeft from '@Components/Blog/SiderBarLeft';
import TagContent from './TagContent';

const TagComponent: FC<any> = () => {
  return (
    <Box container>
      <Box className="content-wrapper content-tag-wrapper">
        <SiderBarLeft />
        <TagContent />
      </Box>
    </Box>
  );
};

export default TagComponent;
