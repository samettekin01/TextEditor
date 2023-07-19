const metin = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates possimus delectus explicabo sequi, doloribus aspernatur enim veniam adipisci natus unde aliquid amet, quis cum, numquam voluptatibus dolor at et!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, alias facere quasi repellendus voluptatum voluptatem architecto. Molestias, ullam id dolorum voluptate repudiandae mollitia, iusto, nulla nam quo facere necessitatibus explicabo.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae enim temporibus eos repudiandae fugit blanditiis harum, labore quis? Omnis similique, porro vel delectus vero rem blanditiis. Repellat reiciendis in nostrum?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam quae omnis id perspiciatis velit, blanditiis nobis aspernatur qui ea aliquam, in ducimus alias dolore repudiandae ratione, sunt autem optio!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem eligendi totam doloremque sint quibusdam provident non hic in, blanditiis omnis aperiam libero at inventore assumenda rem sunt. Nobis, nesciunt."
]

for(let i=0; i<metin.length;i++){
    document.getElementById("girismetin").innerHTML += metin[i] + "<br><br>";
}

const hButton = document.querySelectorAll("#formatBlock");
const fontcolor = document.querySelectorAll("#foreColor");
const backcolor = document.querySelectorAll("#backColor");
const fonts = document.querySelectorAll("#fontSize");
const fontsize = document.getElementById("fontSize");
const boldButton = document.querySelector("#boldButton");
const italicButton = document.querySelector("#italicButton");
const strikeButton = document.querySelector("#strikeButton");
const leftButton = document.querySelector("#leftButton");
const centerButton = document.querySelector("#centerButton");
const rightButton = document.querySelector("#rightButton");
const justifyButton = document.querySelector("#justifyButton");
const undoButton = document.querySelector("#undoButton");
const redoButton = document.querySelector("#redoButton");

//burada buttona tıklayınca (click eventi) ile document.execCommand method u ile "girismetin" id'li "contenteditable" sınıfındaki seçili bir metnin stilini değiştirmemize yarıyor
//örneğin boldButton id li butonu document.querySelector sınıfıyla çağırırıp boldButton değişkenine atadım. addEventListener dinleyici ile click özelliği verdik.
//document.execCommand sınıfı ile sadece ilk parametresine "bold" seçilini metine bold stili vermiş olduk.

boldButton.addEventListener("click", (event) => {
    document.execCommand("bold");
});
italicButton.addEventListener("click", () => {
    document.execCommand("italic");
});
strikeButton.addEventListener("click", () => {
    document.execCommand("strikethrough");
});
leftButton.addEventListener("click", () => {
    document.execCommand("justifyLeft");
});
centerButton.addEventListener("click", () => {
    document.execCommand("justifyCenter");
});
rightButton.addEventListener("click", () => {
    document.execCommand("justifyRight");
});
justifyButton.addEventListener("click", () => {
    document.execCommand("justifyFull");
});
undoButton.addEventListener("click", () => {
    document.execCommand("undo");
});
redoButton.addEventListener("click", () => {
    document.execCommand("redo");
});

for(let i = 1; i <= 7; i++){
    let sizes = document.createElement("option");
    sizes.value = i;
    sizes.innerHTML = i;
    fontsize.appendChild(sizes);
}
fontsize.value = 4;

//burada ise h1,h2,h3... etiketlerini kullanmak için bu etiketleri bir select > option etiketi içerisine aldım. 
//select etiketinin id'sine execCommand sınıfının ilk parametresinin özelliği olan formatBlock adını verdim. button.id ile çağırılarak bu şekilde button.id değeri verilmiş oldu.
//button.value ilede option listesine etiketlerin ismini vererek "header" etiketlerinin value değerini alarak execCommand sınıfı ile seçili metnin stilini etiketlendirmiş oldum.
//Font color set
fontcolor.forEach((button) => {
    button.addEventListener("input", () => {
      document.execCommand(button.id, true, button.value);
    });
});
//Background set
backcolor.forEach((button) => {
    button.addEventListener("input", () => {
      document.execCommand(button.id, true, button.value);
    });
});
//Font Size set
fonts.forEach((button) => {
    button.addEventListener("input", () => {
      document.execCommand(button.id, true, button.value);
    });
});
//headings set
hButton.forEach((button) => {
    button.addEventListener("input", () => {
      document.execCommand(button.id, false, button.value);
    });
});

function chanLan(lang){
    var bchgln = document.getElementById("blang");
    var fchgln = document.getElementById("flang");
    var bgchgln = document.getElementById("bglang");

    if(lang === 'en'){
        bchgln.textContent = "Text Editor"; 
        fchgln.textContent = "Font Color"; 
        bgchgln.textContent = "Background Color";
    }

    if(lang === 'tr'){
        bchgln.textContent = "Metin Editörü"; 
        fchgln.textContent = "Yazı Rengi"; 
        bgchgln.textContent = "Arkaplan Rengi";
    }
}

//alıntı. Bakılacak.
var editableDiv = document.getElementById("girismetin");

// Div seçildiğinde çağrılacak fonksiyon
function handleDivSelect() {
  // Seçili div'in üzerine "selected" sınıfını ekleyin
  this.classList.add("selected");
}

// Div seçimi kaybedildiğinde çağrılacak fonksiyon
function handleDivDeselect() {
  // Seçili div'in üzerinden "selected" sınıfını kaldırın
  this.classList.remove("selected");
}

// Div'e tıklama olay dinleyicisi ekle
editableDiv.addEventListener("click", handleDivSelect);
// Div'in dışına tıklanınca seçimi kaybedin
document.addEventListener("click", function(event) {
  if (!editableDiv.contains(event.target)) {
    handleDivDeselect.call(editableDiv);
  }
});

const contentEditableDiv = document.getElementById('girismetin');

    // Div dışında tıklama olayını dinliyoruz
    document.addEventListener('click', function(event) {
      const targetElement = event.target;

      // Tıklanan alan, seçili div içinde değilse seçili sınıfını kaldırıyoruz
      if (targetElement !== contentEditableDiv && !contentEditableDiv.contains(targetElement)) {
        contentEditableDiv.classList.remove('selected');
      }
    });

    // Div içine tıklandığında seçili sınıfını ekliyoruz
    contentEditableDiv.addEventListener('click', function() {
      contentEditableDiv.classList.add('selected');
    });
