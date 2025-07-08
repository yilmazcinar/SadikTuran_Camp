const shoppingList = document.querySelector(".shopping-list");

const shoppingForm = document.querySelector(".shopping-form");

const filterButtons = document.querySelectorAll(".filter-buttons button");

const clearBtn = document.querySelector(".clear");

document.addEventListener("DOMContentLoaded", function () {
  loadItems();

  shoppingForm.addEventListener("submit", handleFormSubmit);

  for (let button of filterButtons) {
    button.addEventListener("click", handleFilterSelection);
  }

  clearBtn.addEventListener("click", clear);

  displayAlert();
});

// Alışveriş listesindeki tüm öğeleri localStorage'a kaydeder
function saveToLS() {
  const listItems = shoppingList.querySelectorAll("li");
  const liste = [];
  for (let li of listItems) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent;
    const completed = li.hasAttribute("item-completed");

    liste.push({ id, name, completed });
  }
  localStorage.setItem("shoppingItems", JSON.stringify(liste));
}

// Filtre butonlarının seçimi yapıldığında çalışır, aktif filtreyi günceller
function handleFilterSelection(e) {
  const filterBtn = e.target;

  for (let button of filterButtons) {
    button.classList.add("btn-secondary");
    button.classList.remove("btn-primary");
  }

  filterBtn.classList.add("btn-primary");
  filterBtn.classList.remove("btn-secondary");

  filterItems(filterBtn.getAttribute("item-filter"));
}

// Seçilen filtreye göre liste öğelerini filtreler (tümü, tamamlanan, tamamlanmayan)
function filterItems(filterType) {
  const li_items = shoppingList.querySelectorAll("li");

  for (let li of li_items) {
    li.classList.remove("d-none");
    li.classList.remove("d-flex");

    const completed = li.hasAttribute("item-completed");
    if (filterType == "completed") {
      li.classList.toggle(completed ? "d-flex" : "d-none");
    } else if (filterType == "incompleted") {
      li.classList.toggle(completed ? "d-none" : "d-flex");
    } else {
      li.classList.toggle("d-flex");
    }
  }
}

// Aktif filtreye göre öğeleri yeniden filtreler
function updateFilterItems() {
  const activeFilter = document.querySelector(".btn-primary[item-filter]");

  filterItems(activeFilter.getAttribute("item-filter"));
}

// localStorage'dan kayıtlı öğeleri yükler ve liste elemanlarını oluşturur
function loadItems() {
  const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];

  shoppingList.innerHTML = "";

  for (let item of items) {
    const li = createListItem(item);
    shoppingList.appendChild(li);
  }
}

// Yeni bir öğe ekler, filtreleri günceller ve localStorage'a kaydeder
function addItem(input) {
  const id = generateId();
  console.log(id);

  const newItem = createListItem({
    id: id,
    name: input.value,
    completed: false,
  });

  shoppingList.appendChild(newItem);
  input.value = "";

  updateFilterItems();

  saveToLS();
  displayAlert();
}

// Benzersiz bir ID oluşturur (mevcut zamanı string olarak döner)
function generateId() {
  return Date.now().toString();
}

// Form gönderimini işler, boş değer kontrolü yapar ve yeni öğe ekler
function handleFormSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("item_name");

  if (input.value.trim().length === 0) {
    alert("yeni değer giriniz");
    return;
  }

  addItem(input);
}

// Öğenin tamamlanma durumunu değiştirir (checkbox işlevi)
function toggleCompleted(e) {
  const li = e.target.parentElement;
  li.toggleAttribute("item-completed");

  updateFilterItems();

  saveToLS();
}

// Bir öğeyi listeden siler ve değişiklikleri kaydeder
function removeItem(e) {
  const li = e.target.parentElement;
  shoppingList.removeChild(li);
  saveToLS();
  displayAlert();
}

// Yeni bir liste öğesi (li) oluşturur - checkbox, öğe adı ve silme ikonu ile
function createListItem(item) {
  //checkbox

  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", toggleCompleted);

  //item

  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.addEventListener("click", openEditMode);
  div.addEventListener("blur", closeEditMode);
  div.addEventListener("keydown", cancelEnter);

  //delete-icon

  const deleteIcon = document.createElement("span");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
  deleteIcon.addEventListener("click", removeItem);

  //li

  const li = document.createElement("li");
  li.setAttribute("item-id", item.id);
  li.className = "border rounded p-1 mb-1";
  li.toggleAttribute("item-completed", item.completed);

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

// Öğe adına tıklandığında düzenleme modunu açar (sadece tamamlanmamış öğeler için)
function openEditMode(e) {
  const li = e.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true;
  }
}

// Düzenleme modunu kapatır ve değişiklikleri kaydeder
function closeEditMode(e) {
  e.target.contentEditable = false;
  saveToLS();
}
// Enter tuşuna basıldığında düzenleme modunu kapatır
function cancelEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    closeEditMode(e);
  }
}

// Tüm listeyi temizler ve localStorage'ı sıfırlar
function clear() {
  shoppingList.innerHTML = "";
  localStorage.clear("shoppingItems");
  displayAlert();
}

// Liste boşsa uyarı mesajını gösterir, doluysa gizler
function displayAlert() {
  const isEmpty = shoppingList.querySelectorAll("li").length === 0;
  const alert = document.querySelector(".alert");

  alert.classList.toggle("d-none", !isEmpty);
}
