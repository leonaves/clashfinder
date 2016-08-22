export default (event) => {
  var element = event.target;
  // We don't want to scroll below zero or above the width and height
  var maxX = element.scrollWidth - element.offsetWidth;
  var maxY = element.scrollHeight - element.offsetHeight;

  // If this event looks like it will scroll beyond the bounds of the element, prevent it and set the scroll to the boundary manually
  if (element.scrollLeft + event.deltaX < 0 ||
    element.scrollLeft + event.deltaX > maxX ||
    element.scrollTop + event.deltaY < 0 ||
    element.scrollTop + event.deltaY > maxY) {

    event.preventDefault();

    // Manually set the scroll to the boundary
    element.scrollLeft = Math.max(0, Math.min(maxX, element.scrollLeft + event.deltaX));
    element.scrollTop = Math.max(0, Math.min(maxY, element.scrollTop + event.deltaY));
  }
};