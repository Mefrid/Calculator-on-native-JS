var Numbers = document.getElementsByClassName("number");
var MainLine = document.getElementById("main-line");
var SubLine = document.getElementById('sub-line');
var Clear = document.getElementById('Clear');
var Point = document.getElementById('Point');
var Operations = document.getElementsByClassName('basicOperation');
var Equals = document.getElementById('Equals');
var Back = document.getElementById('Back');
var ClearE = document.getElementById('ClearE');
var ChangeSign = document.getElementById('ChangeSign');
var Sqrt = document.getElementById('Sqrt');
var Reverse = document.getElementById('Reverse');

MainLine.textContent = 0;
MainLine.textContent.length = 1;

for(let i = 0; i < Numbers.length; ++i)
{
    Numbers[i].addEventListener("click", (e) => {
        if(MainLine.textContent.length >=13 || MainLine.textContent.includes('NaN') || MainLine.textContent.includes('Infinity')) return;
        if (MainLine.textContent == 0 && MainLine.textContent.length == 1)
	    {
            if(e.target.textContent == 0)
            {
                return;
            }
            else 
            {
                MainLine.textContent = e.target.textContent;
                MainLine.textContent = MainLine.textContent.replace(/\s+/g, '');
            }
        }
        else 
        {
		    MainLine.textContent += e.target.textContent;
	        MainLine.textContent = MainLine.textContent.replace(/\s+/g, '');
	    }
    });
}
for(let i = 0; i < Operations.length; ++i)
{
    Operations[i].addEventListener('click', (e) => {
        if(MainLine.textContent.charAt(MainLine.textContent.length - 1) == '.')
        {
            MainLine.textContent = MainLine.textContent.slice(0, MainLine.textContent.length - 1);
            SubLine.textContent += MainLine.textContent;
            SubLine.textContent += e.target.textContent;
            SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
            MainLine.textContent = 0;      
        }
        else if(MainLine.textContent.charAt(0) == '-')
        {
            if(SubLine.textContent.length == 0)
            {
                SubLine.textContent += MainLine.textContent;
                SubLine.textContent += e.target.textContent;
                SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
                MainLine.textContent = 0;
                return; 
            }
            else
            {
                SubLine.textContent += '('+ MainLine.textContent + ')';
                SubLine.textContent += e.target.textContent;
                SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
                MainLine.textContent = 0;
                return;
            }
        }
        else
        {
            SubLine.textContent += MainLine.textContent;
            SubLine.textContent += e.target.textContent;
            SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
            MainLine.textContent = 0;      
        }
    });
}

Clear.addEventListener('click', (e) => {
    MainLine.textContent = 0;
    SubLine.textContent = '';
    SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
});

ClearE.addEventListener('click', (e) => {
    MainLine.textContent = 0;
});

Equals.addEventListener('click', (e) => {
    if(MainLine.textContent.includes('NaN') || MainLine.textContent.includes('Infinity')) return;
    if(MainLine.textContent.charAt(MainLine.textContent.length - 1) == '.')
        {
            MainLine.textContent = MainLine.textContent.slice(0, MainLine.textContent.length - 1);
        }
    if(MainLine.textContent.charAt(0) == '-')
        {
            SubLine.textContent += '('+ MainLine.textContent + ')';
            SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
            MainLine.textContent = eval(SubLine.textContent);
            SubLine.textContent = '';
        }
    else
        {
            SubLine.textContent += MainLine.textContent;
            SubLine.textContent = SubLine.textContent.replace(/\s+/g, '');
            MainLine.textContent = eval(SubLine.textContent);
            SubLine.textContent = '';
        }
    if(MainLine.textContent.length >=13)
    {
        MainLine.textContent = MainLine.textContent.slice(0, 13);
    }
});

Back.addEventListener('click', (e) => {
  if(MainLine.textContent == 0 && MainLine.textContent.length == 0) return;
  else if(MainLine.textContent.length == 1 || MainLine.textContent == 'NaN' ||  MainLine.textContent == 'Infinity')
  {
    MainLine.textContent = 0;
  }
  else 
  {
    MainLine.textContent = MainLine.textContent.substr(0, MainLine.textContent.length-1);
  }
  if(MainLine.textContent.length == 0 || MainLine.textContent == '-')
    {
        MainLine.textContent = 0;
    }
});

ChangeSign.addEventListener('click', (e) => {
    if(MainLine.textContent == 0 || MainLine.textContent.includes('NaN') || MainLine.textContent.includes('Infinity')) return;
    if(MainLine.textContent.charAt(0) == '-')
    {
        MainLine.textContent = MainLine.textContent.slice(1);
    }
    else
    {
        MainLine.textContent = '-' + MainLine.textContent;
    }
});

Sqrt.addEventListener('click', (e) => {
    MainLine.textContent = Math.sqrt(MainLine.textContent);
    if(MainLine.textContent.length >=13)
    {
        MainLine.textContent = MainLine.textContent.slice(0, 13);
    }
});


Point.addEventListener('click', (e) => {
    for(let char of MainLine.textContent) if(char == '.') return;
    if(MainLine.textContent.includes('NaN') || MainLine.textContent.includes('Infinity')) return;
    MainLine.textContent += e.target.textContent;
    MainLine.textContent = MainLine.textContent.replace(/\s+/g, '');
});

Reverse.addEventListener('click', (e) => {
    MainLine.textContent = 1 / MainLine.textContent;
    if(MainLine.textContent.length >=13)
    {
        MainLine.textContent = MainLine.textContent.slice(0, 13);
    }
});

