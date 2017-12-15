import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        isMobile: window.innerWidth < 960,
    },
    mutations: {

    },
    mounted () {
        this.onResize();
    },
    methods: {
        onResize () {
            let that = this;
            return window.addEventListener('resize', function() {
                that.isMobile = window.innerWidth < 960;
            });
        }
    }
});

export {store};