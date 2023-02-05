function Snowflakes(a){ //функція конструктор об'єкта сніжинка
			this.anime=function(ob){
				for(var i=0; i<ob._el.length; i++){
					if(!ob._el[i])continue;
					ob._el[i].x+=ob.param.speed+Math.random();
					ob._el[i].style.top=ob._el[i].x+'px';
					if(ob.param.drif)ob._el[i].style.left=(parseInt(ob._el[i].style.left)+(Math.random()>0.5?1:-1))+'px';
					if(ob._el[i].x>ob.height){
						if(ob.param.loop) ob._el[i].x=0;
						else{
							document.body.removeChild(ob._el[i]);
							ob._el.splice(i,1);
						}
					}	
				}
				if(ob._el.length>0)setTimeout(ob.anime, 50, ob);
			}
			this.param={count:100, color: 'blue', size: 14, loop: false, drif: false, speed:1};
			this.width=document.body.clientWidth;
			this.height=document.body.clientHeight;
			for(b in a)
			if(b in this.param) this.param[b]=a[b];
			this._el=[];
			for(var i=0; i<this.param.count; i++){
				this._el[i]=document.createElement('div');
				this._el[i].x=0-(Math.random()*this.height);
				this._el[i].innerText='*';
				this._el[i].style.position='fixed';
				this._el[i].style.top=this._el[i].x+'px';
				this._el[i].style.left=parseInt(Math.random() * this.width)+'px';
				this._el[i].style.color=this.param.color;
				this._el[i].style.fontSize=this.param.size;
				document.body.appendChild(this._el[i]);
			}
			this.anime(this);
		}

		var sn=new Snowflakes( {count:100, color:'blue', size: 18} );