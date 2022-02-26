var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_metroMelbourne_1 = new ol.format.GeoJSON();
var features_metroMelbourne_1 = format_metroMelbourne_1.readFeatures(json_metroMelbourne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_metroMelbourne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_metroMelbourne_1.addFeatures(features_metroMelbourne_1);
var lyr_metroMelbourne_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_metroMelbourne_1, 
                style: style_metroMelbourne_1,
                interactive: false,
                title: '<img src="styles/legend/metroMelbourne_1.png" /> metro Melbourne'
            });
var format_Case7Vt035_2 = new ol.format.GeoJSON();
var features_Case7Vt035_2 = format_Case7Vt035_2.readFeatures(json_Case7Vt035_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case7Vt035_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case7Vt035_2.addFeatures(features_Case7Vt035_2);
var lyr_Case7Vt035_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case7Vt035_2, 
                style: style_Case7Vt035_2,
                interactive: false,
    title: 'Case 7: Vt=0.35<br />\
    <img src="styles/legend/Case7Vt035_2_0.png" /> f532<br />\
    <img src="styles/legend/Case7Vt035_2_1.png" /> f534<br />\
    <img src="styles/legend/Case7Vt035_2_2.png" /> f535<br />\
    <img src="styles/legend/Case7Vt035_2_3.png" /> f559<br />\
    <img src="styles/legend/Case7Vt035_2_4.png" /> f560<br />\
    <img src="styles/legend/Case7Vt035_2_5.png" /> f561<br />\
    <img src="styles/legend/Case7Vt035_2_6.png" /> f562<br />\
    <img src="styles/legend/Case7Vt035_2_7.png" /> f563<br />\
    <img src="styles/legend/Case7Vt035_2_8.png" /> f564<br />\
    <img src="styles/legend/Case7Vt035_2_9.png" /> f565<br />\
    <img src="styles/legend/Case7Vt035_2_10.png" /> f566<br />\
    <img src="styles/legend/Case7Vt035_2_11.png" /> f588<br />\
    <img src="styles/legend/Case7Vt035_2_12.png" /> f589<br />\
    <img src="styles/legend/Case7Vt035_2_13.png" /> f590<br />\
    <img src="styles/legend/Case7Vt035_2_14.png" /> f591<br />\
    <img src="styles/legend/Case7Vt035_2_15.png" /> f592<br />\
    <img src="styles/legend/Case7Vt035_2_16.png" /> f593<br />\
    <img src="styles/legend/Case7Vt035_2_17.png" /> f594<br />\
    <img src="styles/legend/Case7Vt035_2_18.png" /> f595<br />\
    <img src="styles/legend/Case7Vt035_2_19.png" /> f597<br />\
    <img src="styles/legend/Case7Vt035_2_20.png" /> f598<br />\
    <img src="styles/legend/Case7Vt035_2_21.png" /> f605<br />\
    <img src="styles/legend/Case7Vt035_2_22.png" /> f606<br />\
    <img src="styles/legend/Case7Vt035_2_23.png" /> f607<br />\
    <img src="styles/legend/Case7Vt035_2_24.png" /> f611<br />\
    <img src="styles/legend/Case7Vt035_2_25.png" /> f612<br />\
    <img src="styles/legend/Case7Vt035_2_26.png" /> f613<br />\
    <img src="styles/legend/Case7Vt035_2_27.png" /> f614<br />\
    <img src="styles/legend/Case7Vt035_2_28.png" /> f615<br />\
    <img src="styles/legend/Case7Vt035_2_29.png" /> f618<br />\
    <img src="styles/legend/Case7Vt035_2_30.png" /> f620<br />\
    <img src="styles/legend/Case7Vt035_2_31.png" /> f621<br />\
    <img src="styles/legend/Case7Vt035_2_32.png" /> f622<br />\
    <img src="styles/legend/Case7Vt035_2_33.png" /> f625<br />\
    <img src="styles/legend/Case7Vt035_2_34.png" /> f626<br />\
    <img src="styles/legend/Case7Vt035_2_35.png" /> f627<br />\
    <img src="styles/legend/Case7Vt035_2_36.png" /> f628<br />\
    <img src="styles/legend/Case7Vt035_2_37.png" /> f629<br />\
    <img src="styles/legend/Case7Vt035_2_38.png" /> f630<br />\
    <img src="styles/legend/Case7Vt035_2_39.png" /> f631<br />\
    <img src="styles/legend/Case7Vt035_2_40.png" /> f632<br />\
    <img src="styles/legend/Case7Vt035_2_41.png" /> f633<br />\
    <img src="styles/legend/Case7Vt035_2_42.png" /> f634<br />\
    <img src="styles/legend/Case7Vt035_2_43.png" /> f635<br />\
    <img src="styles/legend/Case7Vt035_2_44.png" /> f636<br />\
    <img src="styles/legend/Case7Vt035_2_45.png" /> f637<br />\
    <img src="styles/legend/Case7Vt035_2_46.png" /> f638<br />\
    <img src="styles/legend/Case7Vt035_2_47.png" /> f639<br />\
    <img src="styles/legend/Case7Vt035_2_48.png" /> f640<br />\
    <img src="styles/legend/Case7Vt035_2_49.png" /> f641<br />\
    <img src="styles/legend/Case7Vt035_2_50.png" /> f642<br />\
    <img src="styles/legend/Case7Vt035_2_51.png" /> f643<br />\
    <img src="styles/legend/Case7Vt035_2_52.png" /> f644<br />\
    <img src="styles/legend/Case7Vt035_2_53.png" /> f647<br />\
    <img src="styles/legend/Case7Vt035_2_54.png" /> f648<br />\
    <img src="styles/legend/Case7Vt035_2_55.png" /> f649<br />\
    <img src="styles/legend/Case7Vt035_2_56.png" /> f650<br />\
    <img src="styles/legend/Case7Vt035_2_57.png" /> f651<br />\
    <img src="styles/legend/Case7Vt035_2_58.png" /> f652<br />\
    <img src="styles/legend/Case7Vt035_2_59.png" /> f654<br />\
    <img src="styles/legend/Case7Vt035_2_60.png" /> f655<br />\
    <img src="styles/legend/Case7Vt035_2_61.png" /> f656<br />\
    <img src="styles/legend/Case7Vt035_2_62.png" /> f657<br />\
    <img src="styles/legend/Case7Vt035_2_63.png" /> f658<br />\
    <img src="styles/legend/Case7Vt035_2_64.png" /> <br />'
        });
var format_Case6btw30sp075r15mins_3 = new ol.format.GeoJSON();
var features_Case6btw30sp075r15mins_3 = format_Case6btw30sp075r15mins_3.readFeatures(json_Case6btw30sp075r15mins_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case6btw30sp075r15mins_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case6btw30sp075r15mins_3.addFeatures(features_Case6btw30sp075r15mins_3);
var lyr_Case6btw30sp075r15mins_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case6btw30sp075r15mins_3, 
                style: style_Case6btw30sp075r15mins_3,
                interactive: false,
    title: 'Case 6b: tw=30s p=0.75 r=15mins<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_0.png" /> f532<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_1.png" /> f534<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_2.png" /> f535<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_3.png" /> f559<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_4.png" /> f560<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_5.png" /> f561<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_6.png" /> f562<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_7.png" /> f563<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_8.png" /> f564<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_9.png" /> f565<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_10.png" /> f566<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_11.png" /> f588<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_12.png" /> f589<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_13.png" /> f590<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_14.png" /> f591<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_15.png" /> f592<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_16.png" /> f593<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_17.png" /> f594<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_18.png" /> f595<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_19.png" /> f597<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_20.png" /> f598<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_21.png" /> f605<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_22.png" /> f606<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_23.png" /> f607<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_24.png" /> f611<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_25.png" /> f612<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_26.png" /> f613<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_27.png" /> f614<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_28.png" /> f615<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_29.png" /> f618<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_30.png" /> f620<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_31.png" /> f621<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_32.png" /> f622<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_33.png" /> f625<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_34.png" /> f626<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_35.png" /> f627<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_36.png" /> f628<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_37.png" /> f629<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_38.png" /> f630<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_39.png" /> f631<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_40.png" /> f632<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_41.png" /> f633<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_42.png" /> f634<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_43.png" /> f635<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_44.png" /> f636<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_45.png" /> f637<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_46.png" /> f638<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_47.png" /> f639<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_48.png" /> f640<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_49.png" /> f641<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_50.png" /> f642<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_51.png" /> f643<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_52.png" /> f644<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_53.png" /> f647<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_54.png" /> f648<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_55.png" /> f649<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_56.png" /> f650<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_57.png" /> f651<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_58.png" /> f652<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_59.png" /> f654<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_60.png" /> f655<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_61.png" /> f656<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_62.png" /> f657<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_63.png" /> f658<br />\
    <img src="styles/legend/Case6btw30sp075r15mins_3_64.png" /> <br />'
        });
