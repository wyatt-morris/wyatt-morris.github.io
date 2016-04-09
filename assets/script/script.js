// Donut Chart via Morris.js jQuery plugin (no-relation, but I couldn't pass up the chance!)

Morris.Donut({
  element: 'skills-donut',
  data: [
    {label: "HTML5", value: 30},
    {label: "CSS3", value: 30},
    {label: "Javascript", value: 20},
    {label: "jQuery", value: 15},
    {label: "Python", value: 5}
  ]
});
