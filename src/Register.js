import React from 'react';

class Register extends React.Component {
    constructor(props){
    super();
    this.state = {
       email : '',
       question: '',
       name: '',
       phone: '',
       time :''
    }
  }
    onNameChange = (event) => {
    this.setState({name : event.target.value})
 }

  onEmailChange = (event) => {
    this.setState({email : event.target.value})
 }
 onPhoneChange = (event) => {
    this.setState({phone : event.target.value})
 }
   onTimeChange = (event) => {
    this.setState({time : event.target.value})
 }
  onQuestionChange = (event) => {
    this.setState({question : event.target.value})
 }
 // onQuestionChange = (event) => {
 //    this.setState({question : event.target.value})
 // }

 onSubmitSignIn = () => {
  fetch('https://pure-temple-31240.herokuapp.com/register',{
    method :'post',
    headers: {'Content-Type':'application/json' },
    body: JSON.stringify({
      name : this.state.name,
      email: this.state.email,
      phone :this.state.phone,
      question : this.state.question,
      time : this.state.time
    })
  })
  .then(response => response.json())
  
 }


  response = () => {
    alert("Thanks For Your Details. We will contact you soon.")
  }


 clear = () => {
 document.getElementById("name").value='';
  document.getElementById("phone").value='';
   document.getElementById("question").value='';
    document.getElementById("email").value='';
 }

  render() {
     return ( 
      <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1560448204-444f743ef6e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" )` 
    ,  backgroundSize: 'cover',
            overflow: 'hidden',}} className="pt">
                    <p className="f3 fw4 hover-white no-underline near-black pa4 "  >Fill the query form below or call us at 8060797403</p> 
		<article className= "br3 ba dark-gray bg-light-gray b--black-10 pa3 ma2 bw2 mv4 w-150 w-50-m w-25-l mw6 nt4 shadow-5 center pt4 flex flex-wrap">
		<article className="pa4 black-80">
  <div action="sign-up_submit" method="get" accept-charset="utf-8 flex flex-wrap">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="ph0 mh0 fw6 f1"> We'll get in touch with you </legend>
       <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="email-address">Name</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure"
         type="text"
         name="name" 
          id="name"
          onChange = {this.onNameChange}/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
        <input className="pa2 input-reset ba bg-transparent w-100 measure"
         type="email" name="email" 
          id="email"
           onChange = {this.onEmailChange}/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="phone-number">Phone</label>
        <input className="b pa2 input-reset ba bg-transparent "
         type="text"
         name="phone" 
          id="phone"
          onChange = {this.onPhoneChange}/>
      </div>
      <div className="mt3">
            <label className="db fw4 lh-copy f6" htmlFor="time">Preferd call back time</label>
        <select id="time" name="time"  onChange = {this.onTimeChange}>
           <option value="morning">9:00 AM to 1:00 PM</option>
          <option value="noon">1:00 PM to 5:00 PM</option>
          <option value="evening">5:00 PM to 8:00 PM</option>

        </select>
        </div>
      <div className="mt3">
        <label className="db fw4 lh-copy f6" htmlFor="question">Tell us about your question</label>
        <input className="b pa2 input-reset ba bg-transparent w-100 measure" 
        type="text" name="question"
          id="question"
           onChange = {this.onQuestionChange}/>
      </div>
      
    </fieldset>
    <div className="">
    <input 
    onClick ={ () => {this.onSubmitSignIn(); this.response(); this.clear() }} 
    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 " 
    type="submit" 
    value="Submit"
     />
    </div>
    
  </div>
</article>
</article> </div>

        );
  }
}

export default Register;