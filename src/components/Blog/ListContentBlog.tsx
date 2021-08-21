import Box from '@Common/Box';
import { FC } from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import CardBlog from '@Components/Blog/CardBlog';

/**
 * ListContentBlog Grid component
 * renders a ListContentBlog component for each blog contained in the data
 * @param {object} param - props
 * @return {object} ListContentBlogGrid component
 */
const ListContentBlog: FC<any> = ({ scrollPosition }) => {
  const dataBlog = [
    {
      thumbnailUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYt45_LAlzErKc52N2Xurys--ogeZC1Bxf2Y9Qk81D78UXC8m39z66ljFHdfdqALAFJc&usqp=CAU',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/1tL0Kp6rUsvatwHEtnZQyA/2b4d29c6fa115414ff5eef9cfc435529/image.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/2ryBy2RlO9TYxqlrPrLKpy/15f43440b4789d800738ca50a3790ba2/image.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/49e8O8AZxtZfj6z9fMl8JD/15e51cf3115111639a816fea3a4feadf/image.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/4hTE83q3wleRhOP1TiVdcj/4efeb214202e5c155643ec2d0fe3dcdb/image.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/CtObRpAfSOyeZCMZxm89J/b128cb28177534189ca19233b9595a66/image.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/NwbuhfL1NTOsmQC9Vs5rq/845d8f0c9eb39787f4ec98280f997afe/image.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/5hRH2qYJN6bk2gW3Zb0kn4/7361134308b0020ba2eebab62a7d1c0a/luke-chesser-LG8ToawE8WQ-unsplash.jpg?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/3LOjeCOouNcJyTovJtCxWf/bfa878633b71687c400a31b9ecac1fb3/0_NnBDYpuOPyS0NNEY?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },

    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/6ZbL3NsxoyY7ntoLHLMdmd/b076946f3c3cdc9fc0aeadd07e0b9878/0_ahZy73W_FIVPoc0Z?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/19l6672xu1hDiXnEy1CCfu/ee9e5ac102550b09e69c6d43a7d9733a/Complete_Web_Developer_Zero_to_Mastery.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/VcF8RKHrBXiKTN5aUqJTX/931a67992da159a9cf7e34ab5042fe50/0_0yjkQPLmuxvzsapH?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/6eyny8WPuS1kVcEqr2U9V3/2b2f0ef1b97303f52d5835fb716c5df3/20200312_ZTM_Academy_AMA_Yihua.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/6HonjbXKa6qndbGrHfASS6/50dab66b7515934926cbcfde69a01c7b/AMA_DanielBourke_MachineLearning_GettingHired.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/1d4tdQlqKZt72sUvBPH5a2/b8f87340a09c4a2b8fc4ea353cd6ce5d/0_qJx95k_SKyDB3DJ-?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/1QFo7SlD6tLTK9cqJJ3f5d/55cb728af8f61bd839d6225dd62d23ba/AMA_DanielBourke_MachineLearning_GettingStarted_2.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/4YAOlWd5SaQImHOxK3wV0T/49e743c4fbacbc02c25fa2e00713cabb/0_4INPvXgcK_uktl-V?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/5mjQQMKlivprBIq1z5oNiS/8f450afe2a94aeb2782b4461a6b3b450/ZTM_Success_Story_Interview_JustinLin.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },

    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/47RedWK1ozCn5YXRy3pPVO/a26ebe7347079fcf2dea471e5f2ab723/top10.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/4tCC5A9UVR04O7XbdopUt5/53c377b0ed354c1f3b23f55cce1c61e1/jess-bailey-ugxkiVcufaM-unsplash.jpg?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/61OvcSROxKeN7ggbwTSgwB/73bfdc9527880361024157623ea67f69/TimeLine.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/6WzXz5ybhhVrRi7kJyxPW3/bed785d25b9fbd917439b5d97161c993/Config_-_Cover.jpg?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/2fU4z36oCseTDi1KHAbZbv/6db2a17b155ec8303a57933f63360b44/Hero-WithText-2.jpeg?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
    {
      thumbnailUrl:
        'https://images.ctfassets.net/aq13lwl6616q/75taUadlZVVOtEG6ZDiVvV/268b80e788dcba482bfd9ec357867566/python_monthly.png?w=300&h=225&q=50&fm=webp',
      title:
        'Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương tự ARM Intel hợp tác với SiFive làm SoC dùng kiến trúc RISC-V tương',
      description:
        'Đấy là thông tin của tài khoản Twitter @UniverseIce, qua đó nói rằng ban đầu lẽ ra Samsung sẽ giới thiệu chip xử lý trang bị GPU kiến trúc RDNA2 của AMD phát triển trong tháng 0',
    },
  ];
  return (
    <Box className="example-lazy-load">
      {dataBlog.map((item, index) => (
        <CardBlog key={index} blog={item} scrollPosition={scrollPosition} />
      ))}
    </Box>
  );
};

export default trackWindowScroll(ListContentBlog);
