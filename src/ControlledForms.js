// import React, {useState} from 'react';

// class ControlledForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: '',
//             gender: '',
//             courses: 'react',
//             errors : {
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 gender: '',
//             },
//         };
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         var errKeys = Object.keys(this.state).filter((key) =>{
//             if(this.state[key] == '' && key != 'errors'){
//                 return key;
//             }
//         });
//         if  (errKeys.length >= 1) {
//             console.warn('please fill all fields');
//         }else{
//             console.log(this.state)
//         }
//     };
//     handleChange = (e) => {
//         var errors = {...this.state.errors};

//         if (e.target.value === ''){
//             errors[e.target.name] = `${e.target.name} is Required`;
//         }
//         else{
//             errors[e.target.name] = '';
//         }

//         this.setState({ errors, [e.target.name] : e.target.value})

//     }

//     render() {
//         return (
//             <>
//                 <h3 style={{ paddingLeft: '100px' }}>User Form</h3>
//                 <form onSubmit = {(e) => this.handleSubmit(e)}
//                 style={{
//                     border: '2px solid black',
//                     padding: '10px',
//                     margin: '10px',
//                     width: '300px'
//                 }}>
//                     <div>
//                         <label>First Name : </label>
//                         <input type="text" name="firstName" value={this.state.firstName}
//                             onChange = {(e) => this.handleChange(e)} />
//                     </div><br />
//                     <span style = {{color : 'red'}}> {this.state.errors.firstName}</span>
//                     <div>
//                         <label>Last Name : </label>
//                         <input type="text" name="lastName" value={this.state.lastName}
//                             onChange = {(e) => this.handleChange(e)} />
//                     </div><br />
//                     <span style = {{color : 'red'}}> {this.state.errors.lastName}</span>
//                     <div>
//                         <label>Email : </label>
//                         <input type="text" name="email" value={this.state.email}
//                             onChange = {(e) => this.handleChange(e)} />
//                     </div><br />
//                     <span style = {{color : 'red'}}> {this.state.errors.email}</span>
//                     <div>
//                         <label>Gender : </label>
//                         <input type="radio" name="gender" value="male"
//                             onChange = {(e) => this.handleChange(e)}
//                         />Male
//                         <input type="radio" name="gender" value="female"
//                             onChange = {(e) => this.handleChange(e)}
//                         />Female
//                     </div><br />
//                     <span style = {{color : 'red'}}> {this.state.errors.gender}</span>
//                     <div>
//                         <label> Courses :</label>&nbsp;
//                         <select name="courses" value={this.state.courses}
//                             onChange = {(e) => this.handleChange(e)}>
//                             <option value="react">React</option>
//                             <option value="node">Node</option>
//                             <option value="mysql">MySQL</option>
//                             <option value="mongo">Mongo</option>
//                         </select><br />&nbsp;
//                     </div>
//                     <button type="submit"> Submit </button>&nbsp;
//                     <button type="button"> Reset </button>
//                     <br />
//                 </form>

//             </>
//         )
//     }
// }

// export default ControlledForm;