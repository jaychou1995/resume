let m = 0

class Coder{
	constructor(dom) {
	    this.dom = dom
	}
	
	//显示文字
	load(code,second){
		let _dom = this.dom
		let _second = second ? second : 400
		_second = m + _second
		setTimeout(function(){
			$('#'+_dom).scrollTop($('#'+_dom).get(0).scrollHeight)
			$("#" + _dom).append(code)
		},_second)
		m = _second
	}
	
	//设置样式
	setClass(setDom, styles,second){
		let _second = second ? second : 0
		_second = m + _second
		for(let i in styles){
			setTimeout(function(){
				$(setDom).css(styles[i].name,styles[i].val)
			},_second);
		}
		m = _second
	}
	
	//添加样式
	addClass(addDom,className){
		let _second = m
		setTimeout(function(){
			$(addDom).addClass(className);
		},_second)
	}
	
	//添加文字
	addWord(addDom,word){
		let _second = this.m
		setTimeout(function(){
			$(addDom).text(word);
		},_second)
	}
}



$(function(){
	var width = document.documentElement.clientWidth;
	var html = document.querySelector('html')
	
	$(window).resize(function(){
		
		html.style.fontSize = 10 * (width / 1920) + 'px'
		console.log(html.style.fontSize);
	})
	
	
	let c = new Coder('work')
	c.load('<p>&nbsp;</p>')
	c.load('<p class="writecode work">你好</p>',1200)
	c.load('<p  class="writecode  work">我叫周善斌,毕业于大连民族大学计算机科学与工程学院</p>',1200)
	c.load('<p  class="writecode  work">专业是计算机科学与技术</p>',1200)
	c.load('<p  class="writecode work">目前求职意向为前端工程师</p>',1200)
	c.load('<p  class="writecode work">如果您愿意用两分钟时间看完我的这份简历将是我莫大的荣幸，感谢！</p>',1200)
	c.load('<p  class="writecode work">这份简历将尽力还原我所投递的简历附件</p>',1200)
	c.load('<p  class="writecode work">现在我将用完成我的简历</p>',1200)
	c.load('<p  class="writecode work">请您过目</p>',1200)
	
	c.load('<p>&nbsp;</p>')
	c.load('<p  class="writecode work">首先让我们做点改变</p>',800)
	c.load('<p>&nbsp;</p>')
	
	c.load('<p><choice>html</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>background</name> <redc>:</redc> <val>rgb(63, 82, 99);</val></p>')
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}])
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p class="writecode work">&nbsp;&nbsp;现在黑字体显示不清楚了</p>',800)
	c.load('<p class="writecode work">&nbsp;&nbsp;让我们换一种字体</p>',800)	
	
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>#main,a</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>color</name> <redc>:</redc> <val>#fff;</val></p>')
	c.setClass("#main,a", [{
		"name": "color",
		"val": "#fff"
	}])
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p class="writecode work">好多了,但是这样看起来还是不对劲</p>',800)
	c.load('<p class="writecode work">接下来我创建一个区域来更好的显示我的代码</p>',800)
	
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>#work</choice><redc>{</redc></p>')
	
	c.load('<p>&nbsp; <name>overflow</name> <redc>:</redc> <val>hidden;</val></p>')
	c.setClass("#work", [{
		"name": "overflow",
		"val": "hidden"
	}])
	
	c.load('<p>&nbsp; <name>background</name> <redc>:</redc> <val>rgb(48, 48, 48);</val></p>')
	c.setClass("#work", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}])
	
	c.load('<p>&nbsp; <name>border</name> <redc>:</redc> <val>1px solid #ccc;</val></p>')
	c.setClass("#work", [{
		"name": "border",
		"val": "1px solid #ccc"
	}])
	
	c.load('<p>&nbsp; <name>max-height</name> <redc>:</redc> <val>50%;</val></p>')
	c.setClass("#work", [{
		"name": "max-height",
		"val": "50%"
	}])
	
	c.load('<p>&nbsp; <name>width</name> <redc>:</redc> <val>45%;</val></p>')
	c.setClass("#work", [{
		"name": "width",
		"val": "45%"
	}])
	
	c.load('<p>&nbsp; <name>font-family</name> <redc>:</redc> <val>monospace;</val></p>')
	c.setClass("#work", [{
		"name": "font-family",
		"val": "monospace"
	}])
	
	c.load('<p>&nbsp; <name>padding</name> <redc>:</redc> <val>10px 10px 20px;</val></p>')
	c.setClass("#work", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}])
	
	c.load('<p>&nbsp; <name>box-shadow</name> <redc>:</redc> <val>-4px 4px 2px 0 rgba(0,0,0,0.3);</val></p>')
	c.setClass("#work", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}])
	
	c.load('<p>&nbsp; <name>outline</name> <redc>:</redc> <val>0;</val></p>')
	c.setClass("#work", [{
		"name": "outline",
		"val": "0"
	}])
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	
	c.load('<p class="writecode work">现在我们发现代码的显示效果太差了</p>',800)
	c.load('<p class="writecode work">让我们来换一种</p>',800)
	
	c.load('<p>&nbsp;</p>',2000)
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	
	c.load('<p  class="writecode work">现在我们给它加点立体效果</p>',800)
	
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>#main</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>-webkit-perspective</name> <redc>:</redc> <val>1000px;</val></p>')
	c.setClass("#main", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}])
	c.addClass("choice","choice")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")

	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p><choice>.code-work</choice><redc>{</redc></p>')
	
	c.load('<p>&nbsp; <name>-webkit-transform</name> <redc>:</redc> <val>translateX(8%) rotateY(10deg) translateY(5%);</val></p>')
	c.setClass(".code-work", [{
		"name": "-webkit-transform",
		"val": "translateX(8%) rotateY(10deg) translateY(5%)"
	}])
		c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>max-height</name> <redc>:</redc> <val>85%;</val></p>')
	c.setClass(".code-work", [{
		"name": "max-height",
		"val": "85%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p  class="writecode work">接下来我将正式的开始制作我的简历</p>',800)
	
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.code-resume</choice><redc>{</redc></p>')
	
	c.load('<p>&nbsp; <name>position</name> <redc>:</redc> <val>absolute;</val></p>')
	c.setClass(".code-resume", [{
		"name": "position",
		"val": "absolute"
	}])
		c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>right</name> <redc>:</redc> <val>0;</val></p>')
	c.setClass(".code-resume", [{
		"name": "right",
		"val": "0"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>-webkit-perspective</name> <redc>:</redc> <val>1000px;</val></p>')
	c.setClass(".code-resume", [{
		"name": "right",
		"val": "0"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>width</name> <redc>:</redc> <val>45%;</val></p>')
	c.setClass(".code-resume", [{
		"name": "width",
		"val": "45%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>height</name> <redc>:</redc> <val>85%;</val></p>')
	c.setClass(".code-resume", [{
		"name": "height",
		"val": "85%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>max-height</name> <redc>:</redc> <val>85%;</val></p>')
	c.setClass(".code-resume", [{
		"name": "max-height",
		"val": "85%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>background-color</name> <redc>:</redc> <val>#FFFFE0;</val></p>')
	c.setClass(".code-resume", [{
		"name": "background-color",
		"val": "#FFFFE0"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>-webkit-transform</name> <redc>:</redc> <val>translateX(-8%) rotateY(-10deg) translateY(5%);</val></p>')
	c.setClass(".code-resume", [{
		"name": "-webkit-transform",
		"val": "translateX(-8%) rotateY(-10deg) translateY(5%)"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>border</name> <redc>:</redc> <val>1px soild #ccc;</val></p>')
	c.setClass(".code-resume", [{
		"name": "border",
		"val": "1px soild #ccc"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>padding</name> <redc>:</redc> <val>10px 10px 20px;</val></p>')
	c.setClass(".code-resume", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p>&nbsp; <name>box-shadow</name> <redc>:</redc> <val>-4px 4px 2px 0 rgba(0,0,0,0.3);</val></p>')
	c.setClass(".code-resume", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	
	c.load('<p  class="writecode work">布局完成,接下来开始加入内容</p>',800)
	

	let m = new Coder('coder')
	
	//resume-main
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.resume-main</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>width</name> <redc>:</redc> <val>100%;</val></p>')
	c.load('<p>&nbsp; <name>height</name> <redc>:</redc> <val>100%;</val></p>')
	c.load('<p>&nbsp; <name>display</name> <redc>:</redc> <val>flex;</val></p>')
	c.load('<p>&nbsp; <name>flex-direction</name> <redc>:</redc> <val>row;</val></p>')
	c.load('<p>&nbsp; <name>color</name> <redc>:</redc> <val>#1F1F1F;</val></p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	//left
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.left</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>flex</name> <redc>:</redc> <val>2;</val></p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	
	m.load(`<div class="resume-main">
		<div class="left" id="left"></div>	
		<div class="right" id="right"></div>
	</div>`)

	let l = new Coder('left')
	
	//.left h1
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.left h1</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>color</name> <redc>:</redc> <val>#333399;</val></p>')
	c.load('<p>&nbsp; <name>border-bottom</name> <redc>:</redc> <val>1px solid #333399;</val></p>')
	c.load('<p>&nbsp; <name>font-size</name> <redc>:</redc> <val>20px;</val></p>')
	c.load('<p>&nbsp; <name>font-weight</name> <redc>:</redc> <val>700;</val></p>')
	c.load('<p>&nbsp; <name>line-height</name> <redc>:</redc> <val>20px;</val></p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	//.left p,.left li
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.left p,.left li,.right p</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>font-size</name> <redc>:</redc> <val>16px;</val></p>')
	c.load('<p>&nbsp; <name>white-space</name> <redc>:</redc> <val>normal;</val></p>')
	c.load('<p>&nbsp; <name>line-height</name> <redc>:</redc> <val>16px;</val></p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	//weight
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.weight</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>font-weight</name> <redc>:</redc> <val>500;</val></p>')
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	
	l.load('<p>&nbsp;</p>')
	l.load('<h1 class="writecode">专业技能</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<p class="writecode">熟悉Vue框架以及Vue-Router，Vuex等vue全家桶的使用，熟悉组件化开发。</p>')
	l.load('<p class="writecode">熟练使用uni-app开发跨平台应用，理解微信小程序的开发，有开发小程序和跨平台应用的经验。</p>')
	l.load('<p class="writecode">熟练使用Html,CSS,JavaScript等开发语言，熟悉jQuery等JS库，熟悉CSS3新特性，ES6新特性，进行可读性高的W3C规范代码编程。</p>')
	l.load('<p class="writecode">理解Vant，Element，Bootstrap等组件库的使用，能快速上手搭建页面。</p>')
	l.load('<p class="writecode">熟悉git版本管理工具的使用，熟悉正则表达式，理解webpack打包工具的使用，了解node后台开发。</p>')
	l.load('<p>&nbsp;</p>')
	
	
	l.load('<h1 class="writecode">工作经历</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<p class="writecode weight">南京臻超科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019.07-2020.01</p>')
	l.load('<p class="writecode">项目名称: 科创中心</p>')
	l.load('<p class="writecode">项目介绍: 一款辅助建筑施工人员现场施工的App软件</p>')
	l.load('<p class="writecode">主要工作：负责考勤打卡和环境检测模块的开发。主要使用flex布局，通过request和后台交互，使用getLocation获取地理位置，使用map标签绘制地图展示用户考勤打卡信息，使用uni-app的ucharts绘制图表进行可视化的展示，图标主要展示用户的打卡记录，缺卡请假等信息。</p>')
	l.load('<p class="writecode">技术栈：uni-app,ucharts</p>')
	l.load('<p>&nbsp;</p>')
	
	l.load('<p class="writecode">项目名称：智慧工地</p>')
	l.load('<p class="writecode">项目介绍：一款控制中心大屏展示施工进度的施工系统</p>')
	l.load('<p class="writecode">主要工作：负责页面整体布局，按照要求还原设计图。该系统主要使用Html，CSS，JavaScript还原项目，使用了jQuery库辅助开发，使用响应式布局和flex布局优化页面，实现了在施工现场控制中心展示环境监测，塔吊，高支模，地磅，升降机等数据的展示。</p>')
	l.load('<p class="writecode">技术栈：Html，CSS，JavaScript，jQuery</p>')
	l.load('<p>&nbsp;</p>')
	
	
	l.load('<p class="writecode weight">亚信科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018.07-2019. 05</p>')
	l.load('<p class="writecode">项目名称：WGCLOUDE</p>')
	l.load('<p class="writecode">项目介绍：一款linux性能检测工具，用于检查网络吞吐量，服务器cpu监控，内存监控等信息展示的后台系统。</p>')
	l.load('<p class="writecode">主要工作：负责页面布局和交互逻辑的实现和后期的性能优化，该系统主要使用了Vue框架的全家桶。项目使用axios与数据库后台交互获取数据，通过axios获取数据并进行数据解析，并且使用了Vuex进行数据存储管理，使用Vue-Router进行路由管理，使用Element组件库搭建的页面，使用了Echarts进行可视化的数据展示，最终将机器的性能监控数据展示到页面。</p>')
	l.load('<p class="writecode">技术栈：Vue，Vuex，Vue-Router，axios</p>')
	l.load('<p>&nbsp;</p>')
	
	
	
	let r = new Coder('right')
	
	
	//right
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.right</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>flex</name> <redc>:</redc> <val>1;</val></p>')
	c.load('<p>&nbsp; <name>background-color</name> <redc>:</redc> <val>#4876FF;</val></p>')
	c.load('<p>&nbsp; <name>display</name> <redc>:</redc> <val>flex;</val></p>')
	c.load('<p>&nbsp; <name>flex-direction</name> <redc>:</redc> <val>column;</val></p>')
	c.load('<p>&nbsp; <name>justify-content</name> <redc>:</redc> <val>space-around;</val></p>')
	c.load('<p>&nbsp; <name>align-items</name> <redc>:</redc> <val>center;</val></p>')
	c.load('<p>&nbsp; <name>color</name> <redc>:</redc> <val>#fff;</val></p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	c.addClass("redc","redc")
	
	r.load('<img src="img/1.jpg" style="width:120px;height:160px;"/>')
	r.load('<h2 class="weight writecode">周善斌</h2>')
	r.load('<h2 class="weight writecode">求职意向:前端工程师</h2>')
	r.load('<h2 class="weight writecode">基本信息<p class="weight writecode">性别:男</p><p class="weight writecode">年龄:24</p><p class="weight writecode">籍贯:广西崇左</p><p class="weight writecode">电话:17615195825</p><p class="weight writecode">邮箱:747305307@qq.com</p></h2>')
	r.load('<p class="writecode text-left">&nbsp;&nbsp;教育经历 ：大连民族大学</p><p class="writecode text-left">&nbsp;&nbsp;学位 ：本科</p><p class="writecode text-left">&nbsp;&nbsp;专业 ：计算机科学与技术</p><p class="writecode text-left">&nbsp;&nbsp;个人GitHub：https://github.com/jaychou1995</p>')
	
	
	c.load('<p>&nbsp;</p>',1200)
	c.load('<p  class="writecode work">最后非常感谢您愿意花两分钟看完我的简历！</p>',1200)
	c.load('<p  class="writecode work">我的联系方式</p>',1200)
	c.load('<p  class="writecode work">电话/微信 17615195825</p>',1200)
	c.load('<p  class="writecode work">邮箱 747305307@qq.com </p>',1200)
	c.load('<p  class="writecode work">希望能有一次相互了解的机会,感谢!</p>',1200)
	
})

