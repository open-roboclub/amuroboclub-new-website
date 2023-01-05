
import { db } from '../firebase';
import React,{useState,useEffect} from 'react';
import { getDocs, collection} from "firebase/firestore"; 
import { Details } from '@mui/icons-material';
import Projectdata from '../assets/cms/Projectdata';


let books=[];

function Fetch() {
    
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const querySnapshot = await getDocs(collection(db, "projects"))
    
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    // setBlogs({...doc.data()})
    books.push({...doc.data()})
});//doc is document of collection and doc.data() is object in that doc. In book, all objects have been passed with index 0,1..

const data= querySnapshot.docs.map((doc)=>({...doc.data(),}));
setBlogs(data);


console.log(blogs);

// console.log(books);
  }
  useEffect(() => {
    fetchBlogs();
    }, [])
  
  return (
    <div className="App">
       {blogs.map((val, Name)=> {
        console.log(val.Name)
       })}
       {blogs.map((val, Name)=> {
        return <p key={Name}>{val.Name}</p>
       })}
    </div>
  );
}

export default Fetch;
