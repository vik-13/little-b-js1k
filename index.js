// Little B

r=Math.random;

// Initial events and set pressed key;
k=9;onkeydown=e=>k=e.which%32;onkeyup=e=>(k=e.which%32==k?9:k);

// Array, which is used as left, up, right, down and current coords for calculating possible movements and collisions;
s=[-1,-25,1,25,0];

// Initialize some default variables and create initial map state;
j=[];h=26;l=z=0;v=1;
for(i=0;i<325;i++){
	x=i%25;y=~~(i/25);
	j.push(
		// Keep left-top three coords always empty. One for player and two to be sure that player won't be blocked;
		(i==27||i==51||i==h)?0:
			// Add static walls;
			!(y%2)&&!(x%2)||!y||y==12||!x||x==24?1:
				// With possibilities in 40% add bricks;
				r()<.4?4:
					// With possibilities in 10% add monsters;
					r()<.1?3:0
	)
}

// Main render function, as arguments it receives base-36 string, coords and boolean value if block is inverse or not;
o=(e,[x,y],l)=>{
	for(i=0;i<49;i++)
		(!i&&l||i&&(+parseInt(e,36).toString(2)[i]^l))&&c.fillRect(x+(i%7),y+~~(i/7),1,1)
};

// When you die or win it just cleans up middle 3 lines in map for showing final message;
f=m=>{for(i=125;i<200;i++)j[i]=0;h=-1;z=m};

// Scale the map according to canvas size;
c.scale(t=Math.min(a.width/175,a.height/91),t);

// Main cycle loop, which is called every 99ms;
setInterval(()=>{

	// Checks if space is pressed, if you can put the bomb then put the bomb;
	!k&&v&&!j[h]&&(j[h]=35,v--);

	// Checks what key you have pressed and make next your step;
	g=h+s[k-5]||h,h=!j[g]||j[g]==2&&(j[g]=0,++v)?g:h;

	//Initialize variables for counting monsters and keep their movements;
	d=[];m=0;

	// Clear whole map;
	c.clearRect(0,0,175,91);

	// Go through whole map;
	j.map((u,i)=>{

		// Clean up bomb explosion;
		u==6&&(j[i]=0);

		// Update monsters positions;
		u==3&&(++m)&&!(l%2)&&(g=s[~~(r()*4)],!j[i+g]&&(d.push([i,i+g])));

		// Update bombs ticks;
		u>9&&(--j[i]);

		// Release Bombs;
		u==9&&++v&&s.map(n=>(q=j[i+n],j[i+n]=q==1?1:q==4&&r()<.2?2:q>9?9:6,i+n==h&&f(1)));

		// Render everything: 0 - empty, 1 - wall, 2 - bomb; 3 - monster; 4 - bricks, 5 - main character; 6 - bomb explosion;
		o(['','','31887TR7RW','5E4I8C3K74','2S18HVN1KA','406NVLGBH0','368ZVO5G78'][i==h?5:u>8?2:u],[7*(i%25),7*~~(i/25)],u==1||u>8&&!(l%7))
	});

	// Release monster's movements;
	d.map(u=>(!j[u[1]]&&(j[u[1]]=3,j[u[0]]=0),u[1]==h&&f(1)));

	// If there are no monsters you win;
	!m&&f(2);

	// Show the message if the game is end;
	z&&(c.fillText(z-1?'Win':'Lose',80,49));

	// Update cycle counter;
	l++
},99)
