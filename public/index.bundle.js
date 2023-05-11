(()=>{"use strict";var e={156:function(e,s,t){var l=this&&this.__awaiter||function(e,s,t,l){return new(t||(t=Promise))((function(i,o){function n(e){try{a(l.next(e))}catch(e){o(e)}}function r(e){try{a(l.throw(e))}catch(e){o(e)}}function a(e){var s;e.done?i(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(n,r)}a((l=l.apply(e,s||[])).next())}))};Object.defineProperty(s,"__esModule",{value:!0}),s.Ball=void 0;const i=t(132),o=t(460),n=t(941);s.Ball=class{constructor(e,s,t,r,a,d,h){this.direction="none",this.execute=!1,this.keys={},this.isAlive=!0,this.blockExpl=!1,this.explIteration=1,this.explX=0,this.explY=0,this.soundCount=0,this.killEffect=()=>{clearInterval(i.GameBoard.interval)},this.checkKey=()=>l(this,void 0,void 0,(function*(){var e,s;if(console.log(this.xPos,this.yPos),"o"==Object.keys(this.keys)[0]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.refresh();const t=window.setInterval((function(){}),Number.MAX_SAFE_INTEGER);for(let e=1;e<t;e++)window.clearInterval(e);let l=setInterval((()=>{if(this.explIteration<6){this.refresh();let e=document.getElementById(`explosions/ball/${this.explIteration}.png`);this.ctx.drawImage(e,n.Menu.ballX-7,n.Menu.ballY-7,65,65),this.explIteration+=1}else this.explIteration=1,this.ctx.clearRect(this.xPos-7,this.yPos-7,65,65),clearInterval(l),this.refresh()}),45);if(this.isAlive=!1,this.killEffect(),yield this.sleep(3e3),document.getElementById("mainContainer").style.visibility="hidden",i.GameBoard.blocksArr=[],i.GameBoard.livesNuber>0){let e=i.GameBoard.livesNuber-1;n.Menu.currGame=void 0,document.getElementById("mainContainer").style.visibility="visible",n.Menu.makeAgain(e,i.GameBoard.levelNum,i.GameBoard.score,i.GameBoard.best)}else{document.getElementById("mainContainer").style.display="none";let t=document.createElement("div"),l=document.getElementById("scoreBoardDiv");t.className="gameOver";let i=document.createElement("img");i.src="../public/grafiki/baners/gameOver.png",i.style.width="200px",i.style.height="40px",t.appendChild(i),document.getElementById("allDiv").innerHTML="",null===(e=document.getElementById("allDiv"))||void 0===e||e.appendChild(t),null===(s=document.getElementById("allDiv"))||void 0===s||s.appendChild(l)}}"ArrowRight"==Object.keys(this.keys)[0]&&(this.direction="right",this.dx<0&&(this.dx=-this.dx)),"ArrowLeft"==Object.keys(this.keys)[0]&&(this.direction="left",this.dx>0&&(this.dx=-this.dx)),setTimeout(this.checkKey,10)})),this.win=()=>l(this,void 0,void 0,(function*(){clearTimeout(this.frame),this.killEffect(),this.scoreInterval(),this.bestInterval(),yield this.sleep(1e4);const e=window.setInterval((function(){}),Number.MAX_SAFE_INTEGER);for(let s=1;s<e;s++)window.clearInterval(s);document.getElementById("mainContainer").style.visibility="hidden",i.GameBoard.blocksArr=[],n.Menu.makeAgain(i.GameBoard.livesNuber+1,i.GameBoard.levelNum+1,i.GameBoard.best,i.GameBoard.score),document.getElementById("mainContainer").style.visibility="visible"})),this.showExplosion=e=>{const s=i.GameBoard.blocksArr.find((s=>s.id==e));let t=setInterval((()=>{if(s.explIteration<6)s.type=`explBlock${s.explIteration}`,s.explIteration+=1;else{let e=i.GameBoard.blocksArr.filter((e=>e.xPos!=s.xPos||e.yPos!=s.yPos));i.GameBoard.blocksArr=e,this.ctx.clearRect(s.xPos,s.yPos,s.dimension,s.dimension),clearInterval(t),i.GameBoard.score+=50,i.GameBoard.best+=50,i.GameBoard.loadGameScore(),i.GameBoard.blocksArr.filter((e=>"N"==e.type.charAt(1))).length<=0&&this.win()}}),40)},this.sleep=e=>new Promise((s=>setTimeout(s,e))),this.collisionEffect=e=>l(this,void 0,void 0,(function*(){var s,t,l;let r=o.Levels.dictionary[e.type].split("/")[1],a=null===(s=this.ballColor.split("/").pop())||void 0===s?void 0:s.split(".")[0];if("C"==e.type.charAt(1)&&(this.ballColor="balls/full/"+r+".png"),"N"==e.type.charAt(1)&&r==a&&(e.type="explBall1",e.state="explosion",this.showExplosion(e.id)),"D"==e.type.charAt(1))if(this.isAlive=!1,this.killEffect(),yield this.sleep(3e3),document.getElementById("mainContainer").style.visibility="hidden",i.GameBoard.blocksArr=[],i.GameBoard.livesNuber>0){let e=i.GameBoard.livesNuber-1;n.Menu.currGame=null,document.getElementById("mainContainer").style.visibility="visible",n.Menu.makeAgain(e,i.GameBoard.levelNum,i.GameBoard.score,i.GameBoard.best)}else{document.getElementById("mainContainer").style.display="none";let e=document.createElement("div"),s=document.getElementById("scoreBoardDiv");e.className="gameOver";let i=document.createElement("img");i.src="../public/grafiki/baners/gameOver.png",i.style.width="200px",i.style.height="40px",e.appendChild(i),document.getElementById("allDiv").innerHTML="",null===(t=document.getElementById("allDiv"))||void 0===t||t.appendChild(e),null===(l=document.getElementById("allDiv"))||void 0===l||l.appendChild(s)}if("M"==e.type.charAt(1)){if(r!=a)return;let s={left:{x:1,y:0},right:{x:-1,y:0},up:{x:0,y:1},down:{x:0,y:-1}},t=s[e.hitFrom].x,l=s[e.hitFrom].y,o=!1;i.GameBoard.blocksArr.forEach((s=>{s.xPos==e.xPos+t*e.dimension&&s.yPos==e.yPos+l*e.dimension&&(o=!0)}));let n={x:e.xPos+t*e.dimension,y:e.yPos+l*e.dimension};if(n.x<0||n.y<0)return e.hitFrom="",void(e.isMoving=!1);if(n.x+e.dimension>this.canvas.width||n.y+e.dimension>this.canvas.height)return e.hitFrom="",void(e.isMoving=!1);if(o||(e.isMoving=!0),!o&&e.isMoving){let s=setInterval((()=>{e.yPos+=5*l,e.xPos+=5*t,e.xPos==n.x&&e.yPos==n.y&&(e.hitFrom="",e.isMoving=!1,clearInterval(s))}),12)}}})),this.refresh=()=>{i.GameBoard.blocksArr.forEach((e=>{this.ctx.fillRect(e.xPos+.2*e.dimension,e.yPos+.2*e.dimension,e.dimension,e.dimension)})),i.GameBoard.blocksArr.forEach((e=>{let s=document.getElementById(o.Levels.dictionary[e.type]);this.ctx.drawImage(s,e.xPos,e.yPos,e.dimension,e.dimension)}))},this.updateBall=()=>{if(115==this.soundCount?this.soundCount=0:this.soundCount+=1,this.frame=setTimeout(this.updateBall,11),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.refresh(),this.isAlive)this.drawBall();else{clearTimeout(this.frame);let e=setInterval((()=>{if(this.explIteration<6){this.refresh();let e=document.getElementById(`explosions/ball/${this.explIteration}.png`);this.ctx.drawImage(e,this.explX-7,this.explY-7,65,65),this.explIteration+=1}else this.ctx.clearRect(this.explX-7,this.explY-7,65,65),clearInterval(e),this.refresh()}),55)}"none"!=this.direction&&this.xPos-this.radius<0&&(this.dx=-this.dx),"none"!=this.direction&&this.radius+this.xPos>this.canvas.width&&(this.dx=-this.dx),(this.yPos+this.radius>this.canvas.height||this.yPos-this.radius<0)&&(this.dy=-this.dy),"none"!=this.direction&&(this.xPos+this.dx+this.radius>this.canvas.width?this.xPos=this.xPos-this.radius:this.xPos-this.radius<.5*this.radius?this.xPos=this.xPos+this.radius:this.xPos+=this.dx),i.GameBoard.blocksArr.forEach((e=>{if("block"==e.state){let s={x:this.xPos,y:this.yPos,r:this.radius},t={x:e.xPos,y:e.yPos,w:e.dimension,h:e.dimension};this.RectCircleColliding(s,t,e.id)&&!e.isMoving&&(this.explX=e.xPos,this.explY=e.yPos,this.collisionEffect(e))}})),this.yPos+=1*this.dy},this.xPos=e,this.yPos=s,this.speed=a,this.radius=t,this.ctx=r,this.canvas=d,this.dx=.7*this.speed,this.dy=.7*this.speed,this.ballColor=h,this.drawBall(),this.updateBall(),document.addEventListener("keydown",(e=>{this.keys[e.key]=!0})),document.addEventListener("keyup",(e=>{delete this.keys[e.key],this.direction="none",this.execute=!1})),this.checkKey()}scoreInterval(){let e=i.GameBoard.score,s=setInterval((()=>{i.GameBoard.score+=1,i.GameBoard.loadGameScore(),i.GameBoard.score>=e+i.GameBoard.bonus&&(clearInterval(s),i.GameBoard.loadGameScore())}),10)}bestInterval(){let e=i.GameBoard.best,s=setInterval((()=>{i.GameBoard.best+=1,i.GameBoard.loadGameScore(),i.GameBoard.best>=e+i.GameBoard.bonus&&(clearInterval(s),i.GameBoard.loadGameScore())}),10)}getDistance(e,s,t,l){let i=t-e,o=l-s;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}RectCircleColliding(e,s,t){const l=i.GameBoard.blocksArr.find((e=>e.id==t));var o=Math.abs(e.x-s.x-s.w/2),n=Math.abs(e.y-s.y-s.h/2);if(o>s.w/2+e.r)return!1;if(n>s.h/2+e.r)return!1;if(o<=s.w/2)return this.yPos>s.y?l.hitFrom="down":this.yPos<s.y&&(l.hitFrom="up"),this.dy=-this.dy,this.yPos+=1*this.dy,!0;if(n<=s.h/2)return this.xPos>s.x?l.hitFrom="right":this.xPos<s.x&&(l.hitFrom="left"),this.dx=-this.dx,this.xPos+=4*this.dx,!0;var r=o-s.w/2,a=n-s.h/2;return r*r+a*a<=e.r*e.r?(this.dx=-this.dx,s.x>this.xPos?this.xPos+this.radius+this.dx>=s.x&&(this.dy<0?this.yPos+this.radius>s.y&&(l.hitFrom="down",this.dy=-this.dy):this.yPos+this.radius<s.y+s.h&&(l.hitFrom="up",this.dy=-this.dy)):s.w+s.x<this.xPos+this.radius&&this.xPos-this.radius+this.dx<=s.x+s.w&&(this.dy<0?this.yPos+this.radius+this.dx>s.y&&(l.hitFrom="down",this.dy=-this.dy):this.yPos+this.radius+this.dx<s.y+s.h&&(l.hitFrom="up",this.dy=-this.dy)),this.yPos+=2.5*this.dy,this.xPos+=2.5*this.dx,!0):void 0}drawBall(){let e=document.getElementById(this.ballColor);this.ctx.save(),this.ctx.beginPath(),n.Menu.ballX=this.xPos,n.Menu.ballY=this.yPos,this.ctx.arc(this.xPos,this.yPos,this.radius,0,2*Math.PI,!1),this.ctx.drawImage(e,this.xPos-12.5,this.yPos-12.5,25,25),this.ctx.restore()}}},577:(e,s,t)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.Block=void 0;const l=t(460);s.Block=class{constructor(e,s,t,l,i){this.state="block",this.id=Math.random(),this.explIteration=1,this.hitFrom="",this.isMoving=!1,this.xPos=e,this.yPos=s,this.type=t,this.dimension=l,this.ctx=i,this.drawBlock()}drawBlock(){let e=document.getElementById(l.Levels.dictionary[this.type]);this.ctx.drawImage(e,this.xPos,this.yPos,this.dimension,this.dimension)}}},132:(e,s,t)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.GameBoard=void 0;const l=t(156),i=t(577),o=t(460);class n{constructor(e,s,t,l,i,o,r,a,d){this.currentLevel=e,this.ballX=s,this.ballY=t,this.ballColor=d,n.levelNum=l,n.livesNuber=i,n.score=o,n.best=r,n.bonus=a,this.renderGraphics()}static bonusInterval(){n.interval=setInterval((()=>{n.bonus-=1,n.loadGameScore(),n.bonus<0&&(clearInterval(n.interval),n.bonus=0,n.loadGameScore())}),100)}static loadGameScore(){let e=document.getElementById("score"),s=document.getElementById("best"),t=document.getElementById("level"),l=document.getElementById("lives"),i=document.getElementById("blocks"),o=document.getElementById("bonus");l.innerHTML="";let r=document.createElement("img");r.src=`../public/grafiki/numbers/${this.livesNuber}.png`,r.style.width="20px",r.style.height="20px",l.appendChild(r),t.innerHTML="";let a=document.createElement("img");a.src=`../public/grafiki/numbers/${this.levelNum}.png`,a.style.width="20px",a.style.height="20px",t.appendChild(a);let d=n.blocksArr.filter((e=>"N"==e.type.charAt(1))).length.toString();i.innerHTML="";for(let e=0;e<d.length;e++){let s=document.createElement("img");s.src=`../public/grafiki/numbers/${d[e]}.png`,s.style.width="20px",s.style.height="20px",i.appendChild(s)}o.innerHTML="";for(let e=0;e<n.bonus.toString().length;e++){let s=document.createElement("img");s.src=`../public/grafiki/numbers/${n.bonus.toString()[e]}.png`,s.style.width="20px",s.style.height="20px",o.appendChild(s)}e.innerHTML="";for(let s=0;s<n.score.toString().length;s++){let t=document.createElement("img");t.src=`../public/grafiki/numbers/${n.score.toString()[s]}.png`,t.style.width="20px",t.style.height="20px",e.appendChild(t)}s.innerHTML="";for(let e=0;e<n.best.toString().length;e++){let t=document.createElement("img");t.src=`../public/grafiki/numbers/${n.best.toString()[e]}.png`,t.style.width="20px",t.style.height="20px",s.appendChild(t)}}renderGraphics(){let e=document.getElementById("forPics");null==e||(e.innerHTML=""),Object.keys(o.Levels.dictionary).forEach(((s,t)=>{let l;document.getElementById(o.Levels.dictionary[s])||(l=document.createElement("img"),l.src="../public/grafiki/"+o.Levels.dictionary[s],l.id=o.Levels.dictionary[s],l.style.display="none",e.appendChild(l)),t+1==Object.keys(o.Levels.dictionary).length&&(l.onload=()=>this.create())}))}create(){const e=document.getElementById("gameBoard"),s=e.getContext("2d");e.height=550,e.width=750;let t=0,o=document.getElementById("backGroundImage");s.drawImage(o,0,0,750,550),new l.Ball(this.ballX,this.ballY,12,s,5,e,this.ballColor);for(let e=0;e<11;e++){let l=0;for(let o=0;o<15;o++){if("0"!=this.currentLevel[e][o]){let r=new i.Block(l,t,this.currentLevel[e][o],50,s,this.ballColor);n.blocksArr.push(r)}l+=50}t+=50}n.loadGameScore(),n.bonusInterval()}}s.GameBoard=n,n.blocksArr=[]},460:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.Levels=void 0;class t{}s.Levels=t,t.dictionary={pN:"blocks/purple/block.png",bN:"blocks/blue/block.png",cN:"blocks/cyan/block.png",gN:"blocks/green/block.png",rN:"blocks/red/block.png",yN:"blocks/yellow/block.png",pC:"blocks/purple/changeColorBlock.png",bC:"blocks/blue/changeColorBlock.png",cC:"blocks/cyan/changeColorBlock.png",gC:"blocks/green/changeColorBlock.png",rC:"blocks/red/changeColorBlock.png",yC:"blocks/yellow/changeColorBlock.png",pM:"blocks/purple/moveBlock.png",bM:"blocks/blue/moveBlock.png",cM:"blocks/cyan/moveBlock.png",gM:"blocks/green/moveBlock.png",rM:"blocks/red/moveBlock.png",yM:"blocks/yellow/moveBlock.png",dD:"blocks/deadthBlock.png",sB:"blocks/stonebrickBlock.png",smashBlueBall:"balls/smashed/blue.png",smashCyanBall:"balls/smashed/cyan.png",smashGreenBall:"balls/smashed/green.png",smashPurpleBall:"balls/smashed/purple.png",smashRedBall:"balls/smashed/red.png",smashYellowBall:"balls/smashed/yellow.png",fullBlueBall:"balls/full/blue.png",fullCyanBall:"balls/full/cyan.png",fullGreenBall:"balls/full/green.png",fullPurpleBall:"balls/full/purple.png",fullRedBall:"balls/full/red.png",fullYellowBall:"balls/full/yellow.png",explBlock1:"explosions/block/1.png",explBlock2:"explosions/block/2.png",explBlock3:"explosions/block/3.png",explBlock4:"explosions/block/4.png",explBlock5:"explosions/block/5.png",explBall1:"explosions/ball/1.png",explBall2:"explosions/ball/2.png",explBall3:"explosions/ball/3.png",explBall4:"explosions/ball/4.png",explBall5:"explosions/ball/5.png",number0:"numbers/0.png",number1:"numbers/1.png",number2:"numbers/2.png",number3:"numbers/3.png",number4:"numbers/4.png",number5:"numbers/5.png",number6:"numbers/6.png",number7:"numbers/7.png",number8:"numbers/8.png",number9:"numbers/9.png",best:"baners/best.png",blocks:"baners/blocks.png",bonus:"baners/bonus.png",level:"baners/level.png",levelStart:"baners/levelStart.png",lives:"baners/lives.png",score:"baners/score.png",titleBaner:"baners/titleBaner.png"},t.level1BallColor="balls/full/blue.png",t.level1Ball={x:17,y:17},t.level1=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","bN","0","0","0","0","0","0","0"],["0","0","0","0","0","0","bN","bN","bN","0","0","0","0","0","0"],["0","0","0","0","0","pN","pN","pN","pN","pN","0","0","0","0","0"],["0","0","0","0","pN","pN","pN","pN","pN","pN","pC","0","0","0","0"],["0","0","0","dD","dD","dD","dD","dD","dD","dD","dD","dD","0","0","0"],["0","0","0","0","pN","pN","pN","pN","pN","pN","pN","0","0","0","0"],["0","0","0","0","0","pN","pN","pN","pN","pN","0","0","0","0","0"],["0","0","0","0","0","0","bN","bN","bN","0","0","0","0","0","0"],["0","0","0","0","0","0","0","bN","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]],t.levelEmpty=[["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","bN","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]],t.level2BallColor="balls/full/blue.png",t.level2Ball={x:17,y:17},t.level2=[["0","0","0","0","0","0","0","0","0","0","0","0","0","rM","0"],["0","pC","rN","rN","rN","rN","rN","rN","rN","rN","rN","rN","rN","rN","0"],["0","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","pM","0"],["0","bC","pN","pN","pN","pN","pN","pN","pN","pN","pN","pN","pN","pN","0"],["0","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","sB","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","rC","bN","bN","bN","bN","bN","bN","bN","bN","bN","bN","bN","bN","0"],["0","sB","sB","dD","sB","sB","dD","sB","sB","dD","dD","dD","sB","sB","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]],t.level3BallColor="balls/full/green.png",t.level3Ball={x:630,y:380},t.level3=[["sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB"],["0","gM","gN","gM","gN","gM","gN","gM","gN","gM","gN","gM","gN","gM","0"],["sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB"],["0","gM","0","gM","0","gM","0","gM","0","gM","0","gM","0","gM","0"],["sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB"],["0","gM","0","gM","0","gM","0","gM","0","gM","0","gM","0","gM","0"],["sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB"],["0","gM","0","gM","0","gM","0","gM","0","gM","0","gM","0","gM","0"],["sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB"],["0","gM","gN","gM","gN","gM","gN","gM","gN","gM","gN","gM","gN","gM","0"],["sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB","0","sB"]]},941:(e,s,t)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.Menu=void 0;const l=t(460),i=t(132);class o{constructor(){o.currGame=new i.GameBoard(l.Levels.level1,l.Levels.level1Ball.x,l.Levels.level1Ball.y,1,2,0,0,700,l.Levels.level1BallColor)}}s.Menu=o,o.makeAgain=(e,s,t,n)=>{let r=s;o.currGame=new i.GameBoard(l.Levels[`level${r}`],l.Levels[`level${r}Ball`].x,l.Levels[`level${r}Ball`].y,r,e,n,t,700,l.Levels[`level${r}BallColor`])}}},s={};new(function t(l){var i=s[l];if(void 0!==i)return i.exports;var o=s[l]={exports:{}};return e[l].call(o.exports,o,o.exports,t),o.exports}(941).Menu)})();