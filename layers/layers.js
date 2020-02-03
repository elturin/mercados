var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mercados_1 = new ol.format.GeoJSON();
var features_mercados_1 = format_mercados_1.readFeatures(json_mercados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mercados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mercados_1.addFeatures(features_mercados_1);
var lyr_mercados_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mercados_1, 
                style: style_mercados_1,
                interactive: true,
                title: '<img src="styles/legend/mercados_1.png" /> mercados'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mercados_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mercados_1];
lyr_mercados_1.set('fieldAliases', {'NOMBRE_MER': 'NOMBRE_MER', });
lyr_mercados_1.set('fieldImages', {'NOMBRE_MER': 'TextEdit', });
lyr_mercados_1.set('fieldLabels', {'NOMBRE_MER': 'no label', });
lyr_mercados_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});