var format_Case6atw30sp05r15mins_4 = new ol.format.GeoJSON();
var features_Case6atw30sp05r15mins_4 = format_Case6atw30sp05r15mins_4.readFeatures(json_Case6atw30sp05r15mins_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case6atw30sp05r15mins_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case6atw30sp05r15mins_4.addFeatures(features_Case6atw30sp05r15mins_4);
var lyr_Case6atw30sp05r15mins_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case6atw30sp05r15mins_4, 
                style: style_Case6atw30sp05r15mins_4,
                interactive: false,
    title: 'Case 6a: tw=30s p=0.5 r=15mins<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_0.png" /> f532<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_1.png" /> f534<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_2.png" /> f535<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_3.png" /> f559<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_4.png" /> f560<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_5.png" /> f561<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_6.png" /> f562<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_7.png" /> f563<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_8.png" /> f564<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_9.png" /> f565<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_10.png" /> f566<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_11.png" /> f588<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_12.png" /> f589<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_13.png" /> f590<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_14.png" /> f591<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_15.png" /> f592<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_16.png" /> f593<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_17.png" /> f594<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_18.png" /> f595<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_19.png" /> f597<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_20.png" /> f598<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_21.png" /> f605<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_22.png" /> f606<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_23.png" /> f607<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_24.png" /> f611<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_25.png" /> f612<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_26.png" /> f613<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_27.png" /> f614<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_28.png" /> f615<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_29.png" /> f618<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_30.png" /> f620<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_31.png" /> f621<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_32.png" /> f622<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_33.png" /> f625<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_34.png" /> f626<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_35.png" /> f627<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_36.png" /> f628<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_37.png" /> f629<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_38.png" /> f630<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_39.png" /> f631<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_40.png" /> f632<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_41.png" /> f633<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_42.png" /> f634<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_43.png" /> f635<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_44.png" /> f636<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_45.png" /> f637<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_46.png" /> f638<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_47.png" /> f639<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_48.png" /> f640<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_49.png" /> f641<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_50.png" /> f642<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_51.png" /> f643<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_52.png" /> f644<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_53.png" /> f647<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_54.png" /> f648<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_55.png" /> f649<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_56.png" /> f650<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_57.png" /> f651<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_58.png" /> f652<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_59.png" /> f654<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_60.png" /> f655<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_61.png" /> f656<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_62.png" /> f657<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_63.png" /> f658<br />\
    <img src="styles/legend/Case6atw30sp05r15mins_4_64.png" /> <br />'
        });
var format_Case5btw60sp05r15mins_5 = new ol.format.GeoJSON();
var features_Case5btw60sp05r15mins_5 = format_Case5btw60sp05r15mins_5.readFeatures(json_Case5btw60sp05r15mins_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case5btw60sp05r15mins_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case5btw60sp05r15mins_5.addFeatures(features_Case5btw60sp05r15mins_5);
var lyr_Case5btw60sp05r15mins_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case5btw60sp05r15mins_5, 
                style: style_Case5btw60sp05r15mins_5,
                interactive: false,
    title: 'Case 5b: tw=60s p=0.5 r=15mins<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_0.png" /> f532<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_1.png" /> f534<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_2.png" /> f535<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_3.png" /> f559<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_4.png" /> f560<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_5.png" /> f561<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_6.png" /> f562<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_7.png" /> f563<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_8.png" /> f564<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_9.png" /> f565<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_10.png" /> f566<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_11.png" /> f588<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_12.png" /> f589<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_13.png" /> f590<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_14.png" /> f591<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_15.png" /> f592<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_16.png" /> f593<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_17.png" /> f594<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_18.png" /> f595<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_19.png" /> f597<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_20.png" /> f598<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_21.png" /> f605<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_22.png" /> f606<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_23.png" /> f607<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_24.png" /> f611<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_25.png" /> f612<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_26.png" /> f613<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_27.png" /> f614<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_28.png" /> f615<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_29.png" /> f618<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_30.png" /> f620<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_31.png" /> f621<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_32.png" /> f622<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_33.png" /> f625<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_34.png" /> f626<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_35.png" /> f627<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_36.png" /> f628<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_37.png" /> f629<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_38.png" /> f630<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_39.png" /> f631<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_40.png" /> f632<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_41.png" /> f633<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_42.png" /> f634<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_43.png" /> f635<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_44.png" /> f636<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_45.png" /> f637<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_46.png" /> f638<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_47.png" /> f639<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_48.png" /> f640<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_49.png" /> f641<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_50.png" /> f642<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_51.png" /> f643<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_52.png" /> f644<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_53.png" /> f647<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_54.png" /> f648<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_55.png" /> f649<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_56.png" /> f650<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_57.png" /> f651<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_58.png" /> f652<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_59.png" /> f654<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_60.png" /> f655<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_61.png" /> f656<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_62.png" /> f657<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_63.png" /> f658<br />\
    <img src="styles/legend/Case5btw60sp05r15mins_5_64.png" /> <br />'
        });
var format_Case5atw30sp05r15mins_6 = new ol.format.GeoJSON();
var features_Case5atw30sp05r15mins_6 = format_Case5atw30sp05r15mins_6.readFeatures(json_Case5atw30sp05r15mins_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case5atw30sp05r15mins_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case5atw30sp05r15mins_6.addFeatures(features_Case5atw30sp05r15mins_6);
var lyr_Case5atw30sp05r15mins_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case5atw30sp05r15mins_6, 
                style: style_Case5atw30sp05r15mins_6,
                interactive: false,
    title: 'Case 5a: tw=30s p=0.5 r=15mins<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_0.png" /> f532<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_1.png" /> f534<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_2.png" /> f535<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_3.png" /> f559<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_4.png" /> f560<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_5.png" /> f561<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_6.png" /> f562<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_7.png" /> f563<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_8.png" /> f564<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_9.png" /> f565<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_10.png" /> f566<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_11.png" /> f588<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_12.png" /> f589<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_13.png" /> f590<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_14.png" /> f591<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_15.png" /> f592<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_16.png" /> f593<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_17.png" /> f594<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_18.png" /> f595<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_19.png" /> f597<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_20.png" /> f598<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_21.png" /> f605<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_22.png" /> f606<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_23.png" /> f607<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_24.png" /> f611<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_25.png" /> f612<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_26.png" /> f613<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_27.png" /> f614<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_28.png" /> f615<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_29.png" /> f618<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_30.png" /> f620<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_31.png" /> f621<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_32.png" /> f622<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_33.png" /> f625<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_34.png" /> f626<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_35.png" /> f627<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_36.png" /> f628<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_37.png" /> f629<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_38.png" /> f630<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_39.png" /> f631<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_40.png" /> f632<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_41.png" /> f633<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_42.png" /> f634<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_43.png" /> f635<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_44.png" /> f636<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_45.png" /> f637<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_46.png" /> f638<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_47.png" /> f639<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_48.png" /> f640<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_49.png" /> f641<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_50.png" /> f642<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_51.png" /> f643<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_52.png" /> f644<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_53.png" /> f647<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_54.png" /> f648<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_55.png" /> f649<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_56.png" /> f650<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_57.png" /> f651<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_58.png" /> f652<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_59.png" /> f654<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_60.png" /> f655<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_61.png" /> f656<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_62.png" /> f657<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_63.png" /> f658<br />\
    <img src="styles/legend/Case5atw30sp05r15mins_6_64.png" /> <br />'
        });
var format_Case4bVr60r15mins_7 = new ol.format.GeoJSON();
var features_Case4bVr60r15mins_7 = format_Case4bVr60r15mins_7.readFeatures(json_Case4bVr60r15mins_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case4bVr60r15mins_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case4bVr60r15mins_7.addFeatures(features_Case4bVr60r15mins_7);
var lyr_Case4bVr60r15mins_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case4bVr60r15mins_7, 
                style: style_Case4bVr60r15mins_7,
                interactive: false,
    title: 'Case 4b: Vr=60% r=15mins<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_0.png" /> f532<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_1.png" /> f534<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_2.png" /> f535<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_3.png" /> f559<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_4.png" /> f560<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_5.png" /> f561<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_6.png" /> f562<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_7.png" /> f563<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_8.png" /> f564<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_9.png" /> f565<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_10.png" /> f566<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_11.png" /> f588<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_12.png" /> f589<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_13.png" /> f590<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_14.png" /> f591<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_15.png" /> f592<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_16.png" /> f593<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_17.png" /> f594<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_18.png" /> f595<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_19.png" /> f597<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_20.png" /> f598<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_21.png" /> f605<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_22.png" /> f606<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_23.png" /> f607<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_24.png" /> f611<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_25.png" /> f612<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_26.png" /> f613<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_27.png" /> f614<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_28.png" /> f615<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_29.png" /> f618<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_30.png" /> f620<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_31.png" /> f621<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_32.png" /> f622<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_33.png" /> f625<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_34.png" /> f626<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_35.png" /> f627<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_36.png" /> f628<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_37.png" /> f629<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_38.png" /> f630<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_39.png" /> f631<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_40.png" /> f632<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_41.png" /> f633<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_42.png" /> f634<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_43.png" /> f635<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_44.png" /> f636<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_45.png" /> f637<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_46.png" /> f638<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_47.png" /> f639<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_48.png" /> f640<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_49.png" /> f641<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_50.png" /> f642<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_51.png" /> f643<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_52.png" /> f644<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_53.png" /> f647<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_54.png" /> f648<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_55.png" /> f649<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_56.png" /> f650<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_57.png" /> f651<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_58.png" /> f652<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_59.png" /> f654<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_60.png" /> f655<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_61.png" /> f656<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_62.png" /> f657<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_63.png" /> f658<br />\
    <img src="styles/legend/Case4bVr60r15mins_7_64.png" /> <br />'
        });
var format_Case4aVr40r15mins_8 = new ol.format.GeoJSON();
var features_Case4aVr40r15mins_8 = format_Case4aVr40r15mins_8.readFeatures(json_Case4aVr40r15mins_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case4aVr40r15mins_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case4aVr40r15mins_8.addFeatures(features_Case4aVr40r15mins_8);
var lyr_Case4aVr40r15mins_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case4aVr40r15mins_8, 
                style: style_Case4aVr40r15mins_8,
                interactive: false,
    title: 'Case 4a: Vr=40% r=15mins<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_0.png" /> f532<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_1.png" /> f534<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_2.png" /> f535<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_3.png" /> f559<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_4.png" /> f560<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_5.png" /> f561<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_6.png" /> f562<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_7.png" /> f563<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_8.png" /> f564<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_9.png" /> f565<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_10.png" /> f566<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_11.png" /> f588<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_12.png" /> f589<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_13.png" /> f590<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_14.png" /> f591<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_15.png" /> f592<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_16.png" /> f593<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_17.png" /> f594<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_18.png" /> f595<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_19.png" /> f597<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_20.png" /> f598<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_21.png" /> f605<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_22.png" /> f606<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_23.png" /> f607<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_24.png" /> f611<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_25.png" /> f612<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_26.png" /> f613<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_27.png" /> f614<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_28.png" /> f615<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_29.png" /> f618<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_30.png" /> f620<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_31.png" /> f621<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_32.png" /> f622<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_33.png" /> f625<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_34.png" /> f626<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_35.png" /> f627<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_36.png" /> f628<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_37.png" /> f629<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_38.png" /> f630<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_39.png" /> f631<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_40.png" /> f632<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_41.png" /> f633<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_42.png" /> f634<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_43.png" /> f635<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_44.png" /> f636<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_45.png" /> f637<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_46.png" /> f638<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_47.png" /> f639<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_48.png" /> f640<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_49.png" /> f641<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_50.png" /> f642<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_51.png" /> f643<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_52.png" /> f644<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_53.png" /> f647<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_54.png" /> f648<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_55.png" /> f649<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_56.png" /> f650<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_57.png" /> f651<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_58.png" /> f652<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_59.png" /> f654<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_60.png" /> f655<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_61.png" /> f656<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_62.png" /> f657<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_63.png" /> f658<br />\
    <img src="styles/legend/Case4aVr40r15mins_8_64.png" /> <br />'
        });
