import React, { Component } from "react";
import { Typography, Container } from "@material-ui/core";
import className from 'classnames';
import _ from 'lodash'


const ref = React.createRef();
export default class PrivacyApp extends Component {
        constructor(props){
            super(props)
            this.state = {
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

    render(){
        const listsContent = [
            {
                id:1,
                link: '#list1',
                name: 'Privacy Highlights'
            },
            {
                id:2,
                link: '#list2',
                name: 'nDsApp Collects'
            },
            {
                id:3,
                link: '#list3',
                name: 'Purposes Using Info'
            },
            {
                id:4,
                link: '#list4',
                name: 'Sharing of Personal'
            },
            {
                id:5,
                link: '#list5',
                name: 'Cookie Policy'
            },
            {
                id:6,
                link: '#list6',
                name: 'Data Security'
            },
            {
                id:7,
                link: '#list7',
                name: 'Retention of Info'
            },
            {
                id:8,
                link: '#list8',
                name: 'Children’s Privacy'
            },
            {
                id:9,
                link: '#list9',
                name: 'Third Party Sites'
            },
            {
                id:10,
                link: '#list10',
                name: 'Your Rights'
            },
            {
                id:11,
                link: '#list11',
                name: 'California Privacy'
            },
            {
                id:12,
                link: '#list12',
                name: 'Brazil Privacy'
            },
            {
                id:'12b',
                link: '#list12b',
                name: 'Updates Privacy'
            },
            {
                id:14,
                link: '#list14',
                name: 'Contact nDsGroup'
            }

        ]
        return (
        <div className="privacy-app-main" ref={ref}>
            
            <div className="left-privacy-app">
                <ul className="links-content">
                    {
                        listsContent.map((list) => {
                            return <li key={list.id}>
                                <a onClick={() => this.setState({linkActive: list.id})} 
                                    href={list.link}  className={className('scroll-link', {'activelink-content' : _.get(list, 'id') === this.state.linkActive})}>
                                        {list.name}
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="right-privacy-app">
            {this.state.showBtnBackToTop && (
            <div className="btn-back-to-top">
                <div className="btn-inside" onClick={() => this.scrollToTop()}>
                   <span></span>
                </div>
            </div>)}
            <section id='list1' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Privacy Statement Highlights{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        When you use and interact with our websites or services,
                        communicate with or otherwise contact us, we may collect, use, share and process information relating to you ("Personal Data"). 
                        These Privacy Statement Highlights summarize our Personal Data processing practices and your related rights.
                        <br />
                        In this Privacy Policy, "personal information" includes references to "personal data" as defined under applicable laws. 
                        Your use of our Sites and Services, and any dispute over privacy, is subject to this Policy and the relevant Terms, 
                        including the applicable limitations on damages and the resolution of disputes. The Terms are incorporated by reference into this Policy.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list2' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Personal Information That nDsApp Collects{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        We collect personal information when visit to App or you register for an account.
                        <br />
                        Personal information collected on the Sites includes community forum content, profiles, photographs, names, unique identifiers 
                        (e.g., social media handles or usernames), contact and billing information (e.g., email address, postal address, telephone, fax), 
                        and transaction information. Also, in order to tailor subsequent communications to users and continuously improve the Sites’ operations and services, 
                        nDsApp also ask users to provide additional optional information regarding their interests, demographics, experience and detailed contact preferences.
                        <br />
                        Communications. When you communicate with us (via email, phone, through the Sites or otherwise), we may maintain a record of your communication.
                        <br />
                        Automatically Collected Information. In addition, nDsApp may automatically collect the following information about users’ use of the Sites or Services 
                        through cookies, web beacons, and other technologies: your domain name; your browser type and operating system; web pages you view; links you click; your IP address; 
                        the length of time you visit our Sites and or use our Services; and the referring URL, or the webpage that led you to our Sites. We may combine this information with 
                        other information that we have collected about you, including, where applicable, your user name, name, and other personal information. Please see our Cookie Policy for more information about our use of cookies.
                        <br />
                        De-identified Information. We may de-identify and aggregate certain personal information we collect such that the information no longer identifies or can be linked 
                        to a particular user or an individual data subject (“De-identified Information”), subject to the terms of any applicable user agreements. We may use this information 
                        to improve our Services, analyze trends, publish market research, and for other marketing, research or statistical purposes, and may disclose such information to third parties for these specific purposes.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list3' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Purposes and Legal Bases for Our Using of Your Personal Information{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        Purposes and Legitimate Interests nDsApp use the personal information we collect for our legitimate operate interests, which include the following purposes:
                        <br />
                        Providing our Sites and Services. To provide the Services and our Sites (including Project Sites), to communicate with you about your use of our Sites and Services, 
                        to respond to your inquiries, provide troubleshooting of the Sites and for other purposes to support users and the community.
                        <br />
                        In addition, to ensure the safety of the system, the way it works properly, ensure the security of resources and information 
                        that we collect from people, and ensure the stability you interact with. application. We don't know for sure who you are so 
                        we need to collect every possible information from users accessing and authorized users, making sure they are all confidential only 
                        you and we know, and a The amount of information is encoded according to the pattern that we generate, we may not even be able to know without deep intervention, 
                        except in special cases where it is necessary to decode that information.
                        <br />
                        Prevent Misuse. Where we believe necessary to investigate, prevent or take action regarding illegal activities, suspected fraud, situations 
                        involving potential threats to the safety of any person or violations of the relevant Terms or this Privacy Policy.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list4' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Sharing of Personal Information{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        We may share personal information with third parties who provide services to nDsApp, such as payment processors, 
                        email delivery services, software providers and when we enter into product integrations with Software providers. 
                        Additionally, to improve user experience, we offer single sign-on solutions for account login and these third parties (including Facebook and Google) may 
                        receive information from these services when you elect to use them. When nDsApp shares your personal information and other collected information with third party service providers, 
                        we require that they use your information only for the purpose of providing services to us and consistent with this privacy policy.
                        <br />
                        Legally Required. We may disclose your information if we are required to do so by law (including to law enforcement in the U.S. and other jurisdictions).
                        Protection of Rights. We may disclose information where we believe it necessary to respond to claims asserted against us or, comply with legal process (e.g., subpoenas or warrants), 
                        enforce or administer our agreements and terms, for fraud prevention, risk assessment, investigation, and protect the rights, property or 
                        safety of nDsApp, its Users, participants in its events or Projects, or others.
                        Anonymized and Aggregated Information. We may share aggregate or De-identified information with third parties for research, marketing, analytics and 
                        other purposes, provided such information does not identify a particular individual.
                        <br />
                        We absolutely do not use your information for commercial purposes or have any related problems for the unauthorized use of your personal information without the consent of the user. 
                        However, with some core activities such as brand development, traffic usage evaluation of information storage system we may use a few small points in your information that we store 
                        (About They are basically all public when operating on the app) and make sure that the information is used with strict, closed communication between us and 
                        third parties, ensuring user privacy and placing give them the legal status if they use the information.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list5' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Cookie Policy{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        A cookie is a small piece of text that allows a website to recognize your device and maintain a consistent, cohesive experience throughout multiple sessions. 
                        If you use the nDsApp Network, both nDsApp and third parties will use cookies to track and monitor some of your activities on and off the nDsApp Network, 
                        and store and access some data about you, your browsing history, and your using.
                        <br />
                        This policy describes how both nDsApp and other third parties use cookies both within and without the nDsApp network and how you can 
                        exercise a greater degree of control over cookies. Please keep in mind that this may alter your experience with our platform, and may limit certain features (including being logged in as a user).
                        <br />
                        General Browsing: We use cookies that are important for certain technical features of our website, like logging into user accounts and implementing fixes and improvements to our platform.
                        <br />
                        These cookies:<br />
                            <li>Enable behavior in our Products and/or Services that is tailored to the activity or preferences of a person visiting our properties</li>
                            <li>Allow users to opt out of certain types of modeling, tailoring, or personalization in our products</li>
                            <li>Collect information on our users’ preferences in order to create more useful products</li>
                            <li>Maintain the regular business operations of our Advertising and Marketing departments 
                            (such as one-time pop-ups or “hero” displays when first visiting a site and to collect impressions and click data)</li>
                            <li>Help to diagnose and correct downtime, bugs, and errors in our code to ensure that our products are operating efficiently</li>
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list6' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Data Security{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        We have implemented commercially reasonable precautions designed to protect the information we collect from loss, misuse, 
                        and unauthorized access, disclosure, alteration, and destruction. Please be aware that despite our best efforts, no data security measures can guarantee 100% security.
                        <br />
                        You should take steps to protect against unauthorized access to your passwords, phone, and computer by, among other things, signing off after using a shared computer, 
                        choosing robust passwords that nobody else knows or can easily guess, not using a password for more than one site or service, and keeping your log-ins and passwords private. 
                        We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity. We ask you to promptly notify us 
                        if you become aware that any information provided by or submitted to our Sites or through our S is lost, stolen, or used without permission at <a style={{color: "hsl(185, 57%, 50%)"}} href="/about/feedback">Feedback-Support</a>.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list7' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Retention of Your Personal Information{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        We generally keep personal information only for as long as required to fulfill the purposes for which it was collected. 
                        However, in some circumstances, we may retain personal information for other periods of time, for instance where we are required to do so in accordance with legal, tax and accounting requirements, 
                        or if required to do so by a legal process, legal authority, or other governmental entity having authority to make the request, for so long as required. In specific circumstances, 
                        we may also retain your personal information for longer periods of time corresponding to a statute of limitation, so that we have an accurate record of your dealings with us in the event of any complaints or challenges.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list8' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Children’s Privacy{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        Except as specifically indicated within a Site, we do not knowingly collect or solicit personal information from anyone under the age of sixteen (16), or knowingly allow such persons to register. 
                        If we become aware that we have collected personal information from a child under the relevant age without parental consent, we take steps to delete that information. Where we specifically indicate that we collect personal information from children under 16, 
                        we will obtain the parent or guardian’s consent and provide adequate notice.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list9' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Links to Third Party Sites and Services{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        The Sites may contain links to third party sites or online services. Please refer to the privacy policies of the relevant third party websites or services to find out more about how they process and handle personal information.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list10' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        You Rights{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        Access and Amendment. You may contact our privacy coordinator, as set forth below, to access or amend your personal information.
                        <br />
                        Submitting a Request. To exercise the above rights or contact us with questions or complaints regarding 
                        our treatment of your personal information, contact us at <a style={{color: "hsl(185, 57%, 50%)"}} href="/about/feedback">Feedback-Support</a>. Please note that we may request proof of identity, 
                        and we reserve the right to charge a fee where permitted by law, especially if your request is manifestly unfounded or excessive. 
                        We will respond to your request within the applicable timeframes set out by law.
                        <br />
                        Only applies to basic information that you provide publicly when registering with us. For the information in the account verification request, 
                        after we have authenticated to exchange them, you need to have other documents with equal value to the information you previously submitted to be able to request changes.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list11' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        California Privacy{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        Under the CCPA, you have the right to access the Personal Information we’ve collected about you during the past 12 months and information about our data practices. 
                        You also have the right to request that we delete the Personal Information that we have collected from you.
                        To request manual access or deletion of your Personal Information, please contact us here.
                        <br />
                        Under the CCPA, you have the right to access the Personal Information we’ve collected about you during the past 12 months and information about our data practices. You also have the right to request that we delete the Personal Information that we have collected from you.
                        To request manual access or deletion of your Personal Information, please contact us <a style={{color: "hsl(185, 57%, 50%)"}} href="/about/feedback">Feedback-Support</a>.
                        Please note, for all manual requests, you will need to verify your identity by providing us with the following information:
                        <br />
                        <li>Your full name</li>
                        <li>Your email address</li>
                        <li>Your nDsApp phone number</li>
                        <li>Whether you are a California consumer pursuant to Cal. Civ. Code Sec. 1798.140(g)</li>
                        <br />
                        nDsApp will not be able to respond to your request unless you provide us with all of the above information. You can also designate an authorized agent to make a manual request on your behalf. If you decide to use an authorized agent, 
                        please also include written permission that you have designated that agent to make this request, or proof of the agent’s power of attorney. We may also follow-up with you to verify your identity before processing your authorized agent’s request.
                        <br />
                        Lastly, you have the right to be free from any discrimination for exercising your rights to access or delete your Personal Information. We will not discriminate against you for exercising any of these rights.
                        <br />
                        If you have additional questions about this Notice or how to exercise your rights under the CCPA, please contact us.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list12' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        This Brazil Privacy Notice{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        This Brazil Privacy Notice (“Notice”) applies to 
                        personal data processing activities under Brazilian law and supplements our Privacy Policy.
                        <br />
                        Under the Brazilian General Data Protection Law (the “LGPD”), you have the right to access, rectify, port, erase, and confirm that we process your data. 
                        Learn more about your rights and find out how you can exercise your rights by visiting our iPhone, Android and KaiOS articles in our Help Center. 
                        In certain circumstances, you also have the right to object to and to restrict the processing of your personal data. Our Privacy Policy provides information about how we share data with third parties.
                        <br />
                        The data controller responsible for your information is nDsApp. To contact the Data Protection Officer for nDsApp.
                        You also have the right to petition the Brazilian Data Protection Authority (“DPA”) by contacting the DPA directly.
                        <br />
                        If you have additional questions about this Notice or how to exercise your rights under the CCPA, please contact us.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list12b' className="section-content">
                <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Updates Privacy & Policy{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        We may amend or update our Privacy Policy. We will provide you notice of amendments to this Privacy Policy, as appropriate, and update the “Last Modified” date at the top of this Privacy Policy. 
                        Your continued use of our Services confirms your acceptance of our Privacy Policy, as amended. If you do not agree to our Privacy Policy, as amended, you must stop using our Services. Please review our Privacy Policy from time to time.
                        </Typography>
                    </section>
                </Container>
            </section>
            <section id='list14' className="section-content">
            <Container>
                    <header>
                        <Typography variant="h4" gutterBottom={true}>
                        Contact with us{" "}
                        </Typography>
                    </header>
                    <div className="deliver"></div>
                    <br />
                    <section>
                        <Typography gutterBottom={true} variant="subtitel1" style={{color: 'rgb(218, 226, 236)', marginLeft: '1rem'}}>
                        If you have questions about our Privacy Policy, please contact us via <a href="/about/feedback">Feedback-Support</a>.
                        <br />

                            nDsApp DSG<br />
                            Privacy Policy<br />
                            XaLoHaNoi Road<br />
                            Linh Trung, Thu Duc<br />
                            Ho Chi Minh City, Viet Nam<br />

                        </Typography>
                    </section>
                </Container>
            </section>
                
            </div>
           
          </div>
        );
      }
   
}
