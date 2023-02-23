function  Model() {
   // I am just keeping this empty 
}

Model.prototype.setData = function(incomingData) {
    const dataWithFavorites = incomingData.map((data) => {
        data.isFavorite = false;// this property is added so that i can check which items i liked
        return data;
    })
    console.log(dataWithFavorites, "data");
    this.data = dataWithFavorites;
}

Model.prototype.getData = function() {
    return this.data;
}

Model.prototype.setFavorites = function(array) {
    localStorage.setItem('favorites', JSON.stringify(array));
}

Model.prototype.getFavorites = function() {
    let data = JSON.parse(localStorage.getItem('favorites'));
    return data;
}
