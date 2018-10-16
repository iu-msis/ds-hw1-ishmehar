var dashboardapp = new Vue({
  el: '#commentsDiv',
  data: {
    comments: [
      {
        id:'',
        comments:''
      }
    ]
},
methods: {
  fetchComments () {
     fetch('http://ec2-18-222-202-164.us-east-2.compute.amazonaws.com/api/comment.php/')
     .then( response => response.json() )
     .then( json => {this.comments = json} )
     .catch( err => {
       console.log('TASK FETCH ERROR:');
       console.log(err);
     });
   },
   pushComment() {
     fetch('http://ec2-18-222-202-164.us-east-2.compute.amazonaws.com/api/comment.php/', {
       method:"POST",
       body:JSON.stringify({
         comment:document.getElementById('comment').value
       }),
       headers: {
         'Content-type':'application/json'
       }
     })
     .then(resp => resp.json())
     .then(response => console.log(response))
     .catch(function(error){
       console.log(error)
     })
   }
},
created () {
      this.fetchComments();
    }
})
