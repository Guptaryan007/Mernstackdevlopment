function submit(){

    const fn =document.getElementById("fullname").value;
    const em =document.getElementById("email").value;
    const mb =document.getElementById("mobie").value;
    const sr =document.getElementById("score").value;
    const cr =document.getElementById("course").value;
    const dob =document.getElementById("DOB").value;
   
    
    let selectedBatchTiming=[];
    document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
        selectedBatchTiming.push(element.value);
    });
    console.log(selectedBatchTiming);

    const selectedBatch = document.querySelector(
        "input[name='timing']:checked"
    ).value;
    
    console.log(selectedBatch);

    
}

