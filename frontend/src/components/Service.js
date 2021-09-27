import React from 'react'
import { Card } from "react-bootstrap"; 


function Service() {
    return (
        <div className="container">
        <h1  style={{ padding:'5px', textAlign:'center', color:'gray', fontSize:'25px'}}>Our Service</h1>
        <p style={{ textAlign:'center',color:'black',fontSize:'20px'}}>Take a look at service we offer</p>
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            <Card style={{width:'350px',height:'750px'}} >
            <Card.Body>
            <img src="https://d1eipm3vz40hy0.cloudfront.net/images/blog/positioning-statement-examples-blog-header.png" alt="12 Positioning Statement Examples + Best Template" width="290px" height="300px"/>
              <Card.Title style={{padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Brand positioning + Messaging</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}>
              TELL YOUR STORY IN A WAY THAT DRIVES BUSINESS
                Your brand message is the narrative of your company. It describes the problems customers face, guides them to the solutions you provide, and shows the results your solutions bring. It’s easy to make your brand story all about you, but successful brands put the customer first, rather than their products or services.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width:'350px',height:'620px'}}>
            <Card.Body>
            <img src="https://mobile-sharing.com/wp-content/uploads/2017/10/Web-design-For-MS.png" alt="Design &amp;amp; Applications - Mobile Sharing" width="290px" height="300px"/>
              <Card.Title style={{ padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Website design+ Development</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}> 
              The concept of web design and development has been around for about as long as websites have existed. It used to have a much simpler definition because website creation used to be a much simpler process.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width:'350px',height:'550px'}}>
            <Card.Body>
            <img src="https://previews.123rf.com/images/wrightstudio/wrightstudio1811/wrightstudio181100049/111291253-digital-marketing-online-advertising-seo-sem-smm-business-and-internet-concept-.jpg" alt="" width="290px" height="300px"/>            
            <Card.Title style={{ padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Seo+Sem+Digital Adertising</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width:'350px',height:'690px'}}>
            <Card.Body>
            <img src="https://inter-growth.co/wp-content/uploads/2019/03/content-development-process-e1552092175673-1.jpg" alt="7-Step Content Development Process [Step-by-Step Guide] | Intergrowth" width="290px" height="300px"/>
              <Card.Title style={{ padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Content strategy developments</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}>  
                  Definition. Content strategy is the high-level planning, execution, promotion, and on-going management of the content lifecycle to support key business initiatives. Essentially, it's your brand's game plan for driving traffic, leads, engagement, sales, and other business outcomes through content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width:'350px',height:'690px'}}>
            <Card.Body>
            <img src="https://podshifter.com/wp-content/uploads/2021/05/8.jpg" alt="Importance Of Goal-Oriented Marketing Campaigns | Pod Shifter" width="290px" height="300px"/>
              <Card.Title style={{ padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Marketing campaigns</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}>
              ext message marketing is the ongoing process of communicating business news, sales, promotions or other relevant information to your customers via SMS (short message service) text messages on their mobile devices. It is a type of digital marketing strategy that helps build brand awareness on a more personal level
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{width:'350px',height:'620px'}}>
            <Card.Body>
            <img src="https://elearning.company/blog/wp-content/uploads/infographics/infographics-data-presentation-data-visualization-elearning.jpg" alt="Using Infographics for Data Presentation and Data Visualization in  eLearning | The eLearning Blog" width="290px" height="300px"/>
              <Card.Title style={{ padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Infographics+data visualization</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}>
              So the primary difference between infographics and data visualizations is that data visualizations are generally briefer, more discrete pieces that can form one component of a larger infographic
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width:'350px',height:'750px'}}>
            <Card.Body >
            <img src="https://www.dpnews.fr/wp-content/uploads/2018/07/webdesign-montpellier-1100x608.jpg" alt="Web Design &amp;amp; Agence de graphisme | DP News" width="290px" height="300px"/>
              <Card.Title style={{ padding:'5px',textAlign:'center', color:'red', fontSize:'25px'}}>Desgin</Card.Title>
              <Card.Text style={{textAlign:'center', color:'black', fontSize:'19px'}}>
              While design and layout are both crucial elements of a website, quality text and content are essential to communicate effectively with customers on the web. Completing technical writing, slogan development, product and site descriptions, business history and background can be challenging for any business owner. If you need assistance putting pen to paper for any of these tasks, we would be glad to help.
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      </div>
    )
}

export default Service

