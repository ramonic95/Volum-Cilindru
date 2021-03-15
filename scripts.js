function cilinderVolume() {
    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;
    var pie = document.getElementById("pie").value;
    result.value = pie * radius * radius * height;
}