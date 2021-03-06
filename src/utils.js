window.degrees_to_radians = function (degrees) {
    /*
     * Convert degrees to radians.
     *
     * @param degrees: The degrees to convert to radians.
     */
    return degrees * (Math.PI / 180);
};
window.load_textures = function (callback) {
    /*
     * Loads all textures into a dictionary.
     *
     * @param callback: The function to call with the loaded textures after all textures are loaded.
     */
    var loader = new THREE.TextureLoader();
    var texture_links = {
        'cannon': 'src/image/cannonball_texture.jpg',
        'wood_floor': 'src/image/wood_floor_texture.jpg',
        'wood_pallet': 'src/image/wall-texture-250x250.png'
    };
    var textures = {};
    var loaded_textures = 0;

    if (Object.keys(texture_links).length == 0) {
        callback(texture_links);
    }
    for (var key in texture_links){
        if (texture_links.hasOwnProperty(key)){
            (function (texture_name) {
                console.log(texture_name);
                loader.load(texture_links[texture_name], function (texture) {
                    textures[texture_name] = texture;
                    loaded_textures++;
                    if (loaded_textures == Object.keys(texture_links).length){
                        callback(textures);
                    }
                });
            })(key);
        }
    }
};
