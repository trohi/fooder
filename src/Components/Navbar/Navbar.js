import './Navbar.css'
import  Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { OpenSingleMeal } from '../../redux/actions.js'
import { Link } from 'react-router-dom'

function NavMenu() {

   const dispatch = useDispatch()

   const GetRandomMeal=()=>{
   fetch('https://api.spoonacular.com/recipes/random?&apiKey=28087beca5d243b28544ddf2484ea4ac')
   .then(res =>{
      let data = res.json()
      return data
   })
   .then(data =>{
      dispatch(OpenSingleMeal(data.recipes[0]))
      console.log(data)
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
            <Link to="/single-meal">
               <a href="#" onClick={()=>GetRandomMeal()}> <span className="fa-stack fa-lg pull-left"><i className="fa fa-random fa-stack-1x "></i></span>Random meal</a>
            </Link>
            </li>
            <hr></hr>
            <li className="active">
              <div className="sidebar-header">Filters</div>
               <a className="special-a mt-3 mb-2" href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-th-list fa-stack-1x "></i></span>Type</a>
               <ul className="nav-pills nav-stacked" >
               <Form>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-1"
                       label="Main course"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-2"
                       label="Dessert"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-3"
                       label="Appetizer"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-4"
                       label="Salad"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-5"
                       label="Bread"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-6"
                       label="Breakfast"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-7"
                       label="Soup"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-8"
                       label="Souce"
                     />
                  </li>
                  <li>
                     <Form.Check 
                       type="switch"
                       id="custom-switch-9"
                       label="Marinade"
                     />
                  </li>
                  </Form>
               </ul>
            </li>
            <li>
               <a className="special-a mt-3 mb-2" href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-asterisk fa-stack-1x "></i></span>Intolerances</a>
               <ul className="nav-pills nav-stacked">
                  <Form>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-10"
                           label="Dairy"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-11"
                           label="Egg"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-12"
                           label="Gluten"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-13"
                           label="Grain"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-14"
                           label="Peanut"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-15"
                           label="Seafood"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-16"
                           label="Sesame"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-17"
                           label="Shellfish"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-18"
                           label="Soy"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-19"
                           label="Sulfite"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-20"
                           label="Tree nut"
                        />
                     </li>
                     <li>
                        <Form.Check 
                           type="switch"
                           id="custom-switch-21"
                           label="Wheat"
                        />
                     </li>
                  </Form>
               </ul>
            </li>
            <li>
               <a className="special-a mt-3 mb-2" href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-hand-stop-o fa-stack-1x "></i></span>Diet</a>
               <ul className="nav-pills nav-stacked">
                  <Form>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-22"
                          label="Gluten free"
                        />
                     </li>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-23"
                          label="Ketogenic"
                        />
                     </li>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-24"
                          label="Vegetarian"
                        />
                     </li>
                     <li><Form.Check 
                          type="switch"
                          id="custom-switch-25"
                          label="Ovo vegetarian"
                        />
                     </li>
                     <li><Form.Check 
                          type="switch"
                          id="custom-switch-26"
                          label="Lacto vegetarian"
                        />
                     </li>
                     <li>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-27"
                          label="Vegan"
                        />
                     </li>
                  </Form>
               </ul>
            </li>            
         </ul>
      </div>
</>
     
    )
}

export default NavMenu