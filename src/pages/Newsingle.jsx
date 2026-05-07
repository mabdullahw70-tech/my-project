import CommonHero from "../components/CommonHero";
import ArticleSection from "../components/ArticleSection";
import Slider1 from "../components/Slider1";
import Aboutheroimg2 from "../assets/Aboutheroimg2.jpg";

export default function Newsingle() {
  return (
    <>
      <CommonHero intro="READ THE DETAILS" mainheading="Single Article" bgImage={Aboutheroimg2} />
      <ArticleSection
        articleData={{
          image: "/src/assets/Newsingleimage.png",
          title: "Pomegranate can prevent heart disease",
          para1:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          para2:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
          para3:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta, similique quidem fuga vel voluptates amet doloremque corrupti. Perferendis totam voluptates eius error fuga cupiditate dolorum? Adipisci mollitia quod labore aut natus nobis. Rerum perferendis, nobis hic adipisci vel inventore facilis rem illo, tenetur ipsa voluptate dolorem, cupiditate temporibus laudantium quidem recusandae expedita dicta cum eum. Quae laborum repellat a ut, voluptatum ipsa eum. Culpa fugiat minus laborum quia nam!",
        }}
        sidebarData={{
          recentPosts: [
            "You Will vanily look for fruits on it an automan",
            "You Will vanily look for fruits on it an automan",
            "You Will vanily look for fruits on it an automan",
            "You Will vanily look for fruits on it an automan",
            "You Will vanily look for fruits on it an automan",
          ],
          archivePosts: [
            "JAN 2020 (6)",
            "FEB 2020 (5)",
            "FEB 2020 (5)",
            "FEB 2020 (5)",
            "FEB 2020 (5)",
          ],
          tags: ["Apple", "Orange", "Orange", "Orange", "Orange"],
        }}
      />
      <Slider1/>
    </>
  );
}
