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






