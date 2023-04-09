import React,{useState, useEffect} from 'react';

const Menu = () => {
  const [hachaFoods, setHachaFoods] = useState([]);

  useEffect(()=>{
    fetch("https://mobuyashea.com/hachawebapi/hachafoods")
    .then((res)=>res.json())
    .then((data)=> setHachaFoods(data))
    .catch((err)=>console.log(err))
  },[]);
  
  return (
    <section className="wapper">
      <section className="wapper-content">
        {hachaFoods.filter((food)=>food.type === "特製養生雞湯").map((food) => (
          <div className="menu-item noRow" key={food._id}>
            <h4>{food.name}</h4>
            <p>NT.{food.priceA}(大)</p>
            <p>NT.{food.priceB}(小)</p>
            <p>{food.type}</p>
          </div>
        ))}
         {hachaFoods.filter((food)=>food.type === "飯麵類").map((food) => (
          <div className="menu-item noRow" key={food._id}>
            <h4>{food.name}</h4>
            <p>NT.{food.priceA}</p>            
            <p>{food.type}</p>
          </div>
        ))}
         {hachaFoods.filter((food)=>food.type === "湯品").map((food) => (
          <div className="menu-item noRow" key={food._id}>
            <h4>{food.name}</h4>
            <p>NT.{food.priceA}</p>            
            <p>{food.type}</p>
          </div>
        ))}
        {hachaFoods.filter((food)=>food.type === "炸物").map((food) => (
          <div className="menu-item noRow" key={food._id}>
            <h4>{food.name}</h4>
            <p>NT.{food.priceA}</p>            
            <p>{food.type}</p>
          </div>
        ))}
        {hachaFoods.filter((food)=>food.type === "熱炒").map((food) => (
          <div className="menu-item noRow" key={food._id}>
            <h4>{food.name}</h4>
            <p>NT.{food.priceA}</p>            
            <p>{food.type}</p>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Menu