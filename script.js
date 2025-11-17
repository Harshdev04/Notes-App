var notes = document.getElementById('notes');
var cols = ['#fff3cd', '#d4edda', '#d1ecf1', '#f8d7da', '#e7d4f5'];

document.getElementById('addbtn').onclick = function(){
    var box = document.createElement('div');
    box.className = 'note';
    
    var pin = document.createElement('button');
    pin.className = 'pinbtn';
    pin.innerText = '📌';
    pin.onclick = function(){
        box.classList.toggle('pinned');
        if(box.classList.contains('pinned')){
            notes.insertBefore(box, notes.firstChild);
        }
    };
    
    var txt = document.createElement('textarea');
    txt.rows = 3;
    txt.placeholder = 'Write your note...';
    
    var btns = document.createElement('div');
    btns.className = 'btns';
    
    for(var i=0; i<cols.length; i++){
        var c = document.createElement('span');
        c.className = 'clr';
        c.style.background = cols[i];
        c.onclick = function(){
            box.style.background = this.style.background;
        };
        btns.appendChild(c);
    }
    
    var lockbtn = document.createElement('button');
    lockbtn.innerText = '🔒 Lock';
    lockbtn.style.background = '#4CAF50';
    lockbtn.style.color = 'white';
    lockbtn.onclick = function(){
        if(txt.disabled){
            txt.disabled = false;
            lockbtn.innerText = '🔒 Lock';
        }else{
            txt.disabled = true;
            lockbtn.innerText = '✏️ Edit';
        }
    };
    
    var delbtn = document.createElement('button');
    delbtn.innerText = '🗑️ Delete';
    delbtn.style.background = '#ff6b6b';
    delbtn.style.color = 'white';
    delbtn.onclick = function(){ box.remove(); };
    
    btns.appendChild(lockbtn);
    btns.appendChild(delbtn);
    
    box.appendChild(pin);
    box.appendChild(txt);
    box.appendChild(btns);
    notes.appendChild(box);
};