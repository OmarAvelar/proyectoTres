import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getProfile} from '../src/services/auth'
// import d3 from '../src/D3'
// import dc from '../src/Dc'
// import crossfilter from '../src/Crossfilter'
import * as crossfilter from 'crossfilter2';
import * as d3 from 'd3';
import * as dc from 'dc';


 class Prueba extends Component {

    state={
        user:{}
    }

    componentWillMount(){
      getProfile()
            .then(user=>{
                this.setState({user})
            }).catch(error=>{
                console.log(error)
            })
    }
    // _isMounted = false;

    // state = {
    //   isLoading: true
    // }
  
    // componentDidMount() {
    //   this._isMounted = true;
    
    //   callAPI_or_DB(...).then(result => {
    //     if (this._isMounted) {
    //       this.setState({isLoading: false})
    //     }
    //   });
    // }
  
    // componentWillUnmount() {
    //   this._isMounted = false;
    // }
    

  render() {
    let yearRingChart   = dc.pieChart("#chart-ring-year")
    let spendHistChart  = dc.barChart("#chart-hist-spend")
    let spenderRowChart = dc.rowChart("#chart-row-spenders")
    let spenderRowChartDos = dc.rowChart("#chart-row-spenders-dos")


    var spendData = [
      {Name: 'User A', Hours: '40', Year: 2011, Website: 'Facebook'},
      {Name: 'User B', Hours: '10', Year: 2011, Website: 'Google'},
      {Name: 'User C', Hours: '40', Year: 2011, Website: 'Quora'},
      {Name: 'User A', Hours: '15', Year: 2011, Website: 'Facebook'},
      {Name: 'User B', Hours: '17', Year: 2011, Website: 'Google'},
      {Name: 'User C', Hours: '4', Year: 2011, Website: 'Quora'},
      {Name: 'User A', Hours: '35', Year: 2012, Website: 'Facebook'},
      {Name: 'User B', Hours: '20', Year: 2012, Website: 'Google'},
      {Name: 'User B', Hours: '34', Year: 2013, Website: 'CartoonNetwork'},
      {Name: 'User C', Hours: '30', Year: 2013, Website: 'Quora'}
  ];

  // normalize/parse data
spendData.forEach(function(d) {
  d.Hours = d.Hours.match(/\d+/);});

  // set dimensions
// Dimensions allow us to group items in different subsets. 
//Applying a filter is excluding a subset of items from our dataset. 
//So we are going to use dimensions to filter our crossfilter dataset.
var ndx = crossfilter(spendData),
yearDim  = ndx.dimension(function(d) {return +d.Year;}),
spendDim = ndx.dimension(function(d) {return Math.floor(d.Hours/10);}),
nameDim  = ndx.dimension(function(d) {return d.Name;}),
websiteDim  = ndx.dimension(function(d) {return d.Website;}),
spendPerYear = yearDim.group().reduceSum(function(d) {return +d.Hours;}),
spendPerName = nameDim.group().reduceSum(function(d) {return +d.Hours;}),
spendPerWebsite = websiteDim.group().reduceSum(function(d) {return +d.Hours;}),
spendHist    = spendDim.group().reduceCount();
//generate charts
yearRingChart
.dimension(yearDim)
.group(spendPerYear)
.innerRadius(50)
.controlsUseVisibility(true);
spendHistChart
.dimension(spendDim)
.group(spendHist)
.x(d3.scaleLinear().domain([0,10]))
.elasticY(true)
.controlsUseVisibility(true);
spendHistChart.xAxis().tickFormat(function(d) {return d*10}); // convert back to base unit
spendHistChart.yAxis().ticks(2);
spenderRowChart
.dimension(nameDim)
.group(spendPerName)
.elasticX(true)
.controlsUseVisibility(true);
function show_empty_message(chart) {
  var is_empty = d3.sum(chart.group().all().map(chart.valueAccessor())) === 0;
  var data = is_empty ? [1] : [];
  var empty = chart.svg().selectAll('.empty-message').data(data);
  empty.exit().remove();
  empty = empty
      .enter()
          .append('text')
          .text('NO DATA!')
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle')
          .attr('class', 'empty-message')
          .attr('x', chart.margins().left + chart.effectiveWidth()/2)
          .attr('y', chart.margins().top + chart.effectiveHeight()/2)
          .style('opacity', 0)
      .merge(empty);
  empty.transition().duration(1000).style('opacity', 1);
}

spenderRowChartDos
    .dimension(websiteDim)
    .group(spendPerWebsite)
    .elasticX(true)
    .controlsUseVisibility(true);
  function show_empty_message(chart) {
      var is_empty = d3.sum(chart.group().all().map(chart.valueAccessor())) === 0;
      var data = is_empty ? [1] : [];
      var empty = chart.svg().selectAll('.empty-message').data(data);
      empty.exit().remove();
      empty = empty
          .enter()
              .append('text')
              .text('NO DATA!')
              .attr('text-anchor', 'middle')
              .attr('alignment-baseline', 'middle')
              .attr('class', 'empty-message')
              .attr('x', chart.margins().left + chart.effectiveWidth()/2)
              .attr('y', chart.margins().top + chart.effectiveHeight()/2)
              .style('opacity', 0)
          .merge(empty);
      empty.transition().duration(1000).style('opacity', 1);
  }
  spendHistChart.on('pretransition', show_empty_message);
  spenderRowChart.on('pretransition', show_empty_message);
  spenderRowChartDos.on('pretransition', show_empty_message);
dc.renderAll();





    const {user} = this.state
    //conditions
    


    const loggedUser = localStorage.getItem('loggedUser')
    if(!loggedUser) this.props.history.push('/login')
    return (
        
        <div>
<div className="container">
  <div id="chart-ring-year" style="width:300px; height:300px">
    <div className="reset" style="visibility: hidden;">selected: <span className="filter"></span>
      <a href="javascript:yearRingChart.filterAll();dc.redrawAll();">reset</a>
    </div>
  </div>
  <div id="chart-hist-spend" style="width:300px; height:300px">
    <div className="reset" style="visibility: hidden;">range: <span className="filter"></span>
      <a href="javascript:spendHistChart.filterAll();dc.redrawAll();">reset</a>
    </div>
  </div>
  <div id="chart-row-spenders">
    <div className="reset" style="visibility: hidden;">selected: <span className="filter"></span>
      <a href="javascript:spenderRowChart.filterAll();dc.redrawAll();">reset</a>
    </div>
  </div>
  <div id="chart-row-spenders-dos">
    <div className="reset" style="visibility: hidden;">selected: <span className="filter"></span>
      <a href="javascript:spenderRowChartDos.filterAll();dc.redrawAll();">reset</a>
    </div>
  </div>

</div>
</div>


    )
  }
}
export default Prueba