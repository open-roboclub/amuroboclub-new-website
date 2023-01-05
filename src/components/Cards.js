
import Projectdata from '../assets/cms/Projectdata'
import Modals from './Modals';
import { db } from '../firebase';
import React,{useState,useEffect} from 'react';
import { getDocs, collection} from "firebase/firestore"; 



const Cards = () => {
  let books= [];
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const querySnapshot = await getDocs(collection(db, "projects"))
    
    for(let i=1; i<=4; i++) {
    // console.log(querySnapshot[i].id, " => ", querySnapshot[i].data());
    // setBlogs({...doc.data()})
    // books.push({...querySnapshot[i].data()})
};//doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..
// querySnapshot is an is an array object of docs.

const data= querySnapshot.docs.map((doc)=>({...doc.data(),}));
setBlogs(data);


console.log(blogs);

// console.log(books);
  }
  useEffect(() => {
    fetchBlogs();
    }, [])




    const [model, setModel]= useState(false);
    const [tempdata, setTempdata]= useState([]);
    
        const getData = (img, name, description, progress, teamMembers, date)=> {
            let tempData = [img, name, description, progress, teamMembers, date];
            setTempdata(item=> [1, ...tempData])
            return setModel(true);
        }

{/* <div className="App">
       {blogs.map((val, Name)=> {
        console.log(val.Name)
       })}
       {blogs.map((val, Name)=> {
        return <p key={Name}>{val.Name}</p>
       })}
    </div> */}








  return (
    <>
      <section className='py-4 py-lg-5 container' >
           <div className='row justify-content-center align-item-center'>
            {blogs.map((item, index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                    <div className="card p-0 overflow-hidden h-100 shadow align-items-center" >
                    <img className="card-img-top" src={item.imgSRC} alt="Card image cap" style={{height: "167px", width: "167px", borderRadius: "50%",
                   display: "flex",
                   paddingTop: "8px"}}/>
                            <div className="card-body">
                                   <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text"></p>
                                     <button class="btn btn-primary" style={{backgroundColor: "black", marginLeft: "4px"}}
                                     onClick={()=>getData(item.imgSRC, item.name, item.description, item.progress, item.teamMembers, item.date)}>More Information
                                    </button>
                                     </div>
                                       </div>
                    </div>
                )
            })}
          
           </div>
      </section>

      {
        model === true ? <Modals img={tempdata[1]} name={tempdata[2]} description={tempdata[3]} progress={tempdata[4]} teamMembers={tempdata[5]} date={tempdata[6]} hide={()=>setModel(false)}/>: ''
      }
    </>
  )
}

export default Cards
