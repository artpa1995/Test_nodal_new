module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/styles/mixins.scss";
                @import "@/styles/variables.scss";
                `
            }
        }
    }
};