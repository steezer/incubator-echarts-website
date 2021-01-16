window.__EC_DOC_api_action = {
  "highlight": {
    "desc": "<p>Highlights the given graphic element.</p>\n<p>Series is specified through <code class=\"codespan\">seriesName</code> or <code class=\"codespan\">seriesIndex</code>. If another data needs to be specified, then use <code class=\"codespan\">dataIndex</code> or <code class=\"codespan\">name</code>.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;highlight&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // options are index of data\n    dataIndex?: number,\n    // options are data name\n    name?: string\n})\n</code></pre>\n"
  },
  "downplay": {
    "desc": "<p>Cancels highlighting graphic element.</p>\n<p>Series is specified through <code class=\"codespan\">seriesName</code> or <code class=\"codespan\">seriesIndex</code>. If another data needs to be specified, then use <code class=\"codespan\">dataIndex</code> or <code class=\"codespan\">name</code>.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;downplay&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // options are index of data\n    dataIndex?: number,\n    // options are data name\n    name?: string\n})\n</code></pre>\n<!--============= legend ==========-->\n"
  },
  "legend": {
    "desc": "<p>Actions related to <a href=\"option.html#legend\" target=\"_blank\">legend component</a>, which should include <a href=\"option.html#legend\" target=\"_blank\">legend component</a> before use.</p>\n"
  },
  "legend.legendSelect": {
    "desc": "<p>Selects legend.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;legendSelect&#39;,\n    // legend name\n    name: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.legendselected\">legendselected</a></p>\n"
  },
  "legend.legendUnSelect": {
    "desc": "<p>Unselects the legend.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;legendUnSelect&#39;,\n    // legend name\n    name: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.legendunselected\">legendunselected</a></p>\n"
  },
  "legend.legendToggleSelect": {
    "desc": "<p>Toggles legend selecting state.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;legendToggleSelect&#39;,\n    // legend name\n    name: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.legendselectchanged\">legendselectchanged</a></p>\n"
  },
  "legend.legendAllSelect": {
    "desc": "<p>Selects all legends.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;legendAllSelect&#39;\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.legendselectall\">legendselectall</a></p>\n"
  },
  "legend.legendInverseSelect": {
    "desc": "<p>Inverses all legends.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;legendInverseSelect&#39;\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.legendinverseselect\">legendinverseselect</a></p>\n"
  },
  "legend.legendScroll": {
    "desc": "<p>Control the scrolling of legend. It works when <a href=\"option.html#legend.type\" target=\"_blank\">legend.type</a> is <code class=\"codespan\">&#39;scroll&#39;</code>.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;legendScroll&#39;,\n    scrollDataIndex: number,\n    legendId: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.legendscroll\">legendscroll</a></p>\n<!--============= tooltip ==========-->\n"
  },
  "tooltip": {
    "desc": "<p>Actions related to <a href=\"option.html#tooltip\" target=\"_blank\">tooltip component</a>, which should include <a href=\"option.html#tooltip\" target=\"_blank\">tooltip component</a> before use.</p>\n"
  },
  "tooltip.showTip": {
    "desc": "<p>Shows tooltip.</p>\n<p>There are two usages as followed.</p>\n<p>1 Display tooltip at certain position relative to container. If it cannot be displayed at the specified location, then it is invalid.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;showTip&#39;,\n    // x coordinate on screen\n    x: number,\n    // y coordinate on screen\n    y: number,\n    // Position of tooltip. Only works in this action.\n    // Use tooltip.position in option by default.\n    position: Array.&lt;number&gt;|string|Function\n})\n</code></pre>\n<p>2 Specify graphic element, and display tooltip according to the tooltip configuration item.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;showTip&#39;,\n    // index of series, which is optional when trigger of tooltip is axis\n    seriesIndex?: number,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string,\n    // Position of tooltip. Only works in this action.\n    // Use tooltip.position in option by default.\n    position: Array.&lt;number&gt;|string|Function\n})\n</code></pre>\n<p>Parameter <code class=\"codespan\">position</code> is the same as <a href=\"option.html#tooltip.position\" target=\"_blank\">tooltip.position</a>.</p>\n"
  },
  "tooltip.hideTip": {
    "desc": "<p>Hides tooltip.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;hideTip&#39;\n})\n</code></pre>\n<!--============= dataZoom ==========-->\n"
  },
  "dataZoom": {
    "desc": "<p>Actions related to <a href=\"option.html#dataZoom\" target=\"_blank\">data region zoom component</a>, which should include <a href=\"option.html#dataZoom\" target=\"_blank\">data region zoom component</a> before use.</p>\n"
  },
  "dataZoom.dataZoom": {
    "desc": "<p>Zoom data region.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;dataZoom&#39;,\n    // optional; index of dataZoom component; useful for are multiple dataZoom components; 0 by default\n    dataZoomIndex: number,\n    // percentage of starting position; 0 - 100\n    start: number,\n    // percentage of ending position; 0 - 100\n    end: number,\n    // data value at starting location\n    startValue: number,\n    // data value at ending location\n    endValue: number\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.datazoom\">datazoom</a></p>\n"
  },
  "dataZoom.takeGlobalCursor": {
    "desc": "<p>Activate or inactivate <code class=\"codespan\">dataZoom</code> buttom in <code class=\"codespan\">toolbox</code>.</p>\n<pre><code class=\"lang-js\">myChart.dispatchAction({\n    type: &#39;takeGlobalCursor&#39;,\n    key: &#39;dataZoomSelect&#39;,\n    // Activate or inactivate.\n    dataZoomSelectActive: true\n});\n</code></pre>\n<!--============= visualMap ==========-->\n"
  },
  "visualMap": {
    "desc": "<p>Actions related to <a href=\"option.html#visualMap\" target=\"_blank\">visual mapping component</a>, which should include <a href=\"option.html#visualMap\" target=\"_blank\">visual mapping component</a> before use.</p>\n"
  },
  "visualMap.selectDataRange": {
    "desc": "<p>Selects data range of visual mapping.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;selectDataRange&#39;,\n    // optional; index of visualMap component; useful for are multiple visualMap components; 0 by default\n    visualMapIndex: number,\n    // continuous visualMap is different from discrete one\n    // continuous visualMap is an array representing range of data values.\n    // discrete visualMap is an object, whose key is category or piece index; value is `true` or `false`\n    selected: Object|Array\n})\n</code></pre>\n<p>?\n<strong>For example: </strong></p>\n<pre><code class=\"lang-js\">myChart.dispatchAction({\n    type: &#39;selectDataRange&#39;,\n    // select a value range between 20 and 40\n    selected: [20, 40],\n    // cancel selecting the second range\n    selected: { 1: false },\n    // cancel selecting `excellent` category\n    selected: { &#39;excellent&#39;: false }\n});\n\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.datarangeselected\">datarangeselected</a></p>\n<!--============= timeline ==========-->\n"
  },
  "timeline": {
    "desc": "<p>Actions related to <a href=\"option.html#timeline\" target=\"_blank\">timeline component</a>, which should include <a href=\"option.html#timeline\" target=\"_blank\">timeline component</a> before use.</p>\n"
  },
  "timeline.timelineChange": {
    "desc": "<p>Sets the current time point.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;timelineChange&#39;,\n    // index of time point\n    currentIndex: number\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.timelinechanged\">timelinechanged</a></p>\n"
  },
  "timeline.timelinePlayChange": {
    "desc": "<p>Toggles playing status of timeline.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;timelinePlayChange&#39;,\n    // laying status; true for auto-play\n    playState: boolean\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.timelineplaychanged\">timelineplaychanged</a></p>\n<!--============= toolbox ==========-->\n"
  },
  "toolbox": {
    "desc": "<p>Actions related to <a href=\"option.html#toolbox\" target=\"_blank\">toolbox component</a>, which should include <a href=\"option.html#toolbox\" target=\"_blank\">toolbox component</a> before use.</p>\n"
  },
  "toolbox.restore": {
    "desc": "<p>Resets option.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;restore&#39;\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.restore\">restore</a>\n<!--============= pie ==========--></p>\n"
  },
  "pie": {
    "desc": "<p>Actions related to <a href=\"option.html#series-pie\" target=\"_blank\">pie chart</a>, which should include <a href=\"option.html#series-pie\" target=\"_blank\">pie chart</a> before use.</p>\n"
  },
  "pie.pieSelect": {
    "desc": "<p>Selects the specified pie chart.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;pieSelect&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.pieselected\">pieselected</a></p>\n"
  },
  "pie.pieUnSelect": {
    "desc": "<p>Cancels selecting specified pie chart.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;pieUnSelect&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.pieunselected\">pieunselected</a></p>\n"
  },
  "pie.pieToggleSelect": {
    "desc": "<p>Toggles selecting status of specified pie chart.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;pieToggleSelect&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.pieselectchanged\">pieselectchanged</a></p>\n<!--============= map ==========-->\n"
  },
  "map": {
    "desc": "<p>Actions related to <a href=\"option.html#series-map\" target=\"_blank\">map</a>, which should include <a href=\"option.html#series-map\" target=\"_blank\">map</a> before use.</p>\n"
  },
  "map.mapSelect": {
    "desc": "<p>Selects the specified map area.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;mapSelect&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.mapselected\">mapselected</a></p>\n"
  },
  "map.mapUnSelect": {
    "desc": "<p>Cancels selecting specified map area.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;mapUnSelect&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.mapunselected\">mapunselected</a></p>\n"
  },
  "map.mapToggleSelect": {
    "desc": "<p>Toggles selecting status of specified map area.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;mapToggleSelect&#39;,\n    // optional; series index; could be an array of multiple series\n    seriesIndex?: number|Array,\n    // optional; series name; could be an array of multiple series\n    seriesName?: string|Array,\n    // data index; could assign by name attribute when not defined\n    dataIndex?: number,\n    // optional; data name; ignored when dataIndex is defined\n    name?: string\n})\n</code></pre>\n<p><strong>EVENT:</strong> <a href=\"#events.mapselectchanged\">mapselectchanged</a></p>\n<!--============= graph ==========-->\n"
  },
  "graph": {
    "desc": "<p>Actions related to <a href=\"option.html#series-graph\" target=\"_blank\">graph</a>, which should include <a href=\"option.html#series-graph\" target=\"_blank\">graph</a> before use.</p>\n"
  },
  "graph.focusNodeAdjacency": {
    "desc": "<p>Highlight the specified node and all of its adjacent nodes.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;focusNodeAdjacency&#39;,\n\n    // Use seriesId or seriesIndex or seriesName to specify\n    // the target series.\n    seriesId: &#39;xxx&#39;,\n    seriesIndex: 0,\n    seriesName: &#39;nnn&#39;,\n\n    // Use either `dataIndex` or `edgeDataIndex` to specify\n    // the target node or target edge.\n    dataIndex: 12\n    edgeDataIndex: 5\n})\n</code></pre>\n<p>Event <a href=\"#event.focusNodeAdjacency\">focusNodeAdjacency</a> will be thrown finally.</p>\n"
  },
  "graph.unfocusNodeAdjacency": {
    "desc": "<p>Reverse highlight the specified node and all of its adjacent nodes.</p>\n<pre><code class=\"lang-js\">dispatchAction({\n    type: &#39;unfocusNodeAdjacency&#39;,\n\n    // Use seriesId or seriesIndex or seriesName to location the series.\n    seriesId: &#39;xxx&#39;,\n    seriesIndex: 0,\n    seriesName: &#39;nnn&#39;\n})\n</code></pre>\n<p>Event <a href=\"#event.unfocusNodeAdjacency\">unfocusNodeAdjacency</a> will be thrown finally.</p>\n<!--============= brush ==========-->\n"
  },
  "brush": {
    "desc": "<p><a href=\"option.html#brush\" target=\"_blank\">brush</a> related actions.</p>\n"
  },
  "brush.brush": {
    "desc": "<p>This action is dispatched when the &quot;brush&quot; behavior is performing.\nIt sets select-boxes (areas) in this chart. For example:</p>\n<pre><code class=\"lang-javascript\">myChart.dispatchAction({\n    type: &#39;brush&#39;,\n    areas: [ // &quot;areas&quot; means select-boxes. Multi-boxes can be specified.\n             // If &quot;areas&quot; is empty, all of the select-boxes will be deleted.\n        { // The first area.\n\n            // Indicate that this area is a &quot;coodinate system area&quot;, belonging\n            // to a geo coordinate system with getIndex: 0.\n            // We can also use xAxisIndex or yAxisIndex to indicate that\n            // this area belongs to a catesian coodinate system.\n            // If no coordinate system is specified, this area is a\n            // &quot;global area&quot;, which does not belong to any coordinate system.\n            // If an area belongs to a coordinate system, this area moves\n            // and scales alone with the coordinate system.\n            geoIndex: 0,\n            // xAxisIndex: 0,\n            // yAxisIndex: 0,\n\n            // Optional: &#39;polygon&#39;, &#39;rect&#39;, &#39;lineX&#39;, &#39;lineY&#39;\n            brushType: &#39;polygon&#39;,\n\n            // Only for &quot;global area&quot;, define the area with the pixel coordinates.\n            range: [\n                ...\n            ],\n\n            // Only for &quot;coordinate system area&quot;, define the area with the\n            // coordinates.\n            coordRange: [\n                // In this case, the area is in a geo coordinate system, so\n                // this is [longitude, latitude].\n                [119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]\n            ]\n        },\n        ... // Other areas.\n    ]\n});\n</code></pre>\n<p>The content of <code class=\"codespan\">range</code> and <code class=\"codespan\">coordRange</code> can be:</p>\n<ul>\n<li>If <code class=\"codespan\">brushType</code> is &#39;rect&#39;:\n  <code class=\"codespan\">range</code> and <code class=\"codespan\">coordRange</code> is: <code class=\"codespan\">[[minX, maxX], [minY, maxY]]</code></li>\n<li>If <code class=\"codespan\">brushType</code> is &#39;lineX&#39; or &#39;lineY&#39;:\n  <code class=\"codespan\">range</code> and <code class=\"codespan\">coordRange</code> is: [min, maxX]</li>\n<li>If <code class=\"codespan\">brushType</code> is &#39;polygon&#39;:\n  <code class=\"codespan\">range</code> and <code class=\"codespan\">coordRange</code> is: [[point1X, point1X], [point2X, point2X], ...]</li>\n</ul>\n<p>The difference between <code class=\"codespan\">range</code> and <code class=\"codespan\">coordRange</code> is:</p>\n<ul>\n<li>If the area is &quot;global area&quot;, we should use <code class=\"codespan\">range</code>.</li>\n<li>If the area is &quot;coordinate system area&quot; (i.e., <code class=\"codespan\">geoIndex</code> or <code class=\"codespan\">xAxisIndex</code> or <code class=\"codespan\">yAxisIndex</code> is specified), we should use <code class=\"codespan\">coordRange</code>.</li>\n<li>The unit of <code class=\"codespan\">range</code> is &quot;pixel&quot;, while the unit of <code class=\"codespan\">coordRange</code> should be the save as the unit of the coordinate system. For example, in geo coordinate system, <code class=\"codespan\">coordRange</code> should be [<code class=\"codespan\">longitude</code>, <code class=\"codespan\">latitude</code>], and in cartesian, it should be [<code class=\"codespan\">axis A value</code>, <code class=\"codespan\">axis B value</code>, <code class=\"codespan\">axis C value</code>, ...].</li>\n</ul>\n"
  },
  "brush.brushEnd": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.5.0</code></p>\n</blockquote>\n<p>This action is dispatched when the &quot;brush&quot; behavior finished.\nThe parameters are the same as <a href=\"#action.brush.brush\">action brush</a>.</p>\n"
  },
  "brush.takeGlobalCursor": {
    "desc": "<p>The switch of the brush. This action can make the mouse enabled/disabled to brush.\nIn fact, the brush buttons in <a href=\"option.html#toolbox.feature.brush\" target=\"_blank\">toolbox</a> just use this aciton.</p>\n<p>This event corresponding to this action is <a href=\"#events.globalCursorTaken\">globalCursorTaken</a>.</p>\n<pre><code class=\"lang-js\">api.dispatchAction({\n    type: &#39;takeGlobalCursor&#39;,\n    // If intending to enable brush, must set. Otherwise, the mouse will be disabled to brush.\n    key: &#39;brush&#39;,\n    brushOption: {\n        // See more info in the `brushType` of &quot;brush component&quot;.\n        // If set as `false`, the mouse is disabled to brush.\n        brushType: string,\n        // See more info in the `brushModel` of &quot;brush component&quot;.\n        // IF not set, use the `brushMode` of brush component.\n        brushMode: string\n    }\n});\n</code></pre>\n"
  }
}