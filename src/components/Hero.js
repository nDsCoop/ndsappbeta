import React, { useState, useEffect } from 'react';

import video1 from '../images/videobgr1.mp4'
import video5 from '../images/videobgr5.mp4'
import video3 from '../images/videobgr3.mp4'
// import video6 from '../videobgr/videobgr6.mp4'
// import videosList from "./data.js/listVideosBackground";



export default function Hero({children}) {


	const [urlVideo, setUrlVideo] = useState(video1)
	const videos =  [
		video5, video3, video1
	
	]; 
	const randVideo = () => {
		
		let temp = Math.floor(Math.random()*videos.length)
		setUrlVideo(videos[temp])
		console.log("chose video url in", temp)
	}

	useEffect(() => {
		randVideo()
  	}, [])

	 	return(
			
			<div class="bg-video-wrap">
				<video style={{height: '99vh'}}  className="home-background-video" muted autoPlay loop>
					<source src={urlVideo} type="video/mp4"/>
					{/* <source src="https://static.videezy.com/system/resources/previews/000/022/198/original/underwater-effect-background.mp4" type="video/mp4"/> */}
				</video>
				<div class="overlay"></div>
				{children}
			</div>
		)
}
// Hero.defaultProps = {
// 	hero: "defaultHero"
// };