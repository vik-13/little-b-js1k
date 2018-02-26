// 1070
// 1017 - one line

// 1 - wall;
// 2 - bomb;
// 3 - monster;
// 4 - brick;
// 5 - character (only for rendering, does not exist on the map)


// lo=(a,b)=>{for(ii=0;ii<a;ii++)b(ii);};

// Bomb
// 1011100
// 0111110
// 1101011
// 1111111
// 1101011
// 0111110
// 0011100

// 1011100011111011010111111111110101101111100011100
// 406VYFBJMK

// --------------------------------

// Bomb
// 1000110
// 0001000
// 0011100
// 0111110
// 0110010
// 0110010
// 0011100

// 1000110000100000111000111110011001001100100011100
// 31887TR7RW

// --------------------------------

// Character

// 1000000
// 0011100
// 0100010
// 0101010
// 0100010
// 0111110
// 0010100

// 1100010001110001000100110110010001001111100010100
// 1000000001110001000100110110010001001111100010100
// 494GTA1250 || 2S4A18IPSK

// --------------------------------

// Character 2

// 1011100
// 0111110
// 0101010
// 0111110
// 0111110
// 0111110
// 0010100

// 1011100011111001010100111110011111001111100010100
// 406NVLGBH0

// --------------------------------

// Monster

// 1111100
// 1000010
// 1010101
// 1000001
// 1010101
// 0101010
// 0000000

// 1111100100001010101011000001101010101010100000000
// 5E4I8C3K74

// --------------------------------

// Monster 2

// 1111100
// 1000010
// 1010101
// 1000001
// 1010101
// 0101010
// 0000000

// 1111000111110010101101111110111111011111000101010
// 58LG6NEAZU

// --------------------------------
// Bricks
// aa,55,aa,55,aa,55
// aa55aa55aa55
// 1UDXHXVWB9

// 1000000
// 0110110
// 0011011
// 0110110
// 0011011
// 0110110
// 0011011

// 1000000011011000110110110110001101101101100011011
// 2SFNKL54IJ

// Bricks 2
// aa,55,2a,55,2a,55
// aa552a552a55
// 1UDWIFB61H

// 1000000
// 0110011
// 0001100
// 0110011
// 0001100
// 0110011
// 0001100

// 1000000011001100011000110011000110001100110001100
// 2SEAD594SS

// -------------------------------------

// Bricks 3

// 1000000
// 0010101
// 0101010
// 0010101
// 0101010
// 0010101
// 0101010

// 1000000001010101010100010101010101000101010101010
// 2S18HVN1KA

// -------------------------------------

// Explosion

// 1001001
// 0100100
// 1000000
// 0001001
// 0100000
// 0001010
// 1000100

// 1001001010010010000000001001010000000010101000100
// 368ZVO5G78

// -------------------------------------

// Coin

// 1011100
// 0100010
// 0101010
// 0101010
// 0101010
// 0100010
// 0011100

// 1011100010001001010100101010010101001000100011100
// 3ZUDVZ1XY4

// a - -----;
// b - -----
// c - -----;
// d - monster moves;
// e - player, bomb, monster code string;
// f - End game Function;
// g - player coords next
// h - player coords;
// i - Iterations
// j - main map;
// k - Key;
// l - play time;
// m - ---
// n - ---
// o - player, bomb, monster render function;
// p - Bomb
// q -
// r - Math.random
// s - Movements array
// t - Size;
// u - pressed key;
// v -
// w - End reason;
// x - coords
// y - coords
// z - End game!


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

// i==h&&(o('2S4A18IPSK',{x,y},1));
// u==2&&(o('34L9HV8XDS',{x,y}));
// u==3&&(o('5E4I8C3K74',{x,y}));
// u==4&&(o('2S18HVN1KA',{x,y}));
// u==1&&v(x,y,7,7);

