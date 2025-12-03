const inputTodo = document.getElementById('inputTodo')
const listTodo = document.getElementById('ListTodo')
const btnTambah =  document.getElementById('btnTambah')



btnTambah.addEventListener("click", () => {
   const inputValue = inputTodo.value.trim()

   const list = document.createElement("li")
   list.textContent = inputValue


   if(!inputValue) {
    alert("todo tidak boleh kosong")
    return null;
   }

   listTodo.appendChild(list)
   inputTodo.value = ""
})


btnHapus.addEventListener("click", () => {
   // const list = document.getElementsByTagName("li")
   listTodo.remove()
})