// Rotate
var document = app.documents.add(1000, 1000, 72, "Rotate script");

var layer = document.artLayers.add();

layer.kind = LayerKind.TEXT;

layer.textItem.contents = new Date().toString();

layer.textItem.position = Array(500, 500);
layer.textItem.justification = Justification.CENTER;
layer.textItem.size = 80;

layer.rotate(45, AnchorPosition.MIDDLECENTER);