v=c.fillRect.bind(c);
r=Math.random;
k=9;onkeydown=e=>k=e.which%32;onkeyup=e=>k=9;
s=[-1,-25,1,25,0];

j=[];
h=26;
p=0;
for(i=0;i<325;i++){
	x=i%25;y=~~(i/25);
	j.push((i==27||i==51||i==h)?0:!(y%2)&&!(x%2)||!y||y==12||!x||x==24?1:r()<.5?4:r()<.05?3:0);
}

o=(e,{x,y})=>{for(i=9;i<56;i++){+parseInt(e,36).toString(2)[i-8]&&v(x+(i%8),y+~~(i/8),1,1)}};

t=i=>{g=s[~~(r()*4)];!j[i+g]&&(j[i+g]=3)&&(j[i]=0)};

c.scale(5, 5);
setInterval(()=>{
	!k&&!p&&(j[h]=2)&&(p=30);
	g=h+s[k-5]||h;h=!j[g]?g:h;
	p&&(p--);

	j.forEach((u,i)=>{
		u==3&&t(i);
		u==2&&p==1&&s.forEach(n=>j[i+n]=j[i+n]-1?0:1);
	});
	c.clearRect(0,0,1e3,520);
	j.forEach((u,i)=>{
		x=8*(i%25);y=8*~~(i/25);
		i==h&&(o('1nbzezc29q',{x,y}));
		u==2&&(o('1JDR1CTOOS',{x,y}));
		u==3&&(o('21DFB5XNAI',{x,y}));
		u==4&&(o('1UDWIFB61H',{x,y}));
		u==1&&v(x,y,8,8);
	});
},99)

//829

// 1 - wall;
// 2 - bomb;
// 3 - monster;
// 4 - brick;


// lo=(a,b)=>{for(ii=0;ii<a;ii++)b(ii);};


// 04,0a,18,24,42,4a,24,18
// 8e,19,24,4a,42,3c
// 8e19244a423c

// Bomb
// 10001110
// 00011001
// 00100100
// 01001010
// 01000010
// 00111100


// Character
// 98,3c,42,a5,81,7e

// 10011000
// 00111100
// 01000010
// 10100101
// 10000001
// 01111110

// 00,81,db,24,24,db,81,00

// 10000000
// 10000001
// 11011011
// 00100100
// 00100100
// 11011011
// 10000001
// 00000000


// Monster

// bc,42,55,41,55,2a
// bc425541552a

// 10111100
// 01000010
// 01010101
// 01000001
// 01010101
// 00101010

// Bricks
// aa,55,aa,55,aa,55
// aa55aa55aa55
// 1UDXHXVWB9

// 10101010
// 01010101
// 10101010
// 01010101
// 10101010
// 01010101

// Bricks 2
// aa,55,2a,55,2a,55
// aa552a552a55
// 1UDWIFB61H

// 10101010
// 01010101
// 00101010
// 01010101
// 00101010
// 01010101

// 00000000
// 00000000
// 00000000
// 00000000
// 00000000
// 00000000
// 00000000
// 00000000

// a - -----;
// b - -----
// c - -----;
// d - render bricks;
// e - player, bomb, monster code string;
// f - Math.floor;
// g - player coords next
// h - player coords;
// i - Iterations
// j - main map;
// k - Key
// l -
// m - aka y;
// n - aka x;
// o - player, bomb, monster render function;
// p - Bomb
// q - [x, y] of global position
// r -
// s - Movements array
// t - update monsters positions;
// u - pressed key;
// v - c.fillRect;
// w - Monsters
// x - coords
// y - coords
// z - boom;


// Draw player, monster, bomb
// o=(e,{x,y})=>{
// 	for(i=0;i<16;i++){
// 		s=parseInt(e[i],16);
// 		n=x+(i%2)*4;
// 		m=y+~~(i/2);
// 		(s>>3)%2&&v(n,m,1,1);
// 		(s>>2)%2&&v(n+1,m,1,1);
// 		(s>>1)%2&&v(n+2,m,1,1);
// 		s%2&&v(n+3,m,1,1);
// 	}
// };

// Clean after bomb detonated;
// z=i=>{
// 	j[i]=0;
// 	j[i-1]=j[i-1]-1?0:1;
// 	j[i+1]=j[i+1]-1?0:1;
// 	j[i+25]=j[i+25]-1?0:1;
// 	j[i-25]=j[i-25]-1?0:1;
// };

// Monster movements
// t=i=>{
// 	g=~~(Math.random()*4);
// 	!g&&!j[i-1]&&(j[i-1]=3)&&(j[i]=0);
// 	g==1&&!j[i+1]&&(j[i+1]=3)&&(j[i]=0);
// 	g==2&&!j[i-25]&&(j[i-25]=3)&&(j[i]=0);
// 	g==3&&!j[i+25]&&(j[i+25]=3)&&(j[i]=0);
// };


// d=q=>{for(i=0;i<64;i++){(i%2)&&(~~(i/8)%2)&&v(q.x+i%8,q.y+~~(i/8),1,1);}};
