export default{
  created(){
    console.log("Component is aangemaakt");
  },
  data(){
    return{
      successMsg: "All is well",
      errorMsg: "It's not well"
    }
  },
  destroyed(){
    console.log("Component is verwijderd");
  }
}