var format_Case3btw30sp075_9 = new ol.format.GeoJSON();
var features_Case3btw30sp075_9 = format_Case3btw30sp075_9.readFeatures(json_Case3btw30sp075_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case3btw30sp075_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case3btw30sp075_9.addFeatures(features_Case3btw30sp075_9);
var lyr_Case3btw30sp075_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case3btw30sp075_9, 
                style: style_Case3btw30sp075_9,
                interactive: false,
    title: 'Case 3b: tw=30s p=0.75<br />\
    <img src="styles/legend/Case3btw30sp075_9_0.png" /> f532<br />\
    <img src="styles/legend/Case3btw30sp075_9_1.png" /> f534<br />\
    <img src="styles/legend/Case3btw30sp075_9_2.png" /> f535<br />\
    <img src="styles/legend/Case3btw30sp075_9_3.png" /> f559<br />\
    <img src="styles/legend/Case3btw30sp075_9_4.png" /> f560<br />\
    <img src="styles/legend/Case3btw30sp075_9_5.png" /> f561<br />\
    <img src="styles/legend/Case3btw30sp075_9_6.png" /> f562<br />\
    <img src="styles/legend/Case3btw30sp075_9_7.png" /> f563<br />\
    <img src="styles/legend/Case3btw30sp075_9_8.png" /> f564<br />\
    <img src="styles/legend/Case3btw30sp075_9_9.png" /> f565<br />\
    <img src="styles/legend/Case3btw30sp075_9_10.png" /> f566<br />\
    <img src="styles/legend/Case3btw30sp075_9_11.png" /> f588<br />\
    <img src="styles/legend/Case3btw30sp075_9_12.png" /> f589<br />\
    <img src="styles/legend/Case3btw30sp075_9_13.png" /> f590<br />\
    <img src="styles/legend/Case3btw30sp075_9_14.png" /> f591<br />\
    <img src="styles/legend/Case3btw30sp075_9_15.png" /> f592<br />\
    <img src="styles/legend/Case3btw30sp075_9_16.png" /> f593<br />\
    <img src="styles/legend/Case3btw30sp075_9_17.png" /> f594<br />\
    <img src="styles/legend/Case3btw30sp075_9_18.png" /> f595<br />\
    <img src="styles/legend/Case3btw30sp075_9_19.png" /> f597<br />\
    <img src="styles/legend/Case3btw30sp075_9_20.png" /> f598<br />\
    <img src="styles/legend/Case3btw30sp075_9_21.png" /> f605<br />\
    <img src="styles/legend/Case3btw30sp075_9_22.png" /> f606<br />\
    <img src="styles/legend/Case3btw30sp075_9_23.png" /> f607<br />\
    <img src="styles/legend/Case3btw30sp075_9_24.png" /> f611<br />\
    <img src="styles/legend/Case3btw30sp075_9_25.png" /> f612<br />\
    <img src="styles/legend/Case3btw30sp075_9_26.png" /> f613<br />\
    <img src="styles/legend/Case3btw30sp075_9_27.png" /> f614<br />\
    <img src="styles/legend/Case3btw30sp075_9_28.png" /> f615<br />\
    <img src="styles/legend/Case3btw30sp075_9_29.png" /> f618<br />\
    <img src="styles/legend/Case3btw30sp075_9_30.png" /> f620<br />\
    <img src="styles/legend/Case3btw30sp075_9_31.png" /> f621<br />\
    <img src="styles/legend/Case3btw30sp075_9_32.png" /> f622<br />\
    <img src="styles/legend/Case3btw30sp075_9_33.png" /> f625<br />\
    <img src="styles/legend/Case3btw30sp075_9_34.png" /> f626<br />\
    <img src="styles/legend/Case3btw30sp075_9_35.png" /> f627<br />\
    <img src="styles/legend/Case3btw30sp075_9_36.png" /> f628<br />\
    <img src="styles/legend/Case3btw30sp075_9_37.png" /> f629<br />\
    <img src="styles/legend/Case3btw30sp075_9_38.png" /> f630<br />\
    <img src="styles/legend/Case3btw30sp075_9_39.png" /> f631<br />\
    <img src="styles/legend/Case3btw30sp075_9_40.png" /> f632<br />\
    <img src="styles/legend/Case3btw30sp075_9_41.png" /> f633<br />\
    <img src="styles/legend/Case3btw30sp075_9_42.png" /> f634<br />\
    <img src="styles/legend/Case3btw30sp075_9_43.png" /> f635<br />\
    <img src="styles/legend/Case3btw30sp075_9_44.png" /> f636<br />\
    <img src="styles/legend/Case3btw30sp075_9_45.png" /> f637<br />\
    <img src="styles/legend/Case3btw30sp075_9_46.png" /> f638<br />\
    <img src="styles/legend/Case3btw30sp075_9_47.png" /> f639<br />\
    <img src="styles/legend/Case3btw30sp075_9_48.png" /> f640<br />\
    <img src="styles/legend/Case3btw30sp075_9_49.png" /> f641<br />\
    <img src="styles/legend/Case3btw30sp075_9_50.png" /> f642<br />\
    <img src="styles/legend/Case3btw30sp075_9_51.png" /> f643<br />\
    <img src="styles/legend/Case3btw30sp075_9_52.png" /> f644<br />\
    <img src="styles/legend/Case3btw30sp075_9_53.png" /> f647<br />\
    <img src="styles/legend/Case3btw30sp075_9_54.png" /> f648<br />\
    <img src="styles/legend/Case3btw30sp075_9_55.png" /> f649<br />\
    <img src="styles/legend/Case3btw30sp075_9_56.png" /> f650<br />\
    <img src="styles/legend/Case3btw30sp075_9_57.png" /> f651<br />\
    <img src="styles/legend/Case3btw30sp075_9_58.png" /> f652<br />\
    <img src="styles/legend/Case3btw30sp075_9_59.png" /> f654<br />\
    <img src="styles/legend/Case3btw30sp075_9_60.png" /> f655<br />\
    <img src="styles/legend/Case3btw30sp075_9_61.png" /> f656<br />\
    <img src="styles/legend/Case3btw30sp075_9_62.png" /> f657<br />\
    <img src="styles/legend/Case3btw30sp075_9_63.png" /> f658<br />\
    <img src="styles/legend/Case3btw30sp075_9_64.png" /> <br />'
        });
