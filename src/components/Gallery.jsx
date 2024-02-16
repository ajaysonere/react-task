import image06 from '../../public/image06.jpg';
import image07 from '../../public/image07.jpg';
import image08 from "../../public/image08.jpg";
import image09 from "../../public/image09.jpg";
import image10 from "../../public/image10.jpg";
import image11 from "../../public/image11.jpg";
import Card from './Card';

const data = [
  {
    price: "$29.04",
    heading: "Grilled Fielt",
    para: "this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.",
  },
  {
    img: `${image11}`,
  },
  {
    price: "$40.52",
    heading: "Grilled Auro",
    para: "this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.",
  },
  {
    img: `${image06}`,
  },
  {
    price: "$29",
    heading: "Grilled Fielt",
    para: "this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.",
  },
  {
    img: `${image07}`,
  },
  {
    price: "$40",
    heading: "Grilled Auro",
    para: "this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.",
  },
  {
    img: `${image08}`,
  },
  {
    price: "$29",
    heading: "Grilled Fielt",
    para: "this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.",
  },
  {
    img: `${image09}`,
  },
  {
    price: "$40",
    heading: "Grilled Auro",
    para: "this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.this is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.",
  },
  {
    img: `${image10}`,
  },
];


const Gallery = () => {
    return (
      <section className="container">
        <div className="gallery__container">
          <div className="gallery__content">
            {data.map((post, index) => {
              return index % 2 == 0 ? (
                <Card
                  key={index}
                  price={post.price}
                  heading={post.heading}
                  para={post.para}
                />
              ) : (
                <img key={index} src={post.img} alt="images"></img>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default Gallery;