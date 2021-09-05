import './Navbar.css'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { Loading, OpenSingleMeal, LoadData } from '../../redux/actions.js'
import { useHistory } from 'react-router'
import { useState } from 'react'

function NavMenu() {

   const [mealType, setType] = useState({});
   const [diet, setDiet] = useState([])
   const [intolerances, setIntolerances] = useState([])
   const [sidebar, setSidebar] = useState(false)

   const dispatch = useDispatch()
   const history = useHistory()

   const handleMealTypeEvent = (event) =>{
      const target = event.target
      const checked = target.checked
      const name = target.name
      if(checked){
         setType({
            'type' : name
         })
      } else {
         setType({
            
         })
      }
   }

   const handleIntolerancesEvent = (event) =>{
      const target = event.target
      const name = target.name
      setIntolerances([...intolerances, name])
   }

   const handleDietEvent = (event) =>{
      const target = event.target
      const name = target.name
      setDiet([...diet, name])
   }

   const handleApplymealTypeEvent = (payload) =>{
      dispatch(Loading())
      fetch(`https://api.spoonacular.com/recipes/complexSearch?intolerances=${[...payload.intolerances]}&diet=${[...payload.diet]}&type=${payload.mealType.type}&apiKey=28087beca5d243b28544ddf2484ea4ac`)
      .then(res =>{
         let data = res.json()
         return data
      })
      .then(data=>{
         dispatch(LoadData(data.results))
         history.push('/filtered-meals')
         dispatch(Loading())
      })
      .catch(error =>{
         console.log(error.message)
         dispatch(Loading())
      })
   }

   const GetRandomMeal=()=>{
   dispatch(Loading())
   fetch('https://api.spoonacular.com/recipes/random?&apiKey=28087beca5d243b28544ddf2484ea4ac')
   .then(res =>{
      let data = res.json()
      return data
   })
   .then(data =>{
      dispatch(OpenSingleMeal(data.recipes[0]))
      history.push(`/single-meal/${data.recipes[0].id}`)
      dispatch(Loading())
   })
   .catch(error =>{
      console.log(error.message)
      dispatch(Loading())
   })
   }

   const openSidebarOnMobile =()=>{
      console.log('fired')
      if(sidebar){
         setSidebar(false)
      } else{
         setSidebar(true)
      }
   }

    return (
<>
<nav className="navbar navbar-default no-margin" >
   <input type="checkbox" id="hiddenInput" onClick={openSidebarOnMobile} />
    <label className="ToBe" for="hiddenInput">
      <div></div>
    </label>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul className="nav navbar-nav">
            <li className="active">
               <button className="navbar-toggle collapse in glyphicon glyphicon-th-large" aria-hidden="true">
               </button>
            </li>
         </ul>
      </div>
   </nav> 
      <div id="sidebar-wrapper" className={ sidebar ? 'openNav' : 'closeNav'}>
         <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
            <li className="mt-3">
               <button className="random-button" onClick={()=>GetRandomMeal()}><i className="fa fa-random fa-stack-1x"></i>Random</button>
            </li>
            <hr></hr>
            <li className="active">
              <div className="sidebar-header">Filters</div>
               <div className="special-div mt-3 mb-2"><span className="fa-stack fa-lg pull-left"><i className="fa fa-th-list fa-stack-1x "></i></span>Type</div>
               <ul className="nav-pills nav-stacked" >
               <Form>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-1"
                       label="Main course"
                       name="main-course"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'main-course'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-2"
                       label="Dessert"
                       name="dessert"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'dessert'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-3"
                       name="appetizer"
                       label="Appetizer"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'appetizer'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-4"
                       name="salad"
                       label="Salad"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'salad'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-5"
                       name="bread"
                       label="Bread"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'bread'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-6"
                       name="breakfast"
                       label="Breakfast"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'breakfast'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-7"
                       name="soup"
                       label="Soup"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'soup'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-8"
                       name="souce"
                       label="Souce"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'souce'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-9"
                       name="marinade"
                       label="Marinade"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(mealType).length > 0 && mealType.type !== 'marinade'}
                     />
                  </li>
                  </Form>
               </ul>
            </li>
            <li>
               <div className="special-div mt-3 mb-2"><span className="fa-stack fa-lg pull-left"><i className="fa fa-asterisk fa-stack-1x "></i></span>Intolerances</div>
               <ul className="nav-pills nav-stacked">
                  <Form>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-10"
                           name="dairy"
                           label="Dairy"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-11"
                           name="egg"
                           label="Egg"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-12"
                           name="gluten"
                           label="Gluten"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-13"
                           name="grain"
                           label="Grain"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-14"
                           name="peanut"
                           label="Peanut"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-15"
                           name="seafood"
                           label="Seafood"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-16"
                           name="sesame"
                           label="Sesame"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-17"
                           name="shellfish"
                           label="Shellfish"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-18"
                           name="soy"
                           label="Soy"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-19"
                           label="Sulfite"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-20"
                           name="tree nut"
                           label="Tree nut"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-21"
                           name="wheat"
                           label="Wheat"
                           onChange={handleIntolerancesEvent}
                        />
                     </li>
                  </Form>
               </ul>
            </li>
            <li>
               <div className="special-div mt-3 mb-2"><span className="fa-stack fa-lg pull-left"><i className="fa fa-hand-stop-o fa-stack-1x "></i></span>Diet</div>
               <ul className="nav-pills nav-stacked">
                  <Form >
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-22"
                          name="gluten free"
                          label="Gluten free"
                          onChange={handleDietEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-23"
                          name="katogenic"
                          label="Ketogenic"
                          onChange={handleDietEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-24"
                          name="vegetarian"
                          label="Vegetarian"
                          onChange={handleDietEvent}
                        />
                     </li>
                     <li><Form.Check 
                          type="switch"
                          id="custom-switch-25"
                          name="ovo vegetarian"
                          label="Ovo vegetarian"
                          onChange={handleDietEvent}
                        />
                     </li>
                     <li><Form.Check 
                          type="switch"
                          id="custom-switch-26"
                          name="lacto vegeterian"
                          label="Lacto vegetarian"
                          onChange={handleDietEvent}
                        />
                     </li>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-27"
                          name="vegan"
                          label="Vegan"
                          onChange={handleDietEvent}
                          className="mb-3"
                        />
                     </li>
                  </Form>
                  <hr className="ml-n5"></hr>
                  <button className="apply-button mb-5 mt-4" onClick={()=>{handleApplymealTypeEvent({mealType, intolerances, diet})}}>Apply filters</button>
               </ul>
            </li>            
         </ul>
      </div>
</>
     
    )
}

export default NavMenu