// j[g]==3&&f(1)|| - check if you go to monster
//
//
// r=Math.random;k=9;onkeydown=e=>k=e.which%32;onkeyup=e=>(k=e.which%32==k?9:k);s=[-1,-25,1,25,0];j=[];h=26;p=l=z=0;for(i=0;i<325;i++){x=i%25;y=~~(i/25);j.push((i==27||i==51||i==h)?0:!(y%2)&&!(x%2)||!y||y==12||!x||x==24?1:r()<.4?4:r()<.05?3:0)}o=(e,[x,y],l)=>{for(i=0;i<49;i++)(!i&&l||i&&(+parseInt(e,36).toString(2)[i]^l))&&c.fillRect(x+(i%7),y+~~(i/7),1,1)};f=m=>{for(i=125;i<200;i++)j[i]=0;z=m;h=-1};c.scale(t=Math.min(a.width/175,a.height/91),t);setInterval(()=>{!k&&!p&&(j[h]=2,p=60);!(l%4)&&(g=h+s[k-5]||h,h=!j[g]?g:h);p&&(p--);d=[];m=0;c.clearRect(0,0,175,91);j.map((u,i)=>{u==6&&(j[i]=0);u==3&&(++m)&&!(l%7)&&(g=s[~~(r()*4)],!j[i+g]&&(d.push([i,i+g])));u==2&&p==1&&s.map(n=>(j[i+n]=j[i+n]-1?6:1,i+n==h&&f(1)));o(['','','406VYFBJMK','5E4I8C3K74','2S18HVN1KA','406NVLGBH0','368ZVO5G78'][i==h?5:u],[7*(i%25),7*~~(i/25)],u==1||u==2&&!(l%9))});d.map(u=>(!j[u[1]]&&(j[u[1]]=3,j[u[0]]=0),u[1]==h&&f(1)));!m&&f(2);z&&(c.fillText(z-1?'Win':'Lose',80,49));l++},30)
//
//
// r=Math.random;k=9;onkeydown=e=>k=e.which%32;onkeyup=e=>(k=e.which%32==k?9:k);s=[-1,-25,1,25,0];j=[];h=26;p=l=z=v=0;for(i=0;i<325;i++){x=i%25;y=~~(i/25);j.push((i==27||i==51||i==h)?0:!(y%2)&&!(x%2)||!y||y==12||!x||x==24?1:r()<.4?4:r()<.05?3:0)}o=(e,[x,y],l)=>{for(i=0;i<49;i++)(!i&&l||i&&(+parseInt(e,36).toString(2)[i]^l))&&c.fillRect(x+(i%7),y+~~(i/7),1,1)};f=m=>{for(i=125;i<200;i++)j[i]=0;z=m;h=-1};c.scale(t=Math.min(a.width/175,a.height/91),t);setInterval(()=>{!k&&!p&&(j[h]=2,p=60);!(l%4)&&(g=h+s[k-5]||h,h=!j[g]||j[g]==7&&(j[g]=0,++v)?g:h);p&&(p--);d=[];m=0;c.clearRect(0,0,175,91);j.map((u,i)=>{u==6&&(j[i]=0);u==3&&(++m)&&!(l%7)&&(g=s[~~(r()*4)],!j[i+g]&&(d.push([i,i+g])));u==2&&p==1&&s.map(n=>(j[i+n]=j[i+n]-1?j[i+n]==4&&r()<.3?7:6:1,i+n==h&&f(1)));o(['','','406VYFBJMK','5E4I8C3K74','2S18HVN1KA','406NVLGBH0','368ZVO5G78','3ZUDVZ1XY4'][i==h?5:u],[7*(i%25),7*~~(i/25)],u==1||u==2&&!(l%9))});d.map(u=>(!j[u[1]]&&(j[u[1]]=3,j[u[0]]=0),u[1]==h&&f(1)));!m&&f(2);z&&(c.fillText(z-1?'Win':'Lose',75,49));l++},30)
//
//
// r=Math.random;k=9;onkeydown=e=>k=e.which%32;onkeyup=e=>(k=e.which%32==k?9:k);s=[-1,-25,1,25,0];j=[];h=26;p=l=z=v=0;for(i=0;i<325;i++){x=i%25;y=~~(i/25);j.push((i==27||i==51||i==h)?0:!(y%2)&&!(x%2)||!y||y==12||!x||x==24?1:r()<.4?4:r()<.05?3:0)}o=(e,[x,y],l)=>{for(i=0;i<49;i++)(!i&&l||i&&(+parseInt(e,36).toString(2)[i]^l))&&c.fillRect(x+(i%7),y+~~(i/7),1,1)};f=m=>{for(i=125;i<200;i++)j[i]=h=0;z=m};c.scale(t=Math.min(a.width/175,a.height/91),t);setInterval(()=>{!k&&!p&&(j[h]=2,p=60);!(l%4)&&(g=h+s[k-5]||h,h=!j[g]||j[g]==7&&(j[g]=0,++v)?g:h);p&&(p--);d=[];m=0;c.clearRect(0,0,175,91);j.map((u,i)=>{u==6&&(j[i]=0);u==3&&(++m)&&!(l%7)&&(g=s[~~(r()*4)],!j[i+g]&&(d.push([i,i+g])));u==2&&p==1&&s.map(n=>(j[i+n]=j[i+n]-1?j[i+n]==4&&r()<.3?7:6:1,i+n==h&&f(1)));o(['','','406VYFBJMK','5E4I8C3K74','2S18HVN1KA','406NVLGBH0','368ZVO5G78','3ZUDVZ1XY4'][h&&i==h?5:u],[7*(i%25),7*~~(i/25)],u==1||u==2&&!(l%9))});d.map(u=>(!j[u[1]]&&(j[u[1]]=3,j[u[0]]=0),u[1]==h&&f(1)));!m&&f(2);z&&(c.fillText(z-1?'Win':'Lose',75,49));l++},30)
//
//
//
// r=Math.random;k=9;onkeydown=e=>k=e.which%32;onkeyup=e=>(k=e.which%32==k?9:k);s=[-1,-25,1,25,0];j=[];h=26;l=z=0;v=1;for(i=0;i<325;i++){x=i%25;y=~~(i/25);j.push((i==27||i==51||i==h)?0:!(y%2)&&!(x%2)||!y||y==12||!x||x==24?1:r()<.4?4:r()<.05?3:0)}o=(e,[x,y],l)=>{for(i=0;i<49;i++)(!i&&l||i&&(+parseInt(e,36).toString(2)[i]^l))&&c.fillRect(x+(i%7),y+~~(i/7),1,1)};f=m=>{for(i=125;i<200;i++)j[i]=h=0;z=m};c.scale(t=Math.min(a.width/175,a.height/91),t);setInterval(()=>{!k&&v&&!j[h]&&(j[h]=70,v--);!(l%4)&&(g=h+s[k-5]||h,h=!j[g]||j[g]==2&&(j[g]=0,++v)?g:h);d=[];m=0;c.clearRect(0,0,175,91);j.map((u,i)=>{u==6&&(j[i]=0);u==3&&(++m)&&!(l%7)&&(g=s[~~(r()*4)],!j[i+g]&&(d.push([i,i+g])));u>9&&(--j[i]);u==9&&++v&&s.map(n=>(q=j[i+n],j[i+n]=q==1?1:q==4&&r()<.3?2:q>9?9:6,i+n==h&&f(1)));o(['','','406VYFBJMK','5E4I8C3K74','2S18HVN1KA','406NVLGBH0','368ZVO5G78'][h&&i==h?5:u>8?2:u],[7*(i%25),7*~~(i/25)],u==1||u>8&&!(l%9))});d.map(u=>(!j[u[1]]&&(j[u[1]]=3,j[u[0]]=0),u[1]==h&&f(1)));!m&&f(2);z&&(c.fillText(z-1?'Win':'Lose',75,49));l++},30)