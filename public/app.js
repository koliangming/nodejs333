const studentsTable = document.querySelector('#stu-table');
const form = document.querySelector("#add-students-form");
// create element & render 
function renderStudents(doc) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr = document.createElement("tr");
    // td1.setAttribute('class', "");
    // td2.setAttribute('class', "");
    // td3.setAttribute('class', "");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().name;
    td2.textContent = doc.data().type;
    td3.textContent = doc.data().magnitude;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // delete 
    let cross = document.createElement('img');
    cross.setAttribute('src', "cross.png");
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        if (confirm("確實要刪除嗎?")) {
            let id = test.target.parentElement.getAttribute('data-id');
            console.log(id);
            db.collection('Stars').doc(id).delete();
            // setTimeout(window.location.reload(), 1000);
            alert("已刪除！請重新整理。");
        }
    });
    //
    studentsTable.appendChild(tr);
}

// getting data 
db.collection('Stars').get().then(data => {
    data.docs.forEach(doc => {
        renderStudents(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(form.name.value == '' && form.magnitude.value == '' && form.type.value == ''){
        alert('尚未填寫資料，不能新增。');
    } else {
        db.collection('Stars').add({
            name: form.name.value,
            magnitude: form.magnitude.value,
            type: form.type.value
        });
        form.name.value = '';
        form.magnitude.value = '';
        form.type.value = '';
        alert('資料已更新，請重新整理。');
    }
});

//
$(function () {
    // $(window).on('dragenter', function () {
    //     $(this).preventDefault();
    // });
    $("#btn").on("mouseover", function () {
        $(this).addClass('btn2');
        $(this).removeClass('btn1');
        $(this).removeClass('btn3');
    });
    $("#btn").on("mouseleave", function () {
        $(this).addClass('btn1');
        $(this).removeClass('btn3');
        $(this).removeClass('btn2');
    });
    $("#btn").on("mousedown", function () {
        $(this).addClass('btn3');
        $(this).removeClass('btn1');
        $(this).removeClass('btn2');
    });
    $("#btn").on("mouseup", function () {
        $(this).addClass('btn2');
        $(this).removeClass('btn1');
        $(this).removeClass('btn3');
    });
});