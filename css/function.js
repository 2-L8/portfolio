function RuEnWeekArr() {
	lan = prompt ('Введите язык');
	
	var arr = {
		'ru':['Пн','Вт','Ср','Чт','Пт','Ср','Вс'],
		'en':['Mn','Ts','We','Th','Fr','St','Sn']
	};
	alert(arr[lan]);
};

function confirr(){
	result=confirm('Вы студент?');
	
	if (result==true){
		alert ('Поздравляем, у нас для вас есть предложение!!');
	}else{
		alert ('Извините, вы нам не подходите');
	}
}


function PrintInt(){
	
	var col = prompt('Сколько чисел вывести?');
	var col = Number(col);
	var i = 1;
	while (i <= col){
		elem.innerHTML =i + '<br>';
		i++;
		 
	}
}


function arrRevers(){
	arr=[1,2,3,4,5,6,7,8,9,10];
	alert(arr);
	alert(arr.reverse());
}

function arrAdd(){
	arr=[1,2,3,4,5];
	alert(arr);
	arr.push(6,7,8,9,10);
	alert(arr);
	arr=[1.2.3.4.5];
	lert(arr);
	arr.unshift(6.7.8.9.10);
	alert(arr);
}

function arrSlice(){
	arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	alert(arr);
	result=arr.s;ice(0.5);
	alert(result);
}


function arrSort(){
	arr=["я","ц","у","к","н"];
	alert(arr);
	alert(arr.sort());
}

function strSplit(){
	x=prompt('Введие 3 слова через пробел');
	arr=x.split('');
	alert(arr);
	y=prompt('Какое чслово по счёту вывести?');
	alert(arr[y]);
}






