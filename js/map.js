const map = L.map('mapJS').setView([29.119366, -13.624760], 10);

// Добавление слоя OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const customIcon = L.divIcon({
    className: 'custom-icon',
    html: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 25 41"><path d="M12.5 0C8.5 0 5 4 5 9c0 5 7.5 12 7.5 12S20 14 20 9c0-5-3.5-9-7.5-9z" fill="#00B2A0"/></svg>',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [12, -50]
});

const marker = L.marker([29.119366, -13.624760], { icon: customIcon }).addTo(map);

marker.bindPopup("<b>WAWE!</b><br>Школа серфинга").openPopup();