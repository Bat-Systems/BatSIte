import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return ( 
        <div className="HomeContent">
            <Helmet>
                <title>Axis</title>
                <meta property="og:title" content="Axis" />
                <meta name="description" content="The nextgeneration of Discord bots." />
                <meta property="og:description" content="The nextgeneration of Discord bots." />
                <meta property="og:url" content="https://axisbot.vercel.app" />
            </Helmet>
            <div className="LayoutContainer">
                <div className="InfoBubble">
                    <div className="InfoColLeft">
                        <div className="InfoContent">
                                <div className="AltBoldText">AXIS</div>
                                <div className="MainText">Management Reimagined.</div>
                                <div className="AltText">Axis is a free and easy-to-use bot, packaged full of features capable of healing your server.</div>
                                <div className="infoButtonContainer">
                                    <Link to="/invite" className='GenericLinkDeco'>
                                        <div className="infoButton" id="InfoMainButton">
                                            Invite me
                                        </div>
                                    </Link>
                                    <Link to="/commands" className='GenericLinkDeco'>
                                        <div className="infoButton" id="InfoAltButton">
                                            Commands
                                        </div>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="InfoColRight">
                        <div className="InfoImg">
                            <img rel="prefetch" src="./img/Logos/MeiiRoundedPurpleBorder.png" alt="AxisLogo" width="150px" height="150px"/>
                        </div>
                    </div>
                </div>
                <div className='InfoDividerHR'><hr /></div>
                <div className='FeatureTitleContainer'>
                    <div className='FeatureTitleText'>Features:</div>
                </div>
                <div className='FeatureBubbleContainer'>
                    <div className="FeatureBubble" id='first'>
                        <div className="FeatureColLeft">
                            <div className='FTextContainer'>
                                <div className='FTitle' id='LongBoi'>Handcrafted Moderation</div>
                                <div className='FSubTitle'>Keep your discord server at the tip of your fingers, incredible moderation systems </div>
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FPic'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/Cscreenshot.png" alt="Meii Confession Screenshot" width="270px" height="130px"/>  
                            </div>
                        </div>
                    </div>
                    <div className="FeatureBubble" id='second'>
                        <div className="FeatureColLeft">
                            <div className='FPic' id='CL'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/CLscreenshot.png" alt="Meii Confession Logging Screenshot" width="280px" height="168px"/>  
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FTextContainer' id='CL'>
                                <div className='FTitle'>Utility Tools</div>
                                <div className='FSubTitle'>Axis utilizes many different packages and use that to power incredible commands</div>
                            </div>
                        </div>
                    </div>
                    <div className="FeatureBubble" id='third'>
                        <div className="FeatureColLeft">
                            <div className='FTextContainer' id='GE'>
                                <div className='FTitle'>Entertainment</div>
                                <div className='FSubTitle'>Not sure that your memes you are spamming memes actually help? Probably not but we can help!</i></div>
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FPic' id='GE'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/GEscreenshot.png" alt="Meii GIF Emote Screenshot" width="280px" height="210px"/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='EndOfPageSpacer' />
            </div>
        </div>
     );
}
 
export default Home;
