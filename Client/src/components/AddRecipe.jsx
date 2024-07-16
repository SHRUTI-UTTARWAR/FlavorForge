import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const navigate = useNavigate()
    const {addRecipe} = useContext(AppContext);
    const[formData , setformData] = useState({
      title :"",
      ist :"",
      iing1:"",
      ing2:"",
      ing3:"",
      ing4:"",
      qty1:"",
      qty2:"",
      qty3:"",
      qty4:"",
      imgUrl:"",
        
    })

    const onChangeHandler = (e)=>{
      const {name,value} = e.target 
      setformData({...formData,[name]:value})
    }

    const onSubmitHandler =async (e)=>{
      e.preventDefault();

      const {title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl} = formData
      const result = await addRecipe(title,ist,ing1,ing2,ing3,ing4,qty1,qty2,qty3,qty4,imgUrl);

      // console.log("add recipe",result.data)
      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

         // console.log(result.data)
         setTimeout(()=>{
            navigate('/')

         },1500)


    }
  return (
    <>
    <ToastContainer/>
    <div className="container my-5 p-5" style={{'width':"500px","border":"2px solid yellow", "borderRadius":"10px"}}>
        <h2 className="text-center">ADD RECIPE</h2>
        <form onSubmit={onSubmitHandler} style={{width:"420px",margin:"auto"}} className='my-3 p-3'>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title </label>
    <input name='title' value={formData.title} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Instruction </label>
    <input name='ist' value={formData.ist} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ing1 </label>
    <input name='ing1' value={formData.ing1} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ing2 </label>
    <input name='ing2' value={formData.ing2} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ing3</label>
    <input name='ing3' value={formData.ing3} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ing4 </label>
    <input name='ing4' value={formData.ing4} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">qty1 </label>
    <input name='qty1' value={formData.qty1} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">qty2 </label>
    <input name='qty2' value={formData.qty2} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">qty3 </label>
    <input name='qty3' value={formData.qty3} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">qty4 </label>
    <input name='qty4' value={formData.qty4} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">imgUrl</label>
    <input name='imgUrl' value={formData.imgUrl} onChange={onChangeHandler}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  <div className="container d-grid col-6">
  <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>

  </div>
 
</form>
    </div>
      
    </>
  )
}

export default AddRecipe
