const input=document.getElementById('input')
const output=document.getElementById('output')

function capitalize()
{
    if(input.value =='')
    {
        output.innerText=''
    //creating dynamic paragraph
    let paragraph=document.createElement('p')
    paragraph.innerHTML='Enter The Some Text In The Input Field 👊';
    paragraph.style.color='red'
    output.appendChild(paragraph)

    }
    else
    {
        //to make the output should be empty 
    output.innerHTML=''
    //creating dynamic paragraph
    let paragraph=document.createElement('p')
    paragraph.innerHTML=input.value
    paragraph.classList.add('capital')
    output.appendChild(paragraph)
    }

}

function lower()
{   
    if(input.value ==''){
    output.innerText=''
        //creating dynamic paragraph
        let paragraph=document.createElement('p')
        paragraph.innerHTML='Enter The Some Text In The Input Field 👊';
        paragraph.style.color='red'
        output.appendChild(paragraph)

        }
    else{
        output.innerHTML='' 
        //creating dynamic paragraph
        let paragraph=document.createElement('p')
        paragraph.innerHTML=input.value
        paragraph.classList.add('lower')
        output.appendChild(paragraph)

    }
}

function first()
{
    if(input.value ==''){
        output.innerText=''
            //creating dynamic paragraph
            let paragraph=document.createElement('p')
            paragraph.innerHTML='Enter The Some Text In The Input Field 👊';
            paragraph.style.color='red'
            output.appendChild(paragraph)
    
            }
    else{
        output.innerHTML=''
        //creating dynamic paragraph
        let paragraph=document.createElement('p')
        paragraph.innerHTML=input.value
        paragraph.classList.add('first')
        output.appendChild(paragraph)

    }
    
}

function bolder()
{ 
    if(input.value ==''){
        output.innerText=''
            //creating dynamic paragraph
            let paragraph=document.createElement('p')
            paragraph.innerHTML='Enter The Some Text In The Input Field 👊';
            paragraph.style.color='red'
            output.appendChild(paragraph)
    
            }
    else
    {
        output.innerHTML=''
        //creating dynamic paragraph
        let paragraph=document.createElement('p')
        paragraph.innerHTML=input.value
        paragraph.classList.add('bold')
        output.appendChild(paragraph) 
    }
    
}

function italic()
{ 
    if(input.value ==''){
        output.innerText=''
            //creating dynamic paragraph
            let paragraph=document.createElement('p')
            paragraph.innerHTML='Enter The Some Text In The Input Field 👊';
            paragraph.style.color='red'
            output.appendChild(paragraph)
    
            }
    else
    {   
        output.innerHTML=''
        //creating dynamic paragraph
        let paragraph=document.createElement('p')
        paragraph.innerHTML=input.value
        paragraph.classList.add('italic')
        output.appendChild(paragraph)

    }
    
}


function underlined()
{
    if(input.value ==''){
        output.innerText=''
            //creating dynamic paragraph
            let paragraph=document.createElement('p')
            paragraph.innerHTML='Enter The Some Text In The Input Field 👊';
            paragraph.style.color='red'
            output.appendChild(paragraph)
    
            }
    else{
        output.innerHTML=''
        //creating dynamic paragraph
        let paragraph=document.createElement('p')
        paragraph.innerHTML=input.value
        paragraph.classList.add('underline')
        output.appendChild(paragraph)
    }
}