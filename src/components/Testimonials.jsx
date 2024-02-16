import { CiStar } from "react-icons/ci";

const data = [
  {
    title: "A Great food",
    desc: "lorthis is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.em",
    authour: "Divi",
  },
  {
    title: "Awesome experience",
    desc: "lorthis is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.em",
    authour: "Rahul",
  },
  {
    title: "A Great f00d",
    desc: "lorthis is the heading of the page i want to copy this to use in this project , i think this is the ok to write here.em",
    authour: "Ajay",
  },
];

const Testimonials = () => {
  return (
    <section className="container">
      <div className="testimonials__container">
        <span className="testimonials__heading">TESTIMONIALS</span>
        <h1>What people are saying </h1>
        <div className="testimonials__card__container">
          {data.map((post, index) => {
            return (
              <div key={index} className="testi__card">
                <span>
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </span>
                <h4>{post.title}</h4>
                <p>{post.desc}</p>
                <i>{post.authour}</i>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
