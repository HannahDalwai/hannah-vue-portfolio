<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <router-link :to="{name:'home'}" class="navbar-brand">Wellness Kit</router-link>
      <div class="navbar-nav mr-auto">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name:'home'}" class="nav-link" :active='$router.home =="home"'> 
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
          <li class="nav-item">
           <router-link :to="{name:'about'}" class="nav-link" exact> About Us</router-link>
        </li>
            <li class="nav-item">
           <router-link :to="{name:'blog'}" class="nav-link"> Blogs</router-link>
        </li>
        
         <li class="nav-item">
                 <router-link :to="{name:'DashBoard'}" class="nav-link">DashBoard</router-link>
        </li>
        <li class="nav-item">
                 <router-link :to="{name:'Contact'}" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
        <router-link  class="but nav-link" to="/Login"><i class='bx bx-log-out-circle'></i></router-link>
        </li>
      </ul>
       </div>
 
         
       
     
    </div>
  </div>
</nav>



</template>

<script>
</script>
<style scoped>

.nav-link:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  /* display: inline-block; */
  height: 2px;
  left: 50%;
  position: absolute;
  background: #56ab2f;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
  
}
.nav-link:hover:after { 
  width: 100%; 
  left: 0; 
}
.nav-link {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}
.navbar-brand:hover{
color:#56ab2f

}
#navbarSupportedContent{
  margin-right: 350px;
}
/* .navbar-toggler{
  
} */

.navbar:active{
  color: yellowgreen;
}
.active:hover,a.router-link-active{
 color: yellowgreen;
}
</style>