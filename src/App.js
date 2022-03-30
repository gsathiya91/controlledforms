import React, {useState} from 'react';

export default function App() {
  const [state,setState] = useState({
    firstName: '',
            lastName: '',
            email: '',
            gender: '',
            courses: 'react',
            errors : {
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
            },
  });
    
  const  handleSubmit = (e) => {
        e.preventDefault();
        var errKeys = Object.keys(state).filter((key) =>{
            if(state[key] == '' && key != 'errors'){
                return key;
            }
        });
        if  (errKeys.length >= 1) {
            alert('please fill all fields');
        }else{
            console.log(state)
        }
    };
  const handleChange = (e) => {
        var errors = {...state.errors};

        if (e.target.value === ''){
            errors[e.target.name] = `${e.target.name} is Required`;
        }
        else{
            errors[e.target.name] = '';
        }

      setState({ errors, [e.target.name] : e.target.value})

    }

        return (
           <div>
                <h3 style={{ paddingLeft: '100px' }}>User Form</h3>
                <form onSubmit = {(e) => handleSubmit(e)}
                style={{
                    border: '2px solid black',
                    padding: '10px',
                    margin: '10px',
                    width: '300px'
                }}>
                    <div>
                        <label>First Name : </label>
                        <input type="text" name="firstName" value={state.firstName}
                             onChange = {(e) => handleChange(e)} />
                    </div><br />
                    <span style = {{color : 'red'}}> {state.errors.firstName}</span>
                    <div>
                        <label>Last Name : </label>
                        <input type="text" name="lastName" value={state.lastName}
                             onChange = {(e) => handleChange(e)}/>
                    </div><br />
                    <span style = {{color : 'red'}}> {state.errors.lastName}</span>
                    <div>
                        <label>Email : </label>
                        <input type="text" name="email" value={state.email}
                            onChange = {(e) =>handleChange(e)} />
                    </div><br />
                    <span style = {{color : 'red'}}> {state.errors.email}</span>
                    <div>
                        <label>Gender : </label>
                        <input type="radio" name="gender" value="male"
                            onChange = {(e) => handleChange(e)}
                        />Male
                        <input type="radio" name="gender" value="female"
                            onChange = {(e) =>handleChange(e)}
                        />Female
                    </div><br />
                    <span style = {{color : 'red'}}> {state.errors.gender}</span>
                    <div>
                        <label> Courses :</label>&nbsp;
                        <select name="courses" value={state.courses}
                            onChange = {(e) => handleChange(e)}>
                            <option value="react">React</option>
                            <option value="node">Node</option>
                            <option value="mysql">MySQL</option>
                            <option value="mongo">Mongo</option>
                        </select><br />&nbsp;
                    </div>
                    <button type="submit"> Submit </button>&nbsp;
                    <button type="button"> Reset </button>
                    <br />
                </form>
                </div>

           
        )
    }



