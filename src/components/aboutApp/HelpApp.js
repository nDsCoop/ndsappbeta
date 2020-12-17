import React, { Component } from "react";
import { Typography, Container, IconButton } from "@material-ui/core";
// import img from "../../images/svgnds.png";
import _ from 'lodash'

import home from '../data.js/dataListQuestionsHome'
import music from '../data.js/dataListQuestionsMusic'
import weather from '../data.js/dataListQuestionsWeather'
import chat from '../data.js/dataListQuestionsChat'
import retrille from '../data.js/dataListQuestionsReTrille'

import { RiSubtractLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";


const ref = React.createRef();
export default class ContributorsApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            questKey: [],
            showBtnBackToTop: false,
            linkActive: null
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisibility);
        
    }
    componentDidUpdate(){
        console.log("link active: ", this.state.linkActive)
    }

  
    toggleVisibility = () => {
       if(window.pageYOffset > 440){
           this.setState({
               showBtnBackToTop: true
           })
       }else{
        this.setState({
            showBtnBackToTop: false
        })
       }
    }
  
    scrollToTop() {
        console.log(this.state.showBtnBackToTop, window.pageYOffset, typeof(window.pageYOffset))
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        
    }





    toggleActiveQuestion = (key) => {
        // console.log(key)

        const {questKey} = this.state;
        if(questKey.includes(key.toString())){

            let temps = _.difference(questKey, [key.toString()])
            // console.log(temps)
            this.setState({
                questKey: temps
            }) 

        }else{

            let temps = _.uniq([...questKey, key.toString()]);
            // console.log(temps)
            this.setState({
                questKey: temps
            })  

        }
        
    }
    render(){
        let listQuestionsHome = [];
        let listQuestionsMusic = [];
        let listQuestionsWeather = [];
        let listQuestionsChat = [];
        let listQuestionsReTrille = [];
        Object.keys(home).forEach(function(key) {
            listQuestionsHome.push(home[key])
        });
        Object.keys(music).forEach(function(key) {
            listQuestionsMusic.push(music[key])
        });
        Object.keys(weather).forEach(function(key) {
            listQuestionsWeather.push(weather[key])
        });
        Object.keys(chat).forEach(function(key) {
            listQuestionsChat.push(chat[key])
        });
        Object.keys(retrille).forEach(function(key) {
            listQuestionsReTrille.push(retrille[key])
        });
      
        return (

            <div className="privacy-app" >
                  <Container>
              <header>
                <Typography variant="h4" gutterBottom={true}>
                    Help-Instruction{" "}
                </Typography>
              </header>
              <div className="deliver"></div>
              <br />

              <section>
              {this.state.showBtnBackToTop && (
            <div className="btn-back-to-top">
                <div className="btn-inside" onClick={() => this.scrollToTop()}>
                   <span></span>
                </div>
            </div>)}
                <Typography gutterBottom={true} variant="subtitle1">
                You have questions or don't know how to use this app! Please look for a solution in the list below.
                In case there isn't any solution, please contact us <a href='http://localhost:3000/about/feedback' ><b>here</b></a> for support.
                (Bạn có thắc mắc hoặc không biết cách sử dụng ứng dụng này! hãy tìm kiếm một giải pháp trong danh sách dưới đây.
                Trường hợp không có bất kỳ giải pháp nào, làm ơn liên hệ với chúng tôi <a href='http://localhost:3000/about/feedback' ><b>tại đây</b></a> để được hỗ trợ)
                  <br />
                </Typography>
                <div className="list-instruction">
                <Typography variant="h6" gutterBottom={true}>
                    General{" "}
                </Typography>
                <div className="instruction-App" ref={ref}>
                    {listQuestionsHome.map((quest, key) =>{
                        
                        return <div key={key} className={`instruction ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                            <div onClick={() => this.toggleActiveQuestion(key)} className="header-quest">
                                <span>{quest.title}</span>
                                <span>
                                    <IconButton>
                                        { (this.state.questKey.includes(key.toString())) ? <RiSubtractLine /> : <BsPlus /> }
                                    </IconButton>
                                </span>
                            </div>
                            {/* <div className={`body-quest ${this.state.activeQuestTxt ? "active" : ""}`}> */}
                            <div className={`body-quest ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                                {quest.resolve}<br />{quest.resolve1}<br />{quest.resolve2}<br />{quest.resolve3}<br />{quest.resolve4}
                            </div>
                        </div>

                    })}
                </div>
                <Typography variant="h6" gutterBottom={true}>
                    Topic ReTrille{" "}
                </Typography>
                <div className="instruction-App">
                    {listQuestionsReTrille.map((quest, key) =>{
                        
                        return <div key={key} className={`instruction ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                            <div onClick={() => this.toggleActiveQuestion(key)} className="header-quest">
                                <span>{quest.title}</span>
                                <span>
                                    <IconButton>
                                        { (this.state.questKey.includes(key.toString())) ? <RiSubtractLine /> : <BsPlus /> }
                                    </IconButton>
                                </span>
                            </div>
                            {/* <div className={`body-quest ${this.state.activeQuestTxt ? "active" : ""}`}> */}
                            <div className={`body-quest ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                                {quest.resolve}<br />{quest.resolve1}<br />{quest.resolve2}<br />{quest.resolve3}<br />{quest.resolve4}
                            </div>
                        </div>

                    })}
                </div>
                <Typography variant="h6" gutterBottom={true}>
                    Topic Chat{" "}
                </Typography>
                <div className="instruction-App">
                    {listQuestionsChat.map((quest, key) =>{
                        
                        return <div key={key} className={`instruction ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                            <div onClick={() => this.toggleActiveQuestion(key)} className="header-quest">
                                <span>{quest.title}</span>
                                <span>
                                    <IconButton>
                                        { (this.state.questKey.includes(key.toString())) ? <RiSubtractLine /> : <BsPlus /> }
                                    </IconButton>
                                </span>
                            </div>
                            {/* <div className={`body-quest ${this.state.activeQuestTxt ? "active" : ""}`}> */}
                            <div className={`body-quest ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                                {quest.resolve}<br />{quest.resolve1}<br />{quest.resolve2}<br />{quest.resolve3}<br />{quest.resolve4}
                            </div>
                        </div>

                    })}
                </div>
                <Typography variant="h6" gutterBottom={true}>
                    Topic Music{" "}
                </Typography>
                <div className="instruction-App">
                    {listQuestionsMusic.map((quest, key) =>{
                        
                        return <div key={key} className={`instruction ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                            <div onClick={() => this.toggleActiveQuestion(key)} className="header-quest">
                                <span>{quest.title}</span>
                                <span>
                                    <IconButton>
                                        { (this.state.questKey.includes(key.toString())) ? <RiSubtractLine /> : <BsPlus /> }
                                    </IconButton>
                                </span>
                            </div>
                            {/* <div className={`body-quest ${this.state.activeQuestTxt ? "active" : ""}`}> */}
                            <div className={`body-quest ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                                {quest.resolve}<br />{quest.resolve1}<br />{quest.resolve2}<br />{quest.resolve3}<br />{quest.resolve4}
                            </div>
                        </div>

                    })}
                </div>
                <Typography variant="h6" gutterBottom={true}>
                    Topic Weather{" "}
                </Typography>
                <div className="instruction-App">
                    {listQuestionsWeather.map((quest, key) =>{
                        
                        return <div key={key} className={`instruction ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                            <div onClick={() => this.toggleActiveQuestion(key)} className="header-quest">
                                <span>{quest.title}</span>
                                <span>
                                    <IconButton>
                                        { (this.state.questKey.includes(key.toString())) ? <RiSubtractLine /> : <BsPlus /> }
                                    </IconButton>
                                </span>
                            </div>
                            {/* <div className={`body-quest ${this.state.activeQuestTxt ? "active" : ""}`}> */}
                            <div className={`body-quest ${(this.state.questKey.includes(key.toString()) ? 'active' : null)}`}>
                                {quest.resolve}<br />{quest.resolve1}<br />{quest.resolve2}<br />{quest.resolve3}<br />{quest.resolve4}
                            </div>
                        </div>

                    })}
                </div>
                  
                </div>
              </section>
            </Container>
            </div>
          );
        }
   
}
