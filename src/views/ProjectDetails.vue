<template>
  <div v-if="projects">
<H1>hi

</H1>

  </div>

  <div v-else>


  </div>
</template>

<script>
export default {
    data(){
        return{
            project:null,
            techStack:"",
            person:"",
            title:"",
            desc:"",
            imgURL:"",
        }
    },
mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
        // .then(data => this.posts= data)
        // this.filteredBlogs = data
    .then((data)=>{
      this.projects = data;
    })
        .catch(err => console.log(err.message))

}
}
</script>

<style>

</style>