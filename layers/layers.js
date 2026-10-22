var wms_layers = [];


        var lyr_RRZEOpenStreetMapStandardHD_0 = new ol.layer.Tile({
            'title': 'RRZE OpenStreetMap Standard HD',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://osm.rrze.fau.de/osmhd/{z}/{x}/{y}.png'
            })
        });
var format_territoireiav_1 = new ol.format.GeoJSON();
var features_territoireiav_1 = format_territoireiav_1.readFeatures(json_territoireiav_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_territoireiav_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_territoireiav_1.addFeatures(features_territoireiav_1);
var lyr_territoireiav_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_territoireiav_1, 
                style: style_territoireiav_1,
                popuplayertitle: 'territoire iav',
                interactive: true,
                title: '<img src="styles/legend/territoireiav_1.png" /> territoire iav'
            });
var format_vegetation_2 = new ol.format.GeoJSON();
var features_vegetation_2 = format_vegetation_2.readFeatures(json_vegetation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vegetation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vegetation_2.addFeatures(features_vegetation_2);
var lyr_vegetation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vegetation_2, 
                style: style_vegetation_2,
                popuplayertitle: 'vegetation ',
                interactive: true,
    title: 'vegetation <br />\
    <img src="styles/legend/vegetation_2_0.png" /> arbre<br />\
    <img src="styles/legend/vegetation_2_1.png" /> palmier<br />' });
var format_club_3 = new ol.format.GeoJSON();
var features_club_3 = format_club_3.readFeatures(json_club_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_club_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_club_3.addFeatures(features_club_3);
var lyr_club_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_club_3, 
                style: style_club_3,
                popuplayertitle: 'club',
                interactive: true,
                title: '<img src="styles/legend/club_3.png" /> club'
            });
var format_espacevert_4 = new ol.format.GeoJSON();
var features_espacevert_4 = format_espacevert_4.readFeatures(json_espacevert_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacevert_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacevert_4.addFeatures(features_espacevert_4);
var lyr_espacevert_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espacevert_4, 
                style: style_espacevert_4,
                popuplayertitle: 'espace vert',
                interactive: true,
                title: '<img src="styles/legend/espacevert_4.png" /> espace vert'
            });
var format_routes_5 = new ol.format.GeoJSON();
var features_routes_5 = format_routes_5.readFeatures(json_routes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_routes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_5.addFeatures(features_routes_5);
var lyr_routes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_routes_5, 
                style: style_routes_5,
                popuplayertitle: 'routes',
                interactive: true,
                title: '<img src="styles/legend/routes_5.png" /> routes'
            });
var format_apesa_6 = new ol.format.GeoJSON();
var features_apesa_6 = format_apesa_6.readFeatures(json_apesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apesa_6.addFeatures(features_apesa_6);
var lyr_apesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apesa_6, 
                style: style_apesa_6,
                popuplayertitle: 'apesa',
                interactive: true,
                title: '<img src="styles/legend/apesa_6.png" /> apesa'
            });
var format_restauration_buvette_epicerie_7 = new ol.format.GeoJSON();
var features_restauration_buvette_epicerie_7 = format_restauration_buvette_epicerie_7.readFeatures(json_restauration_buvette_epicerie_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restauration_buvette_epicerie_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restauration_buvette_epicerie_7.addFeatures(features_restauration_buvette_epicerie_7);
var lyr_restauration_buvette_epicerie_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restauration_buvette_epicerie_7, 
                style: style_restauration_buvette_epicerie_7,
                popuplayertitle: 'restauration_buvette_epicerie',
                interactive: true,
                title: '<img src="styles/legend/restauration_buvette_epicerie_7.png" /> restauration_buvette_epicerie'
            });
var format_equipemnetsportif_8 = new ol.format.GeoJSON();
var features_equipemnetsportif_8 = format_equipemnetsportif_8.readFeatures(json_equipemnetsportif_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipemnetsportif_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipemnetsportif_8.addFeatures(features_equipemnetsportif_8);
var lyr_equipemnetsportif_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipemnetsportif_8, 
                style: style_equipemnetsportif_8,
                popuplayertitle: 'equipemnet sportif',
                interactive: true,
                title: '<img src="styles/legend/equipemnetsportif_8.png" /> equipemnet sportif'
            });
var format_residenceiav_apesa_9 = new ol.format.GeoJSON();
var features_residenceiav_apesa_9 = format_residenceiav_apesa_9.readFeatures(json_residenceiav_apesa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_residenceiav_apesa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_residenceiav_apesa_9.addFeatures(features_residenceiav_apesa_9);
var lyr_residenceiav_apesa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_residenceiav_apesa_9, 
                style: style_residenceiav_apesa_9,
                popuplayertitle: 'residence iav_apesa',
                interactive: true,
                title: '<img src="styles/legend/residenceiav_apesa_9.png" /> residence iav_apesa'
            });
var format_divers_10 = new ol.format.GeoJSON();
var features_divers_10 = format_divers_10.readFeatures(json_divers_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_divers_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_divers_10.addFeatures(features_divers_10);
var lyr_divers_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_divers_10, 
                style: style_divers_10,
                popuplayertitle: 'divers',
                interactive: true,
    title: 'divers<br />\
    <img src="styles/legend/divers_10_0.png" /> mosque<br />\
    <img src="styles/legend/divers_10_1.png" /> sport et jeux<br />' });
