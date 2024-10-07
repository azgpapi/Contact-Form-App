//button
const btn = document.getElementById('btn')

//container
const container = document.getElementById('place')

// all input, radio and checkbox fields reference
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const general = document.getElementById('general')
const support = document.getElementById('support')
const message = document.getElementById('message')
const check = document.getElementById('consent')

//name
const p = document.getElementById('nameF')
const p2 = document.getElementById('nameL')
//email
const e = document.getElementById('eError')
//query
const q = document.getElementById('qError')
//message
const m = document.getElementById('mError')
//consent
const c = document.getElementById('cError')


btn.addEventListener('click' , function() {
    // Checking if the input, checkbox and radiobutton are empty. 
    // And showing error. If not empty, Backing to current mode. 
    if (fName.value === "" ) { 
        fName.style.borderColor = "red"
        p.innerHTML = "This field is required"
        p.style.fontSize = "12px"
        p.style.color = "red"
        p.style.marginTop = "5px"
    } 
    else {fName.style.borderColor = ""; p.innerHTML = ""}
    
    if (lName.value === "" ) { 
        lName.style.borderColor = "red"
        p2.innerHTML = "This field is required"
        p2.style.fontSize = "12px"
        p2.style.color = "red"
        p2.style.marginTop = "5px"
    }
    else {lName.style.borderColor = ""; p2.innerHTML = ""}
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.match(emailPattern)) { 
        email.style.borderColor = "red"
        e.innerHTML = "Please enter a valid email address"
        e.style.fontSize = "12px"
        e.style.color = "red"
        e.style.marginTop = "5px"
    } else {email.style.borderColor = ""; e.innerHTML = ""}
    
    
    if ( !general.checked && !support.checked) { 
        q.innerHTML = "Please select a query type"
        q.style.fontSize = "12px"
        q.style.color = "red"
        q.style.marginTop = "5px"
    } else { q.innerHTML = ""}
    

    if (message.value === "" ) { 
        message.style.borderColor = "red"
        m.innerHTML = "This field is required"
        m.style.fontSize = "12px"
        m.style.color = "red"
        m.style.marginTop = "5px"
    } else {message.style.borderColor = ""; m.innerHTML = ""}
    

    if (!check.checked) { 
        c.innerHTML = "This field is required"
        c.style.fontSize = "12px"
        c.style.color = "red"
        c.style.marginTop = "5px"
    } else {c.innerHTML = ""}
    
    // If all the input values are present, popping up success message.
    if (fName.value && lName.value && email && (general.checked || support.checked) && message.value && check.checked )  {
        //creating elements 
        const div = document.createElement('div')
        const heading = document.createElement('h4')
        const p = document.createElement('p')
        //manipulating
        heading.textContent = "Message Sent"
        p.textContent = "Thanks for completing the form. We will be in touch soon!"
        //appending to div
        div.appendChild(heading)
        div.appendChild(p)
          //styling
        div.style.backgroundColor = "hsl(187, 24%, 22%)"
        div.style.maxWidth = "400px"
        div.style.borderRadius = "5px"
        div.style.margin = "20px auto"
        div.style.marginBottom = "0"
        div.style.padding = "20px"
  
        heading.style.color = "#fff"
        heading.style.marginBottom = "10px"
        p.style.color = "#fff"
        p.style.fontSize = "12px"
        p.style.opacity = "60%"

        //appending to container 
        container.appendChild(div) 
        setTimeout(() => {
            container.removeChild(div)
            fName.value = ""
            lName.value = ""
            email.value = ""
            general.checked = ""
            support.checked = ""
            message.value = ""
            check.checked = ""
        }, 5000);
    } else {
        const div = document.createElement('div')
        div.style.display = "none"
    }
  
})


