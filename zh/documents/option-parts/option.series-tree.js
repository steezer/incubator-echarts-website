window.__EC_DOC_option_series_tree = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "name": {
    "desc": "<p>系列名称，用于<a href=\"#tooltip\">tooltip</a>的显示，<a href=\"#legend\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "zlevel": {
    "desc": "<p>所有图形的 zlevel 值。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n"
  },
  "z": {
    "desc": "<p>组件的所有图形的<code class=\"codespan\">z</code>值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n<p><code class=\"codespan\">z</code>相比<code class=\"codespan\">zlevel</code>优先级更低，而且不会创建新的 Canvas。</p>\n"
  },
  "left": {
    "desc": "\n\n<p>tree组件离容器左侧的距离。</p>\n<p><code class=\"codespan\">left</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">left</code> 的值为<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "\n\n<p>tree组件离容器上侧的距离。</p>\n<p><code class=\"codespan\">top</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比，也可以是 <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>如果 <code class=\"codespan\">top</code> 的值为<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>，组件会根据相应的位置自动对齐。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "\n\n<p>tree组件离容器右侧的距离。</p>\n<p><code class=\"codespan\">right</code> 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "\n\n<p>tree组件离容器下侧的距离。</p>\n<p>bottom 的值可以是像 <code class=\"codespan\">20</code> 这样的具体像素值，可以是像 <code class=\"codespan\">&#39;20%&#39;</code> 这样相对于容器高宽的百分比。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "width": {
    "desc": "\n\n<p>tree组件的宽度。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "height": {
    "desc": "\n\n<p>tree组件的高度。</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "layout": {
    "desc": "\n\n<p>树图的布局，有 <code class=\"codespan\">正交</code> 和 <code class=\"codespan\">径向</code> 两种。这里的 <code class=\"codespan\">正交布局</code> 就是我们通常所说的 <code class=\"codespan\">水平</code> 和 <code class=\"codespan\">垂直</code> 方向，对应的参数取值为 <code class=\"codespan\">&#39;orthogonal&#39;</code> 。而 <code class=\"codespan\">径向布局</code> 是指以根节点为圆心，每一层节点为环，一层层向外发散绘制而成的布局，对应的参数取值为 <code class=\"codespan\">&#39;radial&#39;</code> 。</p>\n<p><strong>正交布局示例：</strong></p>\n<iframe  data-src=\"https://www.echartsjs.com/examples/zh/view.html?c=tree-basic&edit=1&reset=1\" width=\"780\" height=\"900\"><iframe />\n\n\n\n<p><strong>径向布局示例：</strong></p>\n<iframe  data-src=\"https://www.echartsjs.com/examples/zh/view.html?c=tree-radial&edit=1&reset=1\" width=\"800\" height=\"800\"><iframe />\n\n\n",
    "uiControl": {
      "type": "enum",
      "options": "orthogonal,radial",
      "default": "orthogonal"
    }
  },
  "orient": {
    "desc": "\n\n\n<p>树图中 <code class=\"codespan\">正交布局</code> 的方向，也就是说只有在 <code class=\"codespan\">layout = &#39;orthogonal&#39;</code> 的时候，该配置项才生效。对应有 <code class=\"codespan\">水平</code> 方向的 <code class=\"codespan\">从左到右</code>，<code class=\"codespan\">从右到左</code>；以及垂直方向的 <code class=\"codespan\">从上到下</code>，<code class=\"codespan\">从下到上</code>。取值分别为 <code class=\"codespan\">&#39;LR&#39;</code> , <code class=\"codespan\">&#39;RL&#39;</code>, <code class=\"codespan\">&#39;TB&#39;</code>, <code class=\"codespan\">&#39;BT&#39;</code>。<strong>注意</strong>，之前的配置项值 <code class=\"codespan\">&#39;horizontal&#39;</code> 等同于 <code class=\"codespan\">&#39;LR&#39;</code>， <code class=\"codespan\">&#39;vertical&#39;</code> 等同于 <code class=\"codespan\">&#39;TB&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "LR,RL,TB,BT",
      "default": "LR"
    }
  },
  "symbol": {
    "desc": "\n\n<p>标记的图形。</p>\n<p>ECharts 提供的标记类型包括 \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>如果需要每个数据的图形不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; string\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-tree.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "symbolSize": {
    "desc": "\n\n<p>标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n<p>如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-tree.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "symbolRotate": {
    "desc": "\n\n<p>标记的旋转角度（而非弧度）。正值表示逆时针旋转。注意在 <code class=\"codespan\">markLine</code> 中当 <code class=\"codespan\">symbol</code> 为 <code class=\"codespan\">&#39;arrow&#39;</code> 时会忽略 <code class=\"codespan\">symbolRotate</code> 强制设置为切线的角度。</p>\n<p>如果需要每个数据的旋转角度不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-tree.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n<blockquote>\n<p>从 4.8.0 开始支持回调函数。</p>\n</blockquote>\n",
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
    "desc": "\n\n<p>标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。</p>\n<p>例如 <code class=\"codespan\">[0, &#39;50%&#39;]</code> 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "edgeShape": {
    "desc": "\n\n\n\n<blockquote>\n<p>从 <code class=\"codespan\">v4.7.0</code> 开始支持</p>\n</blockquote>\n<p>树图在 <code class=\"codespan\">正交布局</code> 下，边的形状。分别有曲线和折线两种，对应的取值是 <code class=\"codespan\">curve</code> 和 <code class=\"codespan\">polyline</code>.</p>\n<p><strong>注意：该配置项只在 <code class=\"codespan\">正交布局</code> 下有效，在经向布局下的开发环境中会报错。</strong></p>\n",
    "uiControl": {
      "type": "enum",
      "options": "curve,polyline",
      "default": "curve"
    }
  },
  "edgeForkPosition": {
    "desc": "\n\n<p>正交布局下当边的形状是折线时，子树中折线段分叉的位置。这里的位置指的是分叉点与子树父节点的距离占整个子树高度的百分比。默认取值是 <code class=\"codespan\">&#39;50%&#39;</code>，可以是 [&#39;0&#39;, &#39;100%&#39;] 之间。</p>\n<p><strong>注意：该配置项只有在 <code class=\"codespan\">edgeShape = &#39;polyline&#39;</code> 时才有效。</strong></p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "roam": {
    "desc": "\n\n<p>是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 <code class=\"codespan\">&#39;scale&#39;</code> 或者 <code class=\"codespan\">&#39;move&#39;</code>。设置成 <code class=\"codespan\">true</code> 为都开启</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,scale,move"
    }
  },
  "expandAndCollapse": {
    "desc": "\n\n<p>子树折叠和展开的交互，<code class=\"codespan\">默认打开</code> 。由于绘图区域是有限的，而通常一个树图的节点可能会比较多，这样就会出现节点之间相互遮盖的问题。为了避免这一问题，可以将暂时无关的子树折叠收起，等到需要时再将其展开。如上面径向布局树图示例，节点中心用蓝色填充的就是折叠收起的子树，可以点击将其展开。</p>\n<p><strong>注意：如果配置自定义的图片作为节点的标记，是无法通过填充色来区分当前节点是否有折叠的子树的。而目前暂不支持，上传两张图片分别表示节点折叠和展开两种状态。所以，如果想明确地显示节点的两种状态，建议使用 <code class=\"codespan\">ECharts</code> 常规的标记类型，如 <code class=\"codespan\">&#39;emptyCircle&#39;</code> 等。</strong></p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "initialTreeDepth": {
    "desc": "\n\n<p>树图初始展开的层级（深度）。根节点是第 0 层，然后是第 1 层、第 2 层，... ，直到叶子节点。该配置项主要和 <code class=\"codespan\">折叠展开</code> 交互一起使用，目的还是为了防止一次展示过多节点，节点之间发生遮盖。如果设置为 <code class=\"codespan\">-1</code> 或者 <code class=\"codespan\">null</code> 或者 <code class=\"codespan\">undefined</code>，所有节点都将展开。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "2",
      "min": "0",
      "step": "1"
    }
  },
  "itemStyle": {
    "desc": "<p>树图中每个节点的样式，其中 <a href=\"#series-tree.itemStyle.color\">itemStyle.color</a> 表示节点的填充色，用来区别当前节点所对应的子树折叠或展开的状态。</p>\n"
  },
  "itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色 </p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1.5",
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
  "label": {
    "desc": "<p><code class=\"codespan\">label</code> 描述了每个节点所对应的文本标签的样式。</p>\n"
  },
  "label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "label.position": {
    "desc": "\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
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
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
  "lineStyle": {
    "desc": "<p>定义了树图边的样式。</p>\n"
  },
  "lineStyle.color": {
    "desc": "\n\n<p>树图边的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ccc"
    }
  },
  "lineStyle.width": {
    "desc": "\n\n<p>树图边的宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1.5",
      "min": "0"
    }
  },
  "lineStyle.curveness": {
    "desc": "\n\n<p>树图边的曲度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0.5",
      "min": "0"
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
  "emphasis": {
    "desc": "<p>树图中个图形和标签高亮的样式。</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
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
  "emphasis.lineStyle.color": {
    "desc": "\n\n<p>树图边的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ccc"
    }
  },
  "emphasis.lineStyle.width": {
    "desc": "\n\n<p>树图边的宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1.5",
      "min": "0"
    }
  },
  "emphasis.lineStyle.curveness": {
    "desc": "\n\n<p>树图边的曲度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0.5",
      "min": "0"
    }
  },
  "emphasis.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "emphasis.label.position": {
    "desc": "\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
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
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
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
  "leaves": {
    "desc": "<p>叶子节点的特殊配置，如上面的树图实例中，叶子节点和非叶子节点的标签位置不同。</p>\n"
  },
  "leaves.label": {
    "desc": "<p>描述了叶子节点所对应的文本标签的样式。</p>\n"
  },
  "leaves.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "leaves.label.position": {
    "desc": "\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "leaves.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "leaves.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "leaves.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "leaves.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "leaves.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "leaves.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "leaves.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "leaves.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "leaves.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "leaves.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "leaves.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "leaves.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "leaves.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "leaves.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "leaves.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "leaves.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "leaves.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "leaves.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "leaves.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "leaves.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "leaves.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "leaves.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "leaves.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "leaves.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "leaves.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "leaves.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "leaves.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.itemStyle": {
    "desc": "<p>树图中叶子节点的样式。</p>\n"
  },
  "leaves.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色 </p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "leaves.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "leaves.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "leaves.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "leaves.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "leaves.emphasis": {
    "desc": "<p>叶子节点高亮的样式。</p>\n"
  },
  "leaves.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "leaves.emphasis.label.position": {
    "desc": "\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "leaves.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "leaves.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "leaves.emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong></p>\n<p><strong>字符串模板</strong>\n模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n<li><code class=\"codespan\">{d}</code>：百分比。</li>\n<li><code class=\"codespan\">{@xxx}：数据中名为</code>&#39;xxx&#39;<code class=\"codespan\">的维度的值，如</code>{@product}<code class=\"codespan\">表示名为</code>&#39;product&#39;` 的维度的值。</li>\n<li><code class=\"codespan\">{@[n]}：数据中维度</code>n<code class=\"codespan\">的值，如</code>{@[3]}` 表示维度 3 的值，从 0 开始计数。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "leaves.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "leaves.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "leaves.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "leaves.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "leaves.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "leaves.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "leaves.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "leaves.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "leaves.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "leaves.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "leaves.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.emphasis.label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "leaves.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "leaves.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "leaves.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "leaves.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "leaves.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "leaves.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "leaves.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "leaves.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data": {
    "desc": "<p><a href=\"#series-tree.data\">series-tree.data</a> 的数据格式是树状结构的，例如：</p>\n<pre><code class=\"lang-javascript\">{ // 注意，最外层是一个对象，代表树的根节点\n    name: &quot;flare&quot;,    // 节点的名称，当前节点 label 对应的文本\n    label: {          // 此节点特殊的 label 配置（如果需要的话）。\n        ...           // label的格式参见 series-tree.label。\n    },\n    itemStyle: {      // 此节点特殊的 itemStyle 配置（如果需要的话）。\n        ...           // label的格式参见 series-tree.itemStyle。\n    },\n    children: [\n        {\n            name: &quot;flex&quot;,\n            value: 4116,    // value 值，只在 tooltip 中显示\n            label: {\n                ...\n            },\n            itemStyle: {\n                ...\n            },\n            collapsed: null, // 如果为 true，表示此节点默认折叠。\n            children: [...] // 叶子节点没有 children, 可以不写\n        },\n        ...\n    ]\n};\n</code></pre>\n"
  },
  "data.name": {
    "desc": "<p>树节点的名称，用来标识每一个节点。</p>\n"
  },
  "data.value": {
    "desc": "<p>节点的值，在 tooltip 中显示。</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>该节点的样式。</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。 默认从全局调色盘 <a href=\"#color\">option.color</a> 获取颜色 </p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.label": {
    "desc": "<p>该节点的标签。</p>\n"
  },
  "data.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "data.label.position": {
    "desc": "\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "data.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "data.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "data.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "data.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis": {
    "desc": "<p>高亮的节点样式</p>\n"
  },
  "data.emphasis.label.show": {
    "desc": "\n\n<p>是否显示标签。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "data.emphasis.label.position": {
    "desc": "\n\n\n<p>标签的位置。</p>\n<ul>\n<li><p>可以通过内置的语义声明位置：</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  position: &#39;top&#39;\n</code></pre>\n<p>  支持：<code class=\"codespan\">top</code> / <code class=\"codespan\">left</code> / <code class=\"codespan\">right</code> / <code class=\"codespan\">bottom</code> / <code class=\"codespan\">inside</code> / <code class=\"codespan\">insideLeft</code> / <code class=\"codespan\">insideRight</code> / <code class=\"codespan\">insideTop</code> / <code class=\"codespan\">insideBottom</code> / <code class=\"codespan\">insideTopLeft</code> / <code class=\"codespan\">insideBottomLeft</code> / <code class=\"codespan\">insideTopRight</code> / <code class=\"codespan\">insideBottomRight</code></p>\n</li>\n<li><p>也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。</p>\n<p>  示例：</p>\n<pre><code class=\"lang-js\">  // 绝对的像素值\n  position: [10, 10],\n  // 相对的百分比\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n</ul>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "data.emphasis.label.distance": {
    "desc": "\n\n<p>距离图形元素的距离。当 position 为字符描述值（如 <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>）时候有效。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rotate": {
    "desc": "\n\n<p>标签旋转。从 -90 度到 90 度。正值是逆时针。</p>\n<p>参见：<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>。</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "data.emphasis.label.offset": {
    "desc": "\n\n<p>是否对文字进行偏移。默认不偏移。例如：<code class=\"codespan\">[30, 40]</code> 表示文字在横向上偏移 <code class=\"codespan\">30</code>，纵向上偏移 <code class=\"codespan\">40</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "data.emphasis.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.emphasis.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.emphasis.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.emphasis.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.emphasis.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.emphasis.label.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.emphasis.label.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.emphasis.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.emphasis.label.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.emphasis.label.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.emphasis.label.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.emphasis.label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.emphasis.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.emphasis.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich": {
    "desc": "<p>在 <code class=\"codespan\">rich</code> 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">label: {\n    // 在文本中，可以对部分文本采用 rich 中定义样式。\n    // 这里需要在文本中使用标记符号：\n    // `{styleName|text content text content}` 标记样式名。\n    // 注意，换行仍是使用 &#39;\\n&#39;。\n    formatter: [\n        &#39;{a|这段文本采用样式a}&#39;,\n        &#39;{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>详情参见教程：<a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a></p>\n"
  },
  "data.emphasis.label.rich.<style_name>.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.emphasis.label.rich.<style_name>.align": {
    "desc": "\n\n<p>文字水平对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">align</code>，则会取父层级的 <code class=\"codespan\">align</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // 没有设置 `align`，则 `align` 为 right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>文字垂直对齐方式，默认自动。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">verticalAlign</code>，则会取父层级的 <code class=\"codespan\">verticalAlign</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>文字块背景色。</p>\n<p>可以使用颜色值，例如：<code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>。</p>\n<p>也可以直接使用图片，例如：</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // 这里可以是图片的 URL，\n    // 或者图片的 dataURI，\n    // 或者 HTMLImageElement 对象，\n    // 或者 HTMLCanvasElement 对象。\n}\n</code></pre>\n<p>当使用图片的时候，可以使用 <code class=\"codespan\">width</code> 或 <code class=\"codespan\">height</code> 指定高宽，也可以不指定自适应。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>文字块边框颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>文字块边框宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>文字块的圆角。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.emphasis.label.rich.<style_name>.padding": {
    "desc": "\n\n<p>文字块的内边距。例如：</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>：表示 <code class=\"codespan\">[上, 右, 下, 左]</code> 的边距。</li>\n<li><code class=\"codespan\">padding: 4</code>：表示 <code class=\"codespan\">padding: [4, 4, 4, 4]</code>。</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>：表示 <code class=\"codespan\">padding: [3, 4, 3, 4]</code>。</li>\n</ul>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>文字块的背景阴影颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>文字块的背景阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>文字块的背景阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>文字块的背景阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n<p>如果设置为 <code class=\"codespan\">&#39;auto&#39;</code>，则为视觉映射得到的颜色，如系列色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.color": {
    "desc": "\n\n<p>图形的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderColor": {
    "desc": "\n\n<p>图形的描边颜色。支持的颜色格式同 <code class=\"codespan\">color</code>，不支持回调函数。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderWidth": {
    "desc": "\n\n<p>描边线宽。为 0 时无描边。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.borderType": {
    "desc": "\n\n<p>柱条的描边类型，默认为实线，支持 <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, <code class=\"codespan\">&#39;dotted&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.emphasis.itemStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.emphasis.itemStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.tooltip": {
    "desc": "<p>本系列每个数据项中特定的 tooltip 设定。</p>\n"
  },
  "data.tooltip.position": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-js\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
  },
  "data.tooltip.formatter": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1, 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2, 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n    // 饼图的百分比\n    percent: number,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 使用数组表示各参数的方式不再支持。</p>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "data.tooltip.backgroundColor": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的背景颜色。</p>\n"
  },
  "data.tooltip.borderColor": {
    "desc": "\n\n\n\n\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "data.tooltip.borderWidth": {
    "desc": "\n\n\n\n\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框宽。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.padding": {
    "desc": "\n\n\n\n\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.tooltip.textStyle": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的文本样式。</p>\n"
  },
  "data.tooltip.textStyle.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "data.tooltip.textStyle.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.tooltip.textStyle.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.tooltip.textStyle.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.tooltip.textStyle.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "data.tooltip.textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.tooltip.textStyle.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.tooltip.textStyle.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "data.tooltip.textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.tooltip.textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.tooltip.textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.tooltip.extraCssText": {
    "desc": "<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.data.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  },
  "data.animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "data.animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "data.animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "data.animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "data.animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "data.animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "data.animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "data.animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"https://www.echartsjs.com/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "tooltip": {
    "desc": "<p>本系列特定的 tooltip 设定。</p>\n"
  },
  "tooltip.position": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-js\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
  },
  "tooltip.formatter": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1, 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2, 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n    // 饼图的百分比\n    percent: number,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 使用数组表示各参数的方式不再支持。</p>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "tooltip.backgroundColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的背景颜色。</p>\n"
  },
  "tooltip.borderColor": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "tooltip.borderWidth": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的边框宽。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "tooltip.padding": {
    "desc": "\n\n\n\n\n<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "tooltip.textStyle": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>提示框浮层的文本样式。</p>\n"
  },
  "tooltip.textStyle.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "tooltip.textStyle.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "tooltip.textStyle.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "tooltip.textStyle.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "tooltip.textStyle.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "tooltip.textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "tooltip.textStyle.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "tooltip.textStyle.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "tooltip.textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "tooltip.textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "tooltip.textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.extraCssText": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>注意：</strong><code class=\"codespan\">series.tooltip</code> 仅在 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 为 <code class=\"codespan\">&#39;item&#39;</code> 时有效。<br></p>\n</blockquote>\n<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  }
}