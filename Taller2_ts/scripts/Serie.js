var Serie = /** @class */ (function () {
    function Serie(id, title, channel, seasons, description, url_direction, img) {
        this.id = id;
        this.titulo = title;
        this.plataforma = channel;
        this.temporadas = seasons;
        this.descripcion = description;
        this.url = url_direction;
        this.img = img;
    }
    return Serie;
}());
export { Serie };
