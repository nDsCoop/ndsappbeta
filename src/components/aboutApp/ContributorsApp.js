import React, { Component } from "react";
import { Typography, Divider, Container, Link } from "@material-ui/core";
import img from "../../images/svgnds.png";

export default class ContributorsApp extends Component {
    render(){
      
        return (

            <div className="privacy-app">
                  <Container>
              <header>
                <Typography variant="h4" gutterBottom={true}>
                    Contributors{" "}
                </Typography>
              </header>
              <div className="deliver"></div>
              <br />
              <section>
                <Typography gutterBottom={true} variant="subtitle1">
                  nDsApp gets great contributions from the many individuals the development team has contacted with. A difficult solution, we always need that donation. Thanks again for the help building and developing nDsApp
                  (nDsApp được sự đóng góp lớn từ nhiều cá nhân tổ chức mà nhóm phát triển đã liên hệ.Một giải pháp khó, chúng tôi luôn cần sự đóng góp đó. Một lần nữa cảm ơn sự giúp đỡ cho việc xây dựng và phát triển nDsApp)
                  <br />
                </Typography>
                <div className="list-contributes">
                  
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="logo Reactjs" ></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://reactjs.org/">ReactJs</a> | a library written in javascript</h4>
                      </div>
                      <div className="contri-text">
                        <p>ReactJs is the main platform the development team uses to build the frontend for the App. We received advice from a very important and influential person, then the team decided to use ReactJs as the primary medium for future App development. We appreciate the optimization of this platform and will continue to develop more</p>
                        (ReactJs là nền tảng chính mà nhóm phát triển dùng để xây dựng phần frontend cho App. Chúng tôi nhận được lời khuyên từ một người rất quan trọng và có sức ảnh hưởng lớn, sau đó nhóm quyết định dùng ReactJs làm môi trường chính cho sự phát triển App về sau. Chúng tôi đánh giá cao sự tối ưu của nền tản này và sẽ tiếp tục phát triển nhiều hơn thế nữa)
                      </div>
                    </div>
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="logo Nodejs"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://nodejs.org/en/">NodeJs</a> | an open-source, cross-platform</h4>
                      </div>
                      <div className="contri-text">
                        <p>The nDs application is running on 2 servers and the Backend commands are written in JavaScript on top of NodeJs. This helps the system to have unified in terms of programming languages ​​used throughout the App.</p>
                        (Ứng dụng nDsApp đang chạy trên 2 máy chủ và các lệnh phía Backend được viết bằng JavaScript trên nền của NodeJs. Việc làm này giúp cho hệ thống có sự thống nhất về mặt ngôn ngữ lập trình được dùng trên toàn App.)
                      </div>
                    </div>
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/800px-Github-desktop-logo-symbol.svg.png" alt="logo GitHub"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://github.com/">GitHub</a> | safe storage for source code</h4>
                      </div>
                      <div className="contri-text">
                        <p>We use GitHub to host the source code for the application. This is a tool that is familiar to any software programmer, with security handy and easy to restore projects via cmd or terminal on Linux We have a number of other apps that are still hosted on this app</p>
                        (Chúng tôi sử dụng GitHub để lưu trữ mã nguồn cho ứng dụng. Đây là một công cụ quen thuộc với bất kỳ lập trình viên phần mềm nào, với tính năng bảo mật tiện dụng và dễ dàng khôi phục các dự án thông qua cmd hoặc terminal trên Linux. Hiện chúng tôi có một số ứng dụng khác vẫn được lưu trữ trên ứng dụng này)
                      </div>
                    </div>                  
                  </div>
                  <div className="contribute">
                    {/* <svg class="h-25" height="25" viewBox="0 0 100 25">
                      <g><path d="M11.71 10.41C10.31 4.33 7.39 2.71 6.65 1.57 6.34 1.06 6.07 0.54 5.84 0 5.8 0.54 5.73 0.88 5.26 1.29 4.32 2.11 0.35 5.3 0.01 12.21 -0.3 18.65 4.82 22.62 5.5 23.03 6.02 23.28 6.65 23.03 6.96 22.8 9.43 21.13 12.8 16.69 11.71 10.41" fill="#10AA50"></path>//leaf
                      <path d="M5.95 19.5C5.82 21.08 5.72 22 5.38 22.9 5.38 22.9 5.61 24.41 5.76 26L6.32 26C6.45 24.88 6.65 23.76 6.92 22.66 6.21 22.33 5.98 20.89 5.95 19.5Z" fill="#B8C4C2"></path>//bottom leaf
                      <path d="M7.03 22.75L7.03 22.75C6.34 22.43 6.14 20.94 6.11 19.55 6.28 17.25 6.33 14.95 6.26 12.64 6.22 11.44 6.28 1.46 5.96 0 6.18 0.49 6.43 0.97 6.7 1.44 7.44 2.59 10.33 4.21 11.71 10.32 12.79 16.61 9.47 21.06 7.03 22.75Z" fill="#12924F"></path>
                      <path d="M98.46 20.65C97.61 20.65 96.93 19.97 96.92 19.12 96.92 18.28 97.6 17.6 98.45 17.59 99.29 17.58 99.99 18.25 100 19.1 100.01 19.51 99.85 19.9 99.56 20.2 99.27 20.49 98.87 20.65 98.46 20.65L98.46 20.65ZM98.46 17.73C97.89 17.72 97.38 18.06 97.16 18.58 96.94 19.1 97.06 19.7 97.46 20.1 97.86 20.5 98.46 20.62 98.98 20.41 99.51 20.19 99.85 19.69 99.85 19.12 99.86 18.75 99.72 18.39 99.45 18.13 99.19 17.87 98.83 17.72 98.46 17.73L98.46 17.73ZM98.83 20.08L98.44 19.23 98.12 19.23 98.12 20.08 97.88 20.08 97.88 18.15 98.46 18.15C98.88 18.15 99.06 18.33 99.06 18.69 99.06 18.97 98.93 19.15 98.68 19.21L99.09 20.08 98.83 20.08ZM98.12 19.03L98.46 19.03C98.73 19.03 98.84 18.94 98.84 18.69 98.84 18.45 98.74 18.36 98.43 18.36L98.12 18.36 98.12 19.03Z" fill="#21313C"></path>//R right
                      <path d="M75.97 19.27C76.38 19.59 77.2 19.73 77.92 19.73 78.85 19.73 79.76 19.55 80.65 18.75 81.56 17.92 82.19 16.66 82.19 14.64 82.19 12.71 81.45 11.13 79.94 10.21 79.08 9.68 77.97 9.47 76.71 9.47 76.35 9.47 75.97 9.48 75.76 9.58 75.67 9.65 75.61 9.75 75.59 9.85 75.55 10.2 75.55 12.83 75.55 14.38 75.55 15.97 75.55 18.19 75.59 18.46 75.61 18.7 75.72 19.1 75.97 19.27M72.1 8.6C72.43 8.6 73.68 8.66 74.27 8.66 75.36 8.66 76.11 8.6 78.15 8.6 79.86 8.6 81.29 9.06 82.32 9.94 83.57 11.02 84.23 12.52 84.23 14.34 84.23 16.93 83.05 18.42 81.86 19.27 80.68 20.15 79.14 20.65 76.95 20.65 75.79 20.65 73.79 20.61 72.12 20.59L72.09 20.59C72.01 20.44 72.23 19.84 72.36 19.82 72.82 19.77 72.94 19.75 73.15 19.67 73.5 19.52 73.58 19.34 73.62 18.71 73.68 17.52 73.66 16.1 73.66 14.49 73.66 13.34 73.68 11.1 73.64 10.39 73.58 9.79 73.33 9.64 72.82 9.52 72.46 9.45 72.1 9.39 71.73 9.35 71.7 9.24 71.99 8.72 72.09 8.6" fill="#21313C"></path> //D
                      <path d="M89 9.54C88.93 9.56 88.83 9.75 88.83 9.85 88.81 10.54 88.79 12.34 88.79 13.58 88.8 13.63 88.84 13.67 88.89 13.68 89.14 13.7 89.76 13.72 90.28 13.72 91.01 13.72 91.43 13.62 91.67 13.51 92.28 13.2 92.57 12.53 92.57 11.8 92.57 10.13 91.41 9.5 89.69 9.5 89.46 9.5 89.23 9.51 89 9.54M93.38 17.2C93.38 15.52 92.14 14.56 89.89 14.56 89.79 14.56 89.07 14.54 88.9 14.58 88.85 14.6 88.79 14.63 88.79 14.67 88.79 15.88 88.77 17.81 88.83 18.58 88.87 18.9 89.1 19.36 89.39 19.5 89.69 19.67 90.39 19.71 90.87 19.71 92.2 19.71 93.38 18.96 93.38 17.2M85.52 8.6C85.69 8.6 86.21 8.66 87.52 8.66 88.75 8.66 89.75 8.62 90.95 8.62 92.43 8.62 94.48 9.16 94.48 11.38 94.48 12.47 93.71 13.35 92.7 13.77 92.65 13.79 92.65 13.83 92.7 13.85 94.13 14.21 95.38 15.09 95.38 16.78 95.38 18.43 94.36 19.46 92.88 20.11 91.97 20.51 90.85 20.65 89.72 20.65 88.85 20.65 86.52 20.56 85.23 20.57 85.1 20.51 85.35 19.9 85.47 19.8 85.77 19.8 86.06 19.75 86.34 19.67 86.81 19.55 86.86 19.4 86.92 18.71 86.96 18.12 86.96 15.99 86.96 14.48 86.96 12.41 86.98 11.02 86.96 10.33 86.94 9.79 86.75 9.62 86.38 9.52 86.09 9.46 85.61 9.41 85.22 9.35 85.13 9.25 85.42 8.68 85.52 8.6" fill="#21313C"></path>//B
                      <path d="M15.95 20.65C15.9 20.52 15.88 20.39 15.89 20.26 15.89 20.17 15.91 20.08 15.95 20 16.2 19.96 16.45 19.91 16.7 19.85 17.05 19.76 17.18 19.57 17.2 19.13 17.25 18.09 17.26 16.15 17.24 14.78L17.24 14.74C17.24 14.59 17.24 14.39 17.05 14.25 16.73 14.05 16.38 13.89 16.02 13.79 15.86 13.74 15.76 13.66 15.77 13.56 15.77 13.46 15.88 13.34 16.09 13.3 16.66 13.24 18.14 12.89 18.72 12.62 18.78 12.7 18.81 12.79 18.8 12.89 18.8 12.95 18.79 13.02 18.78 13.08 18.76 13.27 18.75 13.49 18.75 13.71 18.75 13.77 18.79 13.81 18.84 13.83 18.89 13.85 18.95 13.83 18.99 13.8 20.1 12.93 21.09 12.62 21.6 12.62 22.44 12.62 23.09 13.02 23.59 13.84 23.62 13.88 23.66 13.91 23.71 13.91 23.75 13.91 23.79 13.89 23.81 13.85 24.83 13.08 25.84 12.62 26.52 12.62 28.11 12.62 29.07 13.81 29.07 15.81 29.07 16.38 29.06 17.11 29.06 17.79 29.05 18.39 29.05 18.95 29.05 19.33 29.05 19.43 29.17 19.69 29.36 19.74 29.6 19.85 29.93 19.91 30.36 19.99L30.38 19.99C30.41 20.1 30.34 20.55 30.28 20.64 30.17 20.64 30.02 20.63 29.84 20.62 29.51 20.6 29.05 20.58 28.53 20.58 27.46 20.58 26.91 20.6 26.38 20.63 26.34 20.5 26.33 20.08 26.38 19.99 26.59 19.95 26.81 19.9 27.03 19.84 27.36 19.73 27.46 19.58 27.48 19.13 27.49 18.81 27.55 16.01 27.44 15.35 27.34 14.66 26.82 13.85 25.68 13.85 25.26 13.85 24.58 14.02 23.93 14.52 23.89 14.56 23.86 14.62 23.86 14.68L23.86 14.69C23.94 15.05 23.94 15.47 23.94 16.11 23.94 16.47 23.94 16.85 23.94 17.23 23.93 18 23.93 18.73 23.94 19.29 23.94 19.66 24.17 19.75 24.35 19.82 24.45 19.85 24.53 19.86 24.61 19.88 24.76 19.92 24.92 19.96 25.16 20 25.19 20.16 25.19 20.32 25.15 20.48 25.14 20.54 25.11 20.6 25.08 20.65 24.49 20.63 23.88 20.61 23.01 20.61 22.75 20.61 22.31 20.62 21.93 20.63 21.62 20.64 21.33 20.65 21.16 20.65 21.12 20.54 21.1 20.43 21.1 20.31 21.1 20.2 21.12 20.09 21.17 20L21.4 19.96C21.61 19.92 21.78 19.89 21.95 19.85 22.24 19.75 22.35 19.6 22.37 19.23 22.42 18.37 22.47 15.9 22.35 15.29 22.14 14.29 21.57 13.79 20.66 13.79 20.13 13.79 19.46 14.05 18.91 14.46 18.8 14.56 18.74 14.71 18.75 14.85 18.75 15.15 18.75 15.5 18.75 15.87 18.75 17.11 18.74 18.66 18.77 19.33 18.79 19.53 18.86 19.78 19.25 19.86 19.33 19.89 19.48 19.91 19.65 19.94 19.75 19.96 19.85 19.98 19.96 20 20 20.21 19.98 20.44 19.91 20.65 19.74 20.65 19.53 20.64 19.29 20.63 18.93 20.61 18.47 20.59 17.95 20.59 17.34 20.59 16.92 20.61 16.58 20.63 16.35 20.64 16.15 20.65 15.95 20.65" fill="#21313C"></path>
                      <path d="M35.36 13.42C35.04 13.41 34.72 13.5 34.44 13.68 33.77 14.08 33.43 14.88 33.43 16.07 33.43 18.28 34.55 19.83 36.16 19.83 36.59 19.84 37.01 19.69 37.34 19.41 37.83 19.02 38.1 18.2 38.1 17.07 38.1 14.89 37 13.42 35.36 13.42M35.67 20.65C32.77 20.65 31.73 18.54 31.73 16.58 31.73 15.2 32.3 14.13 33.42 13.38 34.21 12.9 35.11 12.64 36.04 12.62 38.26 12.62 39.81 14.19 39.81 16.44 39.81 17.98 39.19 19.18 38.02 19.94 37.46 20.28 36.48 20.65 35.67 20.65" fill="#21313C"></path><path d="M65.17 13.42C64.84 13.41 64.52 13.5 64.25 13.68 63.57 14.08 63.23 14.88 63.23 16.07 63.23 18.28 64.35 19.83 65.96 19.83 66.4 19.84 66.82 19.69 67.15 19.41 67.64 19.02 67.9 18.2 67.9 17.07 67.9 14.89 66.81 13.42 65.17 13.42M65.48 20.65C62.57 20.65 61.54 18.54 61.54 16.58 61.54 15.2 62.11 14.13 63.23 13.38 64.02 12.9 64.92 12.64 65.85 12.62 68.07 12.62 69.62 14.19 69.62 16.44 69.62 17.98 69 19.18 67.83 19.94 67.26 20.28 66.29 20.65 65.48 20.65" fill="#21313C"></path><path d="M55.3 13.35C54.4 13.35 53.81 14.06 53.81 15.14 53.81 16.22 54.31 17.51 55.73 17.51 55.98 17.51 56.42 17.41 56.64 17.17 56.97 16.87 57.19 16.26 57.19 15.61 57.19 14.2 56.49 13.35 55.31 13.35M55.19 20.84C54.93 20.84 54.68 20.9 54.46 21.02 53.74 21.47 53.4 21.92 53.4 22.44 53.4 22.92 53.6 23.31 54.01 23.66 54.52 24.08 55.2 24.28 56.09 24.28 57.86 24.28 58.64 23.35 58.64 22.44 58.64 21.8 58.32 21.37 57.64 21.13 57.12 20.94 56.25 20.84 55.19 20.84M55.31 25.24C54.25 25.24 53.49 25.02 52.84 24.53 52.21 24.05 51.92 23.34 51.92 22.85 51.93 22.54 52.05 22.23 52.27 22 52.45 21.8 52.88 21.41 53.87 20.75 53.9 20.74 53.92 20.71 53.92 20.67 53.92 20.64 53.89 20.6 53.86 20.59 53.04 20.29 52.8 19.79 52.72 19.52 52.72 19.51 52.72 19.49 52.72 19.48 52.69 19.37 52.67 19.27 52.82 19.17 52.93 19.09 53.11 18.98 53.31 18.87 53.58 18.72 53.85 18.55 54.1 18.37 54.12 18.34 54.14 18.3 54.13 18.26 54.12 18.22 54.1 18.19 54.06 18.17 52.86 17.78 52.26 16.9 52.26 15.57 52.25 14.73 52.66 13.93 53.37 13.44 53.85 13.07 55.06 12.62 55.85 12.62L55.9 12.62C56.7 12.64 57.16 12.8 57.79 13.03 58.15 13.16 58.53 13.22 58.91 13.2 59.58 13.2 59.87 13 60.13 12.76 60.17 12.86 60.19 12.98 60.19 13.09 60.21 13.37 60.13 13.64 59.97 13.87 59.84 14.06 59.51 14.19 59.22 14.19 59.19 14.19 59.16 14.19 59.13 14.19 58.97 14.18 58.82 14.15 58.67 14.11L58.59 14.14C58.57 14.17 58.58 14.21 58.6 14.26 58.61 14.27 58.61 14.28 58.61 14.29 58.67 14.53 58.71 14.77 58.72 15.02 58.72 16.41 58.16 17.02 57.55 17.47 56.97 17.9 56.27 18.17 55.53 18.23L55.53 18.23C55.52 18.23 55.44 18.24 55.3 18.25 55.21 18.26 55.09 18.27 55.07 18.27L55.05 18.27C54.92 18.31 54.58 18.47 54.58 18.77 54.58 19.01 54.73 19.32 55.48 19.38L55.96 19.41C56.94 19.48 58.17 19.56 58.75 19.75 59.54 20.02 60.06 20.76 60.04 21.57 60.04 22.82 59.13 24 57.61 24.72 56.89 25.05 56.1 25.23 55.31 25.22" fill="#21313C"></path>
                      <path d="M50.73 19.89C50.3 19.83 49.99 19.77 49.63 19.6 49.55 19.53 49.51 19.44 49.49 19.33 49.45 18.75 49.45 17.04 49.45 15.92 49.45 15.01 49.3 14.21 48.91 13.64 48.45 13 47.79 12.62 46.94 12.62 46.19 12.62 45.19 13.13 44.36 13.83 44.34 13.85 44.21 13.97 44.21 13.78 44.22 13.6 44.25 13.22 44.26 12.98 44.28 12.85 44.23 12.71 44.14 12.62 43.6 12.89 42.08 13.25 41.51 13.31 41.1 13.39 41 13.78 41.44 13.92L41.44 13.92C41.79 14.01 42.13 14.16 42.44 14.35 42.61 14.48 42.59 14.67 42.59 14.82 42.61 16.1 42.61 18.05 42.55 19.11 42.53 19.53 42.42 19.68 42.11 19.76L42.14 19.75C41.9 19.81 41.66 19.85 41.42 19.88 41.33 19.98 41.33 20.53 41.42 20.64 41.62 20.64 42.6 20.59 43.41 20.59 44.53 20.59 45.11 20.64 45.4 20.64 45.51 20.51 45.55 20 45.47 19.88 45.21 19.87 44.94 19.83 44.68 19.77 44.37 19.69 44.3 19.54 44.28 19.2 44.24 18.31 44.24 16.41 44.24 15.12 44.24 14.76 44.33 14.59 44.45 14.49 44.84 14.15 45.47 13.92 46.03 13.92 46.57 13.92 46.94 14.09 47.21 14.32 47.52 14.59 47.72 14.98 47.76 15.39 47.84 16.11 47.82 17.56 47.82 18.81 47.82 19.49 47.76 19.66 47.51 19.74 47.39 19.79 47.08 19.85 46.72 19.89 46.6 20 46.64 20.53 46.72 20.65 47.22 20.65 47.8 20.59 48.65 20.59 49.71 20.59 50.38 20.65 50.65 20.65 50.77 20.51 50.81 20.02 50.73 19.89" fill="#21313C"></path> //n
                      </g>
                    </svg> */}
                     <div className="contri-img">
                       {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png" alt="logo MongoDb"/> */}
                      <svg height="10rem" width="10rem" viewBox="0 0 13 26">
                        <path d="M11.7 10.4C10.3 4.3 7.4 2.7 6.7 1.6 6.3 1.1 6.1 0.5 5.8 0 5.8 0.5 5.7 0.9 5.3 1.3 4.3 2.1 0.4 5.3 0 12.2-0.3 18.7 4.8 22.6 5.5 23 6 23.3 6.7 23 7 22.8 9.4 21.1 12.8 16.7 11.7 10.4" fill="#10AA50"></path>
                        <path d="M6 19.5C5.8 21.1 5.7 22 5.4 22.9 5.4 22.9 5.6 24.4 5.8 26L6.3 26C6.5 24.9 6.7 23.8 6.9 22.7 6.2 22.3 6 20.9 6 19.5Z" fill="#B8C4C2"></path>
                        <path d="M7 22.8L7 22.8C6.3 22.4 6.1 20.9 6.1 19.6 6.3 17.3 6.3 15 6.3 12.6 6.2 11.4 6.3 1.5 6 0 6.2 0.5 6.4 1 6.7 1.4 7.4 2.6 10.3 4.2 11.7 10.3 12.8 16.6 9.5 21.1 7 22.8Z" fill="#12924F"></path>
                      </svg>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://www.mongodb.com/">MongoDB</a> | trusted by millions of users</h4>
                      </div>
                      <div className="contri-text">
                        <p>Regardless of data integrity in return for query flexibility and speed, we need a NoSql repository for the application. So MongoDB is our choice. They guarantee speed and also come with some risks but with nDsApp this is the database we use.</p>
                        (Bỏ qua tính toàn vẹn của dữ liệu đổi lại sự linh hoạt và tốc độ truy vấn, chúng tôi cần một nơi lưu trữ NoSql cho ứng dụng. Vì thế MongoDB là sự lựa chọn của chúng tôi. Chúng đảm bảo về tốc độ và cũng gặp một số rủi ro nhưng với nDsApp thì đây là cơ sở dữ liệu chúng tôi tin dùng)
                      </div>
                    </div>  
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png" alt="logo Visual Code"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://code.visualstudio.com/">Visual Code</a> | Open source-fast and full-featured</h4>
                      </div>
                      <div className="contri-text">
                        <p>Visual Studio Code (VS Code or VSC) is one of the most popular source code editors. It's fast, lightweight, cross-platform support, lots of features, and our development team used it for coding.</p>
                        (Visual Studio Code (VS Code hay VSC) là một trong những trình soạn thảo mã nguồn phổ biến nhất. Nhanh, nhẹ, hỗ trợ đa nền tảng, nhiều tính năng và nhóm phát triển chúng tôi đã dùng nó để phục vụ cho việc code )
                      </div>
                    </div>     
                   
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Stackoverflow_icon.png" alt="logo StackOverflow"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://stackoverflow.com/">StackOverflow</a> | the best place to find and debug</h4>
                      </div>
                      <div className="contri-text">
                        <p>An environment for exchanging error information and correcting errors for developers around the world. No exception, during project implementation we ran into a lot of problems, and StackOverflow was where our team was looking for information about bugs. Almost all are resolved.</p>
                        (Là một môi trường trao đổi thông tin về lỗi và khắc phục lỗi của mọi lập trình viên trên khắp thế giới. Không ngoại lệ, trong quá trình triển khai dự án chúng tôi gặp rất nhiều vấn đề và StackOverflow là nơi nhóm chúng tôi tìm kiếm thông tin về các lỗi. Hầu hết tất cả đều được giải quyết.)
                      </div>
                    </div>  
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/800px-Google_Chrome_icon_%28September_2014%29.svg.png" alt="logo Google Chrome"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://www.google.com/chrome/">Google Chrome</a> | find infinite information</h4>
                      </div>
                      <div className="contri-text">
                        <p>As a program to search and access information pages on the Internet, all provided by Google and they are completely free. We looked for a lot of information in app building and more. Chrome is also the environment for us to test generated pages.</p>
                        (Là một chương trình tìm kiếm và truy cập các trang thông tin trên mạng Internet, tất cả đều được Google cung cấp và chúng hoàn toàn miễn phí. Chúng tôi đã tìm kiếm rất nhiều thông tin trong việc xây dựng app và hơn thế nữa. Chrome cũng là môi trường để chúng tôi chạy thử nghiệm các trang được tạo ra.)
                      </div>
                    </div>  
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Cib-heroku_%28CoreUI_Icons_v1.0.0%29.svg/120px-Cib-heroku_%28CoreUI_Icons_v1.0.0%29.svg.png" alt="logo Heroku"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://www.heroku.com/">Heroku Server</a> | Cloud platform for your projects</h4>
                      </div>
                      <div className="contri-text">
                        <p>As a cloud application in the form of PaaS provides an environment for developers the simplest way to bring their application to market. Allows developers to freely focus on their core product without distraction in maintaining server, hardware, or infrastructure. nDsApp is operated on this cloud platform. There are paid and free versions available, depending on user needs.</p>
                        (Là một ứng dụng đám mây dưới dạng PaaS cung cấp môi trường cho các nhà phát triển con đường đơn giản nhất để đưa ứng dụng của họ ra thị trường. Cho phép các nhà phát triển tự do tập trung vào sản phẩm cốt lõi của họ mà không bị phân tâm trong việc duy trì máy chủ, phần cứng hoặc cơ sở hạ tầng. Ứng dụng của chúng tôi được hoạt động trên nền tảng đám mây này. Hiện có phiên bản trả phí và miễn phí, tuỳ vào nhu cầu người dùng.)
                      </div>
                    </div>  
                  </div>
                  <div className="contribute">
                    <div className="contri-img">
                      <img src={img} alt="logo nDs group"></img>
                    </div>
                    <div className="contri-info">
                      <div className="contri-name">
                        <h4><a href="https://reactjs.org/">Other contributions & nDs Group</a> | Exclusion Limit </h4>
                      </div>
                      <div className="contri-text">
                        <p>A great contribution to a few other personal or organizational components that we cannot fully mention. At the same time, the dedication of our development team to nDsApp is a cherished achievement, our team continues to improve the App gradually and continuously into the future.</p>
                        (Một đóng góp không nhỏ từ những thành phần cá nhân hoặc tổ chức khác mà chúng tôi không thể nêu hết. Đồng thời, một sự cống hiến của nhóm phát triển của chúng tôi vào nDsApp là một thành tựu đáng trân trọng, Nhóm chúng tôi tiếp tục hoàn thiện App dần dần và liên tục trong tương lai)
                      </div>
                    </div>  
        
                  </div>
                  <Typography gutterBottom={true} variant="subtitle1">
                    Once again, the app management board respectfully sends to the members and organizations that make a very important contribution to the construction and development of this application. To me it is a spiritual pleasure a pride for the team to develop. Marking an invaluable product for participating in software programming - the Development Team's website./ .
                    (Một lần nữa ban quản lí app trân trọng gửi đến các  thành viên, tổ chức có đóng góp rất là quan trọng vào việc xấy dựng và phát triển ứng dụng này. Với tôi đó là một niềm vui tinh thần một niềm tự hào cho nhóm phát triển. Đánh dấu một sản phẩm vô giá cho việc tham gia vào lập trình phần mềm  - website của Nhóm Phát Triển./ .)
                  </Typography>
                  <span className="writer-Contri">According to nDs</span>
                </div>
              </section>
            </Container>
            </div>
          );
        }
   
}
