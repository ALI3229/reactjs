import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Indulge in culinary delight, where every bite tells a flavorful story!",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your cravings fulfilled in a flash with our lightning-fast deliveries - because great taste waits for no one!",
    },
  ];
const Work = () => {
  return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">Creating delectable dishes, offering exceptional service, and providing a welcoming ambiance to delight patrons.</p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
            ))}
        </div>
        </div>;
}

export default Work