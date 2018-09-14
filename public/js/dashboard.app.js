var dashboardapp = new Vue({
  el: '#dashboard',
  data: {

info: {
   "name":{"title":'',"first":'',"last":''},
   "pictures": '',
   "location":{city:'',state:''},
   "dob":{"date":''},
   "email" : ''

}
},
methods: {

  pretty_finaldate: function(d) {
    return moment(d).format('l')
  },

  pretty_age: function(d) {
    return d;
  },
  fetchTasks () {

     fetch('https://randomuser.me/api')

     .then( response => response.json() )
     .then( json => {dashboardapp.info = json.results[0]; } )
     .catch( err => {
       console.log('TASK FETCH ERROR:');
       console.log(err);

     });
}},
created () {

      this.fetchTasks();

 },
computed: {
  age_calc: function() {
    console.log('The issue is here:');
    console.log('this.dob is:', this.dob);
    console.log(this.info);

     return moment().diff(moment(this.info.dob.date),'years')


},
pretty_age: function() {
  return this.pretty_age(this.age)

},

pretty_date: function() {

  return this.pretty_date(this.pretty_finaldate)
}

}
}
)
