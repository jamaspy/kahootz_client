(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/sport.4ec07cf3.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/television.110c2fd8.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/vehicle.973793ae.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/videogame.181ef81b.jpg"},105:function(e,t,a){e.exports=a(261)},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},121:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},133:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(81),r=a.n(n),i=(a(110),a(0)),s=a.n(i),c=a(7),o=a(22),l=a(39),u=a(82),m=a(2),d=a(3),p=a(5),h=a(4),g=a(8),f=a(6),v=(a(111),a(112),function(e){return s.a.createElement("button",{onClick:e.onClick,className:e.type},e.text)}),b=(a(113),function(e){return s.a.createElement("input",{onChange:function(t){e.onChange&&e.onChange(t)},className:e.class,value:e.value,type:e.type||"text",placeholder:e.placeholder})}),E=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={pin:""},e._handlePinInput=e._handlePinInput.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handlePinInput",value:function(e){this.setState({pin:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"joingame"},s.a.createElement("form",{className:"joingame__form"},s.a.createElement("h1",null,"Join Game"),s.a.createElement(b,{onChange:this._handlePinInput,type:"text",class:"input",value:this.state.pin}),s.a.createElement(v,{text:"Join Game",onClick:function(t){t.preventDefault(),e.props.click(e.state.pin)},type:"button"}),s.a.createElement(c.b,{className:"small",to:"/login"},"Login To Create Quiz")))}}]),t}(i.Component),_=(a(121),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={nickname:""},e._handleNicknameInput=e._handleNicknameInput.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleNicknameInput",value:function(e){this.setState({nickname:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"nickname"},s.a.createElement("form",{className:"nickname__form"},s.a.createElement("h1",null,"Enter Your Nickname"),s.a.createElement(b,{type:"text",class:"input",onChange:this._handleNicknameInput,value:this.state.nickname}),s.a.createElement(o.b,{render:function(t){var a=t.history;return s.a.createElement(v,{type:"button",onClick:function(t){t.preventDefault(),e.props.submitNickname(e.state.nickname),a.push({pathname:"/waiting-room",state:{gamePin:e.props.gamePin,nickname:{nickname:e.state.nickname,points:0,answer:"",entered:!1,score:0,correct_answers:0,streak:0,last_correct:!1},isAdmin:!1}})},text:"Start Game"})}}))))}}]),t}(i.Component)),y=a(51),k=a.n(y);a(122);k.a.initializeApp({apiKey:"AIzaSyA7Edvrc0vHwlYmsP-68LrlD0Kcl6B87oY",authDomain:"kahootz-game.firebaseio.com",databaseURL:"https://kahootz-game.firebaseio.com"});var j=k.a.database().ref(),w=j.child("games"),O=(j.push().key,function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={pin:0,nickname:"",players:[]},e._submitPin=e._submitPin.bind(Object(g.a)(e)),e._submitNickname=e._submitNickname.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_submitPin",value:function(e){var t=this;j.child("games/".concat(e)).on("value",function(a){null!==a.val()&&t.setState({pin:e,players:a.val().players})})}},{key:"_submitNickname",value:function(e){var t={nickname:e,points:0,answer:"",entered:!1,score:0,correct_answers:0,streak:0,last_correct:!1};this.setState({nickname:t}),j.child("games/".concat(this.state.pin)).update({players:Object(u.a)({},this.state.players,Object(l.a)({},e,t))})}},{key:"render",value:function(){var e=this,t="";return t=this.state.pin?s.a.createElement(_,{submitNickname:function(t){e._submitNickname(t)},gamePin:this.state.pin}):s.a.createElement(E,{click:function(t){e._submitPin(t)}}),s.a.createElement(s.a.Fragment,null,t)}}]),t}(i.Component)),N=(a(124),a(52)),S=a.n(N),C=a(18),P=a.n(C),x=(a(126),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderPlayer",value:function(){return Object.keys(this.props.players||[]).map(function(e){return s.a.createElement("li",{key:e},e)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"playerArea"},s.a.createElement("ul",null,this.renderPlayer()))}}]),t}(i.Component)),I=a(10),A=(a(127),function(e){var t=Object(i.useState)(0),a=Object(I.a)(t,2),n=a[0],r=a[1];return Object(i.useEffect)(function(){r(e.quiz_id)}),s.a.createElement("div",{className:"quizcode"},s.a.createElement("h1",null,"QuizCode: ",n," "))}),q=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={next_question_id:"",next_question:0,questions:"",games:[],activeGame:"",activePin:"",players:[],redirect:!1},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){void 0===this.props.location.state&&this.setState({redirect:!0})}},{key:"componentDidMount",value:function(){var e=this,t=function(t){w.child("".concat(t)).on("value",function(t){e.setState({players:t.val().players,gameStart:t.val().gameStart})})};if(this.props.location.state.isAdmin){var a=[];this.props.location.state.questions.map(function(e){var t=P.a.shuffle(e.answers);e.answers=t,a.push(e)});var n=Math.floor(1e5*Math.random());this.setState({gamePin:n}),w.child("".concat(n)).set({questions:a,gameStart:!1},t(n))}else t(this.props.location.state.gamePin)}},{key:"_handleStartGameClick",value:function(){w.child("".concat(this.state.gamePin)).update({gameStart:!0})}},{key:"renderStartGameLink",value:function(){var e=this,t=this.state;t.questions,t.next_question,t.next_question_id;return s.a.createElement(c.b,{className:"startgame_link",onClick:function(){return e._handleStartGameClick()},to:{pathname:"/game/".concat(this.state.gamePin),state:{gamePin:this.state.gamePin,isAdmin:this.props.location.state.isAdmin}}},"Start Game")}},{key:"_setActiveGame",value:function(e){var t=this.state.games.find(function(t){return t.title===e});this.setState({activeGame:t.id,activePin:e})}},{key:"renderWaitingRoom",value:function(){var e=this.props.location.state.isAdmin,t=e?this.state.gamePin:this.props.location.state.gamePin;return s.a.createElement("div",{className:"display__waitingroom"},s.a.createElement("div",{className:"waitroom__header"},s.a.createElement("h1",null,"Waiting For Players To Join")),s.a.createElement("div",{className:"display__quizcode"},s.a.createElement(A,{quiz_id:t})),e?this.renderStartGameLink():s.a.createElement(s.a.Fragment,null),s.a.createElement("div",{className:"display__playersarea"},s.a.createElement(x,{players:this.state.players})),s.a.createElement(S.a,{url:"./music.mp3",playStatus:S.a.status.PLAYING,playFromPosition:300,onLoading:this.handleSongLoading,onPlaying:this.handleSongPlaying,onFinishedPlaying:this.handleSongFinishedPlaying}))}},{key:"render",value:function(){var e=this.state,t=e.redirect,a=(e.next_question,e.isAdmin,e.next_question_id,e.questions,e.gameStart);return t?s.a.createElement(o.a,{to:"/"}):!this.props.location.state.isAdmin&&a?s.a.createElement(o.a,{to:{pathname:"/game/".concat(this.props.location.state.gamePin),state:{gamePin:this.props.location.state.gamePin,nickname:this.props.location.state.nickname,isAdmin:this.props.location.state.isAdmin}}}):this.renderWaitingRoom()}}]),t}(i.Component),z=(a(128),a(129),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r))))._startCountdown=function(){a.myInterval=setInterval(function(){a.props.adjustCount(a.props.count-1),0===a.props.count&&clearInterval(a.myInterval)},1e3)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderTimer",value:function(){return 0===this.props.count?"":s.a.createElement("p",null,this.props.count)}},{key:"renderSkipLink",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"skip-link",onClick:this.props.skip_question},"SKIP"))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,localStorage.getItem("jwt")?this.renderSkipLink():"",s.a.createElement("div",{className:"timer"},s.a.createElement("div",{className:"timer__face"},s.a.createElement("div",{className:"timer__numbers"},this.renderTimer()))))}},{key:"componentDidMount",value:function(){this._startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}}]),t}(i.Component)),L=(a(130),function(){var e=document.createElement("div");return function(t){return t&&"string"===typeof t&&(t=(t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),e.innerHTML=t,t=e.textContent,e.textContent=""),t}}()),F=function(e){var t=e.question,a=L(t);return s.a.createElement("div",{className:"question"},s.a.createElement("p",null,a))},D=a(19),T=a(23),G=a(30),M=(a(133),function(){var e=document.createElement("div");return function(t){return t&&"string"===typeof t&&(t=(t=t.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim,"")).replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim,""),e.innerHTML=t,t=e.textContent,e.textContent=""),t}}()),Q=function(e){var t=["a","b","c","d"],a=e.answers.map(function(a,n){var r=e.isScoreboard&&a.correct?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null," "),s.a.createElement(T.a,{icon:"check-circle"})):s.a.createElement(s.a.Fragment,null),i=M(a.answer);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"answerbutton answerbutton__answertext",onClick:function(){return e.getAnswer(t[n],a.correct)}},s.a.createElement("div",{className:"answerbutton__answer",key:t[n],value:t[n]},i,r)))});return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"display"},a))},W=a(85),B=(a(225),a(226),function(e){var t=e.answers,a={labels:["","","",""],datasets:[{label:!1,backgroundColor:["#24c6dc","#edde5d","#71b280","#ed4264"],borderColor:"white",data:[t.a,t.b,t.c,t.d]}]};return s.a.createElement("div",{className:"chart-parent"},s.a.createElement(W.a,{data:a,options:{responsive:!1,maintainAspectRatio:!1,legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1}}]}},height:300,width:550}))}),U=a(20),H=a.n(U),J=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={answers:{}},e.getPlayerData=e.getPlayerData.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getPlayerData()}},{key:"getPlayerData",value:function(){var e=this,t=this.props.game_pin;w.child(t).once("value",function(t){var a=P.a.pluck(t.val().players,"answer"),n=P.a.countBy(a,function(e){return e});e.setState({answers:n})})}},{key:"render",value:function(){var e=this.props.game_pin;w.child(e).child("go_to_scoreboard").set(!0);var t=this.props,a=t.question,n=t.answers,r=(t.question_number,t.next_question_nav);return s.a.createElement(s.a.Fragment,null,s.a.createElement(F,{question:a}),localStorage.getItem("jwt")?s.a.createElement("button",{onClick:r,className:"skip-link"},"NEXT"):"",s.a.createElement(B,{answers:this.state.answers}),s.a.createElement(Q,{isScoreboard:!0,getAnswer:this.props.getAnswer,answers:n}))}}]),t}(i.Component);a(245);D.b.add(G.a);var R=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"correctanswer "},s.a.createElement("div",{className:"correctanswer__content rotate-scale-up"},s.a.createElement("p",{className:"correctanswer__heading"},"CORRECT!"),s.a.createElement(T.a,{className:"correctanswer__icon",icon:"check-circle"}),s.a.createElement("p",{className:"correctanswer__body"},"Your Score Is: ",this.props.score)))}}]),t}(i.Component);a(246);D.b.add(G.b);var Y=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wronganswer"},s.a.createElement("div",{className:"wronganswer__content"},s.a.createElement("p",{className:"wronganswer__heading"},"Wrong!"),s.a.createElement(T.a,{className:"wronganswer__icon",icon:"times-circle"}),s.a.createElement("p",{className:"wronganswer__body"},"Your Score Is: ",this.props.score)))}}]),t}(i.Component),K=(a(247),function(e){var t=Object(i.useState)([]),a=Object(I.a)(t,2),n=a[0],r=a[1];Object(i.useEffect)(function(){w.child("".concat(e.game_pin,"/players")).once("value",function(e){r(Object.values(e.val()).sort(function(e,t){return e.score-t.score}).reverse().slice(0,5))})},[]);return console.log(n.length),s.a.createElement("div",{className:"display"},s.a.createElement("div",{className:"leaderboard"},s.a.createElement("div",{className:"leaderboard__content"},s.a.createElement("div",{className:"leaderboard__content--header"},s.a.createElement("p",null," Leaderboard ")),n.length>0?n.map(function(e){return s.a.createElement("h1",null,e.nickname,": ",e.score," points")}):s.a.createElement("div",{className:"leaderboard__content--player"})),e.admin?s.a.createElement("button",{className:"next",onClick:e.next_question_nav},"NEXT"):s.a.createElement(s.a.Fragment,null)))}),V=function(e){var t=Object(i.useState)(20),a=Object(I.a)(t,2),n=a[0],r=a[1],c=Object(i.useState)(1),l=Object(I.a)(c,2),u=l[0],m=l[1],d=Object(i.useState)(!1),p=Object(I.a)(d,2),h=p[0],g=p[1],f=Object(i.useState)(0),v=Object(I.a)(f,2),b=v[0],E=v[1],_=Object(i.useState)(!1),y=Object(I.a)(_,2),k=y[0],j=y[1],O=Object(i.useState)(0),N=Object(I.a)(O,2),S=(N[0],N[1],Object(i.useState)(0)),C=Object(I.a)(S,2),x=C[0],A=C[1],q=Object(i.useState)(!1),L=Object(I.a)(q,2),D=L[0],T=L[1],G=e.location.state.gamePin,M=w.child(G),W=[];M.once("value",function(e){W=e.val().questions}),M.on("value",function(e){!0===e.val().go_to_scoreboard&&(r(0),M.child("go_to_scoreboard").set(!1)),!0===e.val().nextQuestion&&(B(),j(!1),r(20),M.child("nextQuestion").set(!1)),!0===e.val().gameEnd&&(g(!0),M.child("gameEnd").set(!1)),!0===e.val().goToLeaderboard&&(T(!0),M.child("goToLeaderboard").set(!1))});var B=P.a.once(function(){m(u+1),T(!1)}),U=function(t,a){e.location.state.isAdmin||0===n||M.child("players/".concat(e.location.state.nickname.nickname)).once("value",function(r){r.val();var i=r.val().correct_answers,s=r.val().last_correct,c=r.val().points,o=r.val().score,l=r.val().streak;a?(E(!0),i=Number(i)+1,s=!0,c=800+n/20*400,o=Number(o)+c,A(o),l=Number(l)+1):(l=0,s=!1,E(!1)),M.child("players/".concat(e.location.state.nickname.nickname)).update({answer:t,correct_answers:i,entered:!0,last_correct:s,points:c,score:o,streak:l}),j(!0)})};if(!e.location.state)return s.a.createElement(o.a,{to:"/"});return n>0&&!k?s.a.createElement("div",{className:"display_game"},s.a.createElement(F,{question:W[u-1].content}),s.a.createElement(z,{skip_question:function(){r(0),M.child("go_to_scoreboard").set(!0)},state:e.location.state,adjustCount:r,count:n}),s.a.createElement("h1",{className:"question_count"},"Question ",u," of 10"),s.a.createElement(Q,{getAnswer:U,nickname:e.location.state.nickname,answers:W[u-1].answers})):n>0&&k&&b?s.a.createElement(R,{resetTimer:r,resetAnswer:j,score:x,gamesPin:G,count:n}):n>0&&k&&!b?s.a.createElement(Y,{resetTimer:r,resetAnswer:j,score:x,gamesPin:G}):!0===h?s.a.createElement(o.a,{to:{pathname:"/post-game",state:{pin:G}}}):0===n&&!1===D?s.a.createElement(s.a.Fragment,null,s.a.createElement(J,{question_id:e.location.next_question_id,question:W[u-1].content,answers:W[u-1].answers,question_number:u,next_question_nav:function(){M.child("goToLeaderboard").set(!0)},game_pin:e.location.state.gamePin,getAnswer:U})):0===n&&!0===D?s.a.createElement(s.a.Fragment,null,s.a.createElement(K,{game_pin:e.location.state.gamePin,next_question_nav:function(){10===u?(M.child("gameEnd").set(!0),g(!0)):M.child("nextQuestion").set(!0)},admin:e.location.state.isAdmin})):void 0},X=(a(248),a(249),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={players:[]},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.child("".concat(this.props.gamePin,"/players")).once("value",function(t){e.setState({players:Object.values(t.val()).sort(function(e,t){return e.score-t.score}).reverse()})})}},{key:"renderPodium",value:function(){var e=this.state.players;return s.a.createElement("div",{className:"display"},s.a.createElement("div",{className:"podium"},s.a.createElement("div",{className:"podium__second"},s.a.createElement("div",{className:"podium__second--player"},e[1].nickname,s.a.createElement("div",{className:"podium__second--score"},e[1].score)),s.a.createElement("div",{className:"podium__second--place"},s.a.createElement("p",null,"2nd"))),s.a.createElement("div",{className:"podium__first"},s.a.createElement("div",{className:"podium__first--player"},e[0].nickname,s.a.createElement("div",{className:"podium__first--score"},e[0].score)),s.a.createElement("div",{className:"podium__first--place"},s.a.createElement("p",null,"1st"))),s.a.createElement("div",{className:"podium__third"},s.a.createElement("div",{className:"podium__third--player"},e[2].nickname,s.a.createElement("div",{className:"podium__third--score"},e[2].score)),s.a.createElement("div",{className:"podium__third--place"},s.a.createElement("p",null,"3rd")))))}},{key:"render",value:function(){return this.state.players.length>0?this.renderPodium():s.a.createElement(s.a.Fragment,null)}}]),t}(i.Component)),Z=function(e){var t=e.location.state.pin,a=w.child(t);return a.once("value",function(e){var t=e.val().players;t=Object.values(t);var a=P.a.sortBy(t,"score");a[0],a[1],a[2]}),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"podium__header"},s.a.createElement("h1",null,"And The Winner Is..."),s.a.createElement(c.b,{className:"playagain_button",to:"/"},"Play Another Game")),s.a.createElement(X,{gamePin:t}))},$=(a(250),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={email:"",password:"",login:!1,error:!1},e._handleEmailInput=e._handleEmailInput.bind(Object(g.a)(e)),e._handlePasswordInput=e._handlePasswordInput.bind(Object(g.a)(e)),e._handleLoginSubmit=e._handleLoginSubmit.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleEmailInput",value:function(e){this.setState({email:e.target.value})}},{key:"_handlePasswordInput",value:function(e){this.setState({password:e.target.value})}},{key:"_handleLoginSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n={auth:{email:a.email,password:a.password}};H.a.post("https://kahootz.herokuapp.com/quizzes/user_token",n).then(function(e){201===e.status&&(localStorage.setItem("jwt",e.data.jwt),t.setState({login:!0}))}).catch(function(e){return t.setState({error:!0})})}},{key:"render",value:function(){return!1===this.state.login&&!1===this.state.error?s.a.createElement("div",{className:"login"},s.a.createElement("form",{className:"login__form"},s.a.createElement("h1",null,"Login"),s.a.createElement(b,{type:"email",class:"input",placeholder:"Enter Email",value:this.state.email,onChange:this._handleEmailInput}),s.a.createElement(b,{type:"password",class:"input",placeholder:"Password",value:this.state.password,onChange:this._handlePasswordInput}),s.a.createElement(v,{type:"button",text:"Login",onClick:this._handleLoginSubmit}),s.a.createElement(c.b,{to:"/signup",className:"small"},"No Account? SignUp"))):!1===this.state.login&&!0===this.state.error?s.a.createElement("div",{className:"login"},s.a.createElement("form",{className:"login__form"},s.a.createElement("h1",null,"Login"),s.a.createElement("p",null," Something went wrong, try again "),s.a.createElement(b,{type:"email",class:"input",placeholder:"Enter Email",value:this.state.email,onChange:this._handleEmailInput}),s.a.createElement(b,{type:"password",class:"input",placeholder:"Password",value:this.state.password,onChange:this._handlePasswordInput}),s.a.createElement(v,{type:"button",text:"Login",onClick:this._handleLoginSubmit}),s.a.createElement(c.b,{to:"/signup",className:"small"},"No Account? SignUp"))):s.a.createElement(o.a,{to:"/dashboard"})}}]),t}(i.Component)),ee=(a(251),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={email:"",password:"",password_confirmation:"",login:!1,error:!1},e._handleEmailInput=e._handleEmailInput.bind(Object(g.a)(e)),e._handlePasswordInput=e._handlePasswordInput.bind(Object(g.a)(e)),e._handlePasswordAgainInput=e._handlePasswordAgainInput.bind(Object(g.a)(e)),e._handleSignupSubmit=e._handleSignupSubmit.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"_handleEmailInput",value:function(e){this.setState({email:e.target.value})}},{key:"_handlePasswordInput",value:function(e){this.setState({password:e.target.value})}},{key:"_handlePasswordAgainInput",value:function(e){this.setState({password_confirmation:e.target.value})}},{key:"_handleSignupSubmit",value:function(e){var t=this;e.preventDefault(),localStorage.setItem("jwt",void 0);var a=this.state,n=a.email,r=a.password,i=a.password_confirmation,s={email:n,password:r,password_confirmation:i};H.a.post("https://kahootz.herokuapp.com/users/create",s).then(function(e){console.log("succesfully created the user with ",e),H.a.post("https://kahootz.herokuapp.com/quizzes/user_token",{auth:{email:n,password:r}}).then(function(e){201===e.status&&(localStorage.setItem("jwt",e.data.jwt),t.setState({login:!0}))}).catch(function(e){t.setState({error:!0})})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.login;return!1===t&&!1===a?s.a.createElement("div",{className:"signup"},s.a.createElement("form",{className:"signup__form"},s.a.createElement("h1",null,"SignUp"),s.a.createElement(b,{type:"email",class:"input",placeholder:"Enter Email",value:this.state.email,onChange:this._handleEmailInput}),s.a.createElement(b,{type:"password",class:"input",placeholder:"Password",value:this.state.password,onChange:this._handlePasswordInput}),s.a.createElement(b,{type:"password",class:"input",placeholder:"Password Confirmation",value:this.state.password_confirmation,onChange:this._handlePasswordAgainInput}),s.a.createElement(v,{type:"button",text:"SignUp",onClick:this._handleSignupSubmit}),s.a.createElement(c.b,{to:"/login",className:"small"},"Already Have An Account? Login"))):!1===a&&!0===t?s.a.createElement("div",{className:"signup"},s.a.createElement("form",{className:"signup__form"},s.a.createElement("h1",null,"SignUp"),s.a.createElement("p",null,"Something went wrong, please try again."),s.a.createElement(b,{type:"email",class:"input",placeholder:"Enter Email",value:this.state.email,onChange:this._handleEmailInput}),s.a.createElement(b,{type:"password",class:"input",placeholder:"Password",value:this.state.password,onChange:this._handlePasswordInput}),s.a.createElement(b,{type:"password",class:"input",placeholder:"Password Confirmation",value:this.state.password_confirmation,onChange:this._handlePasswordAgainInput}),s.a.createElement(v,{type:"button",text:"SignUp",onClick:this._handleSignupSubmit}),s.a.createElement(c.b,{to:"/login",className:"small"},"Already Have An Account? Login"))):s.a.createElement(o.a,{to:"/dashboard"})}}]),t}(i.Component)),te=(a(252),a(253),a(87)),ae=a.n(te),ne=a(88),re=a.n(ne),ie=a(89),se=a.n(ie),ce=a(90),oe=a.n(ce),le=a(91),ue=a.n(le),me=a(92),de=a.n(me),pe=a(93),he=a.n(pe),ge=a(94),fe=a.n(ge),ve=a(95),be=a.n(ve),Ee=a(96),_e=a.n(Ee),ye=a(97),ke=a.n(ye),je=a(98),we=a.n(je),Oe=a(99),Ne=a.n(Oe),Se=a(100),Ce=a.n(Se),Pe=a(101),xe=a.n(Pe),Ie=a(102),Ae=a.n(Ie),qe=a(103),ze=a.n(qe),Le=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getImage",value:function(){switch(this.props.category){case"General Knowledge":return ae.a;case"Entertainment: Books":return se.a;case"Entertainment: Film":return he.a;case"Entertainment: Music":return ke.a;case"Entertainment: Television":return xe.a;case"Entertainment: Video Games":return ze.a;case"Entertainment: Board Games":return re.a;case"Science & Nature":return Ne.a;case"Science: Computers":return de.a;case"Mythology":return we.a;case"Sports":return Ce.a;case"Geography":return fe.a;case"History":return be.a;case"Celebrities":return ue.a;case"Vehicles":return Ae.a;case"Entertainment: Japanese Anime & Manga":return _e.a;case"Entertainment: Cartoon & Animations":return oe.a;default:console.log("Image NOT Found")}}},{key:"render",value:function(){var e=this.props;e.questions,e.onClick;return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card__header"},s.a.createElement("img",{className:"card__header--image",src:this.getImage(),alt:""})),s.a.createElement("div",{className:"card__body"},s.a.createElement("div",{className:"card__body--category"},s.a.createElement("h3",null,this.props.category)),s.a.createElement("div",{className:"card__body--difficulty"},s.a.createElement("h3",null,"Difficulty"),s.a.createElement("p",null,this.props.difficulty)),s.a.createElement("div",{className:"card__body--questions"},s.a.createElement("h3",null,"Number Of Question"),s.a.createElement("p",null,this.props.questions.length))))}}]),t}(i.Component),Fe=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={quizzes:[],redirect:!1},e.componentDidMount=e.componentDidMount.bind(Object(g.a)(e)),e._handleCardClick=e._handleCardClick.bind(Object(g.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}};H.a.get("https://kahootz.herokuapp.com/quizzes.json",t).then(function(t){e.setState({quizzes:t.data})})}},{key:"_handleCardClick",value:function(e){console.log("handle card click")}},{key:"renderCards",value:function(){return this.state.quizzes.map(function(e){return s.a.createElement(c.b,{to:{pathname:"/waiting-room",state:{questions:e.questions,isAdmin:!0}},key:e.id},s.a.createElement(Le,{key:e.id,category:e.category,difficulty:e.difficulty,questions:e.questions}))})}},{key:"render",value:function(){return localStorage.getItem("jwt")?s.a.createElement("div",{className:"displayQuizzes"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Select A Quiz To Play")),s.a.createElement("div",{className:"displayCards"},this.renderCards())):s.a.createElement(o.a,{to:"/"})}}]),t}(i.Component),De=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Select a Quiz"),s.a.createElement(c.b,{to:"/dashboard"},"Create"))},Te=a(104),Ge=s.a.createElement(Te.ActionCableProvider,{url:"ws://localhost:3000/cable"},s.a.createElement(c.a,null,s.a.createElement("div",null,s.a.createElement(o.d,null,s.a.createElement(o.b,{exact:!0,path:"/",component:O}),s.a.createElement(o.b,{exact:!0,path:"/waiting-room",render:function(e){return s.a.createElement(q,e)}}),s.a.createElement(o.b,{exact:!0,path:"/game/:id",render:function(e){return s.a.createElement(V,e)}}),s.a.createElement(o.b,{exact:!0,path:"/game/:id/scoreboard",render:function(e){return s.a.createElement(J,e)}}),s.a.createElement(o.b,{exact:!0,path:"/post-game",render:function(e){return s.a.createElement(Z,e)}}),s.a.createElement(o.b,{exact:!0,path:"/login",component:$}),s.a.createElement(o.b,{exact:!0,path:"/signup",component:ee}),s.a.createElement(o.b,{exact:!0,path:"/dashboard",render:function(e){return s.a.createElement(Fe,e)}}),s.a.createElement(o.b,{exact:!0,path:"/create-quiz",component:De}),s.a.createElement(o.b,{render:function(){return s.a.createElement(o.a,{to:"/"})}})))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a.p+"static/media/generalknowledge.e933a49a.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/boardgame.074e55f4.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/books.9789951c.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/cartoon.825a3a57.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/celebrity.9c6d41d8.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/computer.e8ae6f9b.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/film.825fb077.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/geography.7da4fc34.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/history.3e37782d.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/manga.6fe4f5b4.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/music.308f1b9f.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/myth.65c5f1ec.jpg"},99:function(e,t,a){e.exports=a.p+"static/media/nature.38cd0a3b.jpg"}},[[105,1,2]]]);
//# sourceMappingURL=main.3298f978.chunk.js.map