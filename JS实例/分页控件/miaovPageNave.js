function page(opt){
				if(!opt.id){return false};
				
				var obj = document.getElementById(opt.id);
				var nowNum = opt.nowNum || 1;
				var allNum = opt.allNum || 5;
				var callBack = opt.callBack || function(){};
				
				if(nowNum >=4 && allNum >=6){ //首页
					var oA = document.createElement('a');
					oA.className = 'home';
					oA.href = '#1';
					oA.innerHTML = '首页';
					obj.appendChild(oA)
				}
				
				if(nowNum >=2){ //上一页
					var oA = document.createElement('a');
					oA.href = '#' +(nowNum -1);
					oA.className = 'next';
					oA.innerHTML = '上一页';
					obj.appendChild(oA)
				}
				
				
				if(allNum <= 5){
					for (var i=1; i<=allNum; i++) {
						var oA = document.createElement('a');
						oA.href = "#" +i;
						if( nowNum == i){
							oA.className = 'active';
						}else{
							oA.className = '';
						}
						oA.innerHTML = i ;
						obj.appendChild(oA)
					}
				}else {
					for (var i=1; i<=5; i++) {
						var oA = document.createElement('a');
						if(nowNum ==1 || nowNum == 2 ){
							oA.href = "#" + i;
							if(nowNum == i){
								oA.className = 'active';
							
							}else{
								oA.className = '';
							}
							
							oA.innerHTML = i;
							obj.appendChild(oA)
						}
						else if( (allNum -nowNum) ==0 ||  (allNum -nowNum) ==1){
							oA.href = "#" + (allNum -5 + i);
							
							if((allNum -nowNum) == 0 && i==5 ){
//								oA.innerHTML = (allNum -5 +i);
								oA.className = 'active';
								
							}else if((allNum -nowNum) ==1 &&  i==4) {
//								oA.innerHTML = (allNum -5 + i);
								oA.className = 'active';
							}else {
								oA.className = '';
//								oA.innerHTML = '[' + (allNum -5 + i) + ']' ;
							}
							oA.innerHTML = (allNum -5 +i);
							obj.appendChild(oA)
						}
						else{
							oA.href = '#' + (nowNum -3 + i);
							
							if(i==3){
//								oA.innerHTML = (nowNum -3 + i);
								oA.className = 'active';
							}
							else{
								oA.className = '';
//								oA.innerHTML = '[' + (nowNum -3 + i) + ']' ;
							}
							oA.innerHTML = (nowNum -3 + i);
							obj.appendChild(oA)
						}
							
					}
				}
				
				
				if((allNum - nowNum) >=1){ //下一页
					var oA = document.createElement('a');
					oA.href = '#' +(nowNum +1);

					oA.innerHTML = '下一页';
					oA.className = 'next';
					obj.appendChild(oA)
				}
				
				
				if((allNum - nowNum) >=3 && allNum >=6){ //尾页
					var oA = document.createElement('a');
					oA.href = '#' + allNum;
					oA.className = 'last';
					oA.innerHTML = '尾页';
					obj.appendChild(oA)
				}
				
				callBack(nowNum,allNum);
				
				var aA = obj.getElementsByTagName('a');
			
				for (var i=0; i<aA.length; i++) {
					aA[i].index =i;
					aA[i].onclick = function(){
						var nowNum = parseInt(this.getAttribute('href').substring(1));
						
						obj.innerHTML='';
						page({
							id:opt.id,
							nowNum:nowNum,
							allNum:allNum,
							callBack:callBack
						});
						
						return false;
					}
				}
				};
			
			
			
			};