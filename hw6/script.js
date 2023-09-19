
async function fetchData() {
    try {
        const data = fetch("./data.json").then((data) => (
            data.json()));
        return data;

    } catch (e) {
        console.log(e)
    }
    return 'Нет данных';
}

const itemBlock = document.querySelector(".products__items");

fetchData().then((response) => response.forEach(({image, name, description, price}) => (
    item = `
        <div class="products__item">
            <div class="products__picturebox">
                <div class="products__itemHover">
                    <button class="products__buyButton">
                        <img src="img/basket.svg" alt="" class="products__buyButtonImage">
                            Add to Cart
                    </button>
                </div>
                <img src="img/${image}" alt="Изображение продукта" class="products__itemPicture">
            </div>
            <div class="products__descriptionBlock">
                <h4 class="products__itemHeading">${name}</h4>
                <p class="products__itemDescription">${description}</p>
                <p class="products__itemPrice">$${price}</p>
            </div>
        </div>
`,
    itemBlock.insertAdjacentHTML("beforeend", item)
)));





//
// <div class="products__item">
//     <div class="products__picturebox">
//         <div class="products__itemHover">
//             <button class="products__buyButton">
//                 <img src="img/basket.svg" alt="" class="products__buyButtonImage">
//                     Add to Cart
//             </button>
//         </div>
//         <img src="img/item1.jpg" alt="Изображение продукта" class="products__itemPicture">
//     </div>
//     <div class="products__descriptionBlock">
//         <h4 class="products__itemHeading">ELLERY X M'O CAPSULE</h4>
//         <p class="products__itemDescription">Known for her sculptural takes on traditional tailoring, Australian
//             arbiter
//             of cool Kym Ellery teams up with Moda Operandi.</p>
//         <p class="products__itemPrice">$52.00</p>
//     </div>
// </div>