const unread = document.querySelectorAll('.unread')
console.log(unread);
const numNotif = document.getElementById('numNotif')
numNotif.innerHTML = unread.length

const markAll = document.getElementById('mark_as_read')
unread.forEach(element=>{
    element.addEventListener('click',()=>{
      element.classList.remove('unread')
    const newMsg = document.querySelectorAll('.unread')
      numNotif.innerText = newMsg.length
    })
})

// mark_as_read 
markAll.addEventListener('click',()=>{
    unread.forEach(message=>{
        message.classList.remove('unread')
        const newMsg = document.querySelectorAll('.unread')
        numNotif.innerText = newMsg.length
    })
})