var format_Case3atw30sp05_10 = new ol.format.GeoJSON();
var features_Case3atw30sp05_10 = format_Case3atw30sp05_10.readFeatures(json_Case3atw30sp05_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case3atw30sp05_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case3atw30sp05_10.addFeatures(features_Case3atw30sp05_10);
var lyr_Case3atw30sp05_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case3atw30sp05_10, 
                style: style_Case3atw30sp05_10,
                interactive: false,
    title: 'Case 3a: tw=30s p=0.5<br />\
    <img src="styles/legend/Case3atw30sp05_10_0.png" /> f532<br />\
    <img src="styles/legend/Case3atw30sp05_10_1.png" /> f534<br />\
    <img src="styles/legend/Case3atw30sp05_10_2.png" /> f535<br />\
    <img src="styles/legend/Case3atw30sp05_10_3.png" /> f559<br />\
    <img src="styles/legend/Case3atw30sp05_10_4.png" /> f560<br />\
    <img src="styles/legend/Case3atw30sp05_10_5.png" /> f561<br />\
    <img src="styles/legend/Case3atw30sp05_10_6.png" /> f562<br />\
    <img src="styles/legend/Case3atw30sp05_10_7.png" /> f563<br />\
    <img src="styles/legend/Case3atw30sp05_10_8.png" /> f564<br />\
    <img src="styles/legend/Case3atw30sp05_10_9.png" /> f565<br />\
    <img src="styles/legend/Case3atw30sp05_10_10.png" /> f566<br />\
    <img src="styles/legend/Case3atw30sp05_10_11.png" /> f588<br />\
    <img src="styles/legend/Case3atw30sp05_10_12.png" /> f589<br />\
    <img src="styles/legend/Case3atw30sp05_10_13.png" /> f590<br />\
    <img src="styles/legend/Case3atw30sp05_10_14.png" /> f591<br />\
    <img src="styles/legend/Case3atw30sp05_10_15.png" /> f592<br />\
    <img src="styles/legend/Case3atw30sp05_10_16.png" /> f593<br />\
    <img src="styles/legend/Case3atw30sp05_10_17.png" /> f594<br />\
    <img src="styles/legend/Case3atw30sp05_10_18.png" /> f595<br />\
    <img src="styles/legend/Case3atw30sp05_10_19.png" /> f597<br />\
    <img src="styles/legend/Case3atw30sp05_10_20.png" /> f598<br />\
    <img src="styles/legend/Case3atw30sp05_10_21.png" /> f605<br />\
    <img src="styles/legend/Case3atw30sp05_10_22.png" /> f606<br />\
    <img src="styles/legend/Case3atw30sp05_10_23.png" /> f607<br />\
    <img src="styles/legend/Case3atw30sp05_10_24.png" /> f611<br />\
    <img src="styles/legend/Case3atw30sp05_10_25.png" /> f612<br />\
    <img src="styles/legend/Case3atw30sp05_10_26.png" /> f613<br />\
    <img src="styles/legend/Case3atw30sp05_10_27.png" /> f614<br />\
    <img src="styles/legend/Case3atw30sp05_10_28.png" /> f615<br />\
    <img src="styles/legend/Case3atw30sp05_10_29.png" /> f618<br />\
    <img src="styles/legend/Case3atw30sp05_10_30.png" /> f620<br />\
    <img src="styles/legend/Case3atw30sp05_10_31.png" /> f621<br />\
    <img src="styles/legend/Case3atw30sp05_10_32.png" /> f622<br />\
    <img src="styles/legend/Case3atw30sp05_10_33.png" /> f625<br />\
    <img src="styles/legend/Case3atw30sp05_10_34.png" /> f626<br />\
    <img src="styles/legend/Case3atw30sp05_10_35.png" /> f627<br />\
    <img src="styles/legend/Case3atw30sp05_10_36.png" /> f628<br />\
    <img src="styles/legend/Case3atw30sp05_10_37.png" /> f629<br />\
    <img src="styles/legend/Case3atw30sp05_10_38.png" /> f630<br />\
    <img src="styles/legend/Case3atw30sp05_10_39.png" /> f631<br />\
    <img src="styles/legend/Case3atw30sp05_10_40.png" /> f632<br />\
    <img src="styles/legend/Case3atw30sp05_10_41.png" /> f633<br />\
    <img src="styles/legend/Case3atw30sp05_10_42.png" /> f634<br />\
    <img src="styles/legend/Case3atw30sp05_10_43.png" /> f635<br />\
    <img src="styles/legend/Case3atw30sp05_10_44.png" /> f636<br />\
    <img src="styles/legend/Case3atw30sp05_10_45.png" /> f637<br />\
    <img src="styles/legend/Case3atw30sp05_10_46.png" /> f638<br />\
    <img src="styles/legend/Case3atw30sp05_10_47.png" /> f639<br />\
    <img src="styles/legend/Case3atw30sp05_10_48.png" /> f640<br />\
    <img src="styles/legend/Case3atw30sp05_10_49.png" /> f641<br />\
    <img src="styles/legend/Case3atw30sp05_10_50.png" /> f642<br />\
    <img src="styles/legend/Case3atw30sp05_10_51.png" /> f643<br />\
    <img src="styles/legend/Case3atw30sp05_10_52.png" /> f644<br />\
    <img src="styles/legend/Case3atw30sp05_10_53.png" /> f647<br />\
    <img src="styles/legend/Case3atw30sp05_10_54.png" /> f648<br />\
    <img src="styles/legend/Case3atw30sp05_10_55.png" /> f649<br />\
    <img src="styles/legend/Case3atw30sp05_10_56.png" /> f650<br />\
    <img src="styles/legend/Case3atw30sp05_10_57.png" /> f651<br />\
    <img src="styles/legend/Case3atw30sp05_10_58.png" /> f652<br />\
    <img src="styles/legend/Case3atw30sp05_10_59.png" /> f654<br />\
    <img src="styles/legend/Case3atw30sp05_10_60.png" /> f655<br />\
    <img src="styles/legend/Case3atw30sp05_10_61.png" /> f656<br />\
    <img src="styles/legend/Case3atw30sp05_10_62.png" /> f657<br />\
    <img src="styles/legend/Case3atw30sp05_10_63.png" /> f658<br />\
    <img src="styles/legend/Case3atw30sp05_10_64.png" /> <br />'
        });
var format_Case2btw30sp05_11 = new ol.format.GeoJSON();
var features_Case2btw30sp05_11 = format_Case2btw30sp05_11.readFeatures(json_Case2btw30sp05_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case2btw30sp05_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case2btw30sp05_11.addFeatures(features_Case2btw30sp05_11);
var lyr_Case2btw30sp05_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case2btw30sp05_11, 
                style: style_Case2btw30sp05_11,
                interactive: false,
    title: 'Case 2b: tw=30s p=0.5<br />\
    <img src="styles/legend/Case2btw30sp05_11_0.png" /> f532<br />\
    <img src="styles/legend/Case2btw30sp05_11_1.png" /> f534<br />\
    <img src="styles/legend/Case2btw30sp05_11_2.png" /> f535<br />\
    <img src="styles/legend/Case2btw30sp05_11_3.png" /> f559<br />\
    <img src="styles/legend/Case2btw30sp05_11_4.png" /> f560<br />\
    <img src="styles/legend/Case2btw30sp05_11_5.png" /> f561<br />\
    <img src="styles/legend/Case2btw30sp05_11_6.png" /> f562<br />\
    <img src="styles/legend/Case2btw30sp05_11_7.png" /> f563<br />\
    <img src="styles/legend/Case2btw30sp05_11_8.png" /> f564<br />\
    <img src="styles/legend/Case2btw30sp05_11_9.png" /> f565<br />\
    <img src="styles/legend/Case2btw30sp05_11_10.png" /> f566<br />\
    <img src="styles/legend/Case2btw30sp05_11_11.png" /> f588<br />\
    <img src="styles/legend/Case2btw30sp05_11_12.png" /> f589<br />\
    <img src="styles/legend/Case2btw30sp05_11_13.png" /> f590<br />\
    <img src="styles/legend/Case2btw30sp05_11_14.png" /> f591<br />\
    <img src="styles/legend/Case2btw30sp05_11_15.png" /> f592<br />\
    <img src="styles/legend/Case2btw30sp05_11_16.png" /> f593<br />\
    <img src="styles/legend/Case2btw30sp05_11_17.png" /> f594<br />\
    <img src="styles/legend/Case2btw30sp05_11_18.png" /> f595<br />\
    <img src="styles/legend/Case2btw30sp05_11_19.png" /> f597<br />\
    <img src="styles/legend/Case2btw30sp05_11_20.png" /> f598<br />\
    <img src="styles/legend/Case2btw30sp05_11_21.png" /> f605<br />\
    <img src="styles/legend/Case2btw30sp05_11_22.png" /> f606<br />\
    <img src="styles/legend/Case2btw30sp05_11_23.png" /> f607<br />\
    <img src="styles/legend/Case2btw30sp05_11_24.png" /> f611<br />\
    <img src="styles/legend/Case2btw30sp05_11_25.png" /> f612<br />\
    <img src="styles/legend/Case2btw30sp05_11_26.png" /> f613<br />\
    <img src="styles/legend/Case2btw30sp05_11_27.png" /> f614<br />\
    <img src="styles/legend/Case2btw30sp05_11_28.png" /> f615<br />\
    <img src="styles/legend/Case2btw30sp05_11_29.png" /> f618<br />\
    <img src="styles/legend/Case2btw30sp05_11_30.png" /> f620<br />\
    <img src="styles/legend/Case2btw30sp05_11_31.png" /> f621<br />\
    <img src="styles/legend/Case2btw30sp05_11_32.png" /> f622<br />\
    <img src="styles/legend/Case2btw30sp05_11_33.png" /> f625<br />\
    <img src="styles/legend/Case2btw30sp05_11_34.png" /> f626<br />\
    <img src="styles/legend/Case2btw30sp05_11_35.png" /> f627<br />\
    <img src="styles/legend/Case2btw30sp05_11_36.png" /> f628<br />\
    <img src="styles/legend/Case2btw30sp05_11_37.png" /> f629<br />\
    <img src="styles/legend/Case2btw30sp05_11_38.png" /> f630<br />\
    <img src="styles/legend/Case2btw30sp05_11_39.png" /> f631<br />\
    <img src="styles/legend/Case2btw30sp05_11_40.png" /> f632<br />\
    <img src="styles/legend/Case2btw30sp05_11_41.png" /> f633<br />\
    <img src="styles/legend/Case2btw30sp05_11_42.png" /> f634<br />\
    <img src="styles/legend/Case2btw30sp05_11_43.png" /> f635<br />\
    <img src="styles/legend/Case2btw30sp05_11_44.png" /> f636<br />\
    <img src="styles/legend/Case2btw30sp05_11_45.png" /> f637<br />\
    <img src="styles/legend/Case2btw30sp05_11_46.png" /> f638<br />\
    <img src="styles/legend/Case2btw30sp05_11_47.png" /> f639<br />\
    <img src="styles/legend/Case2btw30sp05_11_48.png" /> f640<br />\
    <img src="styles/legend/Case2btw30sp05_11_49.png" /> f641<br />\
    <img src="styles/legend/Case2btw30sp05_11_50.png" /> f642<br />\
    <img src="styles/legend/Case2btw30sp05_11_51.png" /> f643<br />\
    <img src="styles/legend/Case2btw30sp05_11_52.png" /> f644<br />\
    <img src="styles/legend/Case2btw30sp05_11_53.png" /> f647<br />\
    <img src="styles/legend/Case2btw30sp05_11_54.png" /> f648<br />\
    <img src="styles/legend/Case2btw30sp05_11_55.png" /> f649<br />\
    <img src="styles/legend/Case2btw30sp05_11_56.png" /> f650<br />\
    <img src="styles/legend/Case2btw30sp05_11_57.png" /> f651<br />\
    <img src="styles/legend/Case2btw30sp05_11_58.png" /> f652<br />\
    <img src="styles/legend/Case2btw30sp05_11_59.png" /> f654<br />\
    <img src="styles/legend/Case2btw30sp05_11_60.png" /> f655<br />\
    <img src="styles/legend/Case2btw30sp05_11_61.png" /> f656<br />\
    <img src="styles/legend/Case2btw30sp05_11_62.png" /> f657<br />\
    <img src="styles/legend/Case2btw30sp05_11_63.png" /> f658<br />\
    <img src="styles/legend/Case2btw30sp05_11_64.png" /> <br />'
        });
