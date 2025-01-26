function displayToilet(){
     // Get the panel element
     const button = document.querySelector('.map_toilet_point');
     const panel = document.querySelector('.position_toilet_panel');

     const buttonRect = button.getBoundingClientRect();
     // Calculate the panel's position near the button
    const panelOffsetX = 10; // Adjust for some padding (optional)
    const panelOffsetY = 10; // Adjust for some padding (optional)
    const panelTop = buttonRect.top - 300;
    const panelLeft = buttonRect.left + panelOffsetX;

     // Toggle visibility
     if (panel.style.display === 'none' || panel.style.display === '') {
         panel.style.display = 'block';
         panel.style.position = 'absolute';
        panel.style.top = `${panelTop}px`;
        panel.style.left = `${panelLeft}px`;
     } else {
         panel.style.display = 'none';
     } 

}
function displayWater(){
    // Get the panel element
    const button = document.querySelector('.map_water_point');
    const panel = document.querySelector('.position_water_panel');
    const buttonRect = button.getBoundingClientRect();
    const panelOffsetX = 10; // Adjust for some padding (optional)
    const panelOffsetY = 10; // Adjust for some padding (optional)
    const panelTop = buttonRect.top - 300;
    const panelLeft = buttonRect.left + panelOffsetX;

    // Toggle visibility
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
        panel.style.position = 'absolute';
        panel.style.top = `${panelTop}px`;
        panel.style.left = `${panelLeft}px`;
    } else {
        panel.style.display = 'none';
    } 
}