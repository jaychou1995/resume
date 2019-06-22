let m = 0

class Coder{
	constructor(dom) {
	    this.dom = dom
	}
	
	//显示文字
	load(code,second){
		let _dom = this.dom
		let _second = second ? second : 700
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
	let c = new Coder('work')
	c.load('<p>&nbsp;</p>')
	c.load('<p class="writecode work">你好</p>')
	c.load('<p  class="writecode  work">我叫周善斌,是大连民族大学计算机科学与工程学院应届毕业生</p>')
	c.load('<p  class="writecode work">目前求职意向为前端工程师</p>')
	c.load('<p  class="writecode work">期望城市:南京,广州,杭州</p>')
	c.load('<p  class="writecode work">现在我将用完成我的简历</p>')
	c.load('<p  class="writecode work">请您过目</p>')
	
	c.load('<p>&nbsp;</p>')
	c.load('<p  class="writecode work">首先让我们做点改变</p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p><choice>html</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>background</name> <redc>:</redc> <val>rgb(63, 82, 99);</val></p>')
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}])
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p class="writecode work">&nbsp;&nbsp;现在黑字体显示不清楚了</p>')
	c.load('<p class="writecode work">&nbsp;&nbsp;让我们换一种字体</p>')	
	
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>#main,a</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>color</name> <redc>:</redc> <val>#fff;</val></p>')
	c.setClass("#main,a", [{
		"name": "color",
		"val": "#fff"
	}])
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p class="writecode work">好多了,但是这样看起来还是不对劲</p>')
	c.load('<p class="writecode work">接下来我创建一个区域来更好的显示我的代码</p>')
	
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
	
	
	c.load('<p class="writecode work">现在我们发现代码的显示效果太差了</p>')
	c.load('<p class="writecode work">让我们来换一种</p>')
	
	c.load('<p>&nbsp;</p>',2000)
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	
	c.load('<p  class="writecode work">现在我们给它加点立体效果</p>')
	
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>#main</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>-webkit-perspective</name> <redc>:</redc> <val>1000px;</val></p>')
	c.setClass("#main", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
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
	
	c.load('<p>&nbsp; <name>max-height</name> <redc>:</redc> <val>85%;</val></p>')
	c.setClass(".code-work", [{
		"name": "max-height",
		"val": "85%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	c.load('<p  class="writecode work">接下来我将正式的开始制作我的简历</p>')
	
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
	
	c.load('<p>&nbsp; <name>right</name> <redc>:</redc> <val>0;</val></p>')
	c.setClass(".code-resume", [{
		"name": "right",
		"val": "0"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>-webkit-perspective</name> <redc>:</redc> <val>1000px;</val></p>')
	c.setClass(".code-resume", [{
		"name": "right",
		"val": "0"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>width</name> <redc>:</redc> <val>45%;</val></p>')
	c.setClass(".code-resume", [{
		"name": "width",
		"val": "45%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>height</name> <redc>:</redc> <val>85%;</val></p>')
	c.setClass(".code-resume", [{
		"name": "height",
		"val": "85%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>max-height</name> <redc>:</redc> <val>85%;</val></p>')
	c.setClass(".code-resume", [{
		"name": "max-height",
		"val": "85%"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>background-color</name> <redc>:</redc> <val>#FFFFE0;</val></p>')
	c.setClass(".code-resume", [{
		"name": "background-color",
		"val": "#FFFFE0"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>-webkit-transform</name> <redc>:</redc> <val>translateX(-8%) rotateY(-10deg) translateY(5%);</val></p>')
	c.setClass(".code-resume", [{
		"name": "-webkit-transform",
		"val": "translateX(-8%) rotateY(-10deg) translateY(5%)"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>border</name> <redc>:</redc> <val>1px soild #ccc;</val></p>')
	c.setClass(".code-resume", [{
		"name": "border",
		"val": "1px soild #ccc"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>padding</name> <redc>:</redc> <val>10px 10px 20px;</val></p>')
	c.setClass(".code-resume", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p>&nbsp; <name>box-shadow</name> <redc>:</redc> <val>-4px 4px 2px 0 rgba(0,0,0,0.3);</val></p>')
	c.setClass(".code-resume", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}])
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	
	c.load('<p  class="writecode work">布局完成,接下来开始加入内容</p>')
	

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
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	//weight
	c.load('<p>&nbsp;</p>')
	c.load('<p><choice>.weight</choice><redc>{</redc></p>')
	c.load('<p>&nbsp; <name>font-weight</name> <redc>:</redc> <val>500;</val></p>')
	
	c.addClass("choice","choice")
	c.addClass("redc","redc")
	c.addClass("name","name")
	c.addClass("val","val")
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	
	l.load('<p>&nbsp;</p>')
	l.load('<h1 class="writecode">教育背景</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<p class="writecode">2015.09-2019.06   大连民族大学     计算机科学与技术      本科</p>')
	l.load('<p>&nbsp;</p>')
	
	
	l.load('<h1 class="writecode">工作经历</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<p class="writecode weight">2019.02-2019.06   亚信科技福州分公司 亚信安全部门  web开发实习生</p>')
	l.load('<p class="writecode">职责:与技术团队等进行充分的沟通，配合后台开发人员实现产品前端界面效果与功能。负责部分产品HTML5、CSS3、JS的编写，解决响应适配等问题，确保产品具有优质的用户使用体验。</p>')
	
	l.load('<p>&nbsp;</p>')
	l.load('<h1 class="writecode">项目经历</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<p class="writecode weight">《WGCLOUDE》</p>')
	l.load('<p class="writecode">项目描述：一款linux性能监测工具，用于检查网络吞吐率，服务器cpu监控，内存监控等。</p>')
	l.load('<p class="writecode">责任描述：此项目为团队项目，本人主要负责部分页面的布局，javascript逻辑的实现和后期一些升级优化。</p>')
	l.load('<p class="writecode">技术要点：1.使用Vue框架，Element-ui搭建整体架构。2.使用ECharts可视化工具进行数据可视化展示 3.通过AJAX获取后台数据，并进行数据解析，再到页面进行展示。</p>')
	l.load('<p>&nbsp;</p>')
	
	l.load('<p class="writecode weight">《电商客户端管理系统》</p>')
	l.load('<p class="writecode">项目描述：一款移动端的电商客户端，主要使用Vue全家桶开发。</p>')
	l.load('<p class="writecode">责任描述：此项目为个人毕设项目，由本人独立完成。</p>')
	l.load('<p class="writecode">技术要点：1.使用Vue，Mint-ui搭建整体架构。2.使用Vue-router搭建路由，Vuex存储状态，Axios请求数据 3.使用better-scroll实现上拉刷新下拉加载，使用swiper实现轮播图。4.使用基于Node的Express框架搭建后台。</p>')
	l.load('<p>&nbsp;</p>')
	
	l.load('<h1 class="writecode">校园实践</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<p class="writecode weight">2016.09-2018.09		         创软工作室	  </p>')
	l.load('<p class="writecode">加入大连民族大学创软工作室,小组核心技术人员,在工作室中参加学校举办的软件设计活动,负责网站制作部分,培养了团队协作能力。</p>')
	
	l.load('<p>&nbsp;</p>')
	l.load('<h1 class="writecode">自我评价</h1>')
	l.load('<p>&nbsp;</p>')
	l.load('<li class="writecode">为人坦诚，守信，肯吃苦, 适应能力强，适应新思维新方式</li>')
	l.load('<li class="writecode">对于技术有研究精神、攻关能力和创造执行力</li>')
	l.load('<li class="writecode">学习能力强，能快速的掌握新知识</li>')
	l.load('<li class="writecode">热爱编程，研发和抗压性强 </li>')
	
	
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
	
	c.load('<p><redc>}</redc></p>')
	c.load('<p>&nbsp;</p>')
	
	r.load('<img src="img/1.jpg" />')
	r.load('<h2 class="weight writecode">周善斌</h2>')
	r.load('<h2 class="weight writecode">求职意向:前端工程师</h2>')
	r.load('<h2 class="weight writecode">基本信息<p class="weight writecode">性别:男</p><p class="weight writecode">出生日期:1995.08.25</p><p class="weight writecode">籍贯:广西崇左</p><p class="weight writecode">电话:17615195825</p><p class="weight writecode">邮箱:747305307@qq.com</p></h2>')
	r.load('<h2 class="weight writecode">专业技能<p class="weight writecode">&nbsp;&nbsp;熟悉Vue常用功能和命令，如组件，Vue-Router，Vuex，生命周期等，熟练组件化开发。</p><p class="weight writecode">&nbsp;&nbsp;熟悉HTML5，CSS3，熟悉响应是布局，弹性布局百分比自适应布局，CSS3动画技术。熟悉REM，vw/vh等制作移动端适配页面。</p><p class="weight writecode">&nbsp;&nbsp;熟悉Javascript，ES6，Jquery，掌握Jquery常用API与DOM操作，熟悉面向对象JS编程。</p><p class="weight writecode">&nbsp;&nbsp;熟悉Mint-ui, Element-ui, BootStrap，better-scroll, swiper，ECharts 等ui库和插件的使用。</p><p class="weight writecode">&nbsp;&nbsp;了解Node Express框架的使用，熟练AJAX/JSON，正则表达式，了解git版本管理工具的使用。</p></h2>')
	
	c.load('<p>&nbsp;</p>',1500)
	c.load('<p  class="writecode work">最后非常感谢您愿意花3分钟看完我的简历！</p>')
	c.load('<p  class="writecode work">我的联系方式</p>')
	c.load('<p  class="writecode work">电话/微信 17615195825</p>')
	c.load('<p  class="writecode work">邮箱 747305307@qq.com </p>')
	c.load('<p  class="writecode work">希望能有一次相互了解的机会,感谢!</p>')
	
})