var format_Case2atw30sp05_12 = new ol.format.GeoJSON();
var features_Case2atw30sp05_12 = format_Case2atw30sp05_12.readFeatures(json_Case2atw30sp05_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case2atw30sp05_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case2atw30sp05_12.addFeatures(features_Case2atw30sp05_12);
var lyr_Case2atw30sp05_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case2atw30sp05_12, 
                style: style_Case2atw30sp05_12,
                interactive: false,
    title: 'Case 2a: tw=30s p=0.5<br />\
    <img src="styles/legend/Case2atw30sp05_12_0.png" /> f532<br />\
    <img src="styles/legend/Case2atw30sp05_12_1.png" /> f534<br />\
    <img src="styles/legend/Case2atw30sp05_12_2.png" /> f535<br />\
    <img src="styles/legend/Case2atw30sp05_12_3.png" /> f559<br />\
    <img src="styles/legend/Case2atw30sp05_12_4.png" /> f560<br />\
    <img src="styles/legend/Case2atw30sp05_12_5.png" /> f561<br />\
    <img src="styles/legend/Case2atw30sp05_12_6.png" /> f562<br />\
    <img src="styles/legend/Case2atw30sp05_12_7.png" /> f563<br />\
    <img src="styles/legend/Case2atw30sp05_12_8.png" /> f564<br />\
    <img src="styles/legend/Case2atw30sp05_12_9.png" /> f565<br />\
    <img src="styles/legend/Case2atw30sp05_12_10.png" /> f566<br />\
    <img src="styles/legend/Case2atw30sp05_12_11.png" /> f588<br />\
    <img src="styles/legend/Case2atw30sp05_12_12.png" /> f589<br />\
    <img src="styles/legend/Case2atw30sp05_12_13.png" /> f590<br />\
    <img src="styles/legend/Case2atw30sp05_12_14.png" /> f591<br />\
    <img src="styles/legend/Case2atw30sp05_12_15.png" /> f592<br />\
    <img src="styles/legend/Case2atw30sp05_12_16.png" /> f593<br />\
    <img src="styles/legend/Case2atw30sp05_12_17.png" /> f594<br />\
    <img src="styles/legend/Case2atw30sp05_12_18.png" /> f595<br />\
    <img src="styles/legend/Case2atw30sp05_12_19.png" /> f597<br />\
    <img src="styles/legend/Case2atw30sp05_12_20.png" /> f598<br />\
    <img src="styles/legend/Case2atw30sp05_12_21.png" /> f605<br />\
    <img src="styles/legend/Case2atw30sp05_12_22.png" /> f606<br />\
    <img src="styles/legend/Case2atw30sp05_12_23.png" /> f607<br />\
    <img src="styles/legend/Case2atw30sp05_12_24.png" /> f611<br />\
    <img src="styles/legend/Case2atw30sp05_12_25.png" /> f612<br />\
    <img src="styles/legend/Case2atw30sp05_12_26.png" /> f613<br />\
    <img src="styles/legend/Case2atw30sp05_12_27.png" /> f614<br />\
    <img src="styles/legend/Case2atw30sp05_12_28.png" /> f615<br />\
    <img src="styles/legend/Case2atw30sp05_12_29.png" /> f618<br />\
    <img src="styles/legend/Case2atw30sp05_12_30.png" /> f620<br />\
    <img src="styles/legend/Case2atw30sp05_12_31.png" /> f621<br />\
    <img src="styles/legend/Case2atw30sp05_12_32.png" /> f622<br />\
    <img src="styles/legend/Case2atw30sp05_12_33.png" /> f625<br />\
    <img src="styles/legend/Case2atw30sp05_12_34.png" /> f626<br />\
    <img src="styles/legend/Case2atw30sp05_12_35.png" /> f627<br />\
    <img src="styles/legend/Case2atw30sp05_12_36.png" /> f628<br />\
    <img src="styles/legend/Case2atw30sp05_12_37.png" /> f629<br />\
    <img src="styles/legend/Case2atw30sp05_12_38.png" /> f630<br />\
    <img src="styles/legend/Case2atw30sp05_12_39.png" /> f631<br />\
    <img src="styles/legend/Case2atw30sp05_12_40.png" /> f632<br />\
    <img src="styles/legend/Case2atw30sp05_12_41.png" /> f633<br />\
    <img src="styles/legend/Case2atw30sp05_12_42.png" /> f634<br />\
    <img src="styles/legend/Case2atw30sp05_12_43.png" /> f635<br />\
    <img src="styles/legend/Case2atw30sp05_12_44.png" /> f636<br />\
    <img src="styles/legend/Case2atw30sp05_12_45.png" /> f637<br />\
    <img src="styles/legend/Case2atw30sp05_12_46.png" /> f638<br />\
    <img src="styles/legend/Case2atw30sp05_12_47.png" /> f639<br />\
    <img src="styles/legend/Case2atw30sp05_12_48.png" /> f640<br />\
    <img src="styles/legend/Case2atw30sp05_12_49.png" /> f641<br />\
    <img src="styles/legend/Case2atw30sp05_12_50.png" /> f642<br />\
    <img src="styles/legend/Case2atw30sp05_12_51.png" /> f643<br />\
    <img src="styles/legend/Case2atw30sp05_12_52.png" /> f644<br />\
    <img src="styles/legend/Case2atw30sp05_12_53.png" /> f647<br />\
    <img src="styles/legend/Case2atw30sp05_12_54.png" /> f648<br />\
    <img src="styles/legend/Case2atw30sp05_12_55.png" /> f649<br />\
    <img src="styles/legend/Case2atw30sp05_12_56.png" /> f650<br />\
    <img src="styles/legend/Case2atw30sp05_12_57.png" /> f651<br />\
    <img src="styles/legend/Case2atw30sp05_12_58.png" /> f652<br />\
    <img src="styles/legend/Case2atw30sp05_12_59.png" /> f654<br />\
    <img src="styles/legend/Case2atw30sp05_12_60.png" /> f655<br />\
    <img src="styles/legend/Case2atw30sp05_12_61.png" /> f656<br />\
    <img src="styles/legend/Case2atw30sp05_12_62.png" /> f657<br />\
    <img src="styles/legend/Case2atw30sp05_12_63.png" /> f658<br />\
    <img src="styles/legend/Case2atw30sp05_12_64.png" /> <br />'
        });
var format_Case1bVr60_13 = new ol.format.GeoJSON();
var features_Case1bVr60_13 = format_Case1bVr60_13.readFeatures(json_Case1bVr60_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case1bVr60_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case1bVr60_13.addFeatures(features_Case1bVr60_13);
var lyr_Case1bVr60_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case1bVr60_13, 
                style: style_Case1bVr60_13,
                interactive: false,
    title: 'Case 1b: Vr=60%<br />\
    <img src="styles/legend/Case1bVr60_13_0.png" /> f532<br />\
    <img src="styles/legend/Case1bVr60_13_1.png" /> f534<br />\
    <img src="styles/legend/Case1bVr60_13_2.png" /> f535<br />\
    <img src="styles/legend/Case1bVr60_13_3.png" /> f559<br />\
    <img src="styles/legend/Case1bVr60_13_4.png" /> f560<br />\
    <img src="styles/legend/Case1bVr60_13_5.png" /> f561<br />\
    <img src="styles/legend/Case1bVr60_13_6.png" /> f562<br />\
    <img src="styles/legend/Case1bVr60_13_7.png" /> f563<br />\
    <img src="styles/legend/Case1bVr60_13_8.png" /> f564<br />\
    <img src="styles/legend/Case1bVr60_13_9.png" /> f565<br />\
    <img src="styles/legend/Case1bVr60_13_10.png" /> f566<br />\
    <img src="styles/legend/Case1bVr60_13_11.png" /> f588<br />\
    <img src="styles/legend/Case1bVr60_13_12.png" /> f589<br />\
    <img src="styles/legend/Case1bVr60_13_13.png" /> f590<br />\
    <img src="styles/legend/Case1bVr60_13_14.png" /> f591<br />\
    <img src="styles/legend/Case1bVr60_13_15.png" /> f592<br />\
    <img src="styles/legend/Case1bVr60_13_16.png" /> f593<br />\
    <img src="styles/legend/Case1bVr60_13_17.png" /> f594<br />\
    <img src="styles/legend/Case1bVr60_13_18.png" /> f595<br />\
    <img src="styles/legend/Case1bVr60_13_19.png" /> f597<br />\
    <img src="styles/legend/Case1bVr60_13_20.png" /> f598<br />\
    <img src="styles/legend/Case1bVr60_13_21.png" /> f605<br />\
    <img src="styles/legend/Case1bVr60_13_22.png" /> f606<br />\
    <img src="styles/legend/Case1bVr60_13_23.png" /> f607<br />\
    <img src="styles/legend/Case1bVr60_13_24.png" /> f611<br />\
    <img src="styles/legend/Case1bVr60_13_25.png" /> f612<br />\
    <img src="styles/legend/Case1bVr60_13_26.png" /> f613<br />\
    <img src="styles/legend/Case1bVr60_13_27.png" /> f614<br />\
    <img src="styles/legend/Case1bVr60_13_28.png" /> f615<br />\
    <img src="styles/legend/Case1bVr60_13_29.png" /> f618<br />\
    <img src="styles/legend/Case1bVr60_13_30.png" /> f620<br />\
    <img src="styles/legend/Case1bVr60_13_31.png" /> f621<br />\
    <img src="styles/legend/Case1bVr60_13_32.png" /> f622<br />\
    <img src="styles/legend/Case1bVr60_13_33.png" /> f625<br />\
    <img src="styles/legend/Case1bVr60_13_34.png" /> f626<br />\
    <img src="styles/legend/Case1bVr60_13_35.png" /> f627<br />\
    <img src="styles/legend/Case1bVr60_13_36.png" /> f628<br />\
    <img src="styles/legend/Case1bVr60_13_37.png" /> f629<br />\
    <img src="styles/legend/Case1bVr60_13_38.png" /> f630<br />\
    <img src="styles/legend/Case1bVr60_13_39.png" /> f631<br />\
    <img src="styles/legend/Case1bVr60_13_40.png" /> f632<br />\
    <img src="styles/legend/Case1bVr60_13_41.png" /> f633<br />\
    <img src="styles/legend/Case1bVr60_13_42.png" /> f634<br />\
    <img src="styles/legend/Case1bVr60_13_43.png" /> f635<br />\
    <img src="styles/legend/Case1bVr60_13_44.png" /> f636<br />\
    <img src="styles/legend/Case1bVr60_13_45.png" /> f637<br />\
    <img src="styles/legend/Case1bVr60_13_46.png" /> f638<br />\
    <img src="styles/legend/Case1bVr60_13_47.png" /> f639<br />\
    <img src="styles/legend/Case1bVr60_13_48.png" /> f640<br />\
    <img src="styles/legend/Case1bVr60_13_49.png" /> f641<br />\
    <img src="styles/legend/Case1bVr60_13_50.png" /> f642<br />\
    <img src="styles/legend/Case1bVr60_13_51.png" /> f643<br />\
    <img src="styles/legend/Case1bVr60_13_52.png" /> f644<br />\
    <img src="styles/legend/Case1bVr60_13_53.png" /> f647<br />\
    <img src="styles/legend/Case1bVr60_13_54.png" /> f648<br />\
    <img src="styles/legend/Case1bVr60_13_55.png" /> f649<br />\
    <img src="styles/legend/Case1bVr60_13_56.png" /> f650<br />\
    <img src="styles/legend/Case1bVr60_13_57.png" /> f651<br />\
    <img src="styles/legend/Case1bVr60_13_58.png" /> f652<br />\
    <img src="styles/legend/Case1bVr60_13_59.png" /> f654<br />\
    <img src="styles/legend/Case1bVr60_13_60.png" /> f655<br />\
    <img src="styles/legend/Case1bVr60_13_61.png" /> f656<br />\
    <img src="styles/legend/Case1bVr60_13_62.png" /> f657<br />\
    <img src="styles/legend/Case1bVr60_13_63.png" /> f658<br />\
    <img src="styles/legend/Case1bVr60_13_64.png" /> <br />'
        });
