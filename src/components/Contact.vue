<template>
  <div class='container'>
		<div class='wrapper animated bounceInLeft'>
			<div class='company-info'>
				<div class="social-links mt-3 text-center">
          <a target="_blank" href="https://www.linkedin.com/in/hannah-dalwai-029396216/" class="twitter" data-bs-toggle="tooltip" data-bs-placement="top" title="linkedin"><i class='bx bxl-linkedin' ></i></a>
          <a target="_blank" href="https://app.netlify.com/teams/hannahdalwai" class="instagram" data-bs-toggle="tooltip" data-bs-placement="top" title="netlify"><i class='bx bxl-netlify' ></i></a>
          <a target="_blank" href="https://github.com/HannahDalwai" class="instagram" data-bs-toggle="tooltip" data-bs-placement="top" title="github"><i class='bx bxl-github' ></i></a>
          <a target="_blank" href="https://codepen.io/HannahDalwai" class="google-plus" data-bs-toggle="tooltip" data-bs-placement="top" title="codepen"><i class='bx bxl-codepen'></i></a>
        </div>
        	<img id="logomi" src="https://i.postimg.cc/zGGLRHYv/Hannah-logooooo.png" alt="">
				<ul id="infolist">
					<li><i class='bx bx-map'></i>   Cape Town, South Africa</li>
					<li><i class='bx bxs-phone' ></i>   (+27) 074 525 0800</li>
					<li><i class='bx bxs-envelope'></i>   hannahdalwai4@gmail.com</li>
				</ul>
		</div>
		<div class='contact'>
		

			<form @submit.prevent="handleSubmit" class="was-validated">
				<p>
					<label for="validationTextarea"> Name  </label>
					<input type="text" name='name' class="form-control is-invalid" id="validationTextarea" placeholder="Place Name Here" required v-model="name"> 
				</p>

				

				<p>
					<label  for="validationTextarea"> Email Address </label>
					<input type="email" name='email'  class="form-control is-invalid" id="validationTextarea" placeholder="Place Email Address Here" required v-model="email"> 
				</p>

				<p>
					<label for="validationTextarea">Phone Number  </label>
					<input type="text" name='phone' class="form-control is-invalid" id="validationTextarea" placeholder="Place Phone Number  Here" required v-model="number"> 
					
				</p>
                 
				<p class='full'>
					<label for="validationTextarea">Message  </label>
					<textarea name="message" rows="5" class="form-control is-invalid" id="validationTextarea" placeholder="Place Message Here" required v-model="message"></textarea> 
				</p>

				<p class='full'>
					<button id="button" type="submit">Submit</button>
				</p>
			</form>
		</div>
	</div>
   </div>

   
</template>

<script>
export default {
data() {
	return {
		email:'',
		name:'',
		number:'',
		message:'',
		
	}
},
methods: {
	handleSubmit(){
  console.log( this.email, this.name, this.message, this.number)
	fetch('http://localhost:5000/contact', {
  method: 'POST',
  body: JSON.stringify({
        email: this.email,
		name: this.name,
		number: this.number,
		message: this.message
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((e) => alert(e))
	}
},
}
</script>

<style>
#logomi{
height: 60%;
width: 50%;
object-fit: contain;
}
#infolist{
  margin-left: 25%;
  color: #212431;
}
.line-mf {
  width: 40px;
  height: 5px;
  background-color: #a2c0c0;
  margin: 0 auto;
}

/* CONTACT */
*{
	box-sizing: border-box;
}

.container{
	max-width:1170px;
	margin-left: auto;
	margin-right: auto;
	padding: 1em;
    border-radius: 5px;
}

ul{
	list-style: none;
	padding: 0;
}

.brand{
	text-align: center;
}
.brand span{
	color: #fff;
}

.wrapper{
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
	margin-left: 15px;
  width: 100%;
} 

.wrapper >*{
	padding: 1em;
}

.company-info{
	background:  #d0dfdf;
	text-align: center;
	color: whitesmoke;
	text-align: center;

}

.company-info h3, .company-info ul{
	text-align: center;
	margin: 0 0 1rem 0;
}

.contact{
	background: #fff;
	text-align: center;
  
}

/* FORM CONTACTS
 MOBILE SIZE FIRST */

.contact form{
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
  
}

.contact form label{
	display: block;
}

.contact form p{
	margin:0; 
}

.contact form .full{
	grid-column: 1/3;
}

.contact form button, .contact form input, .contact form textarea{
	width: 100%;
	padding: 1em;
	/* border: 1px solid #; */

}

.contact form button{
	background:#008080 ;
	border: 0;
	text-transform: uppercase;
}

.contact form button:hover, .contact form button:focus{
	background: #b9d4d4;
	color: #fff;
	outline:0;
	transition: background-color 0.5 s ease-out;
}

/* LARGE SCREENS */
@media(min-width:700px){
	.wrapper{
		display: grid;
		grid-template-columns: 1fr 2fr;
	}

	.wrapper>*{
		padding:2em;
	}

	.company-info h3, .company-info ul, .brand{
		text-align: left;
	}
}
/* smol SCREENS */
@media(max-width:700px){
	img{
		display: none;
	}
  .wrapper{
    margin-left: 5px;
  }
}
/* Social links */
.social-links a {
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
.social-links a:hover {
  background: #fd7f80;
  color: #fff;
  text-decoration: none;
}
</style>