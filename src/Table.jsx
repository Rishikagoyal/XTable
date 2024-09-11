import React, {useState,useEffect} from 'react';


const Table =()=>{

  const[table,setTable]=useState([{ date: "2022-09-01", views: 100, article: "Article 1" }, { date: "2023-09-01", views: 100, article: "Article 1" },{ date: "2023-09-02", views: 150, article: "Article 2" },{ date: "2023-09-02", views: 120, article: "Article 3" },{ date: "2020-09-03", views: 200, article: "Article 4" }
]);

  const handleDate=()=>{
    const sortedData = [...table].sort((a, b) => {
      // Sort by date (latest first)
      if (b.date !== a.date) {
        return new Date(a.date) - new Date(b.date);
      }
      // If dates are the same, sort by views (highest first)
      return a.views - b.views;
    });

    setTable(sortedData);
    
    
  }

  const handleViews=()=>{

    const sortedData = [...table].sort((a, b) => {
      // Sort by date (latest first)
      if (b.views !== a.views) {
        return a.views- b.views;
      }
      // If dates are the same, sort by views (highest first)
      return b.views - a.views;
    });

    setTable(sortedData);
    
  }
  return(
    <>
    <h1>Date and Views</h1>
    <button onClick={handleDate}>Sort by Date</button>
    <button onClick={handleViews}>Sort by Views</button>
    <table>
      <tr>
         <th>Date</th>
         <th>Views</th>
         <th>Article</th>
      </tr>

      { table.map(item=>{return <tr><td>{item.date}</td>
                                    <td>{item.views}</td>
                                     <td>{item.article}</td>
      
      </tr>})}
     

     
    </table>
  
   
    </>
  )
}

export default Table;