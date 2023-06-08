import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Home = async()=> {
  const session = await getServerSession(authOptions);
  if(!session){
   redirect('/login')
  }
  return (
    <>
  <div class="dashboard1">
	
  <div class="container">
    <div class="row dash-1">
      <div class="col-md-3 col-lg-3 dashboard">
        <ul>
          <li><a><img src="images/10.png" alt="profile name"/> Home</a> </li> 
          <li><a><img src="images/client11.png" alt="profile name"/> Profile Name</a></li>
          <li><a><img src="images/2.png" alt="profile name"/> interest</a> </li>
          <li class="notify"><a><img src="images/3.png" alt="profile name"/> Notifications</a> </li>
          <li><a><img src="images/4.png" alt="profile name"/> Friends</a> </li>
          <li><a><img src="images/5.png" alt="profile name"/> Questions Asked</a> </li>
          <li><a><img src="images/6.png" alt="profile name"/> Settings & Privacy</a> </li>
          <li class="notify"><a><img src="images/7.png" alt="profile name"/> Help & Support</a> </li>
          <li><a><img src="images/8.png" alt="profile name"/> Give Feedback</a> </li>
          <li><a><img src="images/9.png" alt="profile name"/> Log Out</a> </li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore  </p>
      </div>
      <div class="col-md-6 col-lg-6 year1 bg-colr-new">
        <div class="row qusrtion1">
          <div class="col-6">
            <h4>Ask Questions</h4>
          </div>
          <div class="col-6 ask-new">
            <button class="qusetion-1">Ask Questions</button>
          </div>
          
        </div>
          <div class="bg-color1 bg-color-3">
            
        


          <div class="row divide-section">
            <div class="col-md-2 left-section vot">
              <ul>
                <li>0 Votes</li>
                <li>0 Answers </li>
                <li>0 Views </li>
              </ul>
              
            </div>
            <div class="col-md-9 right-section">
              

          <div class="row tags tags-new">
            <div class="col-md-10 tag-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore  </p>
            <ul>
              <li><button>Tag1</button></li>
              <li><button>Tag2</button></li>
              <li><button>Tag3</button></li>
              <li><button>Tag4</button></li>
              <li><button>Tag5</button></li>
            </ul>
             
               <p>Published 4 may</p>

          </div>
            
        

          </div>

        

            </div>
          </div>
          <div class="row divide-section">
            <div class="col-md-2 left-section vot">
              <ul>
                <li>0 Votes</li>
                <li class="ansert">0 Answers </li>
                <li>0 Views </li>
              </ul>
              
            </div>
            <div class="col-md-9 right-section">
              

          <div class="row tags tags-new">
            <div class="col-md-10 tag-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore  </p>
            <ul>
              <li><button>Tag1</button></li>
              <li><button>Tag2</button></li>
              <li><button>Tag3</button></li>
              <li><button>Tag4</button></li>
              <li><button>Tag5</button></li>
            </ul>
             
               <p>Published 4 may</p>

          </div>
            
        

          </div>

        

            </div>
          </div>

            <div class="row divide-section">
            <div class="col-md-2 left-section vot">
              <ul>
                <li>0 Votes</li>
                <li>0 Answers </li>
                <li>0 Views </li>
              </ul>
              
            </div>
            <div class="col-md-9 right-section">
              

          <div class="row tags tags-new">
            <div class="col-md-10 tag-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore  </p>
            <ul>
              <li><button>Tag1</button></li>
              <li><button>Tag2</button></li>
              <li><button>Tag3</button></li>
              <li><button>Tag4</button></li>
              <li><button>Tag5</button></li>
            </ul>
             
               <p>Published 4 may</p> 

          </div>
            
        

          </div>

        

            </div>
          </div>
          
            </div>


        


             

                <p class="content-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore  </p>
    </div>
      <div class="col-md-3 col-lg-3">
      
        <div class="relate-questions">
        <div class="related">Related Questions</div>
        <ul>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
          <li>sunt in culpa qui officia deserunt mollit anim id est </li>
        </ul>
        </div>
        
      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Home