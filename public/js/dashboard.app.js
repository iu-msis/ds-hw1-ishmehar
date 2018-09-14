var dashboardapp = new Vue({
  el: '#dashboard',
  data: {
  "name" : "Tom Jensen",
  "profile_pic": "",
  "country_of_origin" : "Ireland",
  "dob" : "1996-12-22",
  "email" : "tom.jensen@gmail.com"
},
methods: {

  pretty_age: function(d) {
    return d;
  }
},
computed: {
  age_calc: function() {
     return moment().diff(moment(this.dob),'years')


},
pretty_age: function() {
  return this.pretty_age(this.age)

}

}
})