var format_Case1aVr40_14 = new ol.format.GeoJSON();
var features_Case1aVr40_14 = format_Case1aVr40_14.readFeatures(json_Case1aVr40_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Case1aVr40_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Case1aVr40_14.addFeatures(features_Case1aVr40_14);
var lyr_Case1aVr40_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Case1aVr40_14, 
                style: style_Case1aVr40_14,
                interactive: false,
    title: 'Case 1a: Vr=40%<br />\
    <img src="styles/legend/Case1aVr40_14_0.png" /> f532<br />\
    <img src="styles/legend/Case1aVr40_14_1.png" /> f534<br />\
    <img src="styles/legend/Case1aVr40_14_2.png" /> f535<br />\
    <img src="styles/legend/Case1aVr40_14_3.png" /> f559<br />\
    <img src="styles/legend/Case1aVr40_14_4.png" /> f560<br />\
    <img src="styles/legend/Case1aVr40_14_5.png" /> f561<br />\
    <img src="styles/legend/Case1aVr40_14_6.png" /> f562<br />\
    <img src="styles/legend/Case1aVr40_14_7.png" /> f563<br />\
    <img src="styles/legend/Case1aVr40_14_8.png" /> f564<br />\
    <img src="styles/legend/Case1aVr40_14_9.png" /> f565<br />\
    <img src="styles/legend/Case1aVr40_14_10.png" /> f566<br />\
    <img src="styles/legend/Case1aVr40_14_11.png" /> f588<br />\
    <img src="styles/legend/Case1aVr40_14_12.png" /> f589<br />\
    <img src="styles/legend/Case1aVr40_14_13.png" /> f590<br />\
    <img src="styles/legend/Case1aVr40_14_14.png" /> f591<br />\
    <img src="styles/legend/Case1aVr40_14_15.png" /> f592<br />\
    <img src="styles/legend/Case1aVr40_14_16.png" /> f593<br />\
    <img src="styles/legend/Case1aVr40_14_17.png" /> f594<br />\
    <img src="styles/legend/Case1aVr40_14_18.png" /> f595<br />\
    <img src="styles/legend/Case1aVr40_14_19.png" /> f597<br />\
    <img src="styles/legend/Case1aVr40_14_20.png" /> f598<br />\
    <img src="styles/legend/Case1aVr40_14_21.png" /> f605<br />\
    <img src="styles/legend/Case1aVr40_14_22.png" /> f606<br />\
    <img src="styles/legend/Case1aVr40_14_23.png" /> f607<br />\
    <img src="styles/legend/Case1aVr40_14_24.png" /> f611<br />\
    <img src="styles/legend/Case1aVr40_14_25.png" /> f612<br />\
    <img src="styles/legend/Case1aVr40_14_26.png" /> f613<br />\
    <img src="styles/legend/Case1aVr40_14_27.png" /> f614<br />\
    <img src="styles/legend/Case1aVr40_14_28.png" /> f615<br />\
    <img src="styles/legend/Case1aVr40_14_29.png" /> f618<br />\
    <img src="styles/legend/Case1aVr40_14_30.png" /> f620<br />\
    <img src="styles/legend/Case1aVr40_14_31.png" /> f621<br />\
    <img src="styles/legend/Case1aVr40_14_32.png" /> f622<br />\
    <img src="styles/legend/Case1aVr40_14_33.png" /> f625<br />\
    <img src="styles/legend/Case1aVr40_14_34.png" /> f626<br />\
    <img src="styles/legend/Case1aVr40_14_35.png" /> f627<br />\
    <img src="styles/legend/Case1aVr40_14_36.png" /> f628<br />\
    <img src="styles/legend/Case1aVr40_14_37.png" /> f629<br />\
    <img src="styles/legend/Case1aVr40_14_38.png" /> f630<br />\
    <img src="styles/legend/Case1aVr40_14_39.png" /> f631<br />\
    <img src="styles/legend/Case1aVr40_14_40.png" /> f632<br />\
    <img src="styles/legend/Case1aVr40_14_41.png" /> f633<br />\
    <img src="styles/legend/Case1aVr40_14_42.png" /> f634<br />\
    <img src="styles/legend/Case1aVr40_14_43.png" /> f635<br />\
    <img src="styles/legend/Case1aVr40_14_44.png" /> f636<br />\
    <img src="styles/legend/Case1aVr40_14_45.png" /> f637<br />\
    <img src="styles/legend/Case1aVr40_14_46.png" /> f638<br />\
    <img src="styles/legend/Case1aVr40_14_47.png" /> f639<br />\
    <img src="styles/legend/Case1aVr40_14_48.png" /> f640<br />\
    <img src="styles/legend/Case1aVr40_14_49.png" /> f641<br />\
    <img src="styles/legend/Case1aVr40_14_50.png" /> f642<br />\
    <img src="styles/legend/Case1aVr40_14_51.png" /> f643<br />\
    <img src="styles/legend/Case1aVr40_14_52.png" /> f644<br />\
    <img src="styles/legend/Case1aVr40_14_53.png" /> f647<br />\
    <img src="styles/legend/Case1aVr40_14_54.png" /> f648<br />\
    <img src="styles/legend/Case1aVr40_14_55.png" /> f649<br />\
    <img src="styles/legend/Case1aVr40_14_56.png" /> f650<br />\
    <img src="styles/legend/Case1aVr40_14_57.png" /> f651<br />\
    <img src="styles/legend/Case1aVr40_14_58.png" /> f652<br />\
    <img src="styles/legend/Case1aVr40_14_59.png" /> f654<br />\
    <img src="styles/legend/Case1aVr40_14_60.png" /> f655<br />\
    <img src="styles/legend/Case1aVr40_14_61.png" /> f656<br />\
    <img src="styles/legend/Case1aVr40_14_62.png" /> f657<br />\
    <img src="styles/legend/Case1aVr40_14_63.png" /> f658<br />\
    <img src="styles/legend/Case1aVr40_14_64.png" /> <br />'
        });
