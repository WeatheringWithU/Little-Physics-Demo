MODELS_MODULE.Cannonball = function(radius, texture){
    /*
     * A Class for representing and manipulating a model which represents a Cannonball.
     *
     * @param radius: The radius of this Cannonball. (Number)
     * @param texture: The texture to apply to the material of this Cannonball.
     * @inherits: MODELS_MODULE.Model
     */

    //public members
    this.radius = radius;
    this.texture = texture;

    this.geometry = null;
    this.material = null;
    this.mesh = null;
    this.body = null;

    //private instance member
    var that = this;

    //private method
    function __init() {
        /*
         * Initialize the geometry, material, mesh, and body of this Cannonball.
         */
        that.geometry = new THREE.SphereBufferGeometry(that.radius, 100, 100);
        that.material = new THREE.MeshPhongMaterial({map: that.texture, side: THREE.DoubleSide});
        that.mesh = new THREE.Mesh(that.geometry, that.material);
        that.mesh.castShadow = true;
        that.body = new CANNON.Body({
            mass: 10,
            type: CANNON.Body.DYNAMIC,
            shape: new CANNON.Sphere(that.radius)
        });
        MODELS_MODULE.Model.call(that, that.geometry, that.material, that.mesh, that.body);
    }
    __init();
};
MODELS_MODULE.Cannonball.prototype = Object.create(MODELS_MODULE.Model.prototype); //This class inherits the Model class



