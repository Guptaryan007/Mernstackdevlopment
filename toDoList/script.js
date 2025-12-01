function AddTask() {
  const task = document.getElementById("NewTask").value.trim();

  console.log(task);

  if(task){
    const a = document.createElement("li");
  a.classList.add("p-2", "d-flex", "align-items-center", "border-bottom");

  const d = document.createElement("div");
  d.classList.add("w-75");
  d.innerText = task;

  const b = document.createElement("button");
  b.classList.add("btn", "btn-danger", "mx-3");
  b.innerHTML = `<i class="bi bi-trash"></i> Delete`;
  b.onclick = () => {
    a.remove();
  };

  a.appendChild(d);
  a.appendChild(b);

  document.getElementById("TaskList").appendChild(a);
  document.getElementById("NewTask").value = "";
  }
}
