import React from 'react'
import '../dashboard/dashboard.css'
import logo1 from "../dashboard/images/logo1.png"
// import logo2 from "../dashboard/images/logo2.jpg"
// import {GrMenu} from 'react-icons/gr'
import{GrClose} from'react-icons/gr'
import{MdDashboard} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {MdAccountBox} from 'react-icons/md'
import {GiStairsGoal} from 'react-icons/gi'
import {VscRecordKeys} from 'react-icons/vsc'
import {AiFillSetting} from 'react-icons/ai'
import {TbLogout} from 'react-icons/tb'
import {LuMenu} from 'react-icons/lu'
import {BsSun} from "react-icons/bs"
import {MdDarkMode} from 'react-icons/md'
import {BsEmojiLaughing} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Index =()=> {
  return (
    <div className='dash-container'>
    <div  className='dashboard-cont'>
        <aside>
            <div className='top'>
                <div className='logo'>
              <img src={logo1} alt='my logo'/>
                </div>
                <div className='close'>
                <span> <GrClose/></span>
                </div>
            </div>
            <div className='sidebar'>
                <a href='#' className='active'>
                 <span><MdDashboard/></span>   <h2>Dashboard</h2>
                     
                </a>
                <a href='#'>
                <span></span>     <AiFillHome/>
                     <h3>Home</h3>
                </a>
                <a href='#'>
                    <MdAccountBox/>
                     <h3>My Account</h3>
                </a>
                <a href='#'>
                    <GiStairsGoal/>
                     <h3>Goals</h3>
                </a>
                <a href='#'>
                    <VscRecordKeys/>
                     <h3>Record</h3>
                </a>
                <a href='#'>
                    <AiFillSetting/>
                     <h3>Settings</h3>
                </a> 

                <div className='logout'>
                <a href='#'>
                    <TbLogout/>
                     <h3>Logout</h3>
                </a>
                </div>
            </div>

          
        </aside>
    </div>
    <div className='parent'>
    <h1>Welcome to MoneCO Dashboard</h1>
<div className='date'>
<input type='text' placeholder='search...'></input> 

</div>
        <div className='parent1'>
            <div  className='par-child1'>
            <div className='insight'>
            
                <div className='middles'>
                   
                        <h3>Savings</h3>
                        <h2>$308.56</h2>
                        <h5>Your saving journery is not bad!</h5>
                    <div className='progress'>
                        <svg>
                        <circle cx={38} cy={36} r={36}></circle>
                        </svg>
                    
                    <div className='number'>
                        <p>76.5%</p>
                    </div>
               
            </div>
           </div>
           
           </div>
            </div>
            <div  className='par-child2'>
                <div className='ch1'>
                <div className='income'>
           
           <div className='middle'>
               <div className='left'>
                   <h3>Income</h3>
                   <h2>$3308.56</h2>
               </div>
               
               <div className='numbers'>
                   <p>87%</p> 
           </div>
           <h5>Compared to($1500 last month)</h5>
       </div>
       
      </div> 
                </div>
                <div className='ch2'>
                <div className='income'>
           
           <div className='middle'>
               <div className='left'>
                   <h3>Expenses</h3>
                   <h2>$2198</h2>
               </div>
               
               <div className='numbers'>
                   <p>50%</p> 
           </div>
           <h5>Compared to($1500 last month)</h5>
       </div>
       
      </div> 
                </div>
            </div>
            <div  className='par-child3'>
            <div className='balance'>
    <div className='updates'>
        <h2>Balance</h2>
      
        <h3>$1200</h3>
          
        <div className='message'>
        <span>
        <b>Congratulations <BsEmojiLaughing/></b>
  </span>
        
            <p>Accordingly to the last, you work well
but try to  increase your saving money 
inorder to your complete goal!!  </p>

        </div>
        </div>
    </div>
            </div>
        </div>
        <div className='parent2'>
            
            <div className='par-child4'>
            {/* <h2>Activities of Year</h2> */}
            <div className='recent-month'>
            
            <table>
                <thead><tr>
                    <th>Month</th>
                    <th>Total Savings ($)</th>
                    <th>Income($)</th>
                    <th>Expenses($)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                   <td>Junary</td> 
                   <td>1500</td>
                   <td>3000</td>
                   <td>1500</td>
                   </tr>
                   <tr>
                   <td>February</td> 
                   <td>2500</td>
                   <td>4000</td>
                   <td>500</td>
                   </tr>
                   <tr>
                   <td>March</td> 
                   <td>3000</td>
                   <td>3500</td>
                   <td>300</td>
                   </tr>
                   <tr>
                   <td>April</td> 
                   <td>1500</td>
                   <td>3000</td>
                   <td>1500</td>
                   </tr>
                   <tr>
                   <td>May</td> 
                   <td>4500</td>
                   <td>3500</td>
                   <td>1000</td>
                   </tr>
                   <tr>
                   <td>June</td> 
                   <td>1500</td>
                   <td>3000</td>
                   <td>1500</td>
                   </tr>
                  
                  
                </tbody>
            </table>
            <a href='#'>Show All</a>
        </div>
            </div>
            <div className='par-child5'>
            <div className='team'>
    <div className='updates'>
        <h2>WORK AS TEAM</h2>
          
        <div className='message'>
        
            <p> Start savings as
a team. Our platform offers 
seamless collaboration featu-
res for collective saving. 
 </p>

 <p>What are you waiting of join our 
team now!</p>
<button className='join-btn'>Join team <AiOutlineArrowRight/></button>
        </div>
        </div>
    </div>
            </div>
        </div>

    </div>

</div>
  )
}
export default Index;