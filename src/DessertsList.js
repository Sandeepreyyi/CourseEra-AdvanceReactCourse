function DessertsList(props) {
  // Implement the component here.


  const lowCalories = props.data.filter(desserts => desserts.calories<= 300)






  return (
  <div>
    <ul>{ lowCalories.map((desserts,index) =>(
      <li key={index}>
        {desserts.name}
      </li>
    ))
      
  }
  </ul>
  <h1>hi</h1>
  </div>
  );
}

export default DessertsList;
