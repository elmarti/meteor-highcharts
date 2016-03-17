Template.Highcharts.onCreated(function() {
    if (this.data.meteorSettings == undefined)
        this.data.meteorSettings = {};
    if (this.data.meteorSettings.id == undefined) {
        this.data.meteorSettings.id = Math.random().toString(36).substring(7);
    }
});

Template.Highcharts.onRendered(function() {


    let self = this;
    $("#" + this.data.meteorSettings.id).highcharts(this.data);
    if (this.data.meteorSettings.responsive)
        $(window).resize(function() {
            $("#" + self.data.meteorSettings.id).highcharts(this.data);
        });
})