var format_DepartementsetdirectionsdeIAV_11 = new ol.format.GeoJSON();
var features_DepartementsetdirectionsdeIAV_11 = format_DepartementsetdirectionsdeIAV_11.readFeatures(json_DepartementsetdirectionsdeIAV_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartementsetdirectionsdeIAV_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartementsetdirectionsdeIAV_11.addFeatures(features_DepartementsetdirectionsdeIAV_11);
var lyr_DepartementsetdirectionsdeIAV_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartementsetdirectionsdeIAV_11, 
                style: style_DepartementsetdirectionsdeIAV_11,
                popuplayertitle: 'Departements et directions de IAV ',
                interactive: true,
                title: '<img src="styles/legend/DepartementsetdirectionsdeIAV_11.png" /> Departements et directions de IAV '
            });

lyr_RRZEOpenStreetMapStandardHD_0.setVisible(true);lyr_territoireiav_1.setVisible(true);lyr_vegetation_2.setVisible(true);lyr_club_3.setVisible(true);lyr_espacevert_4.setVisible(true);lyr_routes_5.setVisible(true);lyr_apesa_6.setVisible(true);lyr_restauration_buvette_epicerie_7.setVisible(true);lyr_equipemnetsportif_8.setVisible(true);lyr_residenceiav_apesa_9.setVisible(true);lyr_divers_10.setVisible(true);lyr_DepartementsetdirectionsdeIAV_11.setVisible(true);
var layersList = [lyr_RRZEOpenStreetMapStandardHD_0,lyr_territoireiav_1,lyr_vegetation_2,lyr_club_3,lyr_espacevert_4,lyr_routes_5,lyr_apesa_6,lyr_restauration_buvette_epicerie_7,lyr_equipemnetsportif_8,lyr_residenceiav_apesa_9,lyr_divers_10,lyr_DepartementsetdirectionsdeIAV_11];
lyr_territoireiav_1.set('fieldAliases', {'id': 'id', });
lyr_vegetation_2.set('fieldAliases', {'full_id': 'full_id', 'TYPE': 'TYPE', });
lyr_club_3.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_espacevert_4.set('fieldAliases', {'full_id': 'full_id', 'nom': 'nom', 'type_bat': 'type_bat', });
lyr_routes_5.set('fieldAliases', {'full_id': 'full_id', 'TYPE': 'TYPE', });
lyr_apesa_6.set('fieldAliases', {'full_id': 'full_id', 'nom_bat': 'nom_bat', 'type_bat': 'type_bat', });
lyr_restauration_buvette_epicerie_7.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', });
lyr_equipemnetsportif_8.set('fieldAliases', {'full_id': 'full_id', 'nom_equipe': 'nom_equipe', 'type_equip': 'type_equip', });
lyr_residenceiav_apesa_9.set('fieldAliases', {'full_id': 'full_id', 'nom_bat': 'nom_bat', 'type_bat': 'type_bat', });
lyr_divers_10.set('fieldAliases', {'full_id': 'full_id', 'TYPE': 'TYPE', });
lyr_DepartementsetdirectionsdeIAV_11.set('fieldAliases', {'full_id': 'full_id', 'nom_bat': 'nom_bat', 'type_bat': 'type_bat', });
lyr_territoireiav_1.set('fieldImages', {'id': 'TextEdit', });
lyr_vegetation_2.set('fieldImages', {'full_id': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_club_3.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_espacevert_4.set('fieldImages', {'full_id': 'TextEdit', 'nom': 'TextEdit', 'type_bat': 'TextEdit', });
lyr_routes_5.set('fieldImages', {'full_id': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_apesa_6.set('fieldImages', {'full_id': 'TextEdit', 'nom_bat': 'TextEdit', 'type_bat': 'TextEdit', });
lyr_restauration_buvette_epicerie_7.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_equipemnetsportif_8.set('fieldImages', {'full_id': 'TextEdit', 'nom_equipe': '', 'type_equip': '', });
lyr_residenceiav_apesa_9.set('fieldImages', {'full_id': 'TextEdit', 'nom_bat': 'TextEdit', 'type_bat': 'TextEdit', });
lyr_divers_10.set('fieldImages', {'full_id': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_DepartementsetdirectionsdeIAV_11.set('fieldImages', {'full_id': 'TextEdit', 'nom_bat': 'TextEdit', 'type_bat': 'TextEdit', });
lyr_territoireiav_1.set('fieldLabels', {'id': 'hidden field', });
lyr_vegetation_2.set('fieldLabels', {'full_id': 'hidden field', 'TYPE': 'inline label - always visible', });
lyr_club_3.set('fieldLabels', {'id': 'hidden field', 'type': 'inline label - always visible', });
lyr_espacevert_4.set('fieldLabels', {'full_id': 'hidden field', 'nom': 'inline label - always visible', 'type_bat': 'hidden field', });
lyr_routes_5.set('fieldLabels', {'full_id': 'hidden field', 'TYPE': 'inline label - always visible', });
lyr_apesa_6.set('fieldLabels', {'full_id': 'hidden field', 'nom_bat': 'inline label - always visible', 'type_bat': 'hidden field', });
lyr_restauration_buvette_epicerie_7.set('fieldLabels', {'id': 'hidden field', 'TYPE': 'inline label - always visible', });
lyr_equipemnetsportif_8.set('fieldLabels', {'full_id': 'hidden field', 'nom_equipe': 'inline label - always visible', 'type_equip': 'hidden field', });
lyr_residenceiav_apesa_9.set('fieldLabels', {'full_id': 'hidden field', 'nom_bat': 'inline label - visible with data', 'type_bat': 'hidden field', });
lyr_divers_10.set('fieldLabels', {'full_id': 'hidden field', 'TYPE': 'inline label - always visible', });
lyr_DepartementsetdirectionsdeIAV_11.set('fieldLabels', {'full_id': 'hidden field', 'nom_bat': 'inline label - always visible', 'type_bat': 'hidden field', });
lyr_DepartementsetdirectionsdeIAV_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});