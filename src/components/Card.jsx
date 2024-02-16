const Card = ({price , heading , para}) => {
   return (
     <div className="card__container">
       <div className="card">
         <span>{price}</span>
         <h4>{heading}</h4>
         <p>{para}</p>
       </div>
     </div>
   );
};

export default Card;