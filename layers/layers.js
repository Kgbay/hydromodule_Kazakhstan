ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3395").setExtent([4773713.350752, 4911777.711892, 10446501.821244, 7536105.088427]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'области',
                interactive: true,
    title: 'области<br />\
    <img src="styles/legend/_1_0.png" /> Абайская область<br />\
    <img src="styles/legend/_1_1.png" /> Акмолинская область<br />\
    <img src="styles/legend/_1_2.png" /> Актюбинская область<br />\
    <img src="styles/legend/_1_3.png" /> Алматинская область<br />\
    <img src="styles/legend/_1_4.png" /> Алматы<br />\
    <img src="styles/legend/_1_5.png" /> Атырауская область<br />\
    <img src="styles/legend/_1_6.png" /> Восточно-Казахстанская область<br />\
    <img src="styles/legend/_1_7.png" /> Жамбылская область<br />\
    <img src="styles/legend/_1_8.png" /> Жетысуская область<br />\
    <img src="styles/legend/_1_9.png" /> Западно-Казахстанская область<br />\
    <img src="styles/legend/_1_10.png" /> Карагандинская область<br />\
    <img src="styles/legend/_1_11.png" /> Костанайская область<br />\
    <img src="styles/legend/_1_12.png" /> Кызылординская область<br />\
    <img src="styles/legend/_1_13.png" /> Мангистауская область<br />\
    <img src="styles/legend/_1_14.png" /> Нур-Султан<br />\
    <img src="styles/legend/_1_15.png" /> Павлодарская область<br />\
    <img src="styles/legend/_1_16.png" /> Северо-Казахстанская область<br />\
    <img src="styles/legend/_1_17.png" /> Туркестанская область<br />\
    <img src="styles/legend/_1_18.png" /> Улытауская область<br />\
    <img src="styles/legend/_1_19.png" /> Шымкент<br />\
    <img src="styles/legend/_1_20.png" /> <br />' });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: 'Гидромодульные_районы',
                interactive: true,
    title: 'Гидромодульные_районы<br />\
    <img src="styles/legend/__2_0.png" /> I<br />\
    <img src="styles/legend/__2_1.png" /> II<br />\
    <img src="styles/legend/__2_2.png" /> III<br />\
    <img src="styles/legend/__2_3.png" /> IV<br />\
    <img src="styles/legend/__2_4.png" /> IX<br />\
    <img src="styles/legend/__2_5.png" /> V<br />\
    <img src="styles/legend/__2_6.png" /> VI<br />\
    <img src="styles/legend/__2_7.png" /> VII<br />\
    <img src="styles/legend/__2_8.png" /> VIII<br />\
    <img src="styles/legend/__2_9.png" /> X<br />\
    <img src="styles/legend/__2_10.png" /> XI<br />\
    <img src="styles/legend/__2_11.png" /> <br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'районы',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> районы'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Казахстан',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Казахстан'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr__1.setVisible(true);lyr___2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr__1,lyr___2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'local_name': 'local_name', 'sqr': 'sqr', });
lyr___2.set('fieldAliases', {'Облас': 'Облас', 'Район': 'Район', 'Гидро': 'Гидро', 'Площа': 'Площа', 'Тип_п': 'Тип_п', 'Мех_с': 'Мех_с', 'Бассе': 'Бассе', 'Масси': 'Масси', 'Высот': 'Высот', 'Уклон': 'Уклон', 'Сумм_': 'Сумм_', 'Осадк': 'Осадк', 'ГТК': 'ГТК', });
lyr__3.set('fieldAliases', {'local_name': 'local_name', 'sqr': 'sqr', });
lyr__4.set('fieldAliases', {'local_name': 'local_name', });
lyr__1.set('fieldImages', {'local_name': 'TextEdit', 'sqr': 'TextEdit', });
lyr___2.set('fieldImages', {'Облас': 'TextEdit', 'Район': 'TextEdit', 'Гидро': 'TextEdit', 'Площа': 'TextEdit', 'Тип_п': 'TextEdit', 'Мех_с': 'TextEdit', 'Бассе': 'TextEdit', 'Масси': 'TextEdit', 'Высот': 'TextEdit', 'Уклон': 'TextEdit', 'Сумм_': 'TextEdit', 'Осадк': 'TextEdit', 'ГТК': 'TextEdit', });
lyr__3.set('fieldImages', {'local_name': 'TextEdit', 'sqr': 'TextEdit', });
lyr__4.set('fieldImages', {'local_name': 'TextEdit', });
lyr__1.set('fieldLabels', {'local_name': 'no label', 'sqr': 'no label', });
lyr___2.set('fieldLabels', {'Облас': 'no label', 'Район': 'no label', 'Гидро': 'header label - always visible', 'Площа': 'no label', 'Тип_п': 'no label', 'Мех_с': 'no label', 'Бассе': 'no label', 'Масси': 'no label', 'Высот': 'no label', 'Уклон': 'no label', 'Сумм_': 'no label', 'Осадк': 'no label', 'ГТК': 'no label', });
lyr__3.set('fieldLabels', {'local_name': 'no label', 'sqr': 'no label', });
lyr__4.set('fieldLabels', {'local_name': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});