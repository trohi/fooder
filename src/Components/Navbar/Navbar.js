import './Navbar.css'
import  Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { OpenSingleMeal } from '../../redux/actions.js'
import { useHistory } from 'react-router'
import { useState } from 'react'

function NavMenu() {

   const [filters, setType] = useState({});
   const [diet, setDiet] = useState([])
   const [intolerances, setIntolerances] = useState([])

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
      const checked = target.checked
      const name = target.name
      setIntolerances([...intolerances, name])
   }

   const handleDietEvent = (event) =>{
      const target = event.target
      const checked = target.checked
      const name = target.name
      setDiet([...diet, name])
   }

   const GetRandomMeal=()=>{
   fetch('https://api.spoonacular.com/recipes/random?&apiKey=28087beca5d243b28544ddf2484ea4ac')
   .then(res =>{
      let data = res.json()
      return data
   })
   .then(data =>{
      dispatch(OpenSingleMeal(data.recipes[0]))
      history.push(`/single-meal/${data.recipes[0].id}`)
   })
   }
    return (
<>
<nav className="navbar navbar-default no-margin">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul className="nav navbar-nav">
            <li className="active">
               <button className="navbar-toggle collapse in" className="glyphicon glyphicon-th-large" aria-hidden="true">
               </button>
            </li>
         </ul>
      </div>
   </nav> 
      <div id="sidebar-wrapper">
         <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
         <li className="mt-3">
               <a href="#" onClick={()=>GetRandomMeal()}> <span className="fa-stack fa-lg pull-left"><i className="fa fa-random fa-stack-1x "></i></span>Random meal</a>
            </li>
            <button onClick={()=>{console.log(filters, intolerances, diet)}}>Click to show state</button>
            <hr></hr>
            <li className="active">
              <div className="sidebar-header">Filters</div>
               <a className="special-a-2 mt-3 mb-2" href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-th-list fa-stack-1x "></i></span>Type</a>
               <ul className="nav-pills nav-stacked" >
               <Form>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-1"
                       label="Main course"
                       name="main-course"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'main-course'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-2"
                       label="Dessert"
                       name="dessert"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'dessert'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-3"
                       name="appetizer"
                       label="Appetizer"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'appetizer'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-4"
                       name="salad"
                       label="Salad"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'salad'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-5"
                       name="bread"
                       label="Bread"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'bread'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-6"
                       name="breakfast"
                       label="Breakfast"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'breakfast'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-7"
                       name="soup"
                       label="Soup"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'soup'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-8"
                       name="souce"
                       label="Souce"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'souce'}
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-9"
                       name="marinade"
                       label="Marinade"
                       onChange={handleMealTypeEvent}
                       disabled={Object.keys(filters).length > 0 && filters.type !== 'marinade'}
                     />
                  </li>
                  </Form>
               </ul>
            </li>
            <li>
               <a className="special-a-2 mt-3 mb-2" href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-asterisk fa-stack-1x "></i></span>Intolerances</a>
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
               <a className="special-a-2 mt-3 mb-2" href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-hand-stop-o fa-stack-1x "></i></span>Diet</a>
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
                  <button className="apply-button mb-5 mt-4">Apply filters</button>
               </ul>
            </li>            
         </ul>
      </div>
</>
     
    )
}

export default NavMenu