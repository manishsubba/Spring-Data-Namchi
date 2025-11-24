var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Spring_coordinates_Nagi_1 = new ol.format.GeoJSON();
var features_Spring_coordinates_Nagi_1 = format_Spring_coordinates_Nagi_1.readFeatures(json_Spring_coordinates_Nagi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spring_coordinates_Nagi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spring_coordinates_Nagi_1.addFeatures(features_Spring_coordinates_Nagi_1);
var lyr_Spring_coordinates_Nagi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spring_coordinates_Nagi_1, 
                style: style_Spring_coordinates_Nagi_1,
                popuplayertitle: 'Spring_coordinates_Nagi',
                interactive: true,
                title: '<img src="styles/legend/Spring_coordinates_Nagi_1.png" /> Spring_coordinates_Nagi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Spring_coordinates_Nagi_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Spring_coordinates_Nagi_1];
lyr_Spring_coordinates_Nagi_1.set('fieldAliases', {'Sl. No.': 'Sl. No.', 'Spring ID': 'Spring ID', 'Name': 'Name', 'Lat': 'Lat', 'Long': 'Long', 'Discharge(lps)': 'Discharge(lps)', 'Lat DMS': 'Lat DMS', 'Long DMS': 'Long DMS', });
lyr_Spring_coordinates_Nagi_1.set('fieldImages', {'Sl. No.': 'Range', 'Spring ID': 'TextEdit', 'Name': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Discharge(lps)': 'TextEdit', 'Lat DMS': 'TextEdit', 'Long DMS': 'TextEdit', });
lyr_Spring_coordinates_Nagi_1.set('fieldLabels', {'Sl. No.': 'inline label - visible with data', 'Spring ID': 'inline label - visible with data', 'Name': 'header label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'header label - visible with data', 'Discharge(lps)': 'inline label - visible with data', 'Lat DMS': 'inline label - visible with data', 'Long DMS': 'inline label - visible with data', });
lyr_Spring_coordinates_Nagi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});