Template.Highcharts.onCreated(function(){
    this.data.ID = Math.random().toString(36).substring(7);
    console.log(this);
});

Template.Highcharts.onRendered(function() {
   
    
     let self = this;
    $("#" + this.data.ID).highcharts(this.data);
    if(this.data.meteorSettings != undefined)
        if(this.data.meteorSettings.responsive){
            $(window).resize(function(){
                $("#" + self.data.ID).highcharts(this.data);
            });
            
        }
    console.log(self.data);
})