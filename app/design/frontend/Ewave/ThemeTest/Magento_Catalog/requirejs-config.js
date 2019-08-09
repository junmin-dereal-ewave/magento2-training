var config = {
    map: {
        "*": {
            mystyle: "Magento_Catalog/js/mystyle",
            mystyle2: "Magento_Catalog/js/mystyle2",
        }
    },
    deps: ["Magento_Catalog/js/mytranslation"],
    config: {
        mixins: {
            "Magento_Catalog/js/mystyle": {
                "Magento_Catalog/js/mystyle-mixins": true
            }
        }
    }
}