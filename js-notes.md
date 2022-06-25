بهتر است کد های js را در انتهای درون تگ body قرار دهیم (in internal mode)
in script tag , if we wanna to link the js code in external mode , we use src and the address of the code

we can use "type of" at the beginning of the value to print the type of the variable

prompt = ("The text that wanna show for input" , "The text that wanna to be default")

if we put a " + " at the beginning of the variable , the variable type changes to number (same work as Number(variable) )

boolean ("") = false
boolean (" ") = true
all of the strings except nothing is true , all of the numbers except 0 is true

if we add to strings togheter , it called concat

in strings , + will always work as a concat

باید جلوی method ها ، یه () قرار دهیم

"==" => just check the variables     (for example , 3 = "3" is true) , but in "===" , the system will check the datatype too

ternary condition => condition ? rule1 : rule2 ;

در switch case , اگر بعد شرط True ما break نزاریم ، شروط بعد شرط true را هم اجرا میکند. ( بهتر از بعد هر شرط یه break بزاریم)

string.length => shows number of lenght

string.charAt(number of index) = string[number of string]

string.charCodeAt(number of index) = return ASCII code of that charecter

string.concat(" the string we wanna to attach ")

string.trim() => will delete all of the white space before and after the text

string.toLowerCase  = lowercase the string || string.toUpperCase = uppercase the string

string.search(" word or charecter ") => return the index of the word or charecter

string.indexof(" word or charecter ") => same as string.search but have some little difference

string.includes(" word or charecter ") => check that our sentence have this word charecter of not , return True of False

string.sliceindex of start , index of end) => cut a part of a sentence or a word (if we dont give the index of end , it will go to the end of the sentence)  // string.substr and string.substring will do this but have some differences too

Math.function

Math.min(numbers) => return the minimum numbers 

Math.trunc = Math.floor !=Math.ceil (math.trunc delete the float things in a number) 

Math.round = رند کردن عدد اگه به بالا نزدیک باشد به بالا گرد میکند اگه به پایین نزدیک باشد به پایین گرد میکند

Math.random() => print a random number between 0 and 1 , it we use (Math.random())*10 it will return a number between 0 and 10

در حلقه do while شرط ما حداقل یکبار اجرا میشود ولی while اگر شرط ما False باید اصلا اجرا نمیشود


pop() removes the last element of an array.
push() adds an element to the end of an array.
shift() removes the first element.
unshift() adds an element to the beginning of the array.

به کمک forEachمیشودیه حلقه روی یه آرایه میزنیم و از آن ها استفاده میکنیم

array.includes("name" or number) => return that this thing is in our array or not  (return true or false)
array.includes("name" or number , index number) => it will check the include index after the index

از لحاظ سرعت کار ، some بهتر از foreach است چون به محض رسیدن به true کار را تمام میکند ( تا زمانی جلو میرود که به true برسد و اگر چیزی نباشد تا آخر میرود)

every checked a condition on every item in a array.

زمانی که every به false برسد متوقف میشود و اگر ما بخوایم متوقف نشود باید یه return true بزنیم

we can add some items in our array with splice , with splice we can add items in the middle of the array or everywhere we wanna

array.splice( 2 , 4 ) => از ایندکس 2 ، چهار تا آیتم را حذف میکند

array.splice( 2 , 4 , 8) => از 2 ، به جای اون 4 تا آیتم یه 8 میزاره ، اگه ادامه بدیم ، جای تک تک مقادیر حذف شده اون مقدار رو میزاره
(2 , 4 , 8 , 9 ,3)

findindex => a way to find the index of a array

متود map کلا همیشه یه آرایه برمیگرداند و تا زمانی که به آخرین آرایه برسد کار خود را میکند

array.filter

Array.isArray(arrayname) => will return a bool that our thing is array or not

arrayname.indexof(item) => will return the index of that item (if its not in the array it return -1)

arrayname.lastindexof(item) => starts from end

arrayname.slice( index of start , index of end ) => will cut the selected array

arrayname.join('\') => will concat all of the items of a array together

arrayname.reverse()

arrayname.split('') => میتونیم از چیزای موجود در یک استرینگ یک آرایه بسازیم

object , array , function => Reference (اگر ۲ تا از این تایپ هارو مساوی هم بزاریم ، با تغییر یکی از متغیر ها، متغیر دیگری هم تغییر میکند )


Number , Bigint , Boolean , Symbol , Null , Undefined , String => Primitives

arrayname.find() => will find a object in a array (gives a function)

eval('function') => یک دستوری در ' ' میگیرد و آن را حساب میکند

هیچ وقت ورودی که از کاربر میگیریم را به eval ندهیم

IIFE Functions => توابع خودخوان

بهتر است برای ورودی های خودمان مقدار دیفالت مدنظر بگیریم

user camel case => userLastName (کلمات اول نه ولی از کلمات بعدی بهتر است از حروف بزرگ برای کلمات استفاده کنیم)


متغیرهایی که با let هم زده میشوند مثل var خاصیت update دارند ولی let نمیتواند دوباره تعریف شود و فقط یکبار یک متغیر به آن نسبت داده میشود بر خلاف var

در let ، متغیری هم نامی که در یک scope باشد با یک متغیر global هم نام ، تفاوت دارد اما در var اینگونه نیست

const = ثابت ( we cant changed the data of const )

فقط تعریف متغیر Hoist میشود، مقدار متغیر Hoist نمیشود

توابع عادی function ها هم از مفهوم Hoisting پیروی میکنن اما توابعی که در یک متغیر ذخیره میشوند از مفهوم Hoisting پیروی نمیکنن


setInterval => for setting time for executing a function

استرینگ خالی ، خود به خود یک falsy value به حساب می آید
boolean('') => false
boolean([]) => true ( truthy value )

0 and '' are falsy value

setTimeout => a way to execute a thin in js after a time

// next stage // 

getElementsByClassName() => will return a array

getElementsById()

getElementsByTagName()

document.querySelector('.class or #id') => یک کلاس یا آیدی را میگیرد و اولین تگی که  این را داشته باشد برمیگرداند

querySelectorAll() => تمامی المنت هایی که آن کلاس یا آیدی را داشته باشد برمیگرداند

name.getAttribute('attribute name') => return the variable of attribute

name.setAttribute('attribute name' , 'value')

name.innerHTML => return the value of a tag ( name.textContent is do same as this)

برای دسترسی داشتن به محتویات یک input یا form ها باید به جای innerHTML از value استفاده کنیم

document.createElement() => will create a html tag











