import imageThree from '../../public/image03.jpg'

const Story = () => {
  return (
    <section>
      <div className="container">
        <div className="story__content">
          <div className="story__left">
            <span> OUR STORY </span>
            <h1>Welcome to Royal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              neque repellendus? Animi ut quis magni dignissimos! Explicabo
              magni ex itaque, adipisci labore maiores iste iure delectus culpa
              blanditiis facilis dolorem!Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci asperiores numquam
              molestiae tenetur ipsum quae corporis ratione dolores quasi iusto
              esse praesentium molestias in minima sunt, officia dignissimos
              amet aspernatur? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla esse excepturi cumque optio, sed
              blanditiis aliquam eius quidem. Nam alias quo numquam vel porro
              molestias, quis aperiam veritatis voluptas error.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              neque repellendus? Animi ut quis magni dignissimos! Explicabo
              magni ex itaque, adipisci labore maiores iste iure delectus culpa
              blanditiis facilis dolorem!Lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Adipisci asperiores numquam
              molestiae tenetur ipsum quae corporis ratione dolores quasi iusto
              esse praesentium molestias in minima sunt, officia dignissimos
              amet aspernatur? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla esse excepturi cumque optio, sed
              blanditiis aliquam eius quidem. Nam alias quo numquam vel porro
              molestias, quis aperiam veritatis voluptas error.
            </p>
          </div>
          <div className="story__right">
            <img src={imageThree} alt="food" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