var format_StaticNVD_15 = new ol.format.GeoJSON();
var features_StaticNVD_15 = format_StaticNVD_15.readFeatures(json_StaticNVD_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaticNVD_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaticNVD_15.addFeatures(features_StaticNVD_15);
var lyr_StaticNVD_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StaticNVD_15, 
                style: style_StaticNVD_15,
                interactive: false,
    title: 'Static NVD<br />\
    <img src="styles/legend/StaticNVD_15_0.png" /> f532<br />\
    <img src="styles/legend/StaticNVD_15_1.png" /> f534<br />\
    <img src="styles/legend/StaticNVD_15_2.png" /> f535<br />\
    <img src="styles/legend/StaticNVD_15_3.png" /> f559<br />\
    <img src="styles/legend/StaticNVD_15_4.png" /> f560<br />\
    <img src="styles/legend/StaticNVD_15_5.png" /> f561<br />\
    <img src="styles/legend/StaticNVD_15_6.png" /> f562<br />\
    <img src="styles/legend/StaticNVD_15_7.png" /> f563<br />\
    <img src="styles/legend/StaticNVD_15_8.png" /> f564<br />\
    <img src="styles/legend/StaticNVD_15_9.png" /> f565<br />\
    <img src="styles/legend/StaticNVD_15_10.png" /> f566<br />\
    <img src="styles/legend/StaticNVD_15_11.png" /> f588<br />\
    <img src="styles/legend/StaticNVD_15_12.png" /> f589<br />\
    <img src="styles/legend/StaticNVD_15_13.png" /> f590<br />\
    <img src="styles/legend/StaticNVD_15_14.png" /> f591<br />\
    <img src="styles/legend/StaticNVD_15_15.png" /> f592<br />\
    <img src="styles/legend/StaticNVD_15_16.png" /> f593<br />\
    <img src="styles/legend/StaticNVD_15_17.png" /> f594<br />\
    <img src="styles/legend/StaticNVD_15_18.png" /> f595<br />\
    <img src="styles/legend/StaticNVD_15_19.png" /> f597<br />\
    <img src="styles/legend/StaticNVD_15_20.png" /> f598<br />\
    <img src="styles/legend/StaticNVD_15_21.png" /> f605<br />\
    <img src="styles/legend/StaticNVD_15_22.png" /> f606<br />\
    <img src="styles/legend/StaticNVD_15_23.png" /> f607<br />\
    <img src="styles/legend/StaticNVD_15_24.png" /> f611<br />\
    <img src="styles/legend/StaticNVD_15_25.png" /> f612<br />\
    <img src="styles/legend/StaticNVD_15_26.png" /> f613<br />\
    <img src="styles/legend/StaticNVD_15_27.png" /> f614<br />\
    <img src="styles/legend/StaticNVD_15_28.png" /> f615<br />\
    <img src="styles/legend/StaticNVD_15_29.png" /> f618<br />\
    <img src="styles/legend/StaticNVD_15_30.png" /> f620<br />\
    <img src="styles/legend/StaticNVD_15_31.png" /> f621<br />\
    <img src="styles/legend/StaticNVD_15_32.png" /> f622<br />\
    <img src="styles/legend/StaticNVD_15_33.png" /> f625<br />\
    <img src="styles/legend/StaticNVD_15_34.png" /> f626<br />\
    <img src="styles/legend/StaticNVD_15_35.png" /> f627<br />\
    <img src="styles/legend/StaticNVD_15_36.png" /> f628<br />\
    <img src="styles/legend/StaticNVD_15_37.png" /> f629<br />\
    <img src="styles/legend/StaticNVD_15_38.png" /> f630<br />\
    <img src="styles/legend/StaticNVD_15_39.png" /> f631<br />\
    <img src="styles/legend/StaticNVD_15_40.png" /> f632<br />\
    <img src="styles/legend/StaticNVD_15_41.png" /> f633<br />\
    <img src="styles/legend/StaticNVD_15_42.png" /> f634<br />\
    <img src="styles/legend/StaticNVD_15_43.png" /> f635<br />\
    <img src="styles/legend/StaticNVD_15_44.png" /> f636<br />\
    <img src="styles/legend/StaticNVD_15_45.png" /> f637<br />\
    <img src="styles/legend/StaticNVD_15_46.png" /> f638<br />\
    <img src="styles/legend/StaticNVD_15_47.png" /> f639<br />\
    <img src="styles/legend/StaticNVD_15_48.png" /> f640<br />\
    <img src="styles/legend/StaticNVD_15_49.png" /> f641<br />\
    <img src="styles/legend/StaticNVD_15_50.png" /> f642<br />\
    <img src="styles/legend/StaticNVD_15_51.png" /> f643<br />\
    <img src="styles/legend/StaticNVD_15_52.png" /> f644<br />\
    <img src="styles/legend/StaticNVD_15_53.png" /> f647<br />\
    <img src="styles/legend/StaticNVD_15_54.png" /> f648<br />\
    <img src="styles/legend/StaticNVD_15_55.png" /> f649<br />\
    <img src="styles/legend/StaticNVD_15_56.png" /> f650<br />\
    <img src="styles/legend/StaticNVD_15_57.png" /> f651<br />\
    <img src="styles/legend/StaticNVD_15_58.png" /> f652<br />\
    <img src="styles/legend/StaticNVD_15_59.png" /> f654<br />\
    <img src="styles/legend/StaticNVD_15_60.png" /> f655<br />\
    <img src="styles/legend/StaticNVD_15_61.png" /> f656<br />\
    <img src="styles/legend/StaticNVD_15_62.png" /> f657<br />\
    <img src="styles/legend/StaticNVD_15_63.png" /> f658<br />\
    <img src="styles/legend/StaticNVD_15_64.png" /> <br />'
        });
var format_StaticTNVD_16 = new ol.format.GeoJSON();
var features_StaticTNVD_16 = format_StaticTNVD_16.readFeatures(json_StaticTNVD_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaticTNVD_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaticTNVD_16.addFeatures(features_StaticTNVD_16);
var lyr_StaticTNVD_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StaticTNVD_16, 
                style: style_StaticTNVD_16,
                interactive: false,
    title: 'Static TNVD<br />\
    <img src="styles/legend/StaticTNVD_16_0.png" /> f532<br />\
    <img src="styles/legend/StaticTNVD_16_1.png" /> f534<br />\
    <img src="styles/legend/StaticTNVD_16_2.png" /> f535<br />\
    <img src="styles/legend/StaticTNVD_16_3.png" /> f559<br />\
    <img src="styles/legend/StaticTNVD_16_4.png" /> f560<br />\
    <img src="styles/legend/StaticTNVD_16_5.png" /> f561<br />\
    <img src="styles/legend/StaticTNVD_16_6.png" /> f562<br />\
    <img src="styles/legend/StaticTNVD_16_7.png" /> f563<br />\
    <img src="styles/legend/StaticTNVD_16_8.png" /> f564<br />\
    <img src="styles/legend/StaticTNVD_16_9.png" /> f565<br />\
    <img src="styles/legend/StaticTNVD_16_10.png" /> f566<br />\
    <img src="styles/legend/StaticTNVD_16_11.png" /> f588<br />\
    <img src="styles/legend/StaticTNVD_16_12.png" /> f589<br />\
    <img src="styles/legend/StaticTNVD_16_13.png" /> f590<br />\
    <img src="styles/legend/StaticTNVD_16_14.png" /> f591<br />\
    <img src="styles/legend/StaticTNVD_16_15.png" /> f592<br />\
    <img src="styles/legend/StaticTNVD_16_16.png" /> f593<br />\
    <img src="styles/legend/StaticTNVD_16_17.png" /> f594<br />\
    <img src="styles/legend/StaticTNVD_16_18.png" /> f595<br />\
    <img src="styles/legend/StaticTNVD_16_19.png" /> f597<br />\
    <img src="styles/legend/StaticTNVD_16_20.png" /> f598<br />\
    <img src="styles/legend/StaticTNVD_16_21.png" /> f605<br />\
    <img src="styles/legend/StaticTNVD_16_22.png" /> f606<br />\
    <img src="styles/legend/StaticTNVD_16_23.png" /> f607<br />\
    <img src="styles/legend/StaticTNVD_16_24.png" /> f611<br />\
    <img src="styles/legend/StaticTNVD_16_25.png" /> f612<br />\
    <img src="styles/legend/StaticTNVD_16_26.png" /> f613<br />\
    <img src="styles/legend/StaticTNVD_16_27.png" /> f614<br />\
    <img src="styles/legend/StaticTNVD_16_28.png" /> f615<br />\
    <img src="styles/legend/StaticTNVD_16_29.png" /> f618<br />\
    <img src="styles/legend/StaticTNVD_16_30.png" /> f620<br />\
    <img src="styles/legend/StaticTNVD_16_31.png" /> f621<br />\
    <img src="styles/legend/StaticTNVD_16_32.png" /> f622<br />\
    <img src="styles/legend/StaticTNVD_16_33.png" /> f625<br />\
    <img src="styles/legend/StaticTNVD_16_34.png" /> f626<br />\
    <img src="styles/legend/StaticTNVD_16_35.png" /> f627<br />\
    <img src="styles/legend/StaticTNVD_16_36.png" /> f628<br />\
    <img src="styles/legend/StaticTNVD_16_37.png" /> f629<br />\
    <img src="styles/legend/StaticTNVD_16_38.png" /> f630<br />\
    <img src="styles/legend/StaticTNVD_16_39.png" /> f631<br />\
    <img src="styles/legend/StaticTNVD_16_40.png" /> f632<br />\
    <img src="styles/legend/StaticTNVD_16_41.png" /> f633<br />\
    <img src="styles/legend/StaticTNVD_16_42.png" /> f634<br />\
    <img src="styles/legend/StaticTNVD_16_43.png" /> f635<br />\
    <img src="styles/legend/StaticTNVD_16_44.png" /> f636<br />\
    <img src="styles/legend/StaticTNVD_16_45.png" /> f637<br />\
    <img src="styles/legend/StaticTNVD_16_46.png" /> f638<br />\
    <img src="styles/legend/StaticTNVD_16_47.png" /> f639<br />\
    <img src="styles/legend/StaticTNVD_16_48.png" /> f640<br />\
    <img src="styles/legend/StaticTNVD_16_49.png" /> f641<br />\
    <img src="styles/legend/StaticTNVD_16_50.png" /> f642<br />\
    <img src="styles/legend/StaticTNVD_16_51.png" /> f643<br />\
    <img src="styles/legend/StaticTNVD_16_52.png" /> f644<br />\
    <img src="styles/legend/StaticTNVD_16_53.png" /> f647<br />\
    <img src="styles/legend/StaticTNVD_16_54.png" /> f648<br />\
    <img src="styles/legend/StaticTNVD_16_55.png" /> f649<br />\
    <img src="styles/legend/StaticTNVD_16_56.png" /> f650<br />\
    <img src="styles/legend/StaticTNVD_16_57.png" /> f651<br />\
    <img src="styles/legend/StaticTNVD_16_58.png" /> f652<br />\
    <img src="styles/legend/StaticTNVD_16_59.png" /> f654<br />\
    <img src="styles/legend/StaticTNVD_16_60.png" /> f655<br />\
    <img src="styles/legend/StaticTNVD_16_61.png" /> f656<br />\
    <img src="styles/legend/StaticTNVD_16_62.png" /> f657<br />\
    <img src="styles/legend/StaticTNVD_16_63.png" /> f658<br />\
    <img src="styles/legend/StaticTNVD_16_64.png" /> <br />'
        });
