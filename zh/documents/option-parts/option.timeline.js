window.__EC_DOC_option_timeline = {
  "show": {
    "desc": "\n\n<p>是否显示 <code class=\"codespan\">timeline</code> 组件。如果设置为<code class=\"codespan\">false</code>，不会显示，但是功能还存在。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "type": {
    "desc": "<p>这个属性目前只支持为 <code class=\"codespan\">slider</code>，不需要更改。</p>\n"
  },
  "axisType": {
    "desc": "<p>轴的类型。可选值为：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;value&#39;</code>\n  数值轴，适用于连续数据。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;category&#39;</code>\n  类目轴，适用于离散的类目数据。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;time&#39;</code>\n  时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。</p>\n</li>\n</ul>\n"
  },
  "currentIndex": {
    "desc": "\n\n<p>表示当前选中项是哪项。比如，<code class=\"codespan\">currentIndex</code> 为 <code class=\"codespan\">0</code> 时，表示当前选中项为 <code class=\"codespan\">timeline.data[0]</code>（即使用 <code class=\"codespan\">options[0]</code>）。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "autoPlay": {
    "desc": "\n\n<p>表示是否自动播放。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "rewind": {
    "desc": "\n\n<p>表示是否反向播放。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "loop": {
    "desc": "\n\n<p>表示是否循环播放。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "playInterval": {
    "desc": "\n\n<p>表示播放的速度（跳动的间隔），单位毫秒（ms）。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "20",
      "default": "2000"
    }
  },
  "realtime": {
    "desc": "\n\n<p>拖动圆点的时候，是否实时更新视图。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "controlPosition": {
    "desc": "\n\n<p>表示『播放』按钮的位置。可选值：<code class=\"codespan\">&#39;left&#39;</code>、<code class=\"codespan\">&#39;right&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,right"
    }
  },
  "zlevel": {
    "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
  },
  "z": {
    "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
  },
  "left": {
    "desc": "\n\n<p>timeline组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "\n\n<p>timeline组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "\n\n<p>timeline组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n<p>默认自适应。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "\n\n<p>timeline组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n<p>默认自适应。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "padding": {
    "desc": "\n\n\n\n\n\n<p>timeline内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "orient": {
    "desc": "\n\n<p>摆放方式，可选值有：</p>\n<ul>\n<li><code class=\"codespan\">&#39;vertical&#39;</code>：竖直放置。</li>\n<li><code class=\"codespan\">&#39;horizontal&#39;</code>：水平放置。</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "horizontal,vertical",
      "default": "horizontal"
    }
  },
  "inverse": {
    "desc": "\n\n<ul>\n<li>是否反向放置 <code class=\"codespan\">timeline</code>，反向则首位颠倒过来。</li>\n</ul>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "symbol": {
    "desc": "\n\n<p>timeline标记的图形。</p>\n<p>ECharts 提供的标记类型包括 \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "symbolSize": {
    "desc": "\n\n<p>timeline标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "symbolRotate": {
    "desc": "\n\n<p>timeline标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "symbolKeepAspect": {
    "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "symbolOffset": {
    "desc": "\n\n<p>timeline标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "lineStyle.show": {
    "desc": "\n\n<p>是否显示轴线。可以设置为 <code class=\"codespan\">false</code> 不显示轴线，则可以做出不同的样式效果。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "lineStyle.color": {
    "desc": "\n\n<p>timeline 线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "lineStyle.width": {
    "desc": "\n\n<p>timeline 线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "2",
      "min": "0",
      "step": "0.5"
    }
  },
  "lineStyle.type": {
    "desc": "\n\n<p>timeline 线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "label": {
    "desc": "<p>轴的文本标签。<code class=\"codespan\">emphasis</code> 是文本高亮的样式，比如鼠标悬浮或者图例联动高亮的时候会使用 <code class=\"codespan\">emphasis</code> 作为文本的样式。</p>\n"
  },
  "label.position": {
    "desc": "\n\n\n\n<p>可选的配置方式：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;auto&#39;</code>：\n  完全自动决定。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code>：\n  贴左边界放置。\n  当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code> 时有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code>：当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code> 时有效。\n  贴右边界放置。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code>：\n  贴上边界放置。\n  当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code> 时有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code>：\n  贴下边界放置。\n  当 <a href=\"#timeline.orient\">timline.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code> 时有效。</p>\n</li>\n<li><p><code class=\"codespan\">number</code>：\n  指定某个数值时，表示 <code class=\"codespan\">label</code> 和轴的距离。为 <code class=\"codespan\">0</code> 时则和坐标轴重合，可以为正负值，决定 <code class=\"codespan\">label</code> 在坐标轴的哪一边。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,left,right,top,bottom"
    }
  },
  "label.show": {
    "desc": "\n\n<p>是否显示 label。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "label.interval": {
    "desc": "<p><code class=\"codespan\">label</code> 的间隔。当指定为数值时，例如指定为 <code class=\"codespan\">2</code>，则每隔两个显示一个 label。</p>\n"
  },
  "label.rotate": {
    "desc": "<p><code class=\"codespan\">label</code> 的旋转角度。正值表示逆时针旋转。</p>\n"
  },
  "label.formatter": {
    "desc": "<p>刻度标签的内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p>示例:</p>\n<pre><code class=\"lang-js\">// 使用字符串模板，模板变量为刻度默认标签 {value}\nformatter: &#39;{value} kg&#39;\n\n// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index) {\n    // 格式化成月/日，只在第一个刻度显示年份\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (index === 0) {\n        texts.unshift(date.getYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n</code></pre>\n"
  },
  "label.color": {
    "desc": "\n\n<p>timeline.lable文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#304654'"
    }
  },
  "label.fontStyle": {
    "desc": "\n\n<p>timeline.lable文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.fontWeight": {
    "desc": "\n\n<p>timeline.lable文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.fontFamily": {
    "desc": "\n\n<p>timeline.lable文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.fontSize": {
    "desc": "\n\n<p>timeline.lable文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "itemStyle": {
    "desc": "<p>timeline  图形样式。</p>\n"
  },
  "itemStyle.color": {
    "desc": "\n\n<p>timeline 图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderColor": {
    "desc": "\n\n<p>timeline 图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderWidth": {
    "desc": "\n\n<p>timeline 描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "checkpointStyle": {
    "desc": "<p>『当前项』（<code class=\"codespan\">checkpoint</code>）的图形样式。</p>\n"
  },
  "checkpointStyle.symbol": {
    "desc": "\n\n<p>timeline.checkpointStyle 标记的图形。</p>\n<p>ECharts 提供的标记类型包括 \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "checkpointStyle.symbolSize": {
    "desc": "\n\n<p>timeline.checkpointStyle 标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "checkpointStyle.symbolRotate": {
    "desc": "\n\n<p>timeline.checkpointStyle 标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "checkpointStyle.symbolKeepAspect": {
    "desc": "\n\n<p>如果 <code class=\"codespan\">symbol</code> 是 <code class=\"codespan\">path://</code> 的形式，是否在缩放时保持该图形的长宽比。</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "checkpointStyle.symbolOffset": {
    "desc": "\n\n<p>timeline.checkpointStyle 标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "checkpointStyle.color": {
    "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#c23531"
    }
  },
  "checkpointStyle.borderWidth": {
    "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "5"
    }
  },
  "checkpointStyle.borderColor": {
    "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(194,53,49, 0.5)"
    }
  },
  "checkpointStyle.animation": {
    "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）在 <code class=\"codespan\">timeline</code> 播放切换中的移动，是否有动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "checkpointStyle.animationDuration": {
    "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的动画时长。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "20",
      "default": "300"
    }
  },
  "checkpointStyle.animationEasing": {
    "desc": "\n\n<p><code class=\"codespan\">timeline</code>组件中『当前项』（<code class=\"codespan\">checkpoint</code>）的动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://www.echartsjs.com/examples/zh/view.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "quinticInOut",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "controlStyle": {
    "desc": "<p>『控制按钮』的样式。『控制按钮』包括：『播放按钮』、『前进按钮』、『后退按钮』。</p>\n"
  },
  "controlStyle.show": {
    "desc": "\n\n<p>是否显示『控制按钮』。设置为 <code class=\"codespan\">false</code> 则全不显示。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "controlStyle.showPlayBtn": {
    "desc": "\n\n<p>是否显示『播放按钮』。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "controlStyle.showPrevBtn": {
    "desc": "\n\n<p>是否显示『后退按钮』。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "controlStyle.showNextBtn": {
    "desc": "\n\n<p>是否显示『前进按钮』。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "controlStyle.itemSize": {
    "desc": "\n\n<p>『控制按钮』的尺寸，单位为像素（px）。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "22"
    }
  },
  "controlStyle.itemGap": {
    "desc": "\n\n<p>『控制按钮』的间隔，单位为像素（px）。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "12"
    }
  },
  "controlStyle.position": {
    "desc": "\n\n<p>『控制按钮』的位置。</p>\n<ul>\n<li><p>当 <a href=\"#timeline.orient\">timeline.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code>时，<code class=\"codespan\">&#39;left&#39;</code>、<code class=\"codespan\">&#39;right&#39;</code>有效。</p>\n</li>\n<li><p>当 <a href=\"#timeline.orient\">timeline.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code>时，<code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;bottom&#39;</code>有效。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,right,top,bottom"
    }
  },
  "controlStyle.playIcon": {
    "desc": "\n\n<p>『播放按钮』的『可播放状态』的图形。</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "controlStyle.stopIcon": {
    "desc": "\n\n<p>『播放按钮』的『可停止状态』的图形。</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "controlStyle.prevIcon": {
    "desc": "\n\n<p>『后退按钮』的图形</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "controlStyle.nextIcon": {
    "desc": "\n\n<p>『前进按钮』的图形</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "controlStyle.color": {
    "desc": "\n\n<p>按钮颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#304654"
    }
  },
  "controlStyle.borderColor": {
    "desc": "\n\n<p>按钮边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#304654"
    }
  },
  "controlStyle.borderWidth": {
    "desc": "\n\n<p>按钮边框线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "1"
    }
  },
  "emphasis.label.show": {
    "desc": "\n\n<p>是否显示 label。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "emphasis.label.interval": {
    "desc": "<p><code class=\"codespan\">label</code> 的间隔。当指定为数值时，例如指定为 <code class=\"codespan\">2</code>，则每隔两个显示一个 label。</p>\n"
  },
  "emphasis.label.rotate": {
    "desc": "<p><code class=\"codespan\">label</code> 的旋转角度。正值表示逆时针旋转。</p>\n"
  },
  "emphasis.label.formatter": {
    "desc": "<p>刻度标签的内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p>示例:</p>\n<pre><code class=\"lang-js\">// 使用字符串模板，模板变量为刻度默认标签 {value}\nformatter: &#39;{value} kg&#39;\n\n// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引\nformatter: function (value, index) {\n    // 格式化成月/日，只在第一个刻度显示年份\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (index === 0) {\n        texts.unshift(date.getYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n</code></pre>\n"
  },
  "emphasis.label.color": {
    "desc": "\n\n<p>timeline.lable.emphasis文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#c23531'"
    }
  },
  "emphasis.label.fontStyle": {
    "desc": "\n\n<p>timeline.lable.emphasis文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.label.fontWeight": {
    "desc": "\n\n<p>timeline.lable.emphasis文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.label.fontFamily": {
    "desc": "\n\n<p>timeline.lable.emphasis文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.label.fontSize": {
    "desc": "\n\n<p>timeline.lable.emphasis文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "emphasis.label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.color": {
    "desc": "\n\n<p>timeline 图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>timeline 图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>timeline 描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.checkpointStyle": {
    "desc": "<p>当前项『高亮状态』的样式（hover时）。</p>\n"
  },
  "emphasis.controlStyle": {
    "desc": "<p>控制按钮的『高亮状态』的样式（hover时）。</p>\n"
  },
  "data": {
    "desc": "<p><code class=\"codespan\">timeline</code> 数据。<code class=\"codespan\">Array</code> 的每一项，可以是直接的数值。\n如果需要对每个数据项单独进行样式定义，则数据项写成 <code class=\"codespan\">Object</code>。<code class=\"codespan\">Object</code>中，<code class=\"codespan\">value</code>属性为数值。其他属性如下例子，可以覆盖 <code class=\"codespan\">timeline</code> 中的属性配置。</p>\n<p>如下例：</p>\n<pre><code class=\"lang-javascript\">[\n    &#39;2002-01-01&#39;,\n    &#39;2003-01-01&#39;,\n    &#39;2004-01-01&#39;,\n    {\n        value: &#39;2005-01-01&#39;,\n        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。\n            formatter: &#39;{b} xxxx&#39;\n        },\n        symbol: &#39;diamond&#39;,  // 此项的图形的特别设置。\n        symbolSize: 16      // 此项的图形大小的特别设置。\n    },\n    &#39;2006-01-01&#39;,\n    &#39;2007-01-01&#39;,\n    &#39;2008-01-01&#39;,\n    &#39;2009-01-01&#39;,\n    &#39;2010-01-01&#39;,\n    {\n        value: &#39;2011-01-01&#39;,\n        tooltip: {          // 让鼠标悬浮到此项时能够显示 `tooltip`。\n            formatter: function (params) {\n                return params.name + &#39;xxxx&#39;;\n            }\n        },\n        symbol: &#39;diamond&#39;,\n        symbolSize: 18\n    },\n]\n</code></pre>\n"
  }
}