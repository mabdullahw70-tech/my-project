import CommonHero from "../components/CommonHero";
import NewsCard from "../components/NewsCard";
import PagePagination from "../components/PagePagination";
import Slider1 from "../components/Slider1";
import Aboutheroimg3 from "../assets/Aboutheroimg3.jpg";

export default function News() {
  const bignews = [
    {
      id: 1,
      img: "src/assets/Newimage1.png",
      title: "You will likely vainly look for fruit for it in autnumn",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 2,
      img: "src/assets/Newimage2.png",
      title: "A man's worth has its season, like tomato.",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 3,
      img: "src/assets/Newimage3.png",
      title: "Good thoughts bear good fresh juicy fruit.",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 4,
      img: "src/assets/Newimage4.png",
      title: "Fall in love with the fresh apples",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 5,
      img: "src/assets/Newimage5.png",
      title: "Why the berries always look delecious",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
    {
      id: 6,
      img: "src/assets/Newimage6.jpg",
      title: "Love for fruits are genuine of John Doe",
      desc: "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
    },
  ];
  return (
    <div>
      <CommonHero intro="ORGANIC INFORMATION" mainheading="News Article"  bgImage={Aboutheroimg3} />
      <NewsCard news={bignews} />
      <PagePagination />
      <Slider1 />
    </div>
  );
}
