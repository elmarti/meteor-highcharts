## Highcharts packaged and Meteorized ##

You can use the normal Highcharts system, or use the meteorized version below: 


## Simply include the Highcharts template and pass it a custom helper ##

    {{>Highcharts getHighchartsData}}

## Set the rerender and element data in the meteorSettings object ##
Meteor Settings is optional and if you do not specify and id, a random one will be generated.

      getHighchartsData: function() {
            return {
                chart: {
                    polar: true,
                    type: 'line',
                    backgroundColor: 'transparent',
                    className: "daveGraph",
                    spacingBottom: 0,
                    spacingLeft: 0,
                    spacingRight: 0,
                    spacingTop: 0
                },
                credits: {
                    enabled: false
                },
                pane: {
                    size: '65%'
                },
                title: {
                    text: ""
                },
                xAxis: {
                    categories: ["cat1", "cat2", "cat3", "cat4"],
                    lineWidth: 0
                },
                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },
                series: [{
                    showInLegend: false,
                    name: "",
                    data: [12, 13, 254, 24]
                }],
                meteorSettings: {
                    responsive: true,
                    width: "123px",
                    height: "123px",
                    id: "david"
                }
            }
        }