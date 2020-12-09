!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.r(t);var i,o=document.querySelectorAll(".draggable"),s=document.querySelectorAll(".container");function d(){var e=this;if(this.className+=" dragging",a(this.classList).includes("age")){var t=document.getElementsByClassName("container age")[0];t&&(t.className+=" highlight")}else if(a(this.classList).includes("risk")){var n=document.getElementsByClassName("container risk")[0];n&&(n.className+=" highlight")}else if(a(this.classList).includes("income")){var r=document.getElementsByClassName("container income")[0];r&&(r.className+=" highlight")}else if(a(this.classList).includes("retirement")){var o=document.getElementsByClassName("container retirement")[0];o&&(o.className+=" highlight")}i=this,setTimeout((function(){return e.className+=" remove"}),0)}function l(){this.className="draggable"}function c(e){e.preventDefault(),this.className+=" hovering"}function u(e){e.preventDefault()}function h(){this.className="container"}function f(){if(this.className="dropped",0===this.children.length?this.append(i):this.replaceChild(i,this.children[0]),4===a(s).filter((function(e){return"dropped"===e.className})).length){var e=document.querySelector(".match");e.className+=" showMatch",e.addEventListener("click",p)}}function p(){var e=document.querySelectorAll(".draggable, .container, .droppable, .droppable-container, .showMatch, .choices-container, .parallax, .explaination");document.querySelector(".fund-container").className+=" make-visible";var t=a(s).map((function(e){return e.innerText}));if(e.forEach((function(e){return e.className+=" remove"})),t.includes("Low")){var n={ticker:"VTI",name:"Vanguard 500 Index Fund ETF",description:"The fund employs an indexing investment approach designed to track the performance of the CRSP US Total Market Index, which represents approximately 100% of the investable U.S. stock market and includes large-, mid-, small-, and micro-cap stocks regularly traded on the New York Stock Exchange and Nasdaq. It invests by sampling the index, meaning that it holds a broadly diversified collection of securities that, in the aggregate, approximates the full index in terms of key characteristics. EVERY fund, whether mutual fund or index fund has a hidden management fee. The management fee for VTI  is 0.05%.  That is THE lowest management fee possible. Mutual Funds typically have fees in the vicinity of 1.35%. In all, the fund holds more than 3,500 stocks in its portfolio and has a total of $672 billion of investor assets -- so this is a popular, widely held index fund product. It's also important to mention that this is a market-cap-weighted index fund, meaning that larger companies make up a larger proportion of the ETF's investments. Top holdings include companies like Microsoft, Apple, Amazon, Alphabet, and Berkshire Hathaway, just to name a few.",return:.1402};m("VTI",n),g(n,t)}else if(t.includes("Medium")){var r={ticker:"VOO",name:"Vanguard 500 Index Fund ETF",description:"VOO invests in stocks in the S&P 500 Index, representing 500 of the largest U.S. companies. The goal is to closely track the S&P 500's returns. VOO offers high potential for investment growth and shares value rises and falls more sharply than that of funds holding bonds. This fund is more appropriate for long-term goals where your money’s growth is essential. In total, the fund has over $100 billion in assets under management. The fund is probably one of the safest in the equity world as the companies on this list are very unlikely to go under. However, these securities are unlikely to grow very much either as they are already pretty large and have probably seen their quickest growing days in years past, but most do pay out solid dividends which should help to ease the pain of this realization. Overall, VOO is a quality choice for investors seeking broad mega and large cap exposure and it is more diversified than most, containing just over 500 securities in total. As a result, this fund could serve as a building block for many portfolios making it an excellent choice for many buy and holders, especially for those looking to keep costs at a minimum.",return:.1502};m("VOO",r),g(r,t)}else if(t.includes("High")){var i={ticker:"QLD",name:" ProShares Ultra QQQ",description:"QLD seeks daily investment results, before fees and expenses, that correspond to two times (2x) the return of the Nasdaq-100 Index (the Index) for a single day. The Index includes 100 of the largest domestic and international non-financial companies listed on The Nasdaq Stock Market based on market capitalization. This leveraged ProShares ETF seeks a return that is 2x the return of its underlying benchmark (target) for a single day, as measured from one NAV calculation to the next. Due to the compounding of daily returns, holding periods of greater than one day can result in returns that are significantly different than the target return and ProShares' returns over periods other than one day will likely differ in amount and possibly direction from the target return for the same period.",return:.2405};m("QQQ",i),g(i,t)}else if(t.includes("Extremely High")){var o={ticker:"TECL",name:" Direxion Daily Technology Bull 3X Shares ETF",description:"TECL attempts to deliver triple the daily returns of the Technology Select Sector Index, a benchmark that's essentially an ode to Apple (NASDAQ: AAPL) and Microsoft (NASDAQ: MSFT) as that duo combine for more than 44% of the index's weight. The Direxion Daily Technology Bull (TECL) and Bear (TECS) 3X Shares seek daily investment results, before fees and expenses, of 300%, or 300% of the inverse (or opposite), of the performance of the Technology Select Sector Index. There is no guarantee the funds will meet their stated investment objectives. The fund invests at least 80% of its net assets (plus borrowing for investment purposes) in financial instruments, such as swap agreements, and securities of the index, ETFs that track the index and other financial instruments that provide daily leveraged exposure to the index or ETFs that track the index. The index includes domestic companies from the technology sector. It is non-diversified.",return:.3739};m("TECL",o),g(o,t)}window.scroll({top:0,left:0,behavior:"smooth"})}function m(e,t){var n="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(e,"&apikey=").concat("MIDR3MRG2WBYRNQN"),a=[];fetch(n).then((function(e){return e.json()})).then((function(e){for(var n in e["Time Series (Daily)"])a.push({value:parseFloat(e["Time Series (Daily)"][n]["1. open"]),date:d3.timeParse("%Y-%m-%d")(n)});!function(e,t){var n=d3.max(e,(function(e){return e.value})),a=d3.min(e,(function(e){return e.value})),r={top:10,right:30,bottom:30,left:60},i=window.innerWidth-r.left-r.right-20,o=window.innerHeight-r.top-r.bottom-window.innerHeight/2.5,s=d3.select("#fund-graph").append("svg").attr("width",i+r.left+r.right).attr("height",o+r.top+r.bottom).append("g").attr("transform","translate("+r.left+", "+r.top+")"),d=d3.scaleTime().domain(d3.extent(e,(function(e){return e.date}))).range([0,i]);s.append("g").attr("transform","translate(0,"+o+")").call(d3.axisBottom(d));var l=d3.scaleLinear().domain([a,n]).range([o,0]);s.append("g").call(d3.axisLeft(l));var c=s.append("path").datum(e).attr("d",d3.line().x((function(e){return d(e.date)})).y((function(e){return l(e.value)}))).attr("fill","none").attr("stroke","darkblue").attr("stroke-width",1.5),u=c.node().getTotalLength(),h=d3.select("#fund-info").append("div").attr("width",i+r.left+r.right).attr("height",window.innerHeight-o-r.top-r.bottom).classed("info-container",!0);h.append("div").classed("info-title",!0).text("Your matched fund is "+t.name+", "+t.ticker),h.append("div").classed("info-description",!0).text(t.description);var f=0;window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>f?c.attr("stroke-dasharray",u).attr("stroke-dashoffset",0).transition().duration(2e3).attr("stroke-dashoffset",u):c.attr("stroke-dasharray",u).attr("stroke-dashoffset",u).transition().duration(2e3).attr("stroke-dashoffset",0),f=e}))}(a,t)}))}function g(e,t){var n=e.return,a=parseInt(t[t.length-1])-parseInt(t[0]),r=parseInt(t[2].slice(1)),i=0;i=r>=2e5?.5*(r=25e4):r>=15e4?.5*(r=175e3):r>=1e5?.5*(r=125e3):r>=8e4?.5*(r=9e4):r>=6e4?.5*(r=7e4):r>=4e4?.5*(r=5e4):r>=2e4?.5*(r=3e4):.5*r;for(var o=[],s=0;s<a;s++){var d={date:s,value:(o[s-1]?o[s-1].value*(1+n):0)+i};o.push(d)}d3.select("#compound-interest-title").append("div").classed("compound-title",!0).text("You will have $".concat(o[o.length-1].value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")," at retirement due to compounding at ").concat(100*n,"%"));var l=d3.max(o,(function(e){return e.value})),c=d3.min(o,(function(e){return e.value})),u=10,h=30,f=30,p=100,m=window.innerWidth-p-h-80,g=window.innerHeight-u-f-window.innerHeight/2,y=d3.select("#compound-interest-graph").append("svg").attr("width",m+p+h).attr("height",g+u+f).append("g").attr("transform","translate("+p+", "+u+")"),w=d3.scaleLinear().domain(d3.extent(o,(function(e){return e.date}))).range([0,m]);y.append("g").attr("transform","translate(0,"+g+")").call(d3.axisBottom(w));var b=d3.scaleLinear().domain([c,l]).range([g,0]);y.append("g").call(d3.axisLeft(b));var x=y.append("path").datum(o).attr("d",d3.line().x((function(e){return w(e.date)})).y((function(e){return b(e.value)}))).attr("fill","none").attr("stroke","darkblue").attr("stroke-width",1.5),k=x.node().getTotalLength();x.attr("stroke-dasharray",k).attr("stroke-dashoffset",k).transition().duration(2e3).attr("stroke-dashoffset",0);var T=0;window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>T?x.attr("stroke-dasharray",k).attr("stroke-dashoffset",k).transition().duration(2e3).attr("stroke-dashoffset",0):x.attr("stroke-dasharray",k).attr("stroke-dashoffset",0).transition().duration(2e3).attr("stroke-dashoffset",k),T=e})),v(r,i)}function v(e,t){var n=t/12,a=e/12*.2,r="$"+(e/12).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),i=e/12*.15,o=e/12*.1,s=e/12*.05,d=d3.select("#budget").append("div").classed("budget-title",!0).text("Monthly ".concat(r," Budget Breakdown"));d.append("p").classed("budget-item",!0).text("Savings: $".concat(n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"))),d.append("p").classed("budget-item",!0).text("Housing: $".concat(a.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"))),d.append("p").classed("budget-item",!0).text("Transportation: $".concat(i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"))),d.append("p").classed("budget-item",!0).text("Food: $".concat(o.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"))),d.append("p").classed("budget-item",!0).text("Personal & Miscellaneous: $".concat(s.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")));var l=d3.select("#budget").append("div").classed("budget-graph-title",!0).text("Monthly Budget Graph"),c=10,u=0,h=25,f=80,p=[{name:"Savings",value:n},{name:"Housing",value:a},{name:"Transportation",value:i},{name:"Food",value:o},{name:"Personal",value:s}],m=window.innerWidth-f-u-.4*window.innerWidth,g=200-c-h,v=l.append("svg").classed("budget-graph",!0).attr("width",m+f+u).attr("height",g+c+h).append("g").attr("transform","translate("+f+", "+c+")"),y=d3.scaleLinear().range([0,m]).domain([0,d3.max(p,(function(e){return e.value}))]),w=d3.scaleBand().range([g,0],.1).domain(p.reverse().map((function(e){return e.name})));v.append("g").attr("transform","translate(0,"+g+")").call(d3.axisBottom(y)),v.append("g").call(d3.axisLeft(w)),v.append("g").attr("transform","translate("+f+","+c+")").selectAll(".bar").data(p).enter().append("rect").attr("class","bar").attr("x",-f).attr("y",(function(e){return w(e.name)})).attr("width",(function(e){return 0})).attr("height",15),v.selectAll("rect").transition().duration(2e3).attr("width",(function(e){return y(e.value)})),window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e>scroll?v.selectAll("rect").transition().duration(2e3).attr("width",(function(e){return y(e.value)})):v.selectAll("rect").transition().duration(2e3).attr("width",0),scroll=e}))}o.forEach((function(e){return e.addEventListener("dragstart",d)})),o.forEach((function(e){return e.addEventListener("dragend",l)})),s.forEach((function(e){e.addEventListener("dragover",u),e.addEventListener("dragenter",c),e.addEventListener("dragleave",h),e.addEventListener("drop",f)})),document.querySelector(".welcome-button").addEventListener("click",(function(){s[0].scrollIntoView({behavior:"smooth"})}))}]);
//# sourceMappingURL=main.js.map