var format_StaticTNVDwithin15minutes_17 = new ol.format.GeoJSON();
var features_StaticTNVDwithin15minutes_17 = format_StaticTNVDwithin15minutes_17.readFeatures(json_StaticTNVDwithin15minutes_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaticTNVDwithin15minutes_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaticTNVDwithin15minutes_17.addFeatures(features_StaticTNVDwithin15minutes_17);
var lyr_StaticTNVDwithin15minutes_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StaticTNVDwithin15minutes_17, 
                style: style_StaticTNVDwithin15minutes_17,
                interactive: false,
    title: 'Static TNVD within 15 minutes<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_0.png" /> f532<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_1.png" /> f534<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_2.png" /> f535<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_3.png" /> f559<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_4.png" /> f560<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_5.png" /> f561<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_6.png" /> f562<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_7.png" /> f563<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_8.png" /> f564<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_9.png" /> f565<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_10.png" /> f566<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_11.png" /> f588<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_12.png" /> f589<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_13.png" /> f590<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_14.png" /> f591<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_15.png" /> f592<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_16.png" /> f593<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_17.png" /> f594<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_18.png" /> f595<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_19.png" /> f597<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_20.png" /> f598<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_21.png" /> f605<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_22.png" /> f606<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_23.png" /> f607<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_24.png" /> f611<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_25.png" /> f612<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_26.png" /> f613<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_27.png" /> f614<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_28.png" /> f615<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_29.png" /> f618<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_30.png" /> f620<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_31.png" /> f621<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_32.png" /> f622<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_33.png" /> f625<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_34.png" /> f626<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_35.png" /> f627<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_36.png" /> f628<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_37.png" /> f629<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_38.png" /> f630<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_39.png" /> f631<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_40.png" /> f632<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_41.png" /> f633<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_42.png" /> f634<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_43.png" /> f635<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_44.png" /> f636<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_45.png" /> f637<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_46.png" /> f638<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_47.png" /> f639<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_48.png" /> f640<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_49.png" /> f641<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_50.png" /> f642<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_51.png" /> f643<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_52.png" /> f644<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_53.png" /> f647<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_54.png" /> f648<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_55.png" /> f649<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_56.png" /> f650<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_57.png" /> f651<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_58.png" /> f652<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_59.png" /> f654<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_60.png" /> f655<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_61.png" /> f656<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_62.png" /> f657<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_63.png" /> f658<br />\
    <img src="styles/legend/StaticTNVDwithin15minutes_17_64.png" /> <br />'
        });
var format_TrafficLight_18 = new ol.format.GeoJSON();
var features_TrafficLight_18 = format_TrafficLight_18.readFeatures(json_TrafficLight_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficLight_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficLight_18.addFeatures(features_TrafficLight_18);
var lyr_TrafficLight_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrafficLight_18, 
                style: style_TrafficLight_18,
                interactive: false,
                title: '<img src="styles/legend/TrafficLight_18.png" /> Traffic Light'
            });
var format_Ambulancestations_19 = new ol.format.GeoJSON();
var features_Ambulancestations_19 = format_Ambulancestations_19.readFeatures(json_Ambulancestations_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ambulancestations_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ambulancestations_19.addFeatures(features_Ambulancestations_19);
var lyr_Ambulancestations_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ambulancestations_19, 
                style: style_Ambulancestations_19,
                interactive: false,
                title: '<img src="styles/legend/Ambulancestations_19.png" /> Ambulance stations'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_metroMelbourne_1.setVisible(true);lyr_Case7Vt035_2.setVisible(false);lyr_Case6btw30sp075r15mins_3.setVisible(false);lyr_Case6atw30sp05r15mins_4.setVisible(false);lyr_Case5btw60sp05r15mins_5.setVisible(false);lyr_Case5atw30sp05r15mins_6.setVisible(false);lyr_Case4bVr60r15mins_7.setVisible(false);lyr_Case4aVr40r15mins_8.setVisible(false);lyr_Case3btw30sp075_9.setVisible(false);lyr_Case3atw30sp05_10.setVisible(false);lyr_Case2btw30sp05_11.setVisible(false);lyr_Case2atw30sp05_12.setVisible(false);lyr_Case1bVr60_13.setVisible(false);lyr_Case1aVr40_14.setVisible(false);lyr_StaticNVD_15.setVisible(false);lyr_StaticTNVD_16.setVisible(false);lyr_StaticTNVDwithin15minutes_17.setVisible(false);lyr_TrafficLight_18.setVisible(true);lyr_Ambulancestations_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_metroMelbourne_1,lyr_Case7Vt035_2,lyr_Case6btw30sp075r15mins_3,lyr_Case6atw30sp05r15mins_4,lyr_Case5btw60sp05r15mins_5,lyr_Case5atw30sp05r15mins_6,lyr_Case4bVr60r15mins_7,lyr_Case4aVr40r15mins_8,lyr_Case3btw30sp075_9,lyr_Case3atw30sp05_10,lyr_Case2btw30sp05_11,lyr_Case2atw30sp05_12,lyr_Case1bVr60_13,lyr_Case1aVr40_14,lyr_StaticNVD_15,lyr_StaticTNVD_16,lyr_StaticTNVDwithin15minutes_17,lyr_TrafficLight_18,lyr_Ambulancestations_19];
lyr_metroMelbourne_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'description': 'description', });
lyr_Case7Vt035_2.set('fieldAliases', {'owner': 'owner', });
lyr_Case6btw30sp075r15mins_3.set('fieldAliases', {'owner': 'owner', });
lyr_Case6atw30sp05r15mins_4.set('fieldAliases', {'owner': 'owner', });
lyr_Case5btw60sp05r15mins_5.set('fieldAliases', {'owner': 'owner', });
lyr_Case5atw30sp05r15mins_6.set('fieldAliases', {'owner': 'owner', });
lyr_Case4bVr60r15mins_7.set('fieldAliases', {'owner': 'owner', });
lyr_Case4aVr40r15mins_8.set('fieldAliases', {'owner': 'owner', });
lyr_Case3btw30sp075_9.set('fieldAliases', {'owner': 'owner', });
lyr_Case3atw30sp05_10.set('fieldAliases', {'owner': 'owner', });
lyr_Case2btw30sp05_11.set('fieldAliases', {'owner': 'owner', });
lyr_Case2atw30sp05_12.set('fieldAliases', {'owner': 'owner', });
lyr_Case1bVr60_13.set('fieldAliases', {'owner': 'owner', });
lyr_Case1aVr40_14.set('fieldAliases', {'owner': 'owner', });
lyr_StaticNVD_15.set('fieldAliases', {'owner': 'owner', });
lyr_StaticTNVD_16.set('fieldAliases', {'owner': 'owner', });
lyr_StaticTNVDwithin15minutes_17.set('fieldAliases', {'owner': 'owner', });
lyr_TrafficLight_18.set('fieldAliases', {'id': 'id', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'metropolitan': 'metropolitan', });
lyr_Ambulancestations_19.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'latitude': 'latitude', 'longitude': 'longitude', 'sector': 'sector', 'emergency': 'emergency', 'status': 'status', 'score': 'score', 'class': 'class', 'metropolitan': 'metropolitan', });
lyr_metroMelbourne_1.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'description': 'TextEdit', });
lyr_Case7Vt035_2.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case6btw30sp075r15mins_3.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case6atw30sp05r15mins_4.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case5btw60sp05r15mins_5.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case5atw30sp05r15mins_6.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case4bVr60r15mins_7.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case4aVr40r15mins_8.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case3btw30sp075_9.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case3atw30sp05_10.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case2btw30sp05_11.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case2atw30sp05_12.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case1bVr60_13.set('fieldImages', {'owner': 'TextEdit', });
lyr_Case1aVr40_14.set('fieldImages', {'owner': 'TextEdit', });
lyr_StaticNVD_15.set('fieldImages', {'owner': 'TextEdit', });
lyr_StaticTNVD_16.set('fieldImages', {'owner': 'TextEdit', });
lyr_StaticTNVDwithin15minutes_17.set('fieldImages', {'owner': 'TextEdit', });
lyr_TrafficLight_18.set('fieldImages', {'id': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'metropolitan': 'TextEdit', });
lyr_Ambulancestations_19.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'type': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'sector': 'TextEdit', 'emergency': 'TextEdit', 'status': 'TextEdit', 'score': 'Range', 'class': 'TextEdit', 'metropolitan': 'TextEdit', });
lyr_metroMelbourne_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_Case7Vt035_2.set('fieldLabels', {'owner': 'no label', });
lyr_Case6btw30sp075r15mins_3.set('fieldLabels', {'owner': 'no label', });
lyr_Case6atw30sp05r15mins_4.set('fieldLabels', {'owner': 'no label', });
lyr_Case5btw60sp05r15mins_5.set('fieldLabels', {'owner': 'no label', });
lyr_Case5atw30sp05r15mins_6.set('fieldLabels', {'owner': 'no label', });
lyr_Case4bVr60r15mins_7.set('fieldLabels', {'owner': 'no label', });
lyr_Case4aVr40r15mins_8.set('fieldLabels', {'owner': 'no label', });
lyr_Case3btw30sp075_9.set('fieldLabels', {'owner': 'no label', });
lyr_Case3atw30sp05_10.set('fieldLabels', {'owner': 'no label', });
lyr_Case2btw30sp05_11.set('fieldLabels', {'owner': 'no label', });
lyr_Case2atw30sp05_12.set('fieldLabels', {'owner': 'no label', });
lyr_Case1bVr60_13.set('fieldLabels', {'owner': 'no label', });
lyr_Case1aVr40_14.set('fieldLabels', {'owner': 'no label', });
lyr_StaticNVD_15.set('fieldLabels', {'owner': 'no label', });
lyr_StaticTNVD_16.set('fieldLabels', {'owner': 'no label', });
lyr_StaticTNVDwithin15minutes_17.set('fieldLabels', {'owner': 'no label', });
lyr_TrafficLight_18.set('fieldLabels', {'id': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'metropolitan': 'no label', });
lyr_Ambulancestations_19.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'sector': 'no label', 'emergency': 'no label', 'status': 'no label', 'score': 'no label', 'class': 'no label', 'metropolitan': 'no label', });
lyr_Ambulancestations_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});