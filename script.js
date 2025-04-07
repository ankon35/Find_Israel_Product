const israeliProducts = [
    { name: "Israeli Product 1",  description: "High-quality product made in Israel.", imageUrl: "https://via.placeholder.com/150" },
    { name: "Israeli Product 2", description: "Made with premium materials from Israel.", imageUrl: "https://via.placeholder.com/150" },
    { name: "Israeli Product 3",  description: "Durable and reliable Israeli product.", imageUrl: "https://via.placeholder.com/150" }
  ];
  
  const deshiAlternatives = [
    { name: "Deshi Product 1", price: "$30", description: "Affordable local alternative.", imageUrl: "https://via.placeholder.com/150" },
    { name: "Deshi Product 2", price: "$40", description: "Best local quality for the price.", imageUrl: "https://via.placeholder.com/150" },
    { name: "Deshi Product 3", price: "$50", description: "High-quality Bangladeshi product.", imageUrl: "https://via.placeholder.com/150" }
  ];
  
  document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("productSearch").value.trim();
    if (!searchQuery) {
      alert("Please enter a product name to search.");
      return;
    }
  
    showLoadingBar();
  
    setTimeout(function () {
      searchProduct(searchQuery);
      hideLoadingBar();
    }, 2000); // Simulate 2 seconds of processing
  });
  
  function showLoadingBar() {
    document.getElementById("loadingBar").classList.remove("hidden");
    document.getElementById("progress").style.width = "0%";
  }
  
  function hideLoadingBar() {
    document.getElementById("loadingBar").classList.add("hidden");
  }
  
  function searchProduct(query) {
    const productFound = israeliProducts.find(product => product.name.toLowerCase().includes(query.toLowerCase()));
    
    if (productFound) {
      displayCart(productFound);
      suggestAlternatives();
    } else {
      document.getElementById("searchResult").textContent = "No Israeli product found. Please try another search.";
      document.getElementById("israel-product-container").classList.add("hidden");
      document.getElementById("alternatives-container").classList.add("hidden");
    }
  }
  
  function displayCart(product) {
    document.getElementById("productName").textContent = `Product: ${product.name}`;
    // document.getElementById("productPrice").textContent = `Price: ${product.price}`;
    document.getElementById("productDescription").textContent = `Description: ${product.description}`;
    document.getElementById("productImage").src = product.imageUrl;
  
    document.getElementById("israel-product-container").classList.remove("hidden");
  }
  
  function suggestAlternatives() {
    let list = document.getElementById("suggestionsList");
    list.innerHTML = ''; // Clear any previous suggestions
  
    deshiAlternatives.forEach(function (product) {
      let productElement = document.createElement("div");
      productElement.classList.add("suggested-product");
  
      // Left side: Product Info
      let productInfo = document.createElement("div");
      productInfo.classList.add("product-info");
      productInfo.innerHTML = `
        <p><strong>${product.name}</strong></p>
        <p>${product.price}</p>
        <p>${product.description}</p>
      `;
      
      // Right side: Product Image
      let productImage = document.createElement("div");
      productImage.classList.add("product-image");
      productImage.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}" />`;
  
      productElement.appendChild(productInfo);
      productElement.appendChild(productImage);
  
      list.appendChild(productElement);
    });
  
    document.getElementById("alternatives-container").classList.remove("hidden");
  }
  

  