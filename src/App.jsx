import React from 'react'
import './App.css'


function YoutubeComponent(props) {
  return (
    <div className="container">
      <img src={props.thumbnailImg}/>
      <div className="content">
        <p>{props.videoTitle}</p>
        <p>{props.videoUploader}</p>
        <p>{props.dateVideoUploaded}</p>
        <p>{props.videoViews}</p>
      </div>
    </div>

  )
}


function App() {

  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "He did WHAT?!?! (My intial reaction)",
      videoUploader: "MaxTongster",
      dateVideoUploaded: "10-31-2022",
      videoViews: 10
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
      videoUploader: "Dave Doughbrick",
      dateVideoUploaded: "11-02-2022",
      videoViews: 300000
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "React in 100 seconds",
      videoUploader: "Fireship",
      dateVideoUploaded: "2022-09-08",
      videoViews: 255
    }
  ];


  return (
    <div className='app-container'>


    
      {
        sampleData.map(element=>{
          return  <YoutubeComponent
           thumbnailImg={element.thumbnailImg} 
           videoTitle={element.videoTitle}
           videoUploader={element.videoUploader}
           dateVideoUploaded={element.dateVideoUploaded}
           videoViews={element.videoViews}
        
           
           />
        })
      }
      <YoutubeComponent/>
      <YoutubeComponent/>
      <YoutubeComponent/>
      <YoutubeComponent/>
    
    </div>
  )
}

export default App