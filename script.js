var app = new Vue ({
    el: '#app',
    data: {
        targets: [{
            top: 500,
            left: 500,
            expand: false
        },  {
            top: 200,
            left: 200,
            expand: false
        },  {
            top: 100,
            left: 300,
            expand: false
        },  {
            top: 700,
            left: 800,
            expand: false
        },  {
            top: 300,
            left: 200,
            expand: false
        },  {
            top: 643,
            left: 436,
            expand: false
        },  {
            top: 112,
            left: 10,
            expand: false
        },  {
            top: 250,
            left: 50,
            expand: false
        },  {
            top: 300,
            left: 550,
            expand: false
        },  {
            top: 669,
            left: 69,
            expand: false
        }],

        health: 100,
        ended: false,
    },

    methods: {
        hit: function(item) {
            var index = this.targets.indexOf(item);
            this.health -= 10;

            if (this.health <= 0) {
                this.ended = true;
            }
            this.targets[index].expand = true;
            
        },

        restart: function() {
            this.health = 100;
            this.ended = false;
        }
    },

    computed: {

